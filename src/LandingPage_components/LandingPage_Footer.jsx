
export default function LandingPage_Footer() {
  return (
    <footer className="bg-gray-50 text-gray-800 py-6 shadow-sm  border-gray-200 ">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <ul className="flex flex-wrap justify-center md:justify-start space-x-4 md:space-x-6 mb-4 md:mb-0 text-sm md:text-base">
          {['About Us', 'Services', 'Investor Relations', 'Available Jobs', 'Core Team'].map((item) => (
            <li 
              key={item} 
              className="mb-2 md:mb-0 transition-all duration-300 
              text-gray-700 hover:text-[#6F036C] 
              hover:scale-105 cursor-pointer 
              hover:underline decoration-[#6F036C]/50"
            >
              {item}
            </li>
          ))}
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
              path: "M20.45 20.45h-3.35v-5.67c0-1.35-.03-3.1-1.88-3.1-1.89 0-2.18 1.48-2.18 3v5.77H9.69V9.5h3.22v1.49h.05c.45-.85 1.54-1.75 3.17-1.75 3.4 0 4.03 2.24 4.03 5.15v6.06zM6.74 8c-1.07 0-1.94-.87-1.94-1.94s.87-1.94 1.94-1.94 1.94.87 1.94 1.94-.87 1.94-1.94 1.94zm-1.68 12.45H8.4V9.5H5.06v10.95zM22 2H2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"
            }
          ].map((social) => (
            <a
              key={social.name}
              href="#"
              className="text-gray-500 hover:text-[#6F036C] transition-all duration-300 
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