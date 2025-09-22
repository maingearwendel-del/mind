import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Target, Palette, BookOpen, MessageSquare, Users, Lightbulb, Play, ArrowRight } from 'lucide-react';

interface BrandIdentitySectionProps {
  themeClasses: {
    text: string;
    textSecondary: string;
  };
  scrollToSection: (sectionId: string) => void;
}

const BrandIdentitySection: React.FC<BrandIdentitySectionProps> = ({ themeClasses, scrollToSection }) => {
  const [openSection, setOpenSection] = useState<number | null>(null);
  const [showAllPropositions, setShowAllPropositions] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [hasScrolledToSection, setHasScrolledToSection] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasScrolledToSection(true);
        } else {
          // Reset the load more fade when user scrolls away from section
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
    // If clicking on any button and not all propositions are shown, reveal all first
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
      title: "Brand Foundation",
      description: "We define your core values, mission, and vision to build a strong, authentic brand narrative that resonates with your audience.",
      gradient: "from-sky-500 to-cyan-600",
      bgGradient: "from-sky-50 via-cyan-50 to-sky-50",
      hoverBg: "hover:from-sky-100 hover:via-cyan-100 hover:to-sky-100",
      border: "border-sky-100 hover:border-sky-200",
      ring: "ring-sky-50 hover:ring-sky-100",
      buttonGradient: "from-sky-500 to-cyan-500 hover:from-sky-700 hover:to-cyan-700"
    },
    {
      icon: <Palette className="w-6 h-6 text-white" />,
      title: "Visual Identity Design",
      description: "Crafting unique logos, color palettes, typography, and imagery that visually represent your brand's personality and values.",
      gradient: "from-cyan-500 to-teal-600",
      bgGradient: "from-cyan-50 via-teal-50 to-cyan-50",
      hoverBg: "hover:from-cyan-100 hover:via-teal-100 hover:to-cyan-100",
      border: "border-cyan-100 hover:border-cyan-200",
      ring: "ring-cyan-50 hover:ring-cyan-100",
      buttonGradient: "from-cyan-500 to-teal-500 hover:from-cyan-700 hover:to-teal-700"
    },
    {
      icon: <BookOpen className="w-6 h-6 text-white" />,
      title: "Brand Guidelines & Consistency",
      description: "Developing comprehensive brand guidelines to ensure consistent application across all touchpoints, maintaining brand integrity.",
      gradient: "from-teal-500 to-emerald-600",
      bgGradient: "from-teal-50 via-emerald-50 to-teal-50",
      hoverBg: "hover:from-teal-100 hover:via-emerald-100 hover:to-teal-100",
      border: "border-teal-100 hover:border-teal-200",
      ring: "ring-teal-50 hover:ring-teal-100",
      buttonGradient: "from-teal-500 to-emerald-500 hover:from-teal-700 hover:to-emerald-700"
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-white" />,
      title: "Brand Storytelling",
      description: "We weave compelling narratives that connect emotionally with your audience, making your brand memorable and relatable.",
      gradient: "from-emerald-500 to-blue-600",
      bgGradient: "from-emerald-50 via-blue-50 to-emerald-50",
      hoverBg: "hover:from-emerald-100 hover:via-blue-100 hover:to-emerald-100",
      border: "border-emerald-100 hover:border-emerald-200",
      ring: "ring-emerald-50 hover:ring-emerald-100",
      buttonGradient: "from-emerald-500 to-blue-500 hover:from-emerald-700 hover:to-blue-700"
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: "Brand Positioning",
      description: "Strategic positioning that differentiates your brand in the marketplace, defining your unique value proposition and competitive advantage.",
      gradient: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-50 via-indigo-50 to-blue-50",
      hoverBg: "hover:from-blue-100 hover:via-indigo-100 hover:to-blue-100",
      border: "border-blue-100 hover:border-blue-200",
      ring: "ring-blue-50 hover:ring-blue-100",
      buttonGradient: "from-blue-500 to-indigo-500 hover:from-blue-700 hover:to-indigo-700"
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-white" />,
      title: "Brand Strategy",
      description: "Comprehensive brand strategy development that aligns with your business goals and creates a roadmap for long-term brand success.",
      gradient: "from-indigo-500 to-purple-600",
      bgGradient: "from-indigo-50 via-purple-50 to-indigo-50",
      hoverBg: "hover:from-indigo-100 hover:via-purple-100 hover:to-indigo-100",
      border: "border-indigo-100 hover:border-indigo-200",
      ring: "ring-indigo-50 hover:ring-indigo-100",
      buttonGradient: "from-indigo-500 to-purple-500 hover:from-indigo-700 hover:to-purple-700"
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-white" />,
      title: "Brand Voice",
      description: "Develop a distinctive brand voice and consistent messaging framework that speaks directly to your target audience and builds authentic connections.",
      gradient: "from-purple-500 to-violet-600",
      bgGradient: "from-purple-50 via-violet-50 to-purple-50",
      hoverBg: "hover:from-purple-100 hover:via-violet-100 hover:to-purple-100",
      border: "border-purple-100 hover:border-purple-200",
      ring: "ring-purple-50 hover:ring-purple-100",
      buttonGradient: "from-purple-500 to-violet-500 hover:from-purple-700 hover:to-violet-700"
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: "Brand Experience Design",
      description: "Create cohesive brand experiences across all customer touchpoints, ensuring every interaction reinforces your brand values and builds loyalty.",
      gradient: "from-violet-500 to-fuchsia-600",
      bgGradient: "from-violet-50 via-fuchsia-50 to-violet-50",
      hoverBg: "hover:from-violet-100 hover:via-fuchsia-100 hover:to-violet-100",
      border: "border-violet-100 hover:border-violet-200",
      ring: "ring-violet-50 hover:ring-violet-100",
      buttonGradient: "from-violet-500 to-fuchsia-500 hover:from-violet-700 hover:to-fuchsia-700"
    }
  ];

  return (
    <>
    <section ref={sectionRef} className="pt-20 pb-16 bg-gray-50 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full blur-3xl"></div>
      </div>



      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-2">
                  <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-12 mb-4">
            {/* Header Text - Now on Left */}
            <div className="text-center lg:text-right order-1 lg:order-1">
              <h2 className="text-[2.75rem] lg:text-6xl font-bold mb-2 leading-tight lg:leading-tight">
                <span className="text-[#3d3d3d]">What Makes a </span>
                <br className="lg:hidden" />
           <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent font-black lg:text-6xl text-[2.7rem]">Powerful Brand?</span>
              </h2>
              <p className="text-[1.4rem] text-gray-600">
               We build brands that resonate & leave a lasting impression 🎯
              </p>
            </div>

            
            
            {/* Video Image - Now on Right */}
            <div className={`flex-shrink-0 lg:-ml-5 order-2 lg:order-2 ${!hasScrolledToSection ? 'animate-wobble-reverse' : ''}`}>
              <div className="w-72 h-44 lg:w-[164px] lg:h-28 lg:ml-8 rounded-3xl overflow-hidden shadow-lg relative bg-gradient-to-br from-gray-900 to-gray-800 hover:scale-110 transition-transform duration-300 group">
                <button
                  onClick={handlePlayClick}
                  className="relative w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center cursor-pointer hover:bg-gradient-to-br hover:from-gray-600 hover:to-gray-700 transition-all duration-300 group"
                >
                  <img 
                    src="/powerful_brand_thumbnail_m.webp"
                    alt="What about a Powerful Brand"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0  flex items-center justify-center">
                   <div className={`w-14 h-14 lg:w-11 lg:h-11 bg-gradient-to-r from-blue-500/70 to-teal-500/70 hover:from-blue-600/80 hover:to-teal-600/80 rounded-full flex items-center justify-center shadow-lg hover:scale-110 group-hover:animate-bounce-up-down transition-all duration-300 pointer-events-none ${!hasScrolledToSection ? 'animate-wobble' : ''}`}>
                      <Play className="w-6 h-6 lg:w-5 lg:h-5 text-white ml-0.5 transition-colors" fill="currentColor" />
                    </div>
                  </div>
                  
                  {/* Video Duration */}
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-0.5 rounded-full text-xs font-medium">
                    3:24
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Accordion Buttons Container with Load More functionality */}
        <div className="relative max-w-6xl mx-auto">
          <div className={`relative transition-all duration-500 ease-in-out ${
            showAllPropositions ? 'max-h-none overflow-visible' : 'max-h-[320px] overflow-hidden'
          }`}>
            {/* Three Column Grid - Mobile: Stack vertically, Desktop: Side by side */}
            <div className="hidden lg:grid grid-cols-1 lg:grid-cols-4 gap-6 gap-y-12 justify-center pb-12 px-8 py-8">
              
              {propositions.map((prop, index) => (
                <div key={index} className="col-span-1">
                  <button
                    onClick={() => handleToggle(index)}
                    className={`w-[95%] mx-auto flex items-center justify-between p-4 bg-gradient-to-r ${prop.bgGradient} ${prop.hoverBg} rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 ${prop.border} ring-2 ${prop.ring} hover:scale-[1.02] transform`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${prop.gradient} rounded-full flex items-center justify-center shadow-lg`}>
                        {prop.icon}
                      </div>
                      <div className="flex flex-col space-y-1">
                        <span className="text-lg font-semibold text-gray-900 text-left">
                          {prop.title === "Brand Foundation" && (
                            <span className="text-xs text-gray-500 font-normal block leading-none -mb-1">Brand</span>
                          )}
                          {prop.title === "Visual Identity Design" && (
                            <span className="text-xs text-gray-500 font-normal block leading-none -mb-1">Visual</span>
                          )}
                          {prop.title === "Brand Guidelines & Consistency" && (
                            <span className="text-xs text-gray-500 font-normal block leading-none -mb-1">Brand</span>
                          )}
                          {prop.title === "Brand Storytelling" && (
                            <span className="text-xs text-gray-500 font-normal block leading-none -mb-1">Brand</span>
                          )}
                          {prop.title === "Brand Positioning" && (
                            <span className="text-xs text-gray-500 font-normal block leading-none -mb-1">Brand</span>
                          )}
                          {prop.title === "Brand Strategy" && (
                            <span className="text-xs text-gray-500 font-normal block leading-none -mb-1">Brand</span>
                          )}
                          {prop.title === "Brand Voice" && (
                            <span className="text-xs text-gray-500 font-normal block leading-none -mb-1">Brand</span>
                          )}
                          {prop.title === "Brand Experience Design" && (
                            <span className="text-xs text-gray-500 font-normal block leading-none -mb-1">Brand</span>
                          )}
                          {prop.title === "Brand Foundation" ? "Foundation" : 
                           prop.title === "Visual Identity Design" ? "Identity" : 
                           prop.title === "Brand Guidelines & Consistency" ? "Guidelines" : 
                           prop.title === "Brand Storytelling" ? "Storytelling" : 
                           prop.title === "Brand Positioning" ? "Positioning" : 
                           prop.title === "Brand Strategy" ? "Strategy" : 
                           prop.title === "Brand Voice" ? "Voice" : 
                           prop.title === "Brand Experience Design" ? "Experience" : prop.title}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <ChevronDown 
                        className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${
                          openSection === index ? 'rotate-180' : ''
                        }`} 
                      />
                    </div>
                  </button>
                  
                  {/* Mobile Accordion Content - Below button */}
                  <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
                    openSection === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className={`mt-6 bg-gradient-to-r ${prop.bgGradient} rounded-3xl p-8 border-2 ${prop.border.replace('hover:', '')} shadow-xl ring-2 ${prop.ring.replace('hover:', '')} relative`}>
                      <div className="relative z-10">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                          {prop.title}
                        </h3>
                        
                        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                          {prop.description}
                        </p>
                        
                        <div className="text-center">
                          <button 
                            onClick={() => {
                              const contactSection = document.querySelector('#contact');
                              if (contactSection) {
                                contactSection.scrollIntoView({ 
                                  behavior: 'smooth',
                                  block: window.innerWidth < 768 ? 'end' : 'start'
                                });
                                
                                // Additional scroll for mobile to reach Calendly
                                if (window.innerWidth < 768) {
                                  setTimeout(() => {
                                    window.scrollBy({
                                      top: 1900,
                                      behavior: 'smooth'
                                    });
                                  }, 500);
                                }
                              }
                            }}
                            className={`block w-full bg-gradient-to-r ${prop.buttonGradient} text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg text-center`}
                          >
                            Book Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* White gradient fade overlay */}
            {!showAllPropositions && (
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 via-gray-50/80 to-transparent pointer-events-none z-0"></div>
            )}
          </div>
        </div>

        {/* Mobile-only bullet points and CTA - Below video */}
        <div className="lg:hidden mt-2 px-6 whitespace-nowrap  ">
          <div className="space-y-4 mb-8">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-gray-700 font-medium ">Strategic brand foundation & values</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <span className="text-gray-700 font-medium">Custom visual identity design</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <span className="text-gray-700 font-medium">Comprehensive brand guidelines</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <span className="text-gray-700 font-medium">Compelling brand storytelling</span>
            </div>
          </div>
          
          {/* Mobile Book Now Button */}
          <div className="text-center">
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
                  className="inline-block bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white  px-20 py-5 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Book Now
                </button>

                        <button
                onClick={() => {
                  const servicesSection = document.getElementById('services');
                  if (servicesSection) {
                    const rect = servicesSection.getBoundingClientRect();
                    const offsetTop = window.pageYOffset + rect.top + 1230;   
                    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
                  }
                }}
                className={`${themeClasses.textSecondary} hover:${themeClasses.text.split(' ')[0]} font-medium transition-colors flex items-center space-x-2 group mt-6 block mx-auto`}
 

              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
           
          </div>
        </div>

        {/* Desktop Accordion Content - Hidden on mobile */}
        {propositions.map((prop, index) => (
          <div key={`desktop-${index}`} className={`overflow-hidden transition-all duration-500 ease-in-out ${
            openSection === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
          } hidden lg:block`}>
            <div className={`mt-2 mb-10 max-w-6xl mx-auto bg-gradient-to-r ${prop.bgGradient} rounded-3xl p-8 lg:p-12 border-2 ${prop.border.replace('hover:', '')} shadow-xl ring-2 ${prop.ring.replace('hover:', '')} relative`}>
              {/* Decorative Elements */}
              <div className="absolute top-8 right-8 w-20 h-20 opacity-30">
                <div className={`w-full h-full bg-gradient-to-br ${prop.gradient.replace('from-', 'from-').replace('to-', 'to-')} rounded-full blur-xl`}></div>
              </div>
              <div className="absolute bottom-8 left-8 w-16 h-16 opacity-30">
                <div className={`w-full h-full bg-gradient-to-br ${prop.gradient.replace('from-', 'from-').replace('to-', 'to-')} rounded-full blur-xl`}></div>
              </div>

              <div className="relative z-10">
                <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-start">
                  {/* Left Column - Content */}
                  <div className="lg:col-span-2">
                    <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                      {prop.title}
                    </h3>
                    
                    <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                      {prop.description}
                    </p>
                    
                    {/* Features Grid - Only show for Strategic Brand Foundation */}
                    {prop.title === "Brand Foundation" && (
                      <div className="grid md:grid-cols-2 gap-4 mb-8">
                        <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                          <div className="flex-shrink-0">
                            <div className="w-5 h-5 bg-indigo-600 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                          </div>
                          <span className="text-gray-700 font-medium">Core values definition & alignment</span>
                        </div>
                        <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                          <div className="flex-shrink-0">
                            <div className="w-5 h-5 bg-indigo-600 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                          </div>
                          <span className="text-gray-700 font-medium">Authentic brand narrative development</span>
                        </div>
                      </div>
                    )}
                    
                    {/* Features Grid - Only show for Visual Identity Design */}
                    {prop.title === "Visual Identity Design" && (
                      <div className="grid md:grid-cols-2 gap-4 mb-8">
                        <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                          <div className="flex-shrink-0">
                            <div className="w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                          </div>
                          <span className="text-gray-700 font-medium">Custom logo & brand mark creation</span>
                        </div>
                        <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                          <div className="flex-shrink-0">
                            <div className="w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                          </div>
                          <span className="text-gray-700 font-medium">Color palette & typography selection</span>
                        </div>
                      </div>
                    )}
                    
                    {/* Features Grid - Only show for Brand Guidelines & Consistency */}
                    {prop.title === "Brand Guidelines & Consistency" && (
                      <div className="grid md:grid-cols-2 gap-4 mb-8">
                        <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                          <div className="flex-shrink-0">
                            <div className="w-5 h-5 bg-violet-600 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                          </div>
                          <span className="text-gray-700 font-medium">Comprehensive brand style guides</span>
                        </div>
                        <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                          <div className="flex-shrink-0">
                            <div className="w-5 h-5 bg-violet-600 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                          </div>
                          <span className="text-gray-700 font-medium">Cross-platform consistency standards</span>
                        </div>
                      </div>
                    )}
                    
                    {/* Features Grid - Only show for Brand Storytelling */}
                    {prop.title === "Brand Storytelling" && (
                      <div className="grid md:grid-cols-2 gap-4 mb-8">
                        <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                          <div className="flex-shrink-0">
                            <div className="w-5 h-5 bg-fuchsia-600 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                          </div>
                          <span className="text-gray-700 font-medium">Compelling narrative development</span>
                        </div>
                        <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                          <div className="flex-shrink-0">
                            <div className="w-5 h-5 bg-fuchsia-600 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                          </div>
                          <span className="text-gray-700 font-medium">Emotional connection strategies</span>
                        </div>
                      </div>
                    )}
                    
                    {/* Features Grid - Only show for Brand Positioning */}
                    {prop.title === "Brand Positioning" && (
                      <div className="grid md:grid-cols-2 gap-4 mb-8">
                        <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                          <div className="flex-shrink-0">
                            <div className="w-5 h-5 bg-cyan-600 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                          </div>
                          <span className="text-gray-700 font-medium">Market differentiation analysis</span>
                        </div>
                        <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                          <div className="flex-shrink-0">
                            <div className="w-5 h-5 bg-cyan-600 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                          </div>
                          <span className="text-gray-700 font-medium">Unique value proposition development</span>
                        </div>
                      </div>
                    )}
                    
                    {/* Features Grid - Only show for Brand Strategy */}
                    {prop.title === "Brand Strategy" && (
                      <div className="grid md:grid-cols-2 gap-4 mb-8">
                        <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                          <div className="flex-shrink-0">
                            <div className="w-5 h-5 bg-teal-600 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                          </div>
                          <span className="text-gray-700 font-medium">Strategic roadmap development</span>
                        </div>
                        <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                          <div className="flex-shrink-0">
                            <div className="w-5 h-5 bg-teal-600 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                          </div>
                          <span className="text-gray-700 font-medium">Long-term brand planning</span>
                        </div>
                      </div>
                    )}
                    
                    {/* Features Grid - Only show for Brand Voice & Messaging */}
                    {prop.title === "Brand Voice" && (
                      <div className="grid md:grid-cols-2 gap-4 mb-8">
                        <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                          <div className="flex-shrink-0">
                            <div className="w-5 h-5 bg-emerald-600 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                          </div>
                          <span className="text-gray-700 font-medium">Distinctive voice development</span>
                        </div>
                        <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                          <div className="flex-shrink-0">
                            <div className="w-5 h-5 bg-emerald-600 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                          </div>
                          <span className="text-gray-700 font-medium">Consistent messaging framework</span>
                        </div>
                      </div>
                    )}
                    
                    {/* Features Grid - Only show for Brand Experience Design */}
                    {prop.title === "Brand Experience Design" && (
                      <div className="grid md:grid-cols-2 gap-4 mb-8">
                        <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                          <div className="flex-shrink-0">
                            <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                          </div>
                          <span className="text-gray-700 font-medium">Cohesive touchpoint experiences</span>
                        </div>
                        <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                          <div className="flex-shrink-0">
                            <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                          </div>
                          <span className="text-gray-700 font-medium">Customer loyalty building</span>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Right Column - CTA */}
                  <div className="lg:col-span-1">
                    <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200 sticky top-8">
                      {/* Decorative icon */}
                      <div className="absolute top-6 right-6 w-8 h-8">
                        {prop.icon}
                      </div>
                      
                      <div className="text-center mb-6">
                        <div className="text-2xl font-bold text-gray-900 mb-2">
                          Ready to get started?
                        </div>
                      </div>

 
 <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          const contactSection = document.getElementById('contact');
                          if (contactSection) {
                            const rect = contactSection.getBoundingClientRect(); 
                            const offsetTop = window.pageYOffset + rect.top - 409;    
                            window.scrollTo({ top: offsetTop, behavior: 'smooth' });
                          }
                        }}
                        className={`w-full bg-gradient-to-r ${prop.buttonGradient} text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2 group mb-4`}
                      >
                        <span>Book Now</span>
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                      
            
                      
                      <button 
                        onClick={() => {
                          const servicesSection = document.querySelector('#services');
                          if (servicesSection) {
                            servicesSection.scrollIntoView({ behavior: 'smooth' });
                            setTimeout(() => {
                              window.dispatchEvent(new CustomEvent('openWebsiteDesign'));
                            }, 800);
                          }
                        }}
                        className="w-full bg-transparent text-gray-700 hover:text-gray-900 px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 -mt-2 block"
                      >
                        <span className="flex items-center justify-center space-x-2 group">
                          <span>Learn More</span>
                          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </button>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden">
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {!isPlaying ? (
              <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center relative">
                <img 
                  src="/powerful_brand_thumbnail_m.webp"
                  alt="What about a Powerful Brand"
                  className="w-full h-full object-cover"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0  flex items-center justify-center">
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 group"
                  >
                    <Play className="w-8 h-8 text-gray-900 ml-1 group-hover:text-blue-600 transition-colors" fill="currentColor" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="w-full h-full bg-gray-900 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                  <p className="text-lg">Loading video...</p>
                  <p className="text-sm text-gray-300 mt-2">Video would play here in production</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default BrandIdentitySection;