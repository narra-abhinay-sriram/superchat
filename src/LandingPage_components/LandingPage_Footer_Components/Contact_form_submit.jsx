import { FaCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useDispatchHeader from "../../customHooks/useDispatchHeader";

export default function Contact_form_submit() {
    const navigate=useNavigate()
   useDispatchHeader();
  return (
    <div>
      <div className="flex flex-col justify-center items-center mx-auto h-screen ">
        <div className="p-2 bg-green-600 rounded-full text-center ">
        <FaCheck className="text-white z-40 w-5 h-5 " />
        </div>
        <p className="text-slate-600 p-4 text-lg text-center  border-b-2 border-gray-400">
            We have received your request
        </p>
        <p className="text-gray-500 text-md pt-2 text-center">
            Our Team will get in touch with you ,please wait patiently
        </p>
        <button 
        onClick={()=>{
       navigate('/')
        }}
        className="px-3 py-2 bg-indigo-500 text-white rounded-lg mt-6 w-[160px] text-center">
            Click Here
        </button>

      </div>
    </div>
  )
}
