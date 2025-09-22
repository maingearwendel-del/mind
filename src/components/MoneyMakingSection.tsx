import React, { useState, useEffect, useRef } from 'react';
import { Zap, ArrowRight } from 'lucide-react';
import GuaranteeModal from './GuaranteeModal';
import BookingNotificationSlider from './BookingNotificationSlider';
import BookingNotificationSliderOneLine from './BookingNotificationSliderOneLine';
 
interface MoneyMakingSectionProps {
  themeClasses: { 
    text: string;
    textSecondary: string;
  }; 
  scrollToSection: (sectionId: string) => void;
}
 
const MoneyMakingSection: React.FC<MoneyMakingSectionProps> = ({ themeClasses, scrollToSection }) => {
  const [hasJumped, setHasJumped] = useState(false);
  const [isGuaranteeModalOpen, setIsGuaranteeModalOpen] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasJumped) {
          setHasJumped(true);
          // Disconnect observer after first trigger
          observer.disconnect();
        }
      },
      { 
        threshold: 0.5,
        rootMargin: '50px 0px 0px 0px' // Trigger when 50px above the element
      }
    );

    if (buttonRef.current) {
      observer.observe(buttonRef.current);
    }

    return () => observer.disconnect();
  }, [hasJumped]);

  return ( 
    <section className="py-16 bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 relative overflow-hidden pb-[100px]">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-200 to-indigo-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-indigo-200 to-blue-200 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center">



  
       {/* Header with Image */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 mb-6">
            {/* Left side - Text */}
            <div className="order-1 lg:order-2 text-center lg:text-left  mt-[25px]">
            <span className="leading-tight sm:leading-[1.5] text-4xl sm:text-5xl lg:text-7xl xl:text-[60px] py-2 text-[#3d3d3d] font-black sm:font-bold">If your website <span className="block lg:hidden"></span>isn't making<br></br> you money... <span className="block lg:hidden"></span><span className="leading-[2] text-5xl sm:text-5xl lg:text-[90px] xl:text-[75px] py-2 text-transparent bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 bg-clip-text animate-pulse font-black ">it's broken </span> </span>
            </div>  
            
            {/* Right side - Image */} 
            <div className="order-2 lg:order-1">
             <img 
                  src="/dumpster-fire2.gif"
                  alt="Homer Simpson Dissapearing"
                  className="w-[220px] h-[220px] mx-auto rounded-[30px] lg:w[50px] -mt-12 lg:mt-0 scale-x-[-1]"
                /><span className="block lg:hidden"></span> 
            </div>
          </div> 
   

          
    <p className="text-4xl md:italic lg:items-center lg:justify-center lg:text-left text-[21px] lg:text-[25px] font-black mb-0 flex flex-col lg:flex-row items-center lg:items-start lg:space-x-3 drop-shadow-lg py-0 pb-6 mx-[-6] lg:mx-0 lg:mt-[40px] ">  ❌ You're paying for hosting <span className="block lg:hidden"></span>
  ❌ You're paying for design &nbsp;<span className="block lg:hidden"></span>
  ✅ You're not making money
</p> 

 <div class="hidden md:grid grid-cols-3 gap-4 lg:mt-5"> 
  <div class="p-4  rounded-lg text-right ">
        <p className="text-[22px] text-gray-700 mb-8 font-semibold  mt-2">
          Put out that Dumpster Fire <span className="inline-block text-gray-800 text-4xl sm:text-5xl lg:text-3xl xl:text-3xl animate-run-right-and-back">👉</span>
          </p> 
  </div>
  <div class="p-4 rounded-lg text-center  animate-gentle-wobble ">
  <div 
 ref={buttonRef}
    className={`lg:-mt-3 p-4 rounded-lg text-center animate-gentle-wobble ${hasJumped ? 'animate-bounce-up-down' : ''}`}
  >
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
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-bold px-6 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg   glow-border   "
          >
  
            <span className="hidden sm:block ">Build My Money-Making Website</span>
              <span className="block md:hidden">Build My Money Maker</span>
          </button>
  </div>

  </div>
   
  <div class="p-4 rounded-lg text-left">
    <div className="mt-2">      <button
                onClick={() => setIsGuaranteeModalOpen(true)}
                className={`${themeClasses.textSecondary} hover:${themeClasses.text.split(' ')[0]} font-semibold transition-colors flex items-center space-x-1 group`}
              >
              <span className="font-semibold text-[22px]"><span className="text-[26px]">💯</span> <span className="font-semibold">Satisfaction Gaurantee</span></span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button></div>  
  </div>
</div>
  
  <div className="hidden lg:block  ">  {/* Booking notification slider */}
  <BookingNotificationSlider /></div>

         <div className="md:hidden">
  <p className="text-lg text-gray-700 mb-8 font-semibold">
            Let's fix that today <span className="inline-block text-gray-800 text-4xl sm:text-5xl lg:text-3xl xl:text-3xl animate-bounce-up-down">👇</span>
          </p>
  <div></div>  

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
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-bold px-12 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-purple-500/25  animate-gentle-wobble"
          >
  
            <span className="hidden sm:block">Build My Money-Making Website</span>
              <span className="block md:hidden">Build My Money Maker</span>
          </button>

          {/* Booking notification slider */}
          <BookingNotificationSlider />

<div class="grid grid-cols-2 gap-0 mt-8">
  <div class="col-span-1">
   <button
  onClick={() => scrollToSection('portfolio')}
  className={`${themeClasses.textSecondary} hover:${themeClasses.text.split(' ')[0]} font-semibold transition-colors flex items-center space-x-1 group w-full justify-center pr-6`}
>
  <span>View Work</span>
  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform " />
</button> 

  </div>
  <div class="col-span-1 ">
    <button
                onClick={() => setIsGuaranteeModalOpen(true)}
                className={`${themeClasses.textSecondary} hover:${themeClasses.text.split(' ')[0]} font-semibold transition-colors flex items-center space-x-1 group`}
              >
                <span>Our 💯 Gaurantee</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
  </div>
</div>
</div>

        </div>
      </div>
      
      <GuaranteeModal 
        isOpen={isGuaranteeModalOpen}
        onClose={() => setIsGuaranteeModalOpen(false)}
      />
    </section>
  );
};

export default MoneyMakingSection;