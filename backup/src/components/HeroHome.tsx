import React from 'react';
import { ArrowRight, Play } from 'lucide-react'; // Ensure Play is imported if not already
import YouTubeLightbox from './YouTubeLightbox';


interface HeroHomeProps {
  themeClasses: {
    gradientFrom: string;
    gradientTo: string;
    cardBg: string;
    cardBorder: string;
    textTertiary: string;
    textSecondary: string;
  };
  scrollToSection: (sectionId: string) => void;
} 

const HeroHome: React.FC<HeroHomeProps> = ({ themeClasses, scrollToSection }) => {
  const [isYouTubeLightboxOpen, setIsYouTubeLightboxOpen] = React.useState(false);

  const openYouTubeLightbox = () => {
    setIsYouTubeLightboxOpen(true);
  };

  const closeYouTubeLightbox = () => {
    setIsYouTubeLightboxOpen(false);
  };

  return (
    <section id="home" className="pt-24 pb-4 lg:pt-32 lg:pb-32 relative overflow-hidden min-h-screen flex items-center">
       
      <div className={`absolute inset-0 bg-gradient-to-br ${themeClasses.gradientFrom} via-transparent ${themeClasses.gradientTo}`}></div>
       
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-7 text-center lg:text-left w-full">
<div className={`hidden lg:inline-flex items-center space-x-2 ${themeClasses.cardBg} border ${themeClasses.cardBorder} rounded-full px-4 py-2 mb-6 backdrop-blur-sm`}>
  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
  <span className={`text-sm font-medium ${themeClasses.textTertiary}`}>Payment Plans Available</span>
</div>

            
            <h1 className={`text-3xl sm:text-3xl lg:text-5xl xl:text-5xl font-bold text-[#3d3d3d] leading-tight mb-6 tracking-tight px-2 sm:px-0`}>
              We Create Beautiful Websites That Make You <span className="text-[4.7rem] sm:text-6xl lg:text-7xl xl:text-7xl  bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">Money </span> <span className="text-6xl sm:text-5xl lg:text-6xl xl:text-6xl inline-block animate-wobble">    <img src="/money.webp" alt="Cash Emojii" className="h-12 w-auto" /></span>
              </h1>
            
            <p className={`text-lg sm:text-xl lg:text-xl ${themeClasses.textSecondary} leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0 px-2 sm:px-0`}>
              I help businesses create stunning websites that convert visitors into customers. Specializing in Shopify and WordPress development with a focus on performance and user experience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-0 lg:mb-0 px-2 sm:px-0">

              <div className={`inline-flex items-center space-x-2 lg:hidden ${themeClasses.cardBg} border ${themeClasses.cardBorder} rounded-full px-4 py-2 mb-4 backdrop-blur-sm`}>
  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
  <span className={`text-sm font-medium ${themeClasses.textTertiary}`}>Payment Plans Available</span>
</div>



             <div className="flex items-center space-x-4 sm:hidden"> {/* Container for both buttons, visible only on mobile */}
  <button
    onClick={(e) => {
      e.stopPropagation();
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        if (window.innerWidth < 768) {
          const rect = contactSection.getBoundingClientRect();
          const offsetTop = window.pageYOffset + rect.top + 1830; // Add 1830px offset for mobile
          window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        } else {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }}
    className="animated-gradient-btn text-white font-semibold px-16 py-5 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center space-x-2 group"
  >
    Book Now

  </button>
 
  {/* New circular play button */}
  <button
    onClick={openYouTubeLightbox}
    className="w-[60px] h-[60px] rounded-full flex items-center justify-center shadow-lg gradient-glow-btn"
  >   
      <Play className="w-5 h-5 text-[#fcfcfc]" fill="currentColor" />
  </button>
</div>
 
                        <button
                  onClick={(e) => {
                    e.stopPropagation();
                   const contactSection = document.getElementById('contact');
                   if (contactSection) {
                     // Check if mobile (screen width < 768px)
                     if (window.innerWidth < 768) {
                       // Scroll to contact section with additional offset for mobile
                       const rect = contactSection.getBoundingClientRect();
                       const offsetTop = window.pageYOffset + rect.top + 1830; // Add 1830px offset for mobile
                       window.scrollTo({ top: offsetTop, behavior: 'smooth' });
                     } else {
                       contactSection.scrollIntoView({ behavior: 'smooth' });
                     }
                   }
                  }}
                className="hidden text-gray-600 hover:text-white font-medium transition-colors items-center space-x-2 group sm:flex sm:bg-gradient-to-r sm:from-green-500 sm:to-emerald-500 sm:hover:from-green-600 sm:hover:to-emerald-600 sm:text-white sm:font-semibold sm:px-8 sm:py-3 sm:rounded-full sm:transition-all sm:duration-300 sm:hover:scale-105 sm:hover:shadow-lg sm:hover:shadow-indigo-500/2"
              >
                <span className="whitespace-nowrap">Get in touch</span>

  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform hidden sm:flex" />
                
                <svg className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform sm:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </button>

               
              {/* Desktop-only about me button */}
              <button
                onClick={() => scrollToSection('about')}
                className="hidden sm:flex text-gray-600 hover:text-gray-900 font-medium transition-colors items-center space-x-2 group"
              >
                <span>About me</span>
                <svg className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </button>
              {/* Google and Trustpilot Reviews - Side by side on mobile */}
              <div className="flex items-center space-x-4 sm:space-x-2 sm:ml-8 mt-4 sm:mt-0">
                <img src="/google-5.png" alt="Google" className="h-12 w-auto" />
                <img src="/trustpilot-5.png" alt="Trustpilot" className="h-12 w-auto pl-8 sm:pl-8" />
              </div>
              
            </div>
          
            
            <div className="flex items-center justify-end mt-6">
            </div>
          </div>

          {/* Right Column - Image Placeholder */}
          <div className="lg:col-span-5 relative group w-full max-w-sm mx-auto lg:max-w-none">
            <div className="w-full max-w-full rounded-2xl overflow-hidden">
              <img
                src="/hero_cards.png"
                alt="Hero Cards"
                className="w-full h-auto object-cover max-w-full"
              />
            </div>
            

          </div>
        </div>

{/* Trusted by 100+ brands scrolling section */}
        <div className=" mt-8 lg:mt-16 mb-8">
          <p className="text-center text-gray-400 text-sm mb-8 tracking-wider uppercase">
            Trusted by 100+ brands
          </p>
          <div className="relative overflow-hidden">
            <div className="flex w-max animate-seamless-scroll">
            
              {/* First set of logos */}
              <div className="flex items-center space-x-0">
                <img
                  src="/company-logos/amd-logo.webp"
                  alt="AMD"
                  className="h-32 lg:h-24 opacity-100 lg:opacity-60 hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
                />
                             <img
                  src="/company-logos/barber-craft-sd-logo.webp"
                  alt="Barber Craft San Diego"
                  className="h-32 lg:h-24 opacity-100 lg:opacity-60 hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
                />
                                 <img
                  src="/company-logos/intel-logo.webp"
                  alt="Intel"
                  className="hh-32 lg:h-24 opacity-100 lg:opacity-60 hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
                />
                             <img
                  src="/company-logos/maingear-logo.webp"
                  alt="MAINGEAR PC"
                  className="h-32 lg:h-24 opacity-100 lg:opacity-60 hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
                />
                 <img
                  src="/company-logos/microcenter-logo.webp"
                  alt="Microcenter"
                  className="h-32 lg:h-24 opacity-100 lg:opacity-60 hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
                />
                                               <img
                  src="/company-logos/microsoft-logo.webp"
                  alt="Microsoft"
                  className="h-32 lg:h-24 opacity-100 lg:opacity-60 hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
                />
                                 <img
                  src="/company-logos/nvidia-logo.webp"
                  alt="Nvidia"
                  className="h-32 lg:h-24 opacity-100 lg:opacity-60 hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
                />
                             <img
                  src="/company-logos/stache-barbers-nj-logo.webp"
                  alt="Stache Barbers"
                  className="h-32 lg:h-24 lg:h-24 opacity-100 lg:opacity-60 hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
                />

              </div>

              {/* Second set of logos (duplicate for seamless loop) */}
              <div className="flex items-center space-x-0 ml-0">
                <img
                  src="/company-logos/amd-logo.webp"
                  alt="AMD"
                  className="h-32 lg:h-24 opacity-100 lg:opacity-60 hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
                />
                             <img
                  src="/company-logos/barber-craft-sd-logo.webp"
                  alt="Barber Craft San Diego"
                  className="h-32 lg:h-24 opacity-100 lg:opacity-60 hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
                />
                                 <img
                  src="/company-logos/intel-logo.webp"
                  alt="Intel"
                  className="h-32 lg:h-24 opacity-100 lg:opacity-60 hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
                />
                             <img
                  src="/company-logos/maingear-logo.webp"
                  alt="MAINGEAR PC"
                  className="h-32 lg:h-24 opacity-100 lg:opacity-60 hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
                />
                 <img
                  src="/company-logos/microcenter-logo.webp"
                  alt="Microcenter"
                  className="h-32 lg:h-24 opacity-100 lg:opacity-60 hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
                />
                                               <img
                  src="/company-logos/microsoft-logo.webp"
                  alt="Microsoft"
                  className="h-32 lg:h-24 opacity-100 lg:opacity-60 hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
                />
                                 <img
                  src="/company-logos/nvidia-logo.webp"
                  alt="Nvidia"
                  className="h-32 lg:h-24 opacity-100 lg:opacity-60 hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
                />
                             <img
                  src="/company-logos/stache-barbers-nj-logo.webp"
                  alt="Stache Barbers"
                  className="h-32 lg:h-24 opacity-100 lg:opacity-60 hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
                />

              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* YouTube Lightbox */}
      <YouTubeLightbox
        isOpen={isYouTubeLightboxOpen}
        onClose={closeYouTubeLightbox}
        videoId="csp_WG8jJR0"
      />
    </section>
  );
};

export default HeroHome;