import { useEffect } from 'react';
import super_chip_vid from '../../assets/superchip/superchat-video-hd.mp4' 
import LandingPage_Footer from '../LandingPage_Footer'
import LandingPage_Header from '../LandingPage_Header' 
import { useDispatch } from 'react-redux';
import { changeforbusiness, changeForDevPage, changeSuperchip } from '../../ReduxStateManagement/user';


const Super_chip = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(changeForDevPage(false));
        dispatch(changeforbusiness(false));
        dispatch(changeSuperchip(true));

    },[])
   return (
    <div className="min-h-screen flex flex-col">
      <LandingPage_Header />
      
      {/* Hero Video Section */}
      <div className="w-full">
      {/* Desktop layout - hidden on mobile */}
      <div className="hidden md:block relative w-full min-h-[100svh]">
        <div className="absolute inset-0">
          <iframe
            className="w-full h-full"
            src={super_chip_vid}
            title="SuperChip Technology"
            frameBorder="0"
            allow="autoplay; encrypted-media"
          />
        </div>
        
        {/* Desktop overlay */}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center max-w-4xl mx-auto px-4">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Experience the Future of AI
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200">
              Revolutionizing conversational AI with SuperChip technology
            </p>
          </div>
        </div>
      </div>

      {/* Mobile layout - shown only on mobile */}
      <div className="md:hidden w-full">
        {/* Video section */}
        <div className="w-full aspect-video">
          <iframe
            className="w-full h-full"
            src={super_chip_vid}
            title="SuperChip Technology"
            frameBorder="0"
            allow="autoplay; encrypted-media"
          />
        </div>
        
        {/* Text content section */}
        <div className="p-6 hidden bg-white">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Experience the Future of AI
          </h1>
          <p className="text-lg text-gray-600">
            Revolutionizing conversational AI with SuperChip technology
          </p>
        </div>
      </div>
    </div>

      {/* Main Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-xl hover:bg-gray-300/70 transition">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-[#6F036C] to-[#FF6F61E5] bg-clip-text text-transparent mb-4">
                Purpose-Built Excellence
              </h3>
              <p className="text-gray-900">
                Crafted by experts for unmatched interaction quality and reliability on the compact SuperChip platform.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-xl hover:bg-gray-300/70 transition">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-[#6F036C] to-[#FF6F61E5] bg-clip-text text-transparent mb-4">
                Lightning-Fast Performance
              </h3>
              <p className="text-gray-900">
                State-of-the-art integration ensures seamless communication for both personal and professional applications.
              </p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#6F036C] to-[#FF6F61E5] bg-clip-text text-transparent mb-6">
              Empowering the Future
            </h2>
            <p className="text-xl text-gray-900 max-w-2xl mx-auto">
              Superchat's cutting-edge AI capabilities deliver smooth and intuitive communication, perfectly optimized for the SuperChip ecosystem.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Super_chip;