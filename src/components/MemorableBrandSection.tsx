import React, { useState, useEffect, useRef } from 'react'; 
import { Zap, ArrowRight } from 'lucide-react';
import GuaranteeModal from './GuaranteeModal';

interface MemorableBrandSectionProps {
  themeClasses: {
    text: string;
    textSecondary: string;
  };
  scrollToSection: (sectionId: string) => void;
} 

const MemorableBrandSection: React.FC<MemorableBrandSectionProps> = ({ themeClasses, scrollToSection }) => {
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
    <section className="py-16 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-cyan-200 to-blue-200 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center"> 
          {/* Header with Image */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 mb-12">
            {/* Left side - Text */}
            <div className="order-1 lg:order-2 text-center lg:text-right">
              <h2 className="text-4xl sm:text-5xl lg:text-[49px] xl:text-[49px] font-black text-[#3d3d3d] leading-tight mb-0">
                If your brand isn't memorable...
              </h2><span className="block lg:hidden"><br></br></span>
                    <div className="hidden lg:block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent animate-pulse leading-none">
                You are invisible
              </div>
              <div className="lg:hidden text-6xl sm:text-6xl lg:text-7xl xl:text-8xl font-black bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent animate-pulse leading-none">
                You're invisible
              </div>
            </div>
            
            {/* Right side - Image */}
            <div className="order-2 lg:order-1">
              <img 
                src="/homer-meme-bush.gif"
                alt="Homer Meme Bush"
                className="w-[240px] h-[160px] lg:w-[220px] lg:h-[140px] mx-auto rounded-[30px] object-cover shadow-2xl scale-x-[-1]"
              />
            </div>
          </div>

              <p className="text-4xl md:italic lg:items-center lg:justify-center lg:text-left text-[21px] lg:text-[24px] font-black mb-0 flex flex-col lg:flex-row items-center lg:items-start lg:space-x-3 drop-shadow-lg py-0 pb-6 mx-[-6] lg:mx-0">  ❌ They won't remember you &nbsp;<span className="block lg:hidden"></span>
    &nbsp; ❌ They won't choose you  &nbsp; &nbsp;  <span className="block lg:hidden"></span>
 ✅ They'll pick your competitor
</p> 

           <div class="hidden md:grid grid-cols-3 gap-4 lg:mt-5">
  <div class="p-4  rounded-lg text-right ">
        <p className="text-[22px] text-gray-700 mb-8 font-semibold  mt-2">
         Start Standing out <span className="inline-block text-gray-800 text-4xl sm:text-5xl lg:text-3xl xl:text-3xl animate-run-right-and-back">👉</span>
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
            className="inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold px-20  py-4 px-2 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-blue-500/25 blue-glow-border   "
          >
   
            <span className="hidden sm:block">Build Me My Brand</span>
            <span className="block md:hidden">Build My Brand</span>
          </button> 
  </div>
  </div>
  <div class="p-4 rounded-lg text-left">
    <div className="mt-2">       <button
                onClick={() => setIsGuaranteeModalOpen(true)}
                className={`${themeClasses.textSecondary} hover:${themeClasses.text.split(' ')[0]} font-semibold transition-colors flex items-center space-x-1 group`}
              >
              <span className="font-semibold text-[22px]"><span className="text-[26px]">💯</span> <span className="font-semibold">Satisfaction Gaurantee</span></span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button></div>  
  </div></div> 
  <div className="lg:hidden flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mt-3  ">
          <p className="text-lg text-gray-700 mb-4 font-semibold">
            Start standing out    <span className="inline-block text-gray-800 text-4xl sm:text-5xl lg:text-3xl xl:text-3xl animate-bounce-up-down">👇</span>
          </p> 
  
    
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
            className="inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold px-20  py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-blue-500/25 animate-gentle-wobble"
          > 
            <span className="hidden sm:block">Build Me a Memorable Brand</span>
            <span className="block md:hidden">Build My Brand</span> 
          </button>
<div class="grid grid-cols-2 gap-0 mt-4">
  <div class="col-span-1">
   <button
  onClick={() => scrollToSection('portfolio')}
  className={`${themeClasses.textSecondary} hover:${themeClasses.text.split(' ')[0]} font-semibold transition-colors flex items-center space-x-1 group w-full justify-center pr-3 `}
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
</div></div> 
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

export default MemorableBrandSection;