import { useState } from "react"
import CopyText from "../../Components/Copy";
import { Translate_api } from "../../Utils/Apis";

export default function Superchat_translate() {
    const [inputText,setinputText]= useState('');
    const [target_lang,settarget_lang]=useState("hi");
    const [outputText,setoutputText]=useState('');
    const [loading,setloading]=useState(false)
    const [error,seterror]=useState('')

    const char_limit=5000
    const handleChnage=(e)=>{
        setinputText(e.target.value);

        
    }
    const isatLimit= inputText.length>=char_limit
    
    const handletranslate = async()=>{
        try{
            setloading(true)
            const authToken=localStorage.getItem("token")
            const responseData=await fetch(Translate_api,
                {
                    method:"POST",
                    headers:{
                        Authorization:`Bearer ${authToken}`,
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify({user_input:inputText,target_lang})
                },
            )
            const data= await responseData.json();
            setoutputText(data.translation);
            setloading(false)

        }
        catch(e)
        {
                seterror(error)
        }

    }


  return (
    <main className="w-full sm:w-auto    h-screen relative sm:ml-[230px] ">
        <h1 className=" flex  justify-center bg-gradient-to-r from-[#6F036C] to-[#FF6F61] bg-clip-text text-transparent ">
            Superchat Translator
        </h1>
        <div className=" flex flex-row justify-center h-[400px]   ">
    <div className="relative border-2 rounded-lg mr-3  focus-within:border-transparent">
        <textarea
            value={inputText}
            disabled={isatLimit}
            onChange={handleChnage}
            placeholder="Enter text to translate"
             className=" h-full w-[500px] p-3 pb-16 rounded-lg border-0  focus:outline-none resize-none" />

      <div className="absolute bottom-0 left-0 right-0 h-12 bg-white  rounded-b-lg">
        <div className="flex justify-between items-center h-full px-4">
        <span 
        className="text-sm text-gray-500">
           { inputText.length}/{char_limit} characters
        </span>
                <button 
                 className="text-white rounded-lg bg-slate-400 p-2"
                  onClick={()=>{
                    setinputText('')}}>Clear
                </button>
        </div>
        
     </div>

     </div>

     <div className="relative border-2 rounded-lg  focus-within:border-transparent">
        <textarea
            value={outputText}
            placeholder="Translated Text.."
             className=" h-full w-[500px] p-3 pb-16 rounded-lg border-0  focus:outline-none resize-none" />

      <div className="absolute bottom-0 left-0 right-0 h-12 bg-white  rounded-b-lg">
        <CopyText text={outputText}/>

     </div>

     </div>
        </div>

      <div className="text-center">
        <button
        onClick={handletranslate}
         className="hover:cursor-pointer rounded-md  sm:text-[16px] text-[15px]  bg-black text-white mt-5 p-2">
            {loading ? "Translating.." : "Translate"}
        </button>
      </div>
    </main>
  )
}
