import  { useState, useEffect } from 'react';
import '@fontsource/inter';
import superchatLogo from '../assets/superchat_logo.png';
import { useNavigate } from 'react-router-dom';

export default function LandingPage__Left_Container() {
  const [dynamicWord, setDynamicWord] = useState('chat');
  const navigate=useNavigate()
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
    <div className="flex flex-col relative">
      <div className="absolute flex justify-center items-center gap-0 sm:top-[100px] sm:left-[100px] left-[15px] top-[115px]">
        <img
          src={superchatLogo}
          alt="Superchat Logo"
          className="sm:w-[70px] sm:h-[85px] w-12 h-12 "

        />
        <p
          className="font-inter font-[350] py-1 ml- text-left leading-[100px] sm:text-[90px] text-[40px] bg-gradient-to-r from-[#6F036C] to-[#FF6F61E5] bg-clip-text text-transparent">
          uper<span className="ml-1 mr-1">{dynamicWord}</span>
        </p>
      </div>

      <div className="absolute sm:top-[220px] sm:left-[99px] top-[205px] left-[15px]">
        <p className="sm:text-[22px] text-md font-[500] sm:mb-2">
          Accelerate Conversations, Power Through Data
        </p>
        <p className="sm:text-[18px] text-sm sm:w-[500px] w-fit  sm:text-slate-700 text-gray-500 font-light">
          Chat with AI, Create Code, Teach yourself new things, Analyze your documents, Summarize large documents, Query documents, images and more ...
        </p>
      </div>

      
      <div className="absolute sm:top-[360px]  sm:left-[102px] left-[15px] top-[310px] flex items-center gap-2">
        <p 
          className=" hover:cursor-pointer sm:text-[20px] text-[18px] font-[500] bg-gradient-to-r from-[#6F036C] to-[#FF6F61E5] bg-clip-text text-transparent"
          onClick={()=>{
          navigate("/signup")
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
    </div>
  );
}

