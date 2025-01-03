import  { useState, useRef, useCallback } from "react";
import { FaMicrophone } from "react-icons/fa";
import { FaMicrophoneLinesSlash, FaXmark } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { changeVoiceMode } from "../../ReduxStateManagement/user";
import { Transcript_api, Chat_api, Voice_api } from "../../Utils/Apis";
import { logout } from "../../ReduxStateManagement/authslice";
import { useNavigate } from "react-router-dom";

export default function VoiceInterface() {
    const [listening, setListening] = useState(false);
    const [processing, setProcessing] = useState(false);
    const [speaking, setSpeaking] = useState(false);
    const [initializing, setInitializing] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Refs to manage ongoing processes
    const mediaRecorderRef = useRef(null);
    const audioStreamRef = useRef(null);
    const audioRef = useRef(null);
    const shouldContinueRef = useRef(true);
    const abortControllerRef = useRef(null);

    const stopAllProcesses = useCallback(() => {
        // Abort any ongoing fetch requests
        if (abortControllerRef.current) {
            abortControllerRef.current.abort();
            abortControllerRef.current = null;
        }

        // Stop media recording if active
        if (mediaRecorderRef.current) {
            mediaRecorderRef.current.stop();
            mediaRecorderRef.current = null;
        }

        // Stop audio playback
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }

        // Stop audio stream
        if (audioStreamRef.current) {
            audioStreamRef.current.getTracks().forEach(track => track.stop());
            audioStreamRef.current = null;
        }

        // Reset states
        setListening(false);
        setProcessing(false);
        setSpeaking(false);
        setInitializing(false);
        shouldContinueRef.current = false;
    }, []);

    const processAudioCycle = useCallback(async () => {
        if (!shouldContinueRef.current) return;

        try {
            // Create a new abort controller for each cycle
            abortControllerRef.current = new AbortController();
            const signal = abortControllerRef.current.signal;

            // Capture audio
            const audioBlob = await captureAudio();
            const authToken = localStorage.getItem("token");

            // Set processing state only if we're continuing
            if (shouldContinueRef.current) {
                setProcessing(true);
            }

            // Create form data for Transcript API
            const formData = new FormData();
            formData.append("audio", audioBlob, "input.wav");

            // Transcribe audio
            const transcriptResponse = await fetch(Transcript_api, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${authToken}`,
                },
                body: formData,
                signal
            });

            const transcript = await transcriptResponse.json();
            if (transcript.message) {
                dispatch(logout());
                localStorage.removeItem("messages");
                navigate("/signup");
                return;
            }

            // Ensure we're still continuing before next steps
            if (!shouldContinueRef.current) return;

            // Send transcript to Chat API
            const chatResponse = await fetch(Chat_api, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${authToken}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    user_input: transcript.response,
                    response_length: "short",
                }),
                signal
            });

            const response = await chatResponse.json();
            if (response.message) {
                dispatch(logout());
                localStorage.removeItem("messages");
                navigate("/signup");
                return;
            }

            // Ensure we're still continuing before next steps
            if (!shouldContinueRef.current) return;

            // Generate voice response
            const voiceResponse = await fetch(Voice_api, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${authToken}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ user_input: response.response }),
                signal
            });

            const voiceBlob = await voiceResponse.blob();

            // Ensure we're still continuing before playing audio
            if (!shouldContinueRef.current) return;

            // Reset processing state before speaking
            setProcessing(false);

            // Play audio response
            setSpeaking(true);
            await playAudio(voiceBlob);
            setSpeaking(false);

            // Continue the cycle if still listening
            if (shouldContinueRef.current) {
                await processAudioCycle();
            }
        } catch (error) {
            // Only log if it's not an abort error
            if (!(error instanceof DOMException) || error.name !== 'AbortError') {
                console.error("Error in audio processing:", error);
            }
            stopAllProcesses();
        }
    }, [stopAllProcesses]);

    const captureAudio = () => {
        return new Promise((resolve, reject) => {
            try {
                const constraints = { audio: true };
                navigator.mediaDevices.getUserMedia(constraints)
                    .then((stream) => {
                        audioStreamRef.current = stream;
                        const mediaRecorder = new MediaRecorder(stream);
                        mediaRecorderRef.current = mediaRecorder;
                        const audioChunks = []; // Initialize audioChunks here

                        mediaRecorder.ondataavailable = (event) => {
                            audioChunks.push(event.data);
                        };

                        mediaRecorder.onstop = () => {
                            const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
                            stream.getTracks().forEach(track => track.stop());
                            resolve(audioBlob);
                        };

                        mediaRecorder.start();

                        // Record for 5 seconds or until stopped
                        setTimeout(() => {
                            if (shouldContinueRef.current) {
                                mediaRecorder.stop();
                            }
                        }, 5000);
                    })
                    .catch((error) => {
                        reject(new Error("Failed to capture audio: " + error.message));
                    });
            } catch (error) {
                reject(new Error("Audio capture error: " + error.message));
            }
        });
    };

    const playAudio = (audioBlob) => {
        return new Promise((resolve) => {
            const audioUrl = URL.createObjectURL(audioBlob);
            const audio = new Audio(audioUrl);
            audioRef.current = audio;
            audio.onended = () => {
                URL.revokeObjectURL(audioUrl);
                resolve();
            };
            audio.play();
        });
    };

    const handleMicrophoneClick = async () => {
        if (listening) {
            // Stop listening
            stopAllProcesses();
        } else {
            // Start continuous listening
            setInitializing(true);
            shouldContinueRef.current = true;

            setTimeout(async () => {
                setInitializing(false);
                setListening(true);
                
                try {
                    await processAudioCycle();
                } catch (error) {
                    console.error("Error in voice interface:", error);
                    stopAllProcesses();
                }
            }, 1000); // Simulate initialization delay
        }
    };

    // Animated text component
    const AnimatedText = ({ children, className }) => (
        <div className={`animate-pulse text-white text-center font-bold ${className}`}>
            {children}
        </div>
    );

    return (
        <div className="w-screen h-screen bg-[#292828] flex flex-col">
            <div className="flex items-center justify-center mx-auto h-full flex-col">
                <div className="flex w-44 justify-between mb-4">
                    <span
                        className={`text-white p-4 bg-[#3A3A3A] rounded-full cursor-pointer ${initializing ? 'animate-ping' : listening ? 'animate-pulse' : ''}`}
                        onClick={handleMicrophoneClick}
                    >
                        {!listening && !initializing ? (
                            <FaMicrophoneLinesSlash className="w-8 h-8 text-red-600" />
                        ) : (
                            <FaMicrophone className="w-8 h-6" />
                        )}
                    </span>

                    <span
                        onClick={() => {
                            stopAllProcesses();
                            dispatch(changeVoiceMode(false));
                        }}
                        className={`text-white p-4 bg-[#3A3A3A] rounded-full cursor-pointer ${processing ? 'animate-spin' : ''}`}
                    >
                        <FaXmark className="w-8 h-8" />
                    </span>
                </div>

                {/* Animated state indicators */}
                {listening && !speaking && !processing && (
                    <>
                    <ListeningRobot />
                    <AnimatedText className="text-blue-500 mt-2">Listening...</AnimatedText>

                    </>
                    
                )}
                
                {processing && !speaking && (
                    <>
                    <ProcessingAnimation />

                    </>
                )}
                
                {speaking && (
                    <SpeakingRobot />
                )}
            </div>
        </div>
    );
}



const ListeningRobot = () => {
  return (
    <div className="relative w-32 h-44 mx-auto mt-12 bg-gradient-to-br from-slate-900 to-blue-950 rounded-[10px] shadow-lg border-2 border-cyan-400">
      {/* Hair */}
      <div className="absolute -top-8 -left-5 -right-5 h-18 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 rounded-t-[100px] overflow-hidden">
        <div className="absolute w-10 h-16 bg-gradient-to-b from-blue-400 to-cyan-500 top-2 left-5 rounded-t-[50px] rotate-[15deg]" />
        <div className="absolute w-10 h-16 bg-gradient-to-b from-blue-400 to-cyan-500 top-2 right-5 rounded-t-[50px] -rotate-[15deg]" />
        <div className="absolute w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-500 -top-9 left-1/2 -translate-x-1/2 rounded-full shadow-lg" />
      </div>
      {/* Ears */}
      <div className="absolute -left-10 top-14 w-6 h-12 bg-gradient-to-r from-slate-900 to-blue-950 rounded-3xl border-2 border-cyan-400">
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full animate-pulse" />
      </div>
      <div className="absolute -right-10 top-14 w-6 h-12 bg-gradient-to-l from-slate-900 to-blue-950 rounded-3xl border-2 border-cyan-400">
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full animate-pulse" />
      </div>
      {/* Eyes */}
      <div className="absolute left-7 top-[64px] w-6 h-6 bg-black border-2 border-cyan-400 rounded-full shadow-md shadow-cyan-400/50">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-cyan-400 rounded-full animate-pulse" />
        {/* Eyelashes */}
        <div className="absolute -top-2 left-1/4 w-0.5 h-2 bg-cyan-400 shadow-lg shadow-cyan-400/50" />
        <div className="absolute -top-2 left-1/2 w-0.5 h-2 bg-cyan-400 shadow-lg shadow-cyan-400/50" />
        <div className="absolute -top-2 right-1/4 w-0.5 h-2 bg-cyan-400 shadow-lg shadow-cyan-400/50" />
      </div>
      <div className="absolute right-7 top-[64px] w-6 h-6 bg-black border-2 border-cyan-400 rounded-full shadow-md shadow-cyan-400/50">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-cyan-400 rounded-full animate-pulse" />
        {/* Eyelashes */}
        <div className="absolute -top-2 left-1/4 w-0.5 h-2 bg-cyan-400 shadow-lg shadow-cyan-400/50" />
        <div className="absolute -top-2 left-1/2 w-0.5 h-2 bg-cyan-400 shadow-lg shadow-cyan-400/50" />
        <div className="absolute -top-2 right-1/4 w-0.5 h-2 bg-cyan-400 shadow-lg shadow-cyan-400/50" />
      </div>
      {/* Lips */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-10 h-3 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 rounded-full shadow-lg" />
      
      {/* Sound Waves */}
      <div className="absolute -left-14 top-16">
        {[0, 1, 2].map((i) => (
          <div
            key={`left-wave-${i}`}
            className="absolute w-4 h-4 border-2 border-cyan-400 rounded-full animate-ping opacity-75"
            style={{
              animationDelay: `${i * 0.4}s`,
              animationDuration: "1.5s",
              boxShadow: "0 0 10px rgba(34, 211, 238, 0.5)"
            }}
          />
        ))}
      </div>
      <div className="absolute -right-14 top-16">
        {[0, 1, 2].map((i) => (
          <div
            key={`right-wave-${i}`}
            className="absolute w-4 h-4 border-2 border-cyan-400 rounded-full animate-ping opacity-75"
            style={{
              animationDelay: `${i * 0.4}s`,
              animationDuration: "1.5s",
              boxShadow: "0 0 10px rgba(34, 211, 238, 0.5)"
            }}
          />
        ))}
      </div>
    </div>
  );
};


const ProcessingAnimation = () => {
  return (
    <div className="relative w-32 h-44 mx-auto mt-12 bg-gradient-to-br from-slate-900 to-blue-950 rounded-[10px] shadow-lg border-2 border-cyan-400">
      {/* Circuit Board Pattern */}
      <div className="absolute -top-8 -left-5 -right-5 h-18 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 rounded-t-[100px] overflow-hidden">
        <div className="absolute w-10 h-16 bg-gradient-to-b from-blue-400 to-cyan-500 top-2 left-5 rounded-t-[50px] rotate-[15deg]">
          <div className="absolute top-2 left-2 w-1 h-1 bg-cyan-200 rounded-full animate-pulse" />
          <div className="absolute bottom-2 right-2 w-1 h-1 bg-cyan-200 rounded-full animate-pulse" />
        </div>
        <div className="absolute w-10 h-16 bg-gradient-to-b from-blue-400 to-cyan-500 top-2 right-5 rounded-t-[50px] -rotate-[15deg]">
          <div className="absolute top-2 right-2 w-1 h-1 bg-cyan-200 rounded-full animate-pulse" />
          <div className="absolute bottom-2 left-2 w-1 h-1 bg-cyan-200 rounded-full animate-pulse" />
        </div>
        <div className="absolute w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-500 -top-9 left-1/2 -translate-x-1/2 rounded-full shadow-lg">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-cyan-200 rounded-full animate-pulse" />
        </div>
      </div>
      
      {/* Connection Points */}
      <div className="absolute -left-10 top-14 w-6 h-12 bg-gradient-to-r from-slate-900 to-blue-950 rounded-3xl border-2 border-cyan-400">
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full animate-pulse" />
      </div>
      <div className="absolute -right-10 top-14 w-6 h-12 bg-gradient-to-l from-slate-900 to-blue-950 rounded-3xl border-2 border-cyan-400">
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full animate-pulse" />
      </div>
      
      {/* Processing Indicators */}
      <div className="absolute left-7 top-[64px] w-6 h-6 bg-black border-2 border-cyan-400 rounded-full shadow-md shadow-cyan-400/50">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-cyan-400 rounded-full animate-ping" />
      </div>
      <div className="absolute right-7 top-[64px] w-6 h-6 bg-black border-2 border-cyan-400 rounded-full shadow-md shadow-cyan-400/50">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-cyan-400 rounded-full animate-ping" />
      </div>
      
      {/* Loading Lines */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-16 flex flex-col gap-2">
        {[0, 1, 2].map((i) => (
          <div
            key={`loading-line-${i}`}
            className="h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full"
            style={{
              animation: "loadingLine 2s ease-in-out infinite",
              animationDelay: `${i * 0.3}s`
            }}
          />
        ))}
      </div>

      {/* Central Loading Circle */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-8 h-8 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin" />
      </div>

      {/* Processing Text */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2">
        <div className="text-sm font-bold text-cyan-400 tracking-wider drop-shadow-lg animate-pulse">
          PROCESSING
        </div>
      </div>

      <style jsx>{`
        @keyframes loadingLine {
          0% {
            width: 0%;
            opacity: 0;
          }
          50% {
            width: 100%;
            opacity: 1;
          }
          100% {
            width: 0%;
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};


const SpeakingRobot = () => {
  return (
    <div className="relative w-32 h-44 mx-auto mt-12 bg-gradient-to-br from-slate-900 to-blue-950 rounded-[10px] shadow-lg border-2 border-cyan-400">
      {/* Circuit Board Pattern */}
      <div className="absolute -top-8 -left-5 -right-5 h-18 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 rounded-t-[100px] overflow-hidden">
        <div className="absolute w-10 h-16 bg-gradient-to-b from-blue-400 to-cyan-500 top-2 left-5 rounded-t-[50px] rotate-[15deg]">
          <div className="absolute top-2 left-2 w-1 h-1 bg-cyan-200 rounded-full animate-pulse" />
          <div className="absolute bottom-2 right-2 w-1 h-1 bg-cyan-200 rounded-full animate-pulse" />
        </div>
        <div className="absolute w-10 h-16 bg-gradient-to-b from-blue-400 to-cyan-500 top-2 right-5 rounded-t-[50px] -rotate-[15deg]">
          <div className="absolute top-2 right-2 w-1 h-1 bg-cyan-200 rounded-full animate-pulse" />
          <div className="absolute bottom-2 left-2 w-1 h-1 bg-cyan-200 rounded-full animate-pulse" />
        </div>
        <div className="absolute w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-500 -top-9 left-1/2 -translate-x-1/2 rounded-full shadow-lg">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-cyan-200 rounded-full animate-pulse" />
        </div>
      </div>
      
      {/* Connection Points */}
      <div className="absolute -left-10 top-14 w-6 h-12 bg-gradient-to-r from-slate-900 to-blue-950 rounded-3xl border-2 border-cyan-400">
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full animate-pulse" />
      </div>
      <div className="absolute -right-10 top-14 w-6 h-12 bg-gradient-to-l from-slate-900 to-blue-950 rounded-3xl border-2 border-cyan-400">
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full animate-pulse" />
      </div>
      
      {/* Eyes */}
      <div className="absolute left-7 top-[64px] w-6 h-6 bg-black border-2 border-cyan-400 rounded-full shadow-md shadow-cyan-400/50">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-cyan-400 rounded-full" />
      </div>
      <div className="absolute right-7 top-[64px] w-6 h-6 bg-black border-2 border-cyan-400 rounded-full shadow-md shadow-cyan-400/50">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-cyan-400 rounded-full" />
      </div>
      
      {/* Animated Speaking Mouth */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-0.5">
        <div className="relative w-12 h-6 bg-black rounded-lg border-2 border-cyan-400 overflow-hidden shadow-lg shadow-cyan-400/30">
          {/* Sound Wave Animation */}
          <div className="absolute top-0 left-0 w-full h-full flex justify-around items-center">
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={`wave-${i}`}
                className="w-1.5 bg-cyan-400 rounded-full"
                style={{
                  height: '30%',
                  animation: 'speaking 0.5s ease-in-out infinite',
                  animationDelay: `${i * 0.1}s`
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Speaking Text */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2">
        <div className="text-sm font-bold text-cyan-400 tracking-wider drop-shadow-lg">
          SPEAKING
        </div>
      </div>

      <style jsx>{`
        @keyframes speaking {
          0%, 100% { height: 30%; }
          50% { height: 70%; }
        }
      `}</style>
    </div>
  );
};

