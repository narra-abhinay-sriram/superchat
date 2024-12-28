import '@fontsource/inter';
import '@fontsource/inter/600.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function LandingPage_Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { fordevelopersPage,forbusiness} = useSelector(store=>store.user)

  return (
    <div className="flex justify-between items-center h-[60px] bg-slate-50 px-4">
      {/* Logo */}
      <div className="flex items-center">
        <Link to={"/"}>
        <span
          className="sm:text-[22px] text-xl font-inter font-semibold bg-clip-text text-transparent cursor-pointer"
          style={{
            backgroundImage: 'linear-gradient(to right, #6F036C, #FF6F61E5)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Superchat LLC
        </span></Link>

      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-6 text-custom-purple text-[18px] font-medium">
      <Link to={'/fordevelopers'}>
        <span className={`hover:underline cursor-pointer ${fordevelopersPage && 'underline'}`}>For Developers</span>
        </Link>
        <Link to={'/forbusiness'}>
        <span className={`hover:underline cursor-pointer ${forbusiness && 'underline'}`}>For Businesses</span>
        </Link>
       
        <span className="hover:underline cursor-pointer">Super Chip</span>
      </div>

      {/* Hamburger Menu */}
      <div className="md:hidden flex items-center">
        <button
          className="text-custom-purple text-[24px]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          &#9776; {/* Hamburger Icon */}
        </button>
      </div>

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-[60px] right-0 w-full bg-white shadow-lg flex flex-col items-center space-y-4 p-4 md:hidden">
         <Link to={'/fordevelopers'}>
          <span
            className={`hover:underline cursor-pointer text-custom-purple text-[18px] ${fordevelopersPage && 'underline'}`}
            onClick={() => setIsMenuOpen(false)}
          >
            For Developers
          </span>
          </Link>
          <Link to={'/forbusiness'}>
          <span
            className={`hover:underline cursor-pointer text-custom-purple text-[18px] ${forbusiness && 'underline'}`}
            onClick={() => setIsMenuOpen(false)}
          >
            For Businesses
          </span>
          </Link>
          
         
          <span
            className="hover:underline cursor-pointer text-custom-purple text-[18px]"
            onClick={() => setIsMenuOpen(false)}
          >
            Super Chip
          </span>
        </div>
      )}
    </div>
  );
}
