import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Target, Users, Heart, CheckCircle, Play, ArrowRight, ArrowUpRight } from 'lucide-react';
 
interface RightFitSectionProps {
  themeClasses: {
    text: string;
    textSecondary: string;
  };
  scrollToSection: (sectionId: string) => void;
} 

const RightFitSection: React.FC<RightFitSectionProps> = ({ themeClasses, scrollToSection }) => {
  const [openSection, setOpenSection] = useState<number | null>(null);
  const [showAllPropositions, setShowAllPropositions] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [hasScrolledToSection, setHasScrolledToSection] = useState(false);
  const [isImageHovered, setIsImageHovered] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasScrolledToSection(true);
        } else {
          if (showAllPropositions) {
            setShowAllPropositions(false);
            setOpenSection(null);
          }
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [showAllPropositions]);

  const handleToggle = (index: number) => {
    if (!showAllPropositions) {
      setShowAllPropositions(true);
    }
    setOpenSection(openSection === index ? null : index);
  };

  const handlePlayClick = () => {
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setIsPlaying(false);
  };

  const propositions = [
    {
      icon: <Target className="w-6 h-6 text-white" />,
      title: "Perfect Fit Assessment",
      description: "We carefully evaluate if we're the right match for your project goals, timeline, and budget to ensure mutual success.",
      gradient: "from-green-500 to-emerald-600",
      bgGradient: "from-green-50 via-emerald-50 to-green-50",
      hoverBg: "hover:from-green-100 hover:via-emerald-100 hover:to-green-100",
      border: "border-green-100 hover:border-green-200",
      ring: "ring-green-50 hover:ring-green-100",
      buttonGradient: "from-green-500 to-emerald-500 hover:from-green-700 hover:to-emerald-700"
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: "Client Collaboration",
      description: "Building strong partnerships through clear communication, regular updates, and collaborative decision-making throughout the project.",
      gradient: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-50 via-indigo-50 to-blue-50",
      hoverBg: "hover:from-blue-100 hover:via-indigo-100 hover:to-blue-100",
      border: "border-blue-100 hover:border-blue-200",
      ring: "ring-blue-50 hover:ring-blue-100",
      buttonGradient: "from-blue-500 to-indigo-500 hover:from-blue-700 hover:to-indigo-700"
    },
    {
      icon: <Heart className="w-6 h-6 text-white" />,
      title: "Long-term Partnership",
      description: "We're not just here for the project launch - we build lasting relationships and provide ongoing support for your continued success.",
      gradient: "from-pink-500 to-rose-600",
      bgGradient: "from-pink-50 via-rose-50 to-pink-50",
      hoverBg: "hover:from-pink-100 hover:via-rose-100 hover:to-pink-100",
      border: "border-pink-100 hover:border-pink-200",
      ring: "ring-pink-50 hover:ring-pink-100",
      buttonGradient: "from-pink-500 to-rose-500 hover:from-pink-700 hover:to-rose-700"
    }
  ];

  return (
    <>
  
    <section id="right-fit" className="py-14 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-cyan-200 to-blue-200 rounded-full blur-3xl"></div>
      </div>
 
      <div className="max-w-[78rem] mx-auto px-6 relative z-10"> 
        <div className="max-w-6xl mx-auto">
          <div className="p-4 lg:pr-10 lg:p-7 bg-white rounded-[30px] shadow-2xl border border-gray-200 lg:bg-transparent lg:rounded-none lg:shadow-none lg:border-transparent">
            <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-4 lg:gap-6">

                              <div className="grid grid-cols-[40%_60%] gap-1 lg:hidden ">
      {/* Column 1 */} 
      <div className=" p-2 rounded-lg flex justify-center flex items-center">
         <img 
                  src="/wendel_santos_v4.webp"
                  alt="Wendel Santos"
                  className="w-20 h-20 lg:w-24 lg:h-24 rounded-full object-cover border-2 border-purple-500 flex-shrink-0"
                />
      </div>

      {/* Column 2 */}
      <div className="  -ml-2 rounded-lg flex items-center">
      <h3 className="font-semibold text-xl lg:text-[1.9rem] leading-tight mb-1">
                  Wondering if it's a match? 😉 🥰 💕
                  </h3>
      </div>
    </div>
                
              {/* Left side - Profile image and text */}
              <div className="flex flex-row lg:flex-row items-center lg:items-center gap-4 flex-1 text-center lg:text-left ">
                <div 
                  className=" z-10 hidden lg:flex relative w-20 h-20 lg:w-28 lg:h-28 rounded-full overflow-hidden border-2 border-orange-500 flex-shrink-0 ml-4 hover:scale-130 transition-transform duration-300"
                  onMouseEnter={() => setIsImageHovered(true)}
                  onMouseLeave={() => setIsImageHovered(false)}
                >
                  <img 
                    src="/wendel-match-icon_hover.webp"
                    alt="Wendel Santos"
                    className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-0 animate-wobble"
                  />
                  <img 
                    src="/wendel-match-icon_kiss.webp"
                    alt="Wendel Santos - Kiss"
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-0 hover:opacity-100 animate-wobble"
                  />
                </div>
                
                {/* Orbiting Arrow - positioned outside the image container */}
                <div className={`animate-bounce-up-down absolute top-5 left-15 lg:left-24 w-20 h-20 lg:w-28 lg:h-28 pointer-events-none z-0 transition-opacity duration-300 ${isImageHovered ? 'opacity-0' : 'opacity-100'}`}>
                  <div className="orbit-container ">
                    <div className="animate-orbit">
                      <ArrowUpRight className="w-6 h-6 text-orange-500 drop-shadow-lg font-bold" />
                    </div>
                  </div>
                </div>
                <div className="text-gray-900  ml-6" >
                  <h3 className="hidden lg:flex items-center font-semibold text-xl lg:text-[2.4rem] leading-tight mb-1">
                    Wondering if we're a&nbsp;<img 
                  src="/match2.webp"
                  alt="it's a match"
                  className="hidden lg:flex  w-full h-full lg:w-40 lg:h-full mt-1  animate-gentle-wobble-medium "
                /> 💕 
                  </h3>
                  <p className="text-gray-600 text-sm lg:text-base">
                    Schedule a free call, and let's explore possible solutions together.
                  </p>
                </div>
              </div>
              
              {/* Right side - CTA button */}
              <div className="w-full lg:w-auto flex flex-col items-center lg:items-start gap-2"> 
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
                  className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-semibold px-6 lg:px-8 py-3 lg:py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg whitespace-nowrap w-full lg:w-auto text-center"
                >
                  Schedule a Free 15 minute call
                </button> 
                  <div className="inline-flex items-center space-x-2 rounded-full px-1 py-1 backdrop-blur-sm "> 
                  <div className="inline-flex items-center space-x-2  rounded-full px-3 py-1 backdrop-blur-sm animate-blink-pulse">
                        <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>  
                        <span className="text-[13px] font-medium text-black ">Limited Availability</span> 
                      </div>
                  </div>
              </div>
            </div>
            
          </div> 
        </div>
      </div>
    </section>
    </>
  );
};

export default RightFitSection;