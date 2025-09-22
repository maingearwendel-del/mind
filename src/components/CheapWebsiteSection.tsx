import React, { useState, useEffect, useRef } from 'react';
import { Zap, ArrowRight } from 'lucide-react';
import GuaranteeModal from './GuaranteeModal';
 
interface CheapWebsiteSectionProps {
  themeClasses: {
    text: string;
    textSecondary: string;
  };
  scrollToSection: (sectionId: string) => void;
}

const CheapWebsiteSection: React.FC<CheapWebsiteSectionProps> = ({ themeClasses, scrollToSection }) => {
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
    <section className="py-16 bg-gradient-to-br from-orange-50 via-red-50 to-orange-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-orange-200 to-red-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-red-200 to-orange-200 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center">
  
       {/* Header with Image */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 mb-12">
            {/* Left side - Text */}
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <span><span className="leading-relaxed sm:leading-[1.5] text-4xl sm:text-5xl lg:text-6xl xl:text-6xl py-0 text-[#3d3d3d] font-black sm:font-bold">If your website looks cheap...<br></br></span></span><span className="block lg:hidden"><br></br></span>
              <div className="lg:mb-2"></div>
  <span><span className="leading-none text-[40px] sm:text-7xl lg:text-[5.2rem] xl:text-[3.5rem] py-0 text-transparent font-black text-transparent bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 bg-clip-text animate-pulse ">Your customers will run away </span> <span className="animate-pulse text-[40px] sm:text-7xl lg:text-[5.2rem] xl:text-[3.75rem] "></span></span>
            </div>
            
            {/* Right side - Image */} 
            <div className="order-2 lg:order-1">
              <img 
                  src="/run-forrest-gump.gif"
                  alt="Run Forest Run"
                  className="w-[250px] h-[150px] mx-auto rounded-[30px] lg:ml-6 lg:h-[130px] lg:w-[200px]"
                />
            </div>
          </div>


          
           <p className="text-4xl md:italic lg:items-center lg:justify-center lg:text-left text-[21px] lg:text-[25px] font-black mb-0 flex flex-col lg:flex-row items-center lg:items-start lg:space-x-3 drop-shadow-lg py-0 pb-6 mx-[-6] lg:mx-0">
  ❌ They won't trust you  &nbsp; &nbsp; &nbsp; &nbsp;<span className="block lg:hidden"></span>
  ❌ They won't call you &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span className="block lg:hidden"></span>
  ✅ They'll pick a competitor
</p>


 <div class="hidden md:grid grid-cols-3 gap-4 lg:mt-5">
  <div class="p-4  rounded-lg text-right ">
        <p className="text-[22px] text-gray-700 mb-8 font-semibold  mt-2">
          Don't Be An Amateur <span className="inline-block text-gray-800 text-4xl sm:text-5xl lg:text-3xl xl:text-3xl animate-run-right-and-back">👉</span>
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
            className="inline-flex items-center justify-center bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-7 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-orange-500/25   orange-glow-border   "
          >
  
            <span className="hidden sm:block ">Build Me A World-Class Website</span>
              <span className="block md:hidden">Build My Pro Website</span>
          </button> 
  </div>
  </div>
  <div class="p-4 rounded-lg text-left">
    <div className="mt-2">   <button
                onClick={() => setIsGuaranteeModalOpen(true)}
                className={`${themeClasses.textSecondary} hover:${themeClasses.text.split(' ')[0]} font-semibold transition-colors flex items-center space-x-1 group`}
              >
              <span className="font-semibold text-[22px]"><span className="text-[26px]">💯</span> <span className="font-semibold">Satisfaction Gaurantee</span></span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button></div>  
  </div>
</div>
 
 
          
          <div class="hidden md:grid grid-cols-3 gap-4">


 
</div>


          
 <div className="md:hidden mt-2">
          <p className="text-lg text-gray-700 mb-8 font-semibold">
            Dont look like an amateur   <span className="inline-block text-gray-800 text-4xl sm:text-5xl lg:text-3xl xl:text-3xl animate-bounce-up-down">👇</span>
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
            className="inline-flex items-center justify-center bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-16 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-orange-500/25  animate-gentle-wobble"
          >
  
            <span className="hidden sm:block">Build Me a World-Class Site</span>
              <span className="block md:hidden">Build My Pro Website</span>
          </button>
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
        scrollToSection={scrollToSection}
      />
    </section>
  );
};

export default CheapWebsiteSection; 