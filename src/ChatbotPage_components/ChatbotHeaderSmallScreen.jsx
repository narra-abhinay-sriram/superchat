import '@fontsource/inter';
import '@fontsource/inter/600.css';
import { useState } from 'react';
import {
  
  FaCog,
  FaMoon,
  FaSun,
  FaTrashAlt,
  FaBell,
  FaUserCircle,
} from 'react-icons/fa';
import superchatLogo from '../assets/superchat_logo.png';
import superchatLogo_white from "../assets/superchat_logo_white.png"
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../ReduxStateManagement/authslice';
import { useNavigate } from 'react-router-dom';
import {  changetodarkmode } from '../ReduxStateManagement/user';
import { clear_chat_api } from '../Utils/Apis';

export default function ChatbotHeaderSmallScreen() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { darkmode, sidebarReduced } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSidebarToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItemClass = () =>
    `p-3 rounded-full flex items-center cursor-pointer ${
      sidebarReduced
        ? 'justify-center bg-gray-700 text-white'
        : `gap-2 hover:bg-gray-300 ${
            darkmode ? 'hover:bg-gray-600 text-white' : 'text-gray-600'
          }`
    }`;


  const handleClearConversations = async () => {
    try {
      const resp = await fetch(clear_chat_api, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
      });
      const data = await resp.json();
      if (data.message) {
        localStorage.removeItem('messages');
        alert('Conversations cleared successfully');
      }
    } catch (e) {
      alert(e);
    }
  };

  return (
    <div className={`fixed z-10 w-full ${ 
        darkmode ? "bg-[#3A3B3C] text-white" : "bg-gray-300 text-gray-900"
      }`}>
      {/* Header Section */}
      <div className="flex justify-between items-center h-[60px] px-4">
        <p className={`text-xl font-bold bg-gradient-to-r ${darkmode ? " from-[#F5EEF8] to-[#D0D3D4]" : " from-[#6F036C] to-[#FF6F61E5]"} bg-clip-text text-transparent`}>
              Superchat LLC
            </p>

        {/* Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <button
            className={`${darkmode ? "text-white text-[24px]" : "text-custom-purple text-[24px]"} `}
            onClick={handleSidebarToggle}
          >
            &#9776; {/* Hamburger Icon */}
          </button>
        </div>
      </div>

      {/* Sidebar Section */}
      {isMenuOpen && (
        <div
          className={`${
            darkmode ? 'bg-[#3A3B3C] text-white' : 'bg-gray-300 text-gray-900'
          } h-screen fixed top-0 left-0 z-10 w-[230px]`}
        >
          <div className="flex flex-col">
            {/* Logo Section */}
           
           <div className="flex justify-center mt-4">
              <img 
      src={darkmode ? superchatLogo_white : superchatLogo}
      alt="Superchat Logo" className="w-10 h-10" />
            </div>

            {/* Menu Items */}
            <div className="flex flex-col items-start px-4 mt-4">
              {/* Settings */}
              <div className="relative group mb-4 w-full">
                <div className={menuItemClass()}>
                  <FaCog />
                  <span>Settings</span>
                </div>
              </div>

              {/* Dark Mode Toggle */}
              <div className="relative group mb-4 w-full">
                <div
                  onClick={() => {
                    const isDarkMode = localStorage.getItem('darkmode');
                    if (isDarkMode) {
                      localStorage.removeItem('darkmode');
                      dispatch(changetodarkmode(false));
                    } else {
                      localStorage.setItem('darkmode', true);
                      dispatch(changetodarkmode(true));
                    }
                  }}
                  className={menuItemClass()}
                >
                  {darkmode ? <FaSun /> : <FaMoon />}
                  <span>{darkmode ? 'Light Theme' : 'Dark Theme'}</span>
                </div>
              </div>

              {/* Clear Conversations */}
              <div className="relative group mb-4 w-full">
                <div
                  onClick={handleClearConversations}
                  className={menuItemClass()}
                >
                  <FaTrashAlt />
                  <span>Clear Conversations</span>
                </div>
              </div>

              {/* Updates & FAQ */}
              <div className="relative group mb-4 w-full">
                <div className={menuItemClass()}>
                  <FaBell />
                  <span>Updates & FAQ</span>
                </div>
              </div>

              {/* Logout */}
              <div className="flex justify-start w-full">
                <button
                  onClick={() => {
                    dispatch(logout());
                    localStorage.removeItem('messages');
                    navigate('/signup');
                  }}
                  className={`text-lg flex gap-2 items-center justify-center cursor-pointer ${
                    darkmode
                      ? 'text-white hover:text-red-800'
                      : 'text-gray-500 hover:text-red-700'
                  }`}
                >
                  <FaUserCircle className="text-2xl" />
                  Log out
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
