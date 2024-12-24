import  { useState, useEffect } from 'react';
import '@fontsource/inter';
import superchatLogo from '../assets/superchat_logo.png';
import { useNavigate, useLocation  } from 'react-router-dom';

export default function LandingPage__Left_Container() {
  const [dynamicWord, setDynamicWord] = useState('chat');
  const navigate=useNavigate()
  const location = useLocation();
  const words = ['chat', 'intelligence', 'fast']; 

  useEffect(() => {
    const interval = setInterval(() => {
      setDynamicWord((prevWord) => {
        const currentIndex = words.indexOf(prevWord);
        return words[(currentIndex + 1) % words.length]; 
      });
    }, 3000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="flex flex-col relative top-[120px]">
      <div className="absolute flex items-center gap-0 left-[90px] top-[145px]">
        <img
          src={superchatLogo}
          alt="Superchat Logo"
          className="sm:w-[70px] sm:h-[85px] w-12 h-12 "

        />
        <p
          className="font-inter font-normal leading-[79px] sm:text-[65px] text-[45px] bg-gradient-to-r from-[#6F036C] to-[#FF6F61E5] bg-clip-text text-transparent">
          uper<span className="ml-1 mr-1">{dynamicWord}</span>
        </p>
      </div>

      <div className="absolute sm:top-[220px] sm:left-[99px] top-[205px] left-[15px] mt-5">
        <p className="font-roboto font-normal text-[20px] leading-[30px] tracking-[-0.04em] text-black">
          Accelerate Conversations, Power Through Data
        </p>
        <p className="font-roboto font-light text-[14px] leading-[25px] sm:w-[384px] w-[278px] text-black mt-1">
          Chat with AI, Create Code, Teach yourself new things, Analyze your documents, Summarize large documents, Query documents, images and more ...
        </p>
      </div>

      {/* Conditionally render "Try Superchat" based on the current route */}
      {location.pathname !== '/signup' && location.pathname !== '/login' && (
        <div className="absolute sm:top-[400px] left-[99px] top-[500px] flex items-center gap-2">
          <p
            className="hover:cursor-pointer left-[65px] sm:text-[25px] text-[25px] font-[500] bg-gradient-to-r from-[#6F036C] to-[#FF6F61E5] bg-clip-text text-transparent"
            onClick={() => {
              navigate('/signup');
            }}
          >
            Try Superchat
          </p>     
          <svg
                  width="25"
                  height="23"
                  viewBox="0 0 25 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.1684 6C6.89234 6 6.66853 6.22374 6.66853 6.49986C6.66853 6.77592 6.89234 6.99973 7.1684 6.99973H12.2798L2.14921 17.1301C1.95026 17.3291 1.95026 17.6518 2.14921 17.8508C2.34823 18.0497 2.67088 18.0497 2.8699 17.8508L13.0003 7.72053V12.8315C13.0003 13.1075 13.2241 13.3313 13.5001 13.3313C13.7762 13.3313 14 13.1075 14 12.8315V6.49986C14 6.22374 13.7762 6 13.5001 6H7.1684Z"
                    fill="#4A0044"
                  />
                </svg>
        </div>
      )}          
        </div>
      )};

