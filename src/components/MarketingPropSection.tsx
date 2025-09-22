import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, TrendingUp, Target, Users, BarChart3, Megaphone, Search, Play, ArrowRight } from 'lucide-react';

interface MarketingPropSectionProps {
  themeClasses: {
    bg: string;
    text: string;
    textSecondary: string;
    textTertiary: string;
    navBg: string;
    border: string;
    cardBg: string;
    cardBorder: string;
    inputBg: string;
    inputBorder: string;
    placeholder: string;
    gradientFrom: string;
    gradientTo: string;
    statsBg: string;
  };
  scrollToSection: (sectionId: string) => void;
}

const MarketingPropSection: React.FC<MarketingPropSectionProps> = ({ themeClasses, scrollToSection }) => {
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
      title: "Strategy",
      description: "Data-driven marketing strategies that target the right audience at the right time, maximizing your ROI and driving sustainable business growth.",
      gradient: "from-purple-500 to-violet-600",
      bgGradient: "from-purple-50 via-violet-50 to-purple-50",
      hoverBg: "hover:from-purple-100 hover:via-violet-100 hover:to-purple-100",
      border: "border-purple-100 hover:border-purple-200",
      ring: "ring-purple-50 hover:ring-purple-100",
      buttonGradient: "from-purple-500 to-violet-500 hover:from-purple-700 hover:to-violet-700"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-white" />,
      title: "Growth",
      description: "Scalable marketing campaigns designed to accelerate your business growth through proven tactics and continuous optimization.",
      gradient: "from-violet-500 to-fuchsia-600",
      bgGradient: "from-violet-50 via-fuchsia-50 to-violet-50",
      hoverBg: "hover:from-violet-100 hover:via-fuchsia-100 hover:to-violet-100",
      border: "border-violet-100 hover:border-violet-200",
      ring: "ring-violet-50 hover:ring-violet-100",
      buttonGradient: "from-violet-500 to-fuchsia-500 hover:from-violet-700 hover:to-fuchsia-700"
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: "Audience",
      description: "Deep audience research and targeting to connect with your ideal customers, building lasting relationships that drive repeat business.",
      gradient: "from-fuchsia-500 to-pink-600",
      bgGradient: "from-fuchsia-50 via-pink-50 to-fuchsia-50",
      hoverBg: "hover:from-fuchsia-100 hover:via-pink-100 hover:to-fuchsia-100",
      border: "border-fuchsia-100 hover:border-fuchsia-200",
      ring: "ring-fuchsia-50 hover:ring-fuchsia-100",
      buttonGradient: "from-fuchsia-500 to-pink-500 hover:from-fuchsia-700 hover:to-pink-700"
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-white" />,
      title: "Analytics",
      description: "Comprehensive tracking and analytics to measure campaign performance, providing actionable insights for continuous improvement.",
      gradient: "from-pink-500 to-rose-600",
      bgGradient: "from-pink-50 via-rose-50 to-pink-50",
      hoverBg: "hover:from-pink-100 hover:via-rose-100 hover:to-pink-100",
      border: "border-pink-100 hover:border-pink-200",
      ring: "ring-pink-50 hover:ring-pink-100",
      buttonGradient: "from-pink-500 to-rose-500 hover:from-pink-700 hover:to-rose-700"
    },
    {
      icon: <Megaphone className="w-6 h-6 text-white" />,
      title: "Campaigns",
      description: "Creative and compelling marketing campaigns that capture attention, engage your audience, and drive measurable results across all channels.",
      gradient: "from-purple-500 to-pink-600",
      bgGradient: "from-purple-50 via-pink-50 to-purple-50",
      hoverBg: "hover:from-purple-100 hover:via-pink-100 hover:to-purple-100",
      border: "border-purple-100 hover:border-purple-200",
      ring: "ring-purple-50 hover:ring-purple-100",
      buttonGradient: "from-purple-500 to-pink-500 hover:from-purple-700 hover:to-pink-700"
    },
    {
      icon: <Search className="w-6 h-6 text-white" />,
      title: "SEO",
      description: "Search engine optimization strategies that improve your online visibility, drive organic traffic, and establish your authority in your industry.",
      gradient: "from-teal-500 to-cyan-600",
      bgGradient: "from-teal-50 via-cyan-50 to-teal-50",
      hoverBg: "hover:from-teal-100 hover:via-cyan-100 hover:to-teal-100",
      border: "border-teal-100 hover:border-teal-200",
      ring: "ring-teal-50 hover:ring-teal-100",
      buttonGradient: "from-teal-500 to-cyan-500 hover:from-teal-700 hover:to-cyan-700"
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: "Social Media",
      description: "Strategic social media marketing that builds brand awareness, engages your community, and drives meaningful conversations with your target audience.",
      gradient: "from-cyan-500 to-emerald-600",
      bgGradient: "from-cyan-50 via-emerald-50 to-cyan-50",
      hoverBg: "hover:from-cyan-100 hover:via-emerald-100 hover:to-cyan-100",
      border: "border-cyan-100 hover:border-cyan-200",
      ring: "ring-cyan-50 hover:ring-cyan-100",
      buttonGradient: "from-cyan-500 to-emerald-500 hover:from-cyan-700 hover:to-emerald-700"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-white" />,
      title: "Conversion",
      description: "Conversion rate optimization strategies that turn visitors into customers through strategic design, compelling copy, and data-driven improvements.",
      gradient: "from-emerald-500 to-purple-600",
      bgGradient: "from-emerald-50 via-purple-50 to-emerald-50",
      hoverBg: "hover:from-emerald-100 hover:via-purple-100 hover:to-emerald-100",
      border: "border-emerald-100 hover:border-emerald-200",
      ring: "ring-emerald-50 hover:ring-emerald-100",
      buttonGradient: "from-emerald-500 to-purple-500 hover:from-emerald-700 hover:to-purple-700"
    }
  ];

  return (
    <section ref={sectionRef} className="pt-5 pb-8 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-green-200 to-emerald-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-full blur-3xl"></div>
      </div>

 <div className="max-w-7xl mx-auto px-6">
        <div className="mb-2">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-12 mb-4">
            {/* Header Text - Now on Left */}
            <div className="text-center lg:text-right order-1 lg:order-1">
              <h2 className="text-[2.75rem] lg:text-6xl font-bold mb-2 leading-tight lg:leading-tight">
                <span className="text-[#3d3d3d]">What Makes </span>
                <br className="lg:hidden" />
           <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-black lg:text-6xl text-[2.6rem]">Great Marketing?</span>
              </h2>
              <p className="text-[1.4rem] text-gray-600">
                I focus on strategies that drive real results and growth 📢
              </p>
            </div>

   
            
            {/* Video Image - Now on Right */}
            <div className={`flex-shrink-0 lg:-ml-5 order-2 lg:order-2 ${!hasScrolledToSection ? 'animate-wobble-reverse' : ''}`}>
              <div className="w-72 h-44 lg:w-[164px] lg:h-28 lg:ml-8 rounded-3xl overflow-hidden shadow-lg relative bg-gradient-to-br from-gray-900 to-gray-800 hover:scale-110 transition-transform duration-300">
                {!isPlaying ? (
                  <>
                    {/* Video Thumbnail */}
                    <button
                      onClick={handlePlayClick} 
                     className="relative w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center cursor-pointer hover:bg-gradient-to-br hover:from-gray-600 hover:to-gray-700 transition-all duration-300 group"
                    >
                      <img 
                        src="/m_thumbnail_v3.webp"
                        alt="What Makes Great Marketing"
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center">
                       <div className={`w-14 h-14 lg:w-11 lg:h-11 bg-gradient-to-r from-purple-500/70 to-pink-500/70 hover:from-purple-600/80 hover:to-pink-600/80 rounded-full flex items-center justify-center shadow-lg hover:scale-110 group-hover:animate-bounce-up-down transition-all duration-300 pointer-events-none ${!hasScrolledToSection ? 'animate-wobble' : ''}`}>
                          <Play className="w-6 h-6 lg:w-5 lg:h-5 text-white ml-0.5 transition-colors" fill="currentColor" />
                        </div>
                      </div>
                      
                      {/* Video Duration */}
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-0.5 rounded-full text-xs font-medium">
                        4:12
                      </div>
                    </button>
                  </>
                ) : (
                  <div className="w-full h-full bg-gray-900 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
                      <p className="text-xs">Loading...</p>
                    </div>
                  </div>
                )}
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
            <div className="hidden lg:grid grid-cols-1 lg:grid-cols-4 gap-20 gap-y-8 justify-center pb-12 px-8 py-8">
              
              {propositions.map((prop, index) => (
                <div key={index} className="lg:col-span-1">
                  <button
                    onClick={() => handleToggle(index)}
                    className={`w-[105%] mx-auto flex items-center justify-between p-4 bg-gradient-to-r ${prop.bgGradient} ${prop.hoverBg} rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 ${prop.border} ring-2 ${prop.ring} hover:scale-[1.02] transform`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${prop.gradient} rounded-full flex items-center justify-center shadow-lg flex-shrink-0`}>
                        {prop.icon}
                      </div>
                      <div className="flex flex-col space-y-1">
                        <span className="text-lg font-semibold text-gray-900 text-left">
                          {prop.title === "Strategy" && (
                            <span className="text-xs text-gray-500 font-normal block leading-none -mb-1">Built for</span>
                          )}
                          {prop.title === "Growth" && (
                            <span className="text-xs text-gray-500 font-normal block leading-none -mb-1">Built for</span>
                          )}
                          {prop.title === "Audience" && (
                            <span className="text-xs text-gray-500 font-normal block leading-none -mb-1">Built for</span>
                          )}
                          {prop.title === "Analytics" && (
                            <span className="text-xs text-gray-500 font-normal block leading-none -mb-1">Built with</span>
                          )}
                          {prop.title === "Campaigns" && (
                            <span className="text-xs text-gray-500 font-normal block leading-none -mb-1">Built with</span>
                          )}
                          {prop.title === "SEO" && (
                            <span className="text-xs text-gray-500 font-normal block leading-none -mb-1">Built with</span>
                          )}
                          {prop.title === "Social Media" && (
                            <span className="text-xs text-gray-500 font-normal block leading-none -mb-1">Built for</span>
                          )}
                          {prop.title === "Conversion" && (
                            <span className="text-xs text-gray-500 font-normal block leading-none -mb-1">Built for</span>
                          )}
                          {prop.title === "Social Media" ? "Social" : prop.title}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 flex-shrink-0">
                      <ChevronDown
                        className={`w-6 h-6 text-gray-600 transition-transform duration-300 ${
                          openSection === index ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                  </button>
                  
                  {/* Mobile Accordion Content - Below button */}
                  <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
                    openSection === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className={`mt-6 w-[85%] mx-auto bg-gradient-to-r ${prop.bgGradient} rounded-3xl p-8 border-2 ${prop.border.replace('hover:', '')} shadow-xl ring-2 ${prop.ring.replace('hover:', '')} relative`}>
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
              <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-0" style={{ background: 'linear-gradient(to top, #fafbfc, rgba(250, 251, 252, 0.8), transparent)' }}></div>
            )}
          </div>
        </div>

        {/* Mobile-only bullet points and CTA - Below video */}
        <div className="lg:hidden mt-2 px-6 pb-12 whitespace-nowrap">
          <div className="space-y-4 mb-8">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <span className="text-gray-700 font-medium">Data-driven marketing strategies</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <span className="text-gray-700 font-medium">Scalable growth campaigns</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <span className="text-gray-700 font-medium">Targeted audience engagement</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <span className="text-gray-700 font-medium">Performance analytics & optimization</span>
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
                  className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white  px-20 py-5 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Book Now
                </button>
            <button
                onClick={() => {
                  const servicesSection = document.getElementById('services');
                  if (servicesSection) {
                    const rect = servicesSection.getBoundingClientRect();
                    const offsetTop = window.pageYOffset + rect.top + 1975;
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
                  src="/m_thumbnail_v3.webp"
                  alt="What Makes Great Marketing"
                  className="w-full h-full object-cover"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 group"
                  >
                    <Play className="w-8 h-8 text-gray-900 ml-1 group-hover:text-purple-600 transition-colors" fill="currentColor" />
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
        {/* Desktop Accordion Content - Hidden on mobile */}
        {propositions.map((prop, index) => (
          <div key={`desktop-${index}`} className={`overflow-hidden transition-all duration-500 ease-in-out ${
            openSection === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
          } hidden lg:block`}>
            <div className={`mt-2 mb-10 max-w-[70rem] mx-auto bg-gradient-to-r ${prop.bgGradient} rounded-3xl p-8 lg:p-12 border-2 ${prop.border.replace('hover:', '')} shadow-xl ring-2 ${prop.ring.replace('hover:', '')} relative`}>
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
                    
                    {/* Features Grid - Only show for Strategy */}
                    {prop.title === "Strategy" && (
                      <div className="grid md:grid-cols-2 gap-4 mb-8">
                        <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                          <div className="flex-shrink-0">
                            <div className="w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                          </div>
                          <span className="text-gray-700 font-medium">Data-driven decision making</span>
                        </div>
                        <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                          <div className="flex-shrink-0">
                            <div className="w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                          </div>
                          <span className="text-gray-700 font-medium">ROI optimization</span>
                        </div>
                      </div>
                    )}
                    
                    {/* Features Grid - Only show for Growth */}
                    {prop.title === "Growth" && (
                      <div className="grid md:grid-cols-2 gap-4 mb-8">
                        <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                          <div className="flex-shrink-0">
                            <div className="w-5 h-5 bg-violet-600 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                          </div>
                          <span className="text-gray-700 font-medium">Scalable campaign systems</span>
                        </div>
                        <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                          <div className="flex-shrink-0">
                            <div className="w-5 h-5 bg-violet-600 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                          </div>
                          <span className="text-gray-700 font-medium">Continuous optimization</span>
                        </div>
                      </div>
                    )}
                    
                    {/* Features Grid - Only show for Audience */}
                    {prop.title === "Audience" && (
                      <div className="grid md:grid-cols-2 gap-4 mb-8">
                        <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                          <div className="flex-shrink-0">
                            <div className="w-5 h-5 bg-fuchsia-600 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                          </div>
                          <span className="text-gray-700 font-medium">Deep audience research</span>
                        </div>
                        <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                          <div className="flex-shrink-0">
                            <div className="w-5 h-5 bg-fuchsia-600 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                          </div>
                          <span className="text-gray-700 font-medium">Precision targeting</span>
                        </div>
                      </div>
                    )}
                    
                    {/* Features Grid - Only show for Analytics */}
                    {prop.title === "Analytics" && (
                      <div className="grid md:grid-cols-2 gap-4 mb-8">
                        <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                          <div className="flex-shrink-0">
                            <div className="w-5 h-5 bg-pink-600 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                          </div>
                          <span className="text-gray-700 font-medium">Comprehensive tracking</span>
                        </div>
                        <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                          <div className="flex-shrink-0">
                            <div className="w-5 h-5 bg-pink-600 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                          </div>
                          <span className="text-gray-700 font-medium">Actionable insights</span>
                        </div>
                      </div>
                    )}
                    
                    {/* Features Grid - Only show for Campaigns */}
                    {prop.title === "Campaigns" && (
                      <div className="grid md:grid-cols-2 gap-4 mb-8">
                        <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                          <div className="flex-shrink-0">
                            <div className="w-5 h-5 bg-teal-600 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                          </div>
                          <span className="text-gray-700 font-medium">Creative campaign development</span>
                        </div>
                        <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                          <div className="flex-shrink-0">
                            <div className="w-5 h-5 bg-teal-600 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                          </div>
                          <span className="text-gray-700 font-medium">Multi-channel execution</span>
                        </div>
                      </div>
                    )}
                    
                    {/* Features Grid - Only show for SEO */}
                    {prop.title === "SEO" && (
                      <div className="grid md:grid-cols-2 gap-4 mb-8">
                        <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                          <div className="flex-shrink-0">
                            <div className="w-5 h-5 bg-teal-600 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                          </div>
                          <span className="text-gray-700 font-medium">Search visibility optimization</span>
                        </div>
                        <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                          <div className="flex-shrink-0">
                            <div className="w-5 h-5 bg-teal-600 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                          </div>
                          <span className="text-gray-700 font-medium">Organic traffic growth</span>
                        </div>
                      </div>
                    )}
                    
                    {/* Features Grid - Only show for Social Media */}
                    {prop.title === "Social Media" && (
                      <div className="grid md:grid-cols-2 gap-4 mb-8">
                        <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                          <div className="flex-shrink-0">
                            <div className="w-5 h-5 bg-cyan-600 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                          </div>
                          <span className="text-gray-700 font-medium">Multi-platform content strategy</span>
                        </div>
                        <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                          <div className="flex-shrink-0">
                            <div className="w-5 h-5 bg-cyan-600 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                          </div>
                          <span className="text-gray-700 font-medium">Community engagement tactics</span>
                        </div>
                      </div>
                    )}
                    
                    {/* Features Grid - Only show for Conversion */}
                    {prop.title === "Conversion" && (
                      <div className="grid md:grid-cols-2 gap-4 mb-8">
                        <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                          <div className="flex-shrink-0">
                            <div className="w-5 h-5 bg-emerald-600 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                          </div>
                          <span className="text-gray-700 font-medium">A/B testing & optimization</span>
                        </div>
                        <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                          <div className="flex-shrink-0">
                            <div className="w-5 h-5 bg-emerald-600 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                          </div>
                          <span className="text-gray-700 font-medium">Landing page optimization</span>
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
                          scrollToSection('contact');
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
                          scrollToSection('services');
                          setTimeout(() => {
                            window.dispatchEvent(new CustomEvent('openWebsiteDesign'));
                          }, 800);
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
  );
};

export default MarketingPropSection;