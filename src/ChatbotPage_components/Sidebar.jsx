import { useDispatch, useSelector } from "react-redux";
import { logout } from "../ReduxStateManagement/authslice";
import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCog,
  FaMoon,
  FaSun,
  FaTrashAlt,
  FaBell,
  FaUserCircle,
} from "react-icons/fa";
import superchatLogo from "../assets/superchat_logo.png";
import { changesidebarwidth, changetodarkmode } from "../ReduxStateManagement/user";
import { clear_chat_api } from "../Utils/Apis";
import superchatLogo_white from "../assets/superchat_logo_white.png"


const Sidebar = () => {
  const { darkmode,sidebarReduced } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleSidebar = () => {
    dispatch(changesidebarwidth())

  };

  const menuItemClass = (sidebarReduced) =>
    `p-3 rounded-full flex items-center cursor-pointer ${
      sidebarReduced
        ? "justify-center bg-gray-700 text-white"
        :` gap-2 hover:bg-gray-300 ${
            darkmode ? "hover:bg-gray-600 text-white" : "text-gray-600"
          }`
    }`;

  const tooltipClass = `absolute left-12 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 bg-black text-white text-sm rounded-md px-2 py-1 whitespace-nowrap`;
const handleclearconversations=async()=>{
  try {
  const resp=await fetch(clear_chat_api,{
    method:"DELETE",
    headers:{
      Authorization:`Bearer ${localStorage.getItem("token")}` ,
      "Content-Type":"application/json" 
    }
  })
  const data=await resp.json()
  if(data.message)
  {
    localStorage.removeItem("messages")
    window.location.reload()
    
    alert("Conversations cleared successfully")

  }
  }catch(e){
    alert(e)
  }
}
  return (
    <div
      className={`  ${ 
        darkmode ? "bg-[#3A3B3C] text-white" : "bg-gray-300 text-gray-900"
      } h-screen flex flex-col  ${
        sidebarReduced ? "w-20" : "w-[230px]"
      } fixed top-0 left-0 z-10 `}
    >
      {/* Logo Section */}
      {sidebarReduced && (
  <div className="flex justify-center">
    <img
      src={darkmode ? superchatLogo_white : superchatLogo}
      alt="Superchat Logo"
      className="w-10 h-10 ml-4 mt-4"
    />
  </div>
)}

      {/* Expand/Collapse Button */}
      <div className="flex items-center justify-center p-4">
        <div className="flex items-center justify-between w-full">
          {!sidebarReduced && (
            <p className={`text-xl font-bold bg-gradient-to-r ${darkmode ? " from-[#F5EEF8] to-[#D0D3D4]" : " from-[#6F036C] to-[#FF6F61E5]"} bg-clip-text text-transparent`}>
              Superchat LLC
            </p>
          )}
          <div className="relative group ml-auto">
            <div
              onClick={toggleSidebar}
              className={`p-2 rounded-full cursor-pointer ${
                darkmode ? "bg-gray-100 text-black" : "bg-gray-800 text-white"
              }`}
            >
              {sidebarReduced ? <FaArrowRight /> : <FaArrowLeft />}
            </div>
            <div
              className={`${tooltipClass} ${
                sidebarReduced ? "left-" : "right-"
              }`}
            >
              {sidebarReduced ? "Expand " : "Collapse "}
            </div>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="flex flex-col items-start px-4 mt-auto mb-4">
        {/* Settings */}
      {/*  <div className="relative group mb-4 w-full">
          <div className={menuItemClass(sidebarReduced)}>
            <FaCog />
            {!sidebarReduced && <span>Settings</span>}
          </div>
          {sidebarReduced && <div className={tooltipClass}>Settings</div>}
        </div> */}

        {/* Dark Mode Toggle */}
        <div className="relative group mb-4 w-full">
          <div onClick={() =>{ 
            const isdarkmode=localStorage.getItem("darkmode")
            if(isdarkmode)
            {
              localStorage.removeItem("darkmode")
              dispatch(changetodarkmode(false))

            }else{
              localStorage.setItem("darkmode",true)
              dispatch(changetodarkmode(true))
            }
            
            }} className={menuItemClass(sidebarReduced)}>
            {darkmode ? <FaSun /> : <FaMoon />}
            {!sidebarReduced && <span>{darkmode ? "Light Theme" : "Dark Theme"}</span>}
          </div>
          {sidebarReduced && (
            <div className={tooltipClass}>{darkmode ? "Light Theme" : "Dark Theme"}</div>
          )}
        </div>

        {/* Clear Conversations */}
        <div 
        className="relative group mb-4 w-full">
          <div className={menuItemClass(sidebarReduced)}>
            <FaTrashAlt
            className=" hover:text-gray-950"
                    onClick={handleclearconversations}
            />
            {!sidebarReduced && <span
            className=" hover:text-gray-950"
              onClick={handleclearconversations}

            >Clear Conversations</span>}
          </div>
          {sidebarReduced && <div
                  onClick={handleclearconversations}

          className={tooltipClass}>Clear Conversations</div>}
        </div>

        {/* Updates & FAQ */}
        {/*
        <div className="relative group mb-4 w-full">
          <div className={menuItemClass(sidebarReduced)}>
            <FaBell />
            {!sidebarReduced && <span>Updates & FAQ</span>}
          </div>
          {sidebarReduced && <div className={tooltipClass}>Updates & FAQ</div>}
        </div>
         */}
        {/* Logout */}
        <div className="flex justify-start w-full">
          {sidebarReduced ? (
            <div className="relative group">
              <FaUserCircle
              onClick={() => {
                dispatch(logout());
                localStorage.removeItem("messages")
                navigate("/signup");
              }}
                className={`text-2xl cursor-pointer ${
                  darkmode ? "text-white hover:text-red-800" : "text-gray-500 hover:text-red-700"
                }`}
              />
              <div className={tooltipClass}>Logout</div>
            </div>
          ) : (
            <button
              onClick={() => {
                dispatch(logout());
                localStorage.removeItem("messages")

                navigate("/signup");
              }}
              className={`text-lg flex gap-2 items-center justify-center cursor-pointer ${
                darkmode ? "text-white hover:text-red-800" : "text-gray-500 hover:text-red-700"
              }`}            >
              <FaUserCircle className="text-2xl" />
              Log out
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;