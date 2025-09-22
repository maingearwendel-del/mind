import React from 'react';
import { ArrowRight, ArrowUpRight, ArrowDownRight } from 'lucide-react';

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
  return (
    <section id="about" className="pt-32 pb-0 sm:pb-8 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left Column - Image Slider */}
          <div className="lg:col-span-5 relative group">
            {/* Circular Profile Image */}
            <div className="aspect-square w-80 mx-auto rounded-full overflow-hidden relative shadow-2xl border-4 border-white/20 glow-border">
              <div className="relative w-full h-full">
                <img
                  src="/designer_3.png"
                  alt="Alex - Web Designer"
                  className="w-full h-full object-cover animate-gentle-rotate transform"
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
                <span className={`whitespace-nowrap text-sm font-medium ${themeClasses.textTertiary}`}>Available fsor projects</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 text-center lg:text-left">
            
            <h1 className={`text-4xl lg:text-6xl xl:text-7xl font-bold text-[#3d3d3d] leading-tight mb-6 tracking-tight`}>
              Hi, I'm Wendel <span className="inline-block animate-wobble">👋</span>
              <br />
              <span className={`${isDarkMode ? 'bg-gradient-to-r from-blue-400 to-indigo-400' : 'bg-gradient-to-r from-blue-500 to-indigo-500'} bg-clip-text text-transparent font-black`}>Your Web Designer</span>
            </h1>
            
            <p className={`text-lg lg:text-xl ${themeClasses.textSecondary} leading-relaxed mb-8 max-w-2xl`}>
              I help businesses create stunning websites that convert visitors into customers. Specializing in Shopify and WordPress development with a focus on performance and user experience.
            </p>
            
            <div className="hidden sm:flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12">
              <button
                onClick={() => scrollToSection('portfolio')}
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
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;