import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import GuaranteeModal from './GuaranteeModal';
 
interface AboutSectionProps {
  themeClasses: {
    cardBg: string;
    cardBorder: string;
    textTertiary: string;
    textSecondary: string;
    text: string;
  };
  isDarkMode: boolean;
  scrollToSection: (sectionId: string) => void;
}

const AboutSection: React.FC<AboutSectionProps> = ({ themeClasses, isDarkMode, scrollToSection }) => {
  const [isGuaranteeModalOpen, setIsGuaranteeModalOpen] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const designerTitles = [
    "Your Web Designer",
    "Your Brand Designer", 
    "Your UI/UX Designer",
    "Your Creative Partner",
    "Your Design Expert"
  ];
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const titleInterval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % designerTitles.length);
    }, 2000);

    return () => clearInterval(titleInterval);
  }, [designerTitles.length]);

  return (
    <section ref={sectionRef} id="about" className="pt-16 pb-0 sm:pb-8 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left Column - Image Slider */}
          <div className="lg:col-span-5 relative group">

            {/* Circular Profile Image */}
            <div className="aspect-square lg:w-[325px] w-[260px] mx-auto rounded-full overflow-hidden relative shadow-2xl border-4 border-white/20 glow-border">
              <div className="relative w-full h-full">
                <img
                  src="/wendel_santos_v4.webp"
                  alt="Wendel  - Web Designer"
                  className="w-full h-full object-cover transform transition-opacity duration-300 hover:opacity-0"
                /> 
                <img
                  src="/wendel_hover_icon_slime.webp"
                  alt="Wendel - Web Designer Hover"
                  className="absolute inset-0 w-full h-full object-cover transform transition-opacity duration-300 opacity-0 hover:opacity-100"
                />
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-full blur-xl"></div>
            <div className="absolute bottom-8 left-8 w-24 h-24 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-2xl"></div>
            
            {/* Status Badge */}
            <div className={`absolute -bottom-4 left-1/2 -translate-x-1/2 ${themeClasses.cardBg} border ${themeClasses.cardBorder} rounded-full px-6 py-2 backdrop-blur-sm`}>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className={`whitespace-nowrap text-sm font-medium ${themeClasses.textTertiary}`}>Available for projects</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 text-center lg:text-left pt-5">
            
            <h1 className={`text-4xl lg:text-6xl xl:text-[60px] font-bold text-[#3d3d3d] leading-tight mb-6 tracking-tight`}>
              Hi, I'm Wendel <span className="inline-block animate-wobble">👋</span>
              <br /><div></div>  
              <div className="block lg:hidden h-6"></div>
              <div className="hidden lg:block h-4"></div>
              <div className=""> 
                <span className={`${designerTitles[currentTitleIndex] === "Your Design Expert" ? "text-6xl" : "text-6xl"} bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent font-black leading-[10px]`}>  
                <span className={`text-[35px] bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent font-black leading-tight pb-2 text-center block w-full`}>
                <span className={`text-[35px] lg:text-[0px] bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent font-black leading-tight pb-2 text-center lg:text-left block w-full h-[50px] lg:h-[80px] flex items-center justify-center lg:justify-start`}>
                <span className={`text-[35px] lg:text-[65px] bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent font-black leading-tight pb-2 text-center lg:text-left block w-full h-[80px] lg:h-[120px] flex items-center justify-center lg:justify-start`}>
                  {designerTitles[currentTitleIndex] === "Your Design Expert" ? (
                    <>
                     Your Design Expert
                    </>
                  ) : (
                    designerTitles[currentTitleIndex]
                  )}
                </span>
                </span>
                </span>
                </span>
              </div>
              <div className="pb-6"></div>
            </h1>

            <p className={`text-lg lg:text-xl ${themeClasses.textSecondary} leading-relaxed mb-8 max-w-2xl -mt-[30px]`}>
              I help businesses create stunning websites that convert visitors into customers. Specializing in Shopify and WordPress development with a focus on performance and user experience.
            </p>
            
            <div className="hidden sm:flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12">
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
                className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25 flex items-center space-x-2 group"
              >
                <span>Book Now</span>
                
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`${themeClasses.textSecondary} hover:${themeClasses.text.split(' ')[0]} font-medium transition-colors flex items-center space-x-2 group`}
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
                            <button
                onClick={() => scrollToSection('contact')}
                className={`${themeClasses.textSecondary} hover:${themeClasses.text.split(' ')[0]} font-medium transition-colors flex items-center space-x-2 group`}
              >
                <span>Linked in</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
      {/* Guarantee Modal */}
      <GuaranteeModal
        isOpen={isGuaranteeModalOpen}
        onClose={() => setIsGuaranteeModalOpen(false)}
        scrollToSection={scrollToSection}
      />
};

export default AboutSection;