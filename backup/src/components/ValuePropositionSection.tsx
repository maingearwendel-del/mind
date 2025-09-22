import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Zap, Eye, TrendingUp, Rocket, Shield, Headphones, Globe, BarChart3, ArrowRight } from 'lucide-react';
import { Play } from 'lucide-react';

interface ValuePropositionSectionProps {
  themeClasses: {
    text: string;
    textSecondary: string;
  };
  scrollToSection: (sectionId: string) => void;
}

const ValuePropositionSection: React.FC<ValuePropositionSectionProps> = ({ themeClasses, scrollToSection }) => {
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
      icon: <Zap className="w-6 h-6 text-white" />,
      title: "Speed",
      description: "Slow websites lose customers. That's why I build every site to load fast and run smooth. Quick, reliable, and easy to use—so people stay on your page and choose your business.",
      gradient: "from-blue-500 to-cyan-600",
      bgGradient: "from-blue-50 via-cyan-50 to-blue-50",
      hoverBg: "hover:from-blue-100 hover:via-cyan-100 hover:to-blue-100",
      border: "border-blue-100 hover:border-blue-200",
      ring: "ring-blue-50 hover:ring-blue-100",
      buttonGradient: "from-blue-500 to-cyan-500 hover:from-blue-700 hover:to-cyan-700"
    },
    {
      icon: <Eye className="w-6 h-6 text-white" />,
      title: "Impress",
      description: "Your website is your first impression. I design clean, professional sites that make your business memorable. When customers think of your service, you'll be the one they remember.",
      gradient: "from-indigo-500 to-purple-600",
      bgGradient: "from-indigo-50 via-purple-50 to-indigo-50",
      hoverBg: "hover:from-indigo-100 hover:via-purple-100 hover:to-indigo-100",
      border: "border-indigo-100 hover:border-indigo-200",
      ring: "ring-indigo-50 hover:ring-indigo-100",
      buttonGradient: "from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-white" />,
      title: "Convert",
      description: "A good website should grow your business. I design sites that bring you calls, bookings, and sales—plus I set them up to show up on Google, so people can actually find you.",
      gradient: "from-purple-500 to-pink-600",
      bgGradient: "from-purple-50 via-pink-50 to-purple-50",
      hoverBg: "hover:from-purple-100 hover:via-pink-100 hover:to-purple-100",
      border: "border-purple-100 hover:border-purple-200",
      ring: "ring-purple-50 hover:ring-purple-100",
      buttonGradient: "from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
    },
    {
      icon: <Rocket className="w-6 h-6 text-white" />,
      title: "Growth",
      description: "Your business isn't static, and neither should your website be. I build scalable solutions that grow with you, ensuring your online presence remains robust and effective as your needs evolve.",
      gradient: "from-orange-500 to-pink-600",
      bgGradient: "from-orange-50 via-pink-50 to-orange-50",
      hoverBg: "hover:from-orange-100 hover:via-pink-100 hover:to-orange-100",
      border: "border-orange-100 hover:border-pink-200",
      ring: "ring-orange-50 hover:ring-pink-100",
      buttonGradient: "from-orange-600 to-pink-600 hover:from-orange-700 hover:to-pink-700"
    },
    {
      icon: <Shield className="w-6 h-6 text-white" />,
      title: "Security",
      description: "Your website and customer data are protected with enterprise-level security. SSL certificates, regular backups, and security monitoring keep your business safe from threats.",
      gradient: "from-red-500 to-rose-600",
      bgGradient: "from-red-50 via-rose-50 to-red-50",
      hoverBg: "hover:from-red-100 hover:via-rose-100 hover:to-red-100",
      border: "border-red-100 hover:border-red-200",
      ring: "ring-red-50 hover:ring-red-100",
      buttonGradient: "from-red-500 to-rose-500 hover:from-red-600 hover:to-rose-600"
    },
    {
      icon: <Headphones className="w-6 h-6 text-white" />,
      title: "Support",
      description: "Your success is our priority. Get dedicated support, regular check-ins, and ongoing optimization to ensure your website continues to perform at its best.",
      gradient: "from-red-500 to-pink-500",
      bgGradient: "from-red-50 via-pink-50 to-red-50",
      hoverBg: "hover:from-red-100 hover:via-pink-100 hover:to-red-100",
      border: "border-red-100 hover:border-red-200",
      ring: "ring-red-50 hover:ring-red-100",
      buttonGradient: "from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600"
    },
    {
      icon: <Globe className="w-6 h-6 text-white" />,
      title: "Mobile",
      description: "Every website is designed mobile-first to ensure perfect performance on all devices. Your customers will have a seamless experience whether they're on phone, tablet, or desktop.",
      gradient: "from-emerald-500 to-teal-600",
      bgGradient: "from-emerald-50 via-teal-50 to-emerald-50",
      hoverBg: "hover:from-emerald-100 hover:via-teal-100 hover:to-emerald-100",
      border: "border-emerald-100 hover:border-emerald-200",
      ring: "ring-emerald-50 hover:ring-emerald-100",
      buttonGradient: "from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600"
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-white" />,
      title: "Analytics",
      description: "Track your website's performance with detailed analytics and insights. Make data-driven decisions to continuously improve your online presence and conversion rates.",
      gradient: "from-teal-500 to-cyan-600",
      bgGradient: "from-teal-50 via-cyan-50 to-teal-50",
      hoverBg: "hover:from-teal-100 hover:via-cyan-100 hover:to-teal-100",
      border: "border-teal-100 hover:border-teal-200",
      ring: "ring-teal-50 hover:ring-teal-100",
      buttonGradient: "from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600"
    }
  ];

  return (
    <section ref={sectionRef} className="pt-20 pb-2 lg:pb-2 pb-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
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
                <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent font-black">Great Website?</span>
              </h2>
              <p className="text-2xl text-gray-600">
                I focus on core principles that make websites successful 🏆
              </p>
            </div>
                       
            {/* Video Image - Now on Right */}
            <div className={`flex-shrink-0 order-2 lg:order-2 lg:-ml-5 ${!hasScrolledToSection ? 'animate-wobble-reverse' : ''}`}>
              <div className="w-72 h-44 lg:w-[164px] lg:h-28  lg:h-28 lg:ml-8 rounded-3xl overflow-hidden shadow-lg relative bg-gradient-to-br from-gray-900 to-gray-800 hover:scale-110 transition-transform duration-300">
                {!isPlaying ? (
                  <>
                    {/* Video Thumbnail */}
                    <button
                      onClick={handlePlayClick} 
                     className="relative w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center cursor-pointer hover:bg-gradient-to-br hover:from-gray-600 hover:to-gray-700 transition-all duration-300 group"
                    >
                      <img 
                        src="https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop"
                        alt="What Makes a Great Website"
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className={`w-14 h-14 lg:w-11 lg:h-11 bg-gradient-to-r from-orange-500/70 to-red-500/70 hover:from-orange-600/80 hover:to-red-600/80 rounded-full flex items-center justify-center shadow-lg hover:scale-110 group-hover:animate-bounce-up-down transition-all duration-300 pointer-events-none ${!hasScrolledToSection ? 'animate-wobble' : ''}`}>
                          <Play className="w-6 h-6 lg:w-5 lg:h-5 text-white ml-0.5 transition-colors" fill="currentColor" />
                        </div>
                      </div>
                      
                      {/* Video Duration */}
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-0.5 rounded-full text-xs font-medium">
                        3:24
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

        {/* Mobile-only bullet points and CTA - Below video */}
        <div className="lg:hidden mt-8 px-6 pb-12 whitespace-nowrap">
          <div className="space-y-4 mb-8 text-center">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-gray-700 font-medium">Lightning-fast loading speeds</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <span className="text-gray-700 font-medium">Eye-catching professional design</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <span className="text-gray-700 font-medium">Higher conversion rates</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-gray-700 font-medium">SEO optimized for Google</span>
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
                  className="inline-block bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-20 py-5 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Book Now
                </button>
            
                          <button
                onClick={() => scrollToSection('services')}
                className={`${themeClasses.textSecondary} hover:${themeClasses.text.split(' ')[0]} font-medium transition-colors flex items-center space-x-2 group mt-6 block mx-auto`}


              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
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
                          {prop.title === "Speed" && (
                            <span className="text-xs text-gray-500 font-normal block leading-none -mb-1">Built for</span>
                          )}
                          {prop.title === "Impress" && (
                            <span className="text-xs text-gray-500 font-normal block leading-none -mb-1">Built to</span>
                          )}
                          {prop.title === "Convert" && (
                            <span className="text-xs text-gray-500 font-normal block leading-none -mb-1">Built to</span>
                          )}
                          {prop.title === "Growth" && (
                            <span className="text-xs text-gray-500 font-normal block leading-none -mb-1">Built for</span>
                          )}
                          {prop.title === "Security" && (
                            <span className="text-xs text-gray-500 font-normal block leading-none -mb-1">Built with</span>
                          )}
                          {prop.title === "Support" && (
                            <span className="text-xs text-gray-500 font-normal block leading-none -mb-1">Built with</span>
                          )}
                          {prop.title === "Mobile" && (
                            <span className="text-xs text-gray-500 font-normal block leading-none -mb-1">Built for</span>
                          )}
                          {prop.title === "Analytics" && (
                            <span className="text-xs text-gray-500 font-normal block leading-none -mb-1">Built with</span>
                          )}
                          {prop.title}
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
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none z-0"></div>
            )}
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
                  src="https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=1200&h=675&fit=crop"
                  alt="What Makes a Great Website"
                  className="w-full h-full object-cover"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
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
                    
                    {/* Features Grid - Only show for Speed */}
                    {prop.title === "Speed" && (
                      <div className="grid md:grid-cols-2 gap-4 mb-8">
                        <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                          <div className="flex-shrink-0">
                            <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                          </div>
                          <span className="text-gray-700 font-medium">Lightning-fast load times</span>
                        </div>
                        <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                          <div className="flex-shrink-0">
                            <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                          </div>
                          <span className="text-gray-700 font-medium">Optimized performance metrics</span>
                        </div>
                      </div>
                    )}
                    
                    {/* Features Grid - Only show for Impression */}
                    {prop.title === "Impress" && (
                      <div className="grid md:grid-cols-2 gap-4 mb-8">
                        <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                          <div className="flex-shrink-0">
                            <div className="w-5 h-5 bg-indigo-600 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                          </div>
                          <span className="text-gray-700 font-medium">Memorable brand identity</span>
                        </div>
                        <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                          <div className="flex-shrink-0">
                            <div className="w-5 h-5 bg-indigo-600 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                          </div>
                          <span className="text-gray-700 font-medium">Professional visual appeal</span>
                        </div>
                      </div>
                    )}
                    
                    {/* Features Grid - Only show for Conversion */}
                    {prop.title === "Convert" && (
                      <div className="grid md:grid-cols-2 gap-4 mb-8">
                        <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                          <div className="flex-shrink-0">
                            <div className="w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                          </div>
                          <span className="text-gray-700 font-medium">Strategic call-to-actions</span>
                        </div>
                        <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                          <div className="flex-shrink-0">
                            <div className="w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                          </div>
                          <span className="text-gray-700 font-medium">SEO-optimized content</span>
                        </div>
                      </div>
                    )}
                    
                    {/* Features Grid - Only show for Growth */}
                    {prop.title === "Growth" && (
                      <div className="grid md:grid-cols-2 gap-4 mb-8">
                        <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                          <div className="flex-shrink-0">
                            <div className="w-5 h-5 bg-pink-600 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                          </div>
                          <span className="text-gray-700 font-medium">Scalable architecture</span>
                        </div>
                        <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                          <div className="flex-shrink-0">
                            <div className="w-5 h-5 bg-pink-600 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                          </div>
                          <span className="text-gray-700 font-medium">Future-proof technology</span>
                        </div>
                      </div>
                    )}
                    
                    {/* Features Grid - Only show for Security */}
                    {prop.title === "Security" && (
                      <div className="grid md:grid-cols-2 gap-4 mb-8">
                        <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                          <div className="flex-shrink-0">
                            <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                          </div>
                          <span className="text-gray-700 font-medium">SSL certificates & encryption</span>
                        </div>
                        <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                          <div className="flex-shrink-0">
                            <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                          </div>
                          <span className="text-gray-700 font-medium">Regular security monitoring</span>
                        </div>
                      </div>
                    )}
                    
                    {/* Features Grid - Only show for Built for Speed */}
                    {prop.title === "Built for Speed" && (
                      <div className="grid md:grid-cols-2 gap-4 mb-8">
                        <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                          <div className="flex-shrink-0">
                            <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                          </div>
                          <span className="text-gray-700 font-medium">Lightning-fast load times</span>
                        </div>
                        <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                          <div className="flex-shrink-0">
                            <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                          </div>
                          <span className="text-gray-700 font-medium">Optimized performance</span>
                        </div>
                      </div>
                    )}
                    
                    {/* Features Grid - Only show for Stands Out */}
                    {prop.title === "Stands Out" && (
                      <div className="grid md:grid-cols-2 gap-4 mb-8">
                        <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                          <div className="flex-shrink-0">
                            <div className="w-5 h-5 bg-indigo-600 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                          </div>
                          <span className="text-gray-700 font-medium">Memorable brand identity</span>
                        </div>
                        <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                          <div className="flex-shrink-0">
                            <div className="w-5 h-5 bg-indigo-600 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                          </div>
                          <span className="text-gray-700 font-medium">Professional visual appeal</span>
                        </div>
                      </div>
                    )}
                    
                    {/* Features Grid - Only show for High Conversion */}
                    {prop.title === "High Conversion" && (
                      <div className="grid md:grid-cols-2 gap-4 mb-8">
                        <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                          <div className="flex-shrink-0">
                            <div className="w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                          </div>
                          <span className="text-gray-700 font-medium">Strategic call-to-actions</span>
                        </div>
                        <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                          <div className="flex-shrink-0">
                            <div className="w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                          </div>
                          <span className="text-gray-700 font-medium">SEO-optimized content</span>
                        </div>
                      </div>
                    )}
                    
                    {/* Features Grid - Only show for Built for Growth */}
                    {prop.title === "Built for Growth" && (
                      <div className="grid md:grid-cols-2 gap-4 mb-8">
                        <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                          <div className="flex-shrink-0">
                            <div className="w-5 h-5 bg-pink-600 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                          </div>
                          <span className="text-gray-700 font-medium">Scalable architecture</span>
                        </div>
                        <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                          <div className="flex-shrink-0">
                            <div className="w-5 h-5 bg-pink-600 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                          </div>
                          <span className="text-gray-700 font-medium">Future-proof technology</span>
                        </div>
                      </div>
                    )}
                    
                    {/* Features Grid - Only show for Secure & Protected */}
                    {prop.title === "Secure & Protected" && (
                      <div className="grid md:grid-cols-2 gap-4 mb-8">
                        <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                          <div className="flex-shrink-0">
                            <div className="w-5 h-5 bg-rose-700 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                          </div>
                          <span className="text-gray-700 font-medium">SSL certificates & encryption</span>
                        </div>
                        <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                          <div className="flex-shrink-0">
                            <div className="w-5 h-5 bg-rose-700 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                          </div>
                          <span className="text-gray-700 font-medium">Regular security monitoring</span>
                        </div>
                      </div>
                    )}
                    
                    {/* Features Grid - Only show for Support */}
                    {prop.title === "Support" && (
                      <div className="grid md:grid-cols-2 gap-4 mb-8">
                        <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                          <div className="flex-shrink-0">
                            <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                          </div>
                          <span className="text-gray-700 font-medium">24/7 dedicated support team</span>
                        </div>
                        <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                          <div className="flex-shrink-0">
                            <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                          </div>
                          <span className="text-gray-700 font-medium">Ongoing optimization & updates</span>
                        </div>
                      </div>
                    )}
                    
                    {/* Features Grid - Only show for Mobile */}
                    {prop.title === "Mobile" && (
                      <div className="grid md:grid-cols-2 gap-4 mb-8">
                        <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                          <div className="flex-shrink-0">
                            <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                          </div>
                          <span className="text-gray-700 font-medium">Responsive design across all devices</span>
                        </div>
                        <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                          <div className="flex-shrink-0">
                            <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                          </div>
                          <span className="text-gray-700 font-medium">Touch-optimized user interface</span>
                        </div>
                      </div>
                    )}
                    
                    {/* Features Grid - Only show for Analytics */}
                    {prop.title === "Analytics" && (
                      <div className="grid md:grid-cols-2 gap-4 mb-8">
                        <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                          <div className="flex-shrink-0">
                            <div className="w-5 h-5 bg-teal-500 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                          </div>
                          <span className="text-gray-700 font-medium">Detailed performance tracking</span>
                        </div>
                        <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                          <div className="flex-shrink-0">
                            <div className="w-5 h-5 bg-teal-500 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                          </div>
                          <span className="text-gray-700 font-medium">Conversion rate optimization</span>
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
                      
                      <a href="#contact" className={`w-full bg-gradient-to-r ${prop.buttonGradient} text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2 group mb-4`}>
                        <span>Book Now</span>
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                      
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
  );
};

export default ValuePropositionSection;