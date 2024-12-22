import { Link } from "react-router-dom";

export default function LandingPage_Footer() {
  return (
    <footer className=" bottom-0   bg-gray-50 text-gray-800 py-6 shadow-sm  border-gray-200 ">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <ul className="flex flex-wrap justify-center md:justify-start space-x-4 md:space-x-6 mb-4 md:mb-0 text-sm md:text-base">
          
           <Link to={'/aboutus'}>
           <li className="mb-2 md:mb-0 transition-all duration-300 
              text-gray-700 hover:text-[#6F036C] 
              hover:scale-105 cursor-pointer 
              hover:underline decoration-[#6F036C]/50">
                About Us</li>
           </Link> 

          

           <Link to={'/terms'}>
           <li className="mb-2 md:mb-0 transition-all duration-300 
              text-gray-700 hover:text-[#6F036C] 
              hover:scale-105 cursor-pointer 
              hover:underline decoration-[#6F036C]/50">
                 Terms and Conditions</li>
           </Link> 

           <Link to={'/privacy'}>
           <li className="mb-2 md:mb-0 transition-all duration-300 
              text-gray-700 hover:text-[#6F036C] 
              hover:scale-105 cursor-pointer 
              hover:underline decoration-[#6F036C]/50">
                Privacy Policy</li>
           </Link> 

           <Link to={'/cancellation'}>
           <li className="mb-2 md:mb-0 transition-all duration-300 
              text-gray-700 hover:text-[#6F036C] 
              hover:scale-105 cursor-pointer 
              hover:underline decoration-[#6F036C]/50">
                Cancellation/Refund Policies</li>
           </Link> 
           <Link to={'/contactus'}>
           <li className="mb-2 md:mb-0 transition-all duration-300 
              text-gray-700 hover:text-[#6F036C] 
              hover:scale-105 cursor-pointer 
              hover:underline decoration-[#6F036C]/50">
                Contact Us</li>
           </Link> 
        </ul>
        <div className="flex space-x-6 items-center">
          {[
            { 
              name: 'Facebook', 
              path: "M22 12a10 10 0 1 0-11.5 9.91v-7.02h-2.26v-2.89h2.26V9.41c0-2.24 1.34-3.5 3.39-3.5.98 0 2 .07 2.26.1v2.63h-1.56c-1.22 0-1.63.77-1.63 1.55v1.85h2.78l-.44 2.89h-2.34V21.9A10 10 0 0 0 22 12z"
            },
            { 
              name: 'Twitter', 
              path: "M19.63 7.1c.01.14.01.28.01.42 0 4.3-3.27 9.25-9.25 9.25-1.84 0-3.55-.54-5-1.46h.47c1.52 0 2.92-.52 4.04-1.39a3.27 3.27 0 0 1-3.06-2.28c.2.03.4.06.6.06.29 0 .58-.04.85-.11a3.26 3.26 0 0 1-2.62-3.2v-.04c.44.24.95.39 1.5.41a3.26 3.26 0 0 1-1-4.35 9.25 9.25 0 0 0 6.71 3.41 3.26 3.26 0 0 1 5.56-2.97 6.52 6.52 0 0 0 2.07-.79 3.27 3.27 0 0 1-1.43 1.8 6.49 6.49 0 0 0 1.87-.51 6.72 6.72 0 0 1-1.63 1.69z"
            },
            {
              name: 'LinkedIn',
              path: "M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zM8.5 19h-3v-10.5h3v10.5zM7 7c-1 0-1.8-0.8-1.8-1.8 0-1 0.8-1.8 1.8-1.8s1.8 0.8 1.8 1.8c0 1-0.8 1.8-1.8 1.8zM20 19h-3v-5.5c0-3-3.5-2.8-3.5 0v5.5h-3v-10.5h3v1.5c1.4-2.6 6.5-2.8 6.5 2.5v6.5z",
              viewBox: "0 0 24 24"
            }
            
          ].map((social) => (
            <a
              key={social.name}
              href="#"
              className="text-gray-500 bg-gray-300 rounded-full text-center hover:text-[#6F036C] transition-all duration-300 
              hover:scale-125 transform"
              aria-label={social.name}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path d={social.path} />
              </svg>
            </a>
          ))}
        </div>
      </div>
      
     
    </footer>
  );
}