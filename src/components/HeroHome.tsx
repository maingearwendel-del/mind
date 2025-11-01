import React from 'react';
import { ArrowRight, Play } from 'lucide-react'; // Ensure Play is imported if not already
import YouTubeLightbox from './YouTubeLightbox';
import HeroImageSlider from './HeroImageSlider';
import BookingNotificationSliderOneLine from './BookingNotificationSliderOneLine'; 


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
  isTopBarVisible: boolean;
}

const HeroHome: React.FC<HeroHomeProps> = ({ themeClasses, scrollToSection, isTopBarVisible }) => {
  const [isYouTubeLightboxOpen, setIsYouTubeLightboxOpen] = React.useState(false);

  const openYouTubeLightbox = () => {
    setIsYouTubeLightboxOpen(true);
  };

  const closeYouTubeLightbox = () => {
    setIsYouTubeLightboxOpen(false);
  };
 
  return (
    <section id="home" className={`${isTopBarVisible ? 'pt-32' : 'pt-20'} pb-4 lg:pb-32 relative overflow-hidden min-h-screen flex items-center transition-all duration-300`}>
 



      
      <div className={`absolute inset-0 bg-gradient-to-br ${themeClasses.gradientFrom} via-transparent ${themeClasses.gradientTo}`}></div>
       
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center lg:mt-[25px] ">
 

 
          
          {/* Left Column - Main Content */}
          <div className="lg:col-span-7 text-center lg:text-left w-full  "> 
 
 
 <h1 className={` mt-[25px]  lg:mt-[0px] text-4xl sm:text-5xl lg:text-6xl xl:text-[70px] font-bold text-[#3d3d3d] leading-tight mb-6 tracking-tight px-2 sm:px-0`}>
              Building brands that<br></br> <span className="lg:text-[69px]">Resonate & Websites</span><span className="hidden sm:block text-[6rem] xl:text-[5.75rem]"> That <span className="text-[4.3rem] sm:text-8xl lg:text-7xl xl:text-[5.75rem]  bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent"> Convert </span> <span className="text-6xl sm:text-5xl lg:text-6xl xl:text-6xl inline-block animate-wobble">    <img src="/money.webp" alt="Cash Emojii" className="h-16 w-auto" /></span></span>
              <span className="md:hidden"><span className="text-[4.3rem] sm:text-8xl lg:text-7xl xl:text-8xl  bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent"> Convert </span> <span className="text-6xl sm:text-5xl lg:text-6xl xl:text-6xl inline-block animate-wobble">    <img src="/money.webp" alt="Cash Emojii" className="h-16 w-auto" /></span></span>
              </h1>
            
             
            <p className={`text-lg sm:text-xl lg:text-xl ${themeClasses.textSecondary} leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0 px-2 sm:px-0 lg:mt-[50px] mt-0 mb-0 lg:mb-10`}>
              We help businesses create websites that convert visitors into customers. <b>Specializing in</b> <img src="/Shopify_logo.svg" alt="Shopify Logo" description="Start Selling With Shopify" className="h-6 lg:h-7 inline-block align-middle ml-1 -translate-y-0.5" />, <img src="/WooCommerce_logo.svg" alt="Woocommerce Logo" description="Start Selling With Woocommerce" className="h-6 lg:h-7 inline-block align-middle ml-1 translate-y-0.95" />&nbsp;  &    <img src="/WordPress_logo.svg" alt="Wordpress Logo" description="Get Your Wordpress Website" className="h-6 lg:h-7 inline-block align-middle ml-1 -translate-y-0.5" /> <b>Sites</b>.
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
                <span className="whitespace-nowrap">Build My Money-Making Website</span>

                
                <svg className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform sm:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </button>

               
            
              {/* Google and Trustpilot Reviews - Side by side on mobile */}
              <div className="flex items-center space-x-4 sm:space-x-2 sm:ml-8 mt-4 sm:mt-0">
                <img src="/google-5.png" alt="Google" className="h-12 w-auto" />
                <img src="/trustpilot-5.png" alt="Trustpilot" className="h-12 w-auto pl-8 sm:pl-8" />
              </div>
              
            </div> 
     

            {/* Desktop layout: Payment Plans and Booking Notification side by side */}
            <div className="hidden lg:flex items-center justify-start mt-5 mb-6 max-w-2xl space-x-8 ">
              <div className={`h-1 inline-flex items-center space-x-2 ${themeClasses.cardBg}  px-4 py-2 backdrop-blur-sm border-r border-gray-300`}>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className={`text-nowrap text-sm font-medium ${themeClasses.textTertiary}`}>Payment Plans Available</span>
              </div>
              
              <div className="flex items-center h-full">
                <BookingNotificationSliderOneLine />
              </div>
            </div> 
 

            
            <div className="flex items-center justify-end mt-6">

         
            </div>


            
          </div>


    
              {/* 3-Step Process - Mobile Only */}
              <div className="lg:hidden mb-8 px-4">
                <div className="flex items-center justify-between max-w-sm mx-auto gap-2 ">
                  {/* Step 1 */}
                  <div className="flex flex-col items-center group">
                    <div className="w-20 h-12 bg-black rounded-[10px] flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-sm">Websites</span>
                    </div>
          
                  </div>
                  

                  
                  {/* Step 2 */}
                  <div className="flex flex-col items-center group">
                    <div className="w-20 h-12 bg-black rounded-[10px] flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white font-bold text-sm">Branding</span>
                    </div>
                
                  </div>
                  

                  
                  {/* Step 3 */}
                  <div className="flex flex-col items-center group">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-[10px] flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                       <span className="text-white font-bold text-sm">Ads</span>
                    </div>
                 
                  </div>

 
                  
                  {/* Step 3 */}
                  <div className="flex flex-col items-center group">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-[10px] flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300 shadow-lg">
   <span className="text-white font-bold text-sm">SEO</span>
                    </div>
                 
                  </div>

                  
                  {/* Step 3 */}
                  <div className="flex flex-col items-center group">
                    <div className="w-10 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-[10px] flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300 shadow-lg">
   <span className="text-white font-bold text-sm">AI</span>
                    </div>
                 
                  </div>
                  
                </div>
              </div>          

  
 
          
          {/* Right Column - Image Placeholder */}
          <div className="lg:col-span-5 relative group w-full max-w-sm mx-auto lg:max-w-none">


            
            {/* New Auto-scrolling Image Blocks */}
            <HeroImageSlider />
            </div>
        </div>

 

  {/* 3-Step Process - Desktop Only */}
            <div className="hidden lg:block mb-8 w-full max-w-3xl mt-8">
              <div className="flex gap-4">
                {/* Step 1 */}
                <div className="p-2 flex items-center group hover:bg-gray-50 rounded-xl py-3 transition-all duration-300 flex-1">
                  <div className="w-12 h-12 bg-black rounded-[10px] flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg flex-shrink-0">
                    <span className="text-white font-bold text-lg">1</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base font-bold text-gray-900 text-nowrap">Book Your Free Call</h4>
                    <p className="text-xs text-gray-600">Quick 15-min consultation</p>
                  </div>
                </div>
                
                {/* Step 2 */}
                <div className="p-2 flex items-center group hover:bg-gray-50 rounded-xl py-3 transition-all duration-300 flex-1">
                  <div className="w-12 h-12 bg-black rounded-[10px] flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg flex-shrink-0">
                    <span className="text-white font-bold text-lg">2</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base font-bold text-gray-900 text-nowrap">Get Your Custom Quote</h4>
                    <p className="text-xs text-gray-600">Receive a detailed proposal</p>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="p-2 flex items-center group hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 rounded-xl py-3 transition-all duration-300 flex-1">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-[10px] flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg flex-shrink-0">
                    <span className="text-white font-bold text-lg">3</span>
                  </div>
                  <div className="flex-1"> 
                    <h4 className="text-base font-bold text-gray-900 text-nowrap">We Handle The Rest</h4>
                    <p className="text-xs text-gray-600">EzPz Lemon Squeezy 🍋</p>
                  </div>
                </div>
              </div>
            </div>



        
{/* Trusted by 100+ brands and artists scrolling section */}
        <div className="mt-8 lg:mt-10 mb-0 ">
                    <p className="text-center text-gray-400 text-sm mb-8 tracking-wider uppercase">
         Trusted by 100+ brands and artists 
          </p>
          <div className="relative overflow-hidden">
            <div className="flex w-max animate-seamless-scroll">
            
              {/* First set of logos */}
              <div className="flex items-center space-x-0">
                    <img
                  src="/company-logos/emotive-logo.webp"
                  alt="Emotive Logistice"
                  className="h-32 lg:h-24 opacity-100 lg:opacity-60 hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
                />
                                                 <img
                  src="/company-logos/hp-logo.webp"
                  alt="HP"
                  className="h-32 lg:h-24 opacity-100 lg:opacity-60 hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
                />
                                 <img
                  src="/company-logos/razer-logo.webp"
                  alt="Razer"
                  className="h-32 lg:h-24 opacity-100 lg:opacity-60 hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
                />
                 <img
                  src="/company-logos/coke-logo.webp"
                  alt="Coca Cola Coke"
                  className="h-32 lg:h-24 opacity-100 lg:opacity-60 hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
                />
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
                  src="/company-logos/emotive-logo.webp"
                  alt="Emotive Logistice"
                  className="h-32 lg:h-24 opacity-100 lg:opacity-60 hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
                />
                                                 <img
                  src="/company-logos/hp-logo.webp"
                  alt="HP"
                  className="h-32 lg:h-24 opacity-100 lg:opacity-60 hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
                />
                   <img
                  src="/company-logos/razer-logo.webp"
                  alt="Razer"
                  className="h-32 lg:h-24 opacity-100 lg:opacity-60 hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
                />
                                 <img
                  src="/company-logos/coke-logo.webp"
                  alt="Coca Cola Coke"
                  className="h-32 lg:h-24 opacity-100 lg:opacity-60 hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
                />              
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

        {/* Trusted by 100+ brands scrolling section */}
        <div className="lg:mt-5 ">
          <div className="relative overflow-hidden  ">
            <div className="flex w-max animate-seamless-scroll-reverse">
              {/* First set of logos */}
              <div className="flex items-center space-x-0">
                <img
                  src="/company-logos/deadmau5-2-logo.webp"
                  alt="deadmau5 logo"
                  className="h-32 lg:h-24 opacity-100 lg:opacity-60 hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
                />
                <img
                  src="/company-logos/steve-aoki-2-logo.webp"
                  alt="steve aoki logo"
                  className="h-32 lg:h-24 opacity-100 lg:opacity-60 hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
                />
                <img
                  src="/company-logos/zedd-2-logo.webp"
                  alt="zedd-logo"
                  className="h-32 lg:h-24 opacity-100 lg:opacity-60 hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
                />
                <img
                  src="/company-logos/casey-logo.webp"
                  alt="Casey Neistat"
                  className="h-32 lg:h-24 opacity-100 lg:opacity-60 hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
                />
                <img
                  src="/company-logos/dillon-francis-logo.webp"
                  alt="Dillon Francis"
                  className="h-32 lg:h-24 opacity-100 lg:opacity-60 hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
                />
                <img
                  src="/company-logos/mkbhd-logo.webp"
                  alt="Mkbhd"
                  className="h-32 lg:h-24 opacity-100 lg:opacity-60 hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
                />
                <img
                  src="/company-logos/shroud-logo.webp"
                  alt="shroud"
                  className="h-32 lg:h-24 opacity-100 lg:opacity-60 hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
                />
                <img
                  src="/company-logos/pewdiepie-logo.webp"
                  alt="pewdiepie"
                  className="h-32 lg:h-24 opacity-100 lg:opacity-60 hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
                />
              </div>

              {/* Second set of logos (duplicate for seamless loop) */}
              <div className="flex items-center space-x-0 ml-0">
                <img
                  src="/company-logos/deadmau5-2-logo.webp"
                  alt="deadmau5 logo"
                  className="h-32 lg:h-24 opacity-100 lg:opacity-60 hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
                />
                <img
                  src="/company-logos/steve-aoki-2-logo.webp"
                  alt="steve aoki logo"
                  className="h-32 lg:h-24 opacity-100 lg:opacity-60 hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
                />
                <img
                  src="/company-logos/zedd-2-logo.webp"
                  alt="zedd-logo"
                  className="h-32 lg:h-24 opacity-100 lg:opacity-60 hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
                />
                <img
                  src="/company-logos/casey-logo.webp"
                  alt="Casey Neistat"
                  className="h-32 lg:h-24 opacity-100 lg:opacity-60 hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
                />
                <img
                  src="/company-logos/dillon-francis-logo.webp"
                  alt="Dillon Francis"
                  className="h-32 lg:h-24 opacity-100 lg:opacity-60 hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
                />
                <img
                  src="/company-logos/mkbhd-logo.webp"
                  alt="Mkbhd"
                  className="h-32 lg:h-24 opacity-100 lg:opacity-60 hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
                />
                <img
                  src="/company-logos/shroud-logo.webp"
                  alt="shroud"
                  className="h-32 lg:h-24 opacity-100 lg:opacity-60 hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
                />
                <img
                  src="/company-logos/pewdiepie-logo.webp"
                  alt="pewdiepie"
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

