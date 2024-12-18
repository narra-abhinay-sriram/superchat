import LandingPage_Header from '../LandingPage_Header';
import LandingPage_Footer from '../LandingPage_Footer';

export default function Aboutus() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className='fixed top-0 w-full h-16 bg-white shadow z-10'>
<LandingPage_Header />
      </header>
      

      {/* Main Content */}
      <main className=" mt-16 flex-grow px-4 py-6 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-left mb-6">Welcome to SuperChat LLC!</h1>
        <ul className="space-y-4 text-md mr  ">
          <li>
              SuperChat LLC is a privately held company dedicated to revolutionizing the way individuals and businesses interact with artificial intelligence. Our mission is to provide innovative, user-friendly AI solutions that enhance communication, streamline processes, and empower users to achieve their goals more efficiently.
          </li>
          <li>
              SuperChat LLC is proudly owned by  a renowned investor in the artificial intelligence sector. With a deep commitment to advancing AI technology, the investor provides SuperChat with the strategic vision and financial backing necessary to drive innovation and growth in this rapidly evolving field.
          </li>
          <li>
            
              At SuperChat, we are not just focused on current AI capabilities; we are on a mission to revolutionize AI and accelerate the journey toward Artificial General Intelligence (AGI). We believe that by leveraging commodity hardware, we can achieve breakthroughs in AI development faster than others in the industry. Our approach emphasizes accessibility and efficiency, ensuring that powerful AI solutions are within reach for everyone.
            
          </li>
          <li>
            
              Our team of experts is passionate about harnessing the power of AI to deliver exceptional user experiences and foster meaningful connections. As we continue to grow and evolve, our focus remains on delivering high-quality services that meet the demands of our users while adhering to the highest standards of privacy and security.
            
          </li>
          <li>
            
              We are excited to be at the forefront of the AI revolution and look forward to helping you unlock the full potential of artificial intelligence.
            
          </li>
        </ul>
        <div className="text-left py-12 mt-8 border-t border-gray-200">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 ">
            Thank you for choosing SuperChat LLC!
          </h2>
        </div>
      </main>

      {/* Footer */}
      <footer className=" py-4">
        <LandingPage_Footer />
      </footer>
    </div>
  );
}
