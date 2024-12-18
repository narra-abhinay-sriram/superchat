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
                    <AnimatedText>Listening...</AnimatedText>
                )}
                
                {processing && !speaking && (
                    <AnimatedText className="text-blue-500">Processing...</AnimatedText>
                )}
                
                {speaking && (
                    <AnimatedText className="text-green-500">Speaking...</AnimatedText>
                )}
            </div>
        </div>
    );
}