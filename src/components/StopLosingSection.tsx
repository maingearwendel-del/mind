import React from 'react';
import { X, CheckCircle, Zap, Eye, Play, ArrowRight } from 'lucide-react';
import GuaranteeModal from './GuaranteeModal';

interface StopLosingSectionProps {
  themeClasses: { 
    text: string;
    textSecondary: string;
  };
  scrollToSection: (sectionId: string) => void;
}  

const StopLosingSection: React.FC<StopLosingSectionProps> = ({ themeClasses, scrollToSection }) => {
  const [isGuaranteeModalOpen, setIsGuaranteeModalOpen] = React.useState(false);

  return (
    <>
      <section id="stoplosing" className="py-0 pt-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full blur-3xl"></div>
      </div>
           <p className="text-2xl lg:text-4xl font-black mb-2 flex items-center justify-center space-x-3 drop-shadow-lg py-4">   
<h2 className="text-4xl lg:text-5xl font-bold mb-10 leading-tight text-center">
  <span className="text-[#3d3d3d] font-black text-5xl sm:text-3xl md:text-4xl lg:text-[3.1rem]">Stop Losing Customers </span>
  <br className="block sm:hidden" />
  <span className="text-purple-600 font-black text-[3rem] sm:text-3xl md:text-4xl lg:text-[3.1rem]">To Slow, Ugly Websites <span className="inline-block animate-wobble">🤮 </span></span>
</h2> 

          </p>  
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-16">
          
          {/* Right Column - Text Content */}
          <div className="text-center lg:text-left">


            {/* Problem Statement */}
            <div className="mb-8">
              
              {/* Mobile-only Video Thumbnail - Above the paragraph */}
              <div className="lg:hidden mb-8 flex justify-center">
                <div className="w-72 h-44 rounded-3xl overflow-hidden shadow-lg relative bg-gradient-to-br from-gray-900 to-gray-800 hover:scale-105 transition-transform duration-300">
                  <button
                    className="relative w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center cursor-pointer hover:bg-gradient-to-br hover:from-gray-600 hover:to-gray-700 transition-all duration-300 group"
                  >
                    <div className="relative w-full h-full">
                      <img 
                        src="/stop_losing_thumbnail_mobilex.webp"
                        alt="Stop Losing Customers"
                        className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                      />
                      <img 
                        src="/stop_losing_thumbnail_hover_mobilex.webp"
                        alt="Stop Losing Customers - Hover"
                        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                      />
                    </div>
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0  flex items-center justify-center">
                      <div className="w-14 h-14 bg-gradient-to-r from-purple-500/70 to-pink-500/70 hover:from-purple-600/80 hover:to-pink-600/80 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300">
                        <Play className="w-6 h-6 text-white ml-0.5 transition-colors" fill="currentColor" />
                      </div>
                    </div>
                    
                    {/* Video Duration */}
                    <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                     0:30ss
                    </div>
                  </button>
                </div> 
              </div>

               <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-2">
                Every second your site takes to load… <span className="block lg:hidden"></span><i className="font-bold text-2xl lg:text-gray-700 lg:text-2xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Your bleeding money</i>
              </p> 
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-4">
                        Every bad design choice… <span className="block lg:hidden"></span> <i className="font-bold text-2xl lg:text-gray-700 lg:text-xl bg-gradient-to-r from-fuchsia-600 to-rose-600 bg-clip-text text-transparent">Customers click away</i>  <span className="block lg:hidden"></span><span className="hidden lg:inline-block text-gray-700 text-[19px] font-bold ">... You need 👇</span>
              </p>   
              <span className="block text-gray-700 lg:hidden text-[19px] font-bold block lg:hidden mb-10">Let's fix it with 👇</span>
              <ul className=" lg:grid grid-cols-3 gap-4 text-lg lg:text-[18px] text-gray-600 mb-6 list-none">
                <li> 
                  <div className="bg-gradient-to-br from-pink-50/80 via-purple-50/70 to-white/60 p-4 rounded-[30px] shadow-lg h-full min-h-[140px] flex flex-col items-center justify-center text-center mb-6 sm:mb-0 w-72 lg:w-44 mx-auto"> 
                    <span className="text-[40px] -mt-3 mb-4">⚡</span> 
                    <span className="font-bold text-lg mb-1 hidden lg:block">Blazing<br></br>Speed</span>
                   <span className="font-bold text-lg mb-1 lg:hidden">Blazing Speed</span>
                    <span className="text-xs text-gray-600">(speed = more sales)</span>
                  </div> 
                </li> 

                <li>
                  <div className="bg-gradient-to-br from-pink-50/80 via-purple-50/70 to-white/60 p-4 rounded-[30px] shadow-lg h-full min-h-[140px]  flex flex-col items-center justify-center text-center  mb-6 sm:mb-0 w-72 lg:w-44 mx-auto">
                    <span className="text-[40px] -mt-1 mb-4">😎</span> 
                    <span className="font-bold text-lg mb-1">Smooth Experience</span>
                    <span className="text-xs text-gray-600">(easy = happy customers)</span>
                  </div>
                </li>

                <li>
                  <div className="bg-gradient-to-br from-pink-50/80 via-purple-50/70 to-white/60 p-4 rounded-[30px] shadow-lg h-full min-h-[140px] flex flex-col items-center justify-center text-center mb-6 sm:mb-0 w-72 lg:w-44 mx-auto ">
                    <span className="text-[40px] mb-4">✨ </span>
                    <span className="font-bold text-lg mb-1">Memorable Design</span>
                    <span className="text-xs text-gray-600">(your brand sticks in their head)</span>
                  </div>
                </li>
              </ul>

              <div className="hidden md:block">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      if (window.innerWidth < 768) {
                        const rect = contactSection.getBoundingClientRect();
                        const offsetTop = window.pageYOffset + rect.top + 1830;
                        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
                      } else {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }
                  }} 
                  className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold px-8 py-3 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-purple-500/25"
                >

                  <span>Start Winning Customers Back</span>
                </button>
              </div>

              <div className="lg:hidden md:block">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      if (window.innerWidth < 768) {
                        const rect = contactSection.getBoundingClientRect();
                        const offsetTop = window.pageYOffset + rect.top + 1830;
                        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
                      } else {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }
                  }}
                  className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-purple-500/25 mt-4"
                >
                  <span>Start Winning Customers Back</span>
                </button>
                 <div className="mt-6"> 
                   
                 <button
                onClick={() => setIsGuaranteeModalOpen(true)}
                className={`${themeClasses.textSecondary} hover:${themeClasses.text.split(' ')[0]} font-semibold transition-colors flex items-center justify-center space-x-1 group w-full`}
              >
                <span>Our 💯 Gaurantee</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button></div>  
              </div>
            </div> 
          </div>

          {/* Left Column - Video Placeholder */}
          <div className="relative hidden lg:block">
             
                {/* Video Thumbnail - Above the list */}
      <div className="mb-8 flex justify-center">
        <div className="w-auto h-auto lg:w-auto lg:h-auto rounded-[60px] overflow-hidden shadow-lg relative bg-gradient-to-br from-gray-900 to-gray-800 hover:scale-105 transition-transform duration-300">
          <button
            className="relative w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center cursor-pointer hover:bg-gradient-to-br hover:from-gray-600 hover:to-gray-700 transition-all duration-300 group"
          >
            <div className="relative w-full h-full">
              <img 
                        src="/stop_losing_thumbnail_mobilex.webp"
                        alt="Stop Losing Customers"
                        className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                      />
                      <img 
                        src="/stop_losing_thumbnail_hover_mobilex.webp"
                        alt="Stop Losing Customers - Hover"
                        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                      />
            </div>
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0  flex items-center justify-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500/70 to-pink-500/70 hover:from-purple-600/80 hover:to-pink-600/80 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300">
                <Play className="w-8 h-8 text-white ml-0.5 transition-colors" fill="currentColor" />
              </div>
            </div>
            
            {/* Video Duration */}
            <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
              2:45
            </div>
          </button>
        </div>
      </div>
          </div>
          </div>

        </div>
      </section>
      
      {/* Guarantee Modal */}
      <GuaranteeModal
        isOpen={isGuaranteeModalOpen}
        onClose={() => setIsGuaranteeModalOpen(false)}
        scrollToSection={scrollToSection}
      />
    </>
  );
};

export default StopLosingSection;