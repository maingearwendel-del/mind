import React, { useState, useEffect } from 'react';
import { Check, ArrowRight, ChevronDown, Monitor, ShoppingCart, WholeWord as Wordpress, Palette, Search, Smartphone, Shield, Zap, FileText, Globe, TrendingUp, Target, BarChart3, Wrench } from 'lucide-react';
import { Play } from 'lucide-react';
import MaintenancePlanAccordion from './MaintenancePlanAccordion';
import DesignSubscription from '../components/DesignSubscription';
import GuaranteeModal from './GuaranteeModal';

const WhatIDo: React.FC = () => {
  const [isGuaranteeModalOpen, setIsGuaranteeModalOpen] = useState(false);

  const themeClasses = {
    text: 'text-gray-900',
    textSecondary: 'text-gray-600'
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [isPlaying, setIsPlaying] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const handlePlayClick = () => {
    setIsLightboxOpen(true);
  };
 
  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setIsPlaying(false);
  };

  const [isWebsiteDesignOpen, setIsWebsiteDesignOpen] = useState(false);

  useEffect(() => {
    // Check if URL hash indicates we should open website design accordion
    const hash = window.location.hash;
    if (hash === '#website-design') {
      setOpenAccordion(0); // Website Design is the first accordion (index 0)
      // Remove the hash from URL after opening
      window.history.replaceState(null, '', window.location.pathname);
    }
  }, []);
  const [isBrandIdentityOpen, setIsBrandIdentityOpen] = useState(false);
  const [isMarketingOpen, setIsMarketingOpen] = useState(false);

  const handleWebsiteDesignToggle = () => {
    setIsWebsiteDesignOpen(!isWebsiteDesignOpen);
    if (!isWebsiteDesignOpen) {
      setIsBrandIdentityOpen(false);
      setIsMarketingOpen(false);
    }
  };

  const handleBrandIdentityToggle = () => {
    setIsBrandIdentityOpen(!isBrandIdentityOpen);
    if (!isBrandIdentityOpen) {
      setIsWebsiteDesignOpen(false);
      setIsMarketingOpen(false);
    }
  };

  const handleMarketingToggle = () => {
    setIsMarketingOpen(!isMarketingOpen);
    if (!isMarketingOpen) {
      setIsWebsiteDesignOpen(false);
      setIsBrandIdentityOpen(false);
    }
  };

  return (
    <>
    <section className="pt-12 pb-12 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10 mt-16 ">
        <div className="text-center mb-20 mt-24"> 
           
                    <div className={`inline-block ${themeClasses.textSecondary} text-sm font-medium tracking-wider uppercase mb-4`}>
            OUR SERVICES
          </div>
           <h2 className="text-[2.75rem] lg:text-6xl font-bold mb-2 leading-tight lg:leading-tight">
                <span className="text-[#3d3d3d]">Be The <span className="block lg:hidden"></span>Business That </span>
                <br  />
           <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-black lg:text-6xl text-[2.4rem]">Customers Trust,</span><span className="block lg:hidden"></span><span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-black lg:text-6xl text-[3.75rem]"> Instantly</span>  <span className="animate-wobble text-[3.75rem]">🤝</span>
              </h2> 

        </div>  
        
        <div className="max-w-7xl mx-auto lg:px-0 px-2"> 
          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 mb-8">
            {/* Web Design Card */}
            <div 
              onClick={handleWebsiteDesignToggle}
              className=" bg-gradient-to-r from-indigo-50 via-purple-50 to-indigo-50 hover:from-indigo-100 hover:via-purple-100 hover:to-indigo-100 rounded-[40px] p-6 sm:p-4 lg:p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-indigo-100 hover:border-indigo-200 ring-2 ring-indigo-50 hover:ring-indigo-100 group cursor-pointer overflow-hidden"
            >
                        
              <h3 className="text-[40px] lg:text-[45px]  font-bold mb-4 leading-normal text-gray-900">Website
 <span className="whitespace-nowrap"><span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> Design</span> </span>
              </h3>
              <p className="text-gray-600 text-base lg:text-lg mb-6 leading-relaxed">
                We create memorable brand identities that build trust, enhance engagement, and ensure your business leaves a lasting impression on your audience across all platforms and media.
              </p>
<div class="hidden md:block">
<div className="inline-flex items-center gap-1 bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-semibold mb-4">
  <img src="/Shopify_logo.svg" alt="Shopify" className="w-[80px] h-6 hidden md:block" />
              </div>              <div className="inline-flex items-center gap-1 bg-indigo-100 text-indigo-700 px-3 py-1 ml-2  rounded-full text-xs font-semibold mb-4">
<img src="/WordPress_logo.svg" alt="Wordpress" className="w-[80px] h-6 hidden md:block" />
 
              </div>
                  <div className=" inline-flex items-center gap-1 bg-indigo-100 text-indigo-700 px-3 py-1 ml-3 rounded-full text-xs font-semibold mb-4">
  <img src="/WooCommerce_logo.svg" alt="WooCommerce" className="w-[80px] h-6 hidden md:block" />

              </div>

</div>
                         
              <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              
                <div className="flex flex-col space-y-3"> 

                             <div className="hidden md:block">     
                          
                <div className="flex items-center space-x-3">
                  <Check className=" w-4 h-4 text-green-500" />
                  <span className={`text-sm ${themeClasses.textTertiary}`}>Responsive Design</span>
                </div>
                <div className="flex items-center space-x-3 mt-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className={`text-sm ${themeClasses.textTertiary}`}>E-commerce</span>
                </div>                
                <div className="flex items-center space-x-3 mt-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className={`text-sm ${themeClasses.textTertiary}`}>SEO Optimization</span>
                </div>
                </div>

                  {/* New Two-Column Bullet Points */}
                  <div className="grid grid-cols-2 gap-4 mt-4 block lg:hidden">
                    {/* Left Column */}
                    <div className="flex flex-col space-y-3 mb-6">
                      <div className="flex items-center space-x-3">
                              <div className="flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <Check className="w-4 h-4 text-green-500" />
                          </svg>
                        </div>
                         <span className={`whitespace-nowrap text-sm ${themeClasses.textTertiary}`}>Responsive Design</span>
                      </div>
                      
                      <div className="flex items-center space-x-3 ">
                               <div className="flex items-center justify-center flex-shrink-0 ">
                          <svg className=" w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <Check className="w-4 h-4 text-green-500" />
                          </svg>
                        </div>
                        <span className={`text-sm whitespace-nowrap ${themeClasses.textTertiary}`}>E-commerce</span>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <Check className="w-4 h-4 text-green-500" />
                          </svg>
                        </div>
                           <span className={`text-sm whitespace-nowrap ${themeClasses.textTertiary}`}>SEO Optimization</span>
                      </div>

                      <div className="flex items-center space-x-3">
                        <div className="flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <Check className="w-4 h-4 text-green-500" />
                          </svg>
                        </div>
                           <span className={`text-sm whitespace-nowrap ${themeClasses.textTertiary}`}>SEO Optimization</span>
                      </div>
                      
                    </div>

                    
                     
                    {/* Right Column */}
                    <div className="flex flex-col space-y-3 justify-end ml-6 mb-5 items-end">
                      <div className="flex items-center space-x-3">
             
                        <span className="text-gray-700 font-medium"> <div className="inline-flex items-center gap-1 bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-semibold mb-0">
 <img src="/Shopify_logo.svg" alt="Shopify" className="w-[80px] h-6" />
             
              </div>            </span>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                   

<div className="flex items-center gap-1 bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full text-xs font-semibold mb-0 justify-end">
  <img src="/WooCommerce_logo.svg" alt="WooCommerce" className="w-[80px] h-6" />
</div>

                      </div>
                      
                      <div className="flex items-center space-x-3">
         
                                   <div className="inline-flex items-center gap-1 bg-indigo-100 text-indigo-700 px-3 py-1  rounded-full text-xs font-semibold mb-0">
<img src="/WordPress_logo.svg" alt="Wordpress" className="w-[80px] h-6" />

              </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col space-y-3"> 
                 <div className="mx-auto md:ml-auto w-full md:w-[140px] h-full md:h-[80px] rounded-3xl overflow-hidden shadow-lg relative bg-gradient-to-br from-gray-900 to-gray-800 hover:scale-105 transition-transform duration-300 flex-shrink-0">
  {/* Video Thumbnail */}
  <button
    onClick={handlePlayClick} // Assuming handlePlayClick and isPlaying states are defined in WhatIDo.tsx
    className="relative w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center cursor-pointer hover:bg-gradient-to-br hover:from-gray-600 hover:to-gray-700 transition-all duration-300 group"
  >
    <img
      src="https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop"
      alt="SEO Optimization Video"
      className="w-full h-full object-cover"
    />

    {/* Play Button Overlay */}
    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
      <div className="w-14 h-14 md:w-10 md:h-10 bg-gradient-to-r from-indigo-500/70 to-purple-500/70 hover:from-indigo-600/80 hover:to-purple-600/80 rounded-full flex items-center justify-center shadow-lg hover:scale-110 group-hover:animate-bounce-up-down transition-all duration-300 pointer-events-none">
        <Play className="w-6 h-6 md:w-5 md:h-5 text-white ml-0.5 transition-colors" fill="currentColor" />
      </div>
    </div>

    {/* Video Duration */}
    <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-0.5 rounded-full text-xs md:text-xs font-medium">
      2:15
    </div>
  </button>
</div>

                  
                </div>
                
               
               
              </div>

              <div className="flex items-center justify-between">
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
                  className="bg-gradient-to-r from-purple-500 to-indigo-500  text-white px-8 py-3 rounded-full text-sm font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Book Now
                </button>
                <div className="flex flex-col items-end">
                  <div className="text-right mb-1 text-xs text-gray-500">
                      <span className="text-sm text-gray-500 font-light tracking-wide leading-none">from </span><span className="text-sm font-semibold text-gray-700">$2,500</span>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 text-md font-medium transition-all duration-300 flex items-center space-x-1 group">
                  <span onClick={handleWebsiteDesignToggle} className="hover:scale-110 transition-transform duration-300">Learn More</span>
                  <ChevronDown onClick={handleWebsiteDesignToggle} className={`w-4 h-4 transition-transform duration-300 cursor-pointer ${
                    isWebsiteDesignOpen 
                      ? 'rotate-180' 
                      : ''
                  }`} />
                </button>
                </div>
              </div>
            </div>

            {/* Website Design Mobile Accordion Content */}
            <div className={`lg:hidden col-span-1 overflow-hidden transition-all duration-500 ease-in-out ${
              isWebsiteDesignOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <div className="bg-gradient-to-r from-indigo-50 via-purple-50 to-indigo-50 rounded-3xl p-8 mb-8 border-2 border-indigo-100 shadow-xl ring-2 ring-indigo-50 relative">
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                    Website <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Design</span>
                  </h3>
                  
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    We specialize in creating high-performance Shopify and WordPress websites that convert visitors into customers with stunning design and flawless functionality.
                  </p>
                  
                  {/* Features Grid */}
                  <div className="grid gap-3 mb-6">
                    <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                      <div className="flex-shrink-0">
                        <Smartphone className="w-5 h-5 text-indigo-600" />
                      </div>
                      <span className="text-gray-700 font-medium">Mobile-First Responsive Design</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                      <div className="flex-shrink-0">
                        <Search className="w-5 h-5 text-green-600" />
                      </div>
                      <span className="text-gray-700 font-medium">SEO-Optimized Architecture</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                      <div className="flex-shrink-0">
                        <ShoppingCart className="w-5 h-5 text-green-600" />
                      </div>
                      <span className="text-gray-700 font-medium">E-commerce Integration</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                      <div className="flex-shrink-0">
                        <Shield className="w-5 h-5 text-blue-600" />
                      </div>
                      <span className="text-gray-700 font-medium">Security & Performance</span>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gray-900 mb-4">
                      $2,500<span className="text-xl text-gray-600">+</span>
                    </div>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        const element = document.getElementById('contact');
                        if (element) {
                          const isMobile = window.innerWidth < 768;
                          const offset = isMobile ? 1830 : 0;
                          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                          window.scrollTo({
                            top: elementPosition + offset,
                            behavior: 'smooth'
                          });
                        }
                      }}
                      className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                    Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

 {/* Brand ID Identity Card */}
            <div 
              onClick={handleBrandIdentityToggle}
              className="bg-gradient-to-r from-purple-50 via-pink-50 to-purple-50 hover:from-purple-100 hover:via-pink-100 hover:to-purple-100 rounded-[40px] p-6 sm:p-4 lg:p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-purple-100 hover:border-purple-200 ring-2 ring-purple-50 hover:ring-purple-100 group cursor-pointer overflow-hidden"
            >
                        
              <h3 className="text-[40px] lg:text-[45px]  font-bold mb-4 leading-normal text-gray-900">Brand
 <span className="whitespace-nowrap"><span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"> Identity</span> </span>
              </h3>
              <p className="text-gray-600 text-base lg:text-lg mb-6 leading-relaxed">
                We create memorable brand identities that build trust, enhance engagement, and ensure your business leaves a lasting impression on your audience across all platforms and media.
              </p>
<div class="hidden md:block">

                                             <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-3 py-2 rounded-full text-xs font-semibold mb-4">                PROFESSIONAL              </div>      
  <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-3 py-2 rounded-full text-xs font-semibold mb-4 ml-4">
                MEMORABLE              </div>        <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-3 py-2 rounded-full text-xs font-semibold mb-4 ml-4">

             POWERFUL
              </div>

</div>
                         
              <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              
                <div className="flex flex-col space-y-3"> 

                             <div className="hidden md:block">     
                          
                <div className="flex items-center space-x-3">
                  <Check className=" w-4 h-4 text-green-500" />
                  <span className={`text-sm ${themeClasses.textTertiary}`}>Responsive Design</span>
                </div>
                <div className="flex items-center space-x-3 mt-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className={`text-sm ${themeClasses.textTertiary}`}>E-commerce</span>
                </div>                
                <div className="flex items-center space-x-3 mt-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className={`text-sm ${themeClasses.textTertiary}`}>SEO Optimization</span>
                </div>
                </div>

                  {/* New Two-Column Bullet Points */}
                  <div className="grid grid-cols-2 gap-4 mt-4 block lg:hidden">
                    {/* Left Column */}
                    <div className="flex flex-col space-y-3 mb-6">
                      <div className="flex items-center space-x-3">
                              <div className="flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <Check className="w-4 h-4 text-green-500" />
                          </svg>
                        </div>
                         <span className={`whitespace-nowrap text-sm ${themeClasses.textTertiary}`}>Responsive Design</span>
                      </div>
                      
                      <div className="flex items-center space-x-3 ">
                               <div className="flex items-center justify-center flex-shrink-0 ">
                          <svg className=" w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <Check className="w-4 h-4 text-green-500" />
                          </svg>
                        </div>
                        <span className={`text-sm whitespace-nowrap ${themeClasses.textTertiary}`}>E-commerce</span>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <Check className="w-4 h-4 text-green-500" />
                          </svg>
                        </div>
                           <span className={`text-sm whitespace-nowrap ${themeClasses.textTertiary}`}>SEO Optimization</span>
                      </div>

                      <div className="flex items-center space-x-3">
                        <div className="flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <Check className="w-4 h-4 text-green-500" />
                          </svg>
                        </div>
                           <span className={`text-sm whitespace-nowrap ${themeClasses.textTertiary}`}>XXX</span>
                      </div>
                      
                    </div>

                    
                     
                    {/* Right Column */}
                    <div className="flex flex-col space-y-3 justify-end ml-6 mb-5 items-end">
                      <div className="flex items-center space-x-3">
             
  <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-3 py-2 rounded-full text-xs font-semibold mb-0">                PROF 1              </div> 
                      </div>
                      
                      <div className="flex items-center space-x-3">
                   

  <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-3 py-2 rounded-full text-xs font-semibold mb-0">                PROF  2             </div> 

                      </div>
                      
                      <div className="flex items-center space-x-3">
         
  <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-3 py-2 rounded-full text-xs font-semibold mb-0">                PROF 3             </div> 
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col space-y-3"> 
                 <div className="mx-auto md:ml-auto w-full md:w-[140px] h-full md:h-[80px] rounded-3xl overflow-hidden shadow-lg relative bg-gradient-to-br from-gray-900 to-gray-800 hover:scale-105 transition-transform duration-300 flex-shrink-0">
  {/* Video Thumbnail */}
  <button
    onClick={handlePlayClick} // Assuming handlePlayClick and isPlaying states are defined in WhatIDo.tsx
    className="relative w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center cursor-pointer hover:bg-gradient-to-br hover:from-gray-600 hover:to-gray-700 transition-all duration-300 group"
  >
    <img
      src="https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop"
      alt="SEO Optimization Video"
      className="w-full h-full object-cover"
    />

    {/* Play Button Overlay */}
    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
      <div className="w-14 h-14 md:w-10 md:h-10 bg-gradient-to-r from-purple-500/70 to-pink-500/70 hover:from-indigo-purple/80 hover:to-pink-600/80 rounded-full flex items-center justify-center shadow-lg hover:scale-110 group-hover:animate-bounce-up-down transition-all duration-300 pointer-events-none">
        <Play className="w-6 h-6 md:w-5 md:h-5 text-white ml-0.5 transition-colors" fill="currentColor" />
      </div>
    </div>

    {/* Video Duration */}
    <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-0.5 rounded-full text-xs md:text-xs font-medium">
      2:16
    </div>
  </button>
</div>

                  
                </div>
                
               
               
              </div>

              <div className="flex items-center justify-between">
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
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full text-sm font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Book Now
                </button>
                <div className="flex flex-col items-end">
                  <div className="text-right mb-1 text-xs text-gray-500">
                      <span className="text-sm text-gray-500 font-light tracking-wide leading-none">from </span><span className="text-sm font-semibold text-gray-700">$2,500</span>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 text-md font-medium transition-all duration-300 flex items-center space-x-1 group">
                  <span onClick={handleBrandIdentityToggle} className="hover:scale-110 transition-transform duration-300">Learn More</span>
                  <ChevronDown onClick={handleBrandIdentityToggle} className={`w-4 h-4 transition-transform duration-300 cursor-pointer ${
                    isBrandIdentityOpen 
                      ? 'rotate-180'
                      : ''
                  }`} />
                </button>
                </div>
              </div>
            </div>
 

            {/* Brand Identity Mobile Accordion Content */}
            <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
              isBrandIdentityOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <div className="bg-gradient-to-r from-purple-50 via-pink-50 to-purple-50 rounded-3xl p-8 mb-8 border-2 border-purple-100 shadow-xl ring-2 ring-purple-50 relative">
                <div className="relative z-10">
                  <h3 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
                    Brand <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Identity</span>
                  </h3>
                  
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    We create memorable brand identities that build trust, enhance engagement, and ensure your business leaves a lasting impression on your audience across all platforms and media.
                  </p>
                  
                  {/* Features Grid */}
                  <div className="grid gap-3 mb-6">
                    <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                      <div className="flex-shrink-0">
                        <Palette className="w-5 h-5 text-purple-600" />
                      </div>
                      <span className="text-gray-700 font-medium">Custom Logo Design</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                      <div className="flex-shrink-0">
                        <FileText className="w-5 h-5 text-pink-600" />
                      </div>
                      <span className="text-gray-700 font-medium">Brand Guidelines Document</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                      <div className="flex-shrink-0">
                        <Zap className="w-5 h-5 text-purple-600" />
                      </div>
                      <span className="text-gray-700 font-medium">Color Palette & Typography</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                      <div className="flex-shrink-0">
                        <Check className="w-5 h-5 text-green-600" />
                      </div>
                      <span className="text-gray-700 font-medium">Business Card Design</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                      <div className="flex-shrink-0">
                        <Globe className="w-5 h-5 text-pink-600" />
                      </div>
                      <span className="text-gray-700 font-medium">Social Media Templates</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                      <div className="flex-shrink-0">
                        <FileText className="w-5 h-5 text-purple-600" />
                      </div>
                      <span className="text-gray-700 font-medium">Marketing Materials</span>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gray-900 mb-4">
                      $3,500<span className="text-xl text-gray-600">/project</span>
                    </div>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        const element = document.getElementById('contact');
                        if (element) {
                          const isMobile = window.innerWidth < 768;
                          const offset = isMobile ? 1830 : 0;
                          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                          window.scrollTo({
                            top: elementPosition + offset,
                            behavior: 'smooth'
                          });
                        }
                      }}
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full font-semibent transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>











{/* Marketing 2*/}
            <div 
              onClick={handleMarketingToggle}
              className="bg-gradient-to-r from-blue-50 via-cyan-50 to-blue-50 hover:from-blue-100 hover:via-cyan-100 hover:to-blue-100 rounded-[40px] p-6 sm:p-4 lg:p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-blue-100 hover:border-blue-200 ring-2 ring-blue-50 hover:ring-blue-100 group cursor-pointer overflow-hidden"
            >
                        
              <h3 className="text-[40px] lg:text-[45px]  font-bold mb-4 leading-normal text-gray-900">
 <span className="whitespace-nowrap">Ads/<span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Marketing</span> </span>
              </h3>
              <p className="text-gray-600 text-base lg:text-lg mb-6 leading-relaxed">
                Results that set you up for long-term success. From social media to email campaigns, we create strategies that resonate with your audience and convert leads into customers.
              </p>
<div class="hidden md:block"> 
 
  
  
 <div className="inline-flex items-center gap-1 bg-blue-100 text-blue-700 px-3 pt-2 pb-2 py-[8px] rounded-full text-xs font-semibold mb-4">
   <img src="/meta_logo.svg" alt="Meta Logo" className="w-[65px] h-[13px]  hidden md:block" />    </div>    
  <div className="inline-flex items-center gap-1 bg-blue-100 text-blue-700  px-3  pt-1 pb-1 rounded-full text-xs font-semibold ml-4 mb-4">
   <img src="/Google_logo.svg" alt="Google Logo" className=" h-[18px]  hidden md:block" />    </div>   
    <div className="inline-flex items-center gap-1 bg-blue-100 text-blue-700  px-3  pt-1 pb-1 rounded-full text-xs font-semibold ml-4 mb-4">
📨  EMAIL CAMPAIGNS</div> 
  </div>
                           
              <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              
                <div className="flex flex-col space-y-3"> 

                             <div className="hidden md:block">     
                          
                <div className="flex items-center space-x-3">
                  <Check className=" w-4 h-4 text-green-500" />
                  <span className={`text-sm ${themeClasses.textTertiary}`}>Responsive Design</span>
                </div>
                <div className="flex items-center space-x-3 mt-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className={`text-sm ${themeClasses.textTertiary}`}>E-commerce</span>
                </div>                
                <div className="flex items-center space-x-3 mt-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className={`text-sm ${themeClasses.textTertiary}`}>SEO Optimization</span>
                </div>
                </div>

                  {/* New Two-Column Bullet Points */}
                  <div className="grid grid-cols-2 gap-4 mt-4 block lg:hidden">
                    {/* Left Column */}
                    <div className="flex flex-col space-y-3 mb-6">
                      <div className="flex items-center space-x-3">
                              <div className="flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <Check className="w-4 h-4 text-green-500" />
                          </svg>
                        </div>
                         <span className={`whitespace-nowrap text-sm ${themeClasses.textTertiary}`}>Social Media</span>
                      </div>
                      
                      <div className="flex items-center space-x-3 ">
                               <div className="flex items-center justify-center flex-shrink-0 ">
                          <svg className=" w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <Check className="w-4 h-4 text-green-500" />
                          </svg>
                        </div>
                        <span className={`text-sm whitespace-nowrap ${themeClasses.textTertiary}`}>Email Marketing</span>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <Check className="w-4 h-4 text-green-500" />
                          </svg>
                        </div>
                           <span className={`text-sm whitespace-nowrap ${themeClasses.textTertiary}`}>PPC Advertising</span>
                      </div>

                      <div className="flex items-center space-x-3">
                        <div className="flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <Check className="w-4 h-4 text-green-500" />
                          </svg>
                        </div>
                           <span className={`text-sm whitespace-nowrap ${themeClasses.textTertiary}`}>XXX</span>
                      </div>
                      
                    </div>

                    
                     
                    {/* Right Column */}
                    <div className="flex flex-col space-y-3 justify-end ml-6 mb-5 items-end">
                      <div className="flex items-center space-x-3">
             
<div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-2 rounded-full text-xs font-semibold mb-0">               PROF 1              </div> 
                      </div>
                      
                      <div className="flex items-center space-x-3">
                   

 <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-2 rounded-full text-xs font-semibold mb-0">                 PROF  2             </div> 

                      </div>
                      
                      <div className="flex items-center space-x-3">
         
<div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-2 rounded-full text-xs font-semibold mb-0">                   PROF 3             </div> 
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col space-y-3"> 
                 <div className="mx-auto md:ml-auto w-full md:w-[140px] h-full md:h-[80px] rounded-3xl overflow-hidden shadow-lg relative bg-gradient-to-br from-gray-900 to-gray-800 hover:scale-105 transition-transform duration-300 flex-shrink-0">
  {/* Video Thumbnail */}
  <button
    onClick={handlePlayClick} // Assuming handlePlayClick and isPlaying states are defined in WhatIDo.tsx
    className="relative w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center cursor-pointer hover:bg-gradient-to-br hover:from-gray-600 hover:to-gray-700 transition-all duration-300 group"
  >
    <img
      src="https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop"
      alt="SEO Optimization Video"
      className="w-full h-full object-cover"
    />

    {/* Play Button Overlay */}
    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
      <div className="w-14 h-14 md:w-10 md:h-10  bg-gradient-to-r from-blue-500/70 to-teal-500/70 hover:from-blue-600/80 hover:to-teal-600/80 rounded-full flex items-center justify-center shadow-lg hover:scale-110 group-hover:animate-bounce-up-down transition-all duration-300 pointer-events-none">
        <Play className="w-6 h-6 md:w-5 md:h-5 text-white ml-0.5 transition-colors" fill="currentColor" />
      </div>
    </div>

    {/* Video Duration */}
    <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-0.5 rounded-full text-xs md:text-xs font-medium">
      2:15
    </div>
  </button>
</div>

                  
                </div>
                
               
               
              </div>

              <div className="flex items-center justify-between">
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
                  className=" bg-gradient-to-r from-blue-500 to-teal-500  text-white px-8 py-3 rounded-full text-sm font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Book Now
                </button>
                <div className="flex flex-col items-end">
                  <div className="text-right mb-1 text-xs text-gray-500">
                      <span className="text-sm text-gray-500 font-light tracking-wide leading-none">from </span><span className="text-sm font-semibold text-gray-700">$2,500</span>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 text-md font-medium transition-all duration-300 flex items-center space-x-1 group">
                  <span onClick={handleMarketingToggle} className="hover:scale-110 transition-transform duration-300">Learn More</span>
                  <ChevronDown onClick={handleMarketingToggle} className={`w-4 h-4 transition-transform duration-300 cursor-pointer ${
                    isMarketingOpen 
                      ? 'rotate-180' 
                      : ''
                  }`} />
                </button>
                </div>
              </div>
            </div>
 

            {/* Marketing Mobile Accordion Content */}
            <div className={`lg:hidden col-span-1 overflow-hidden transition-all duration-500 ease-in-out ${
              isMarketingOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <div className="bg-gradient-to-r from-blue-50 via-cyan-50 to-blue-50 rounded-3xl p-8 mb-8 border-2 border-blue-100 shadow-xl ring-2 ring-blue-50 relative">
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                    <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Marketing 2 Mobile</span>
                  </h3>
                  
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    We design marketing campaigns that drive results and set you up for long-term success. From social media to email campaigns, we create strategies that resonate with your audience and convert leads into customers.
                  </p>
                  
                  {/* Features Grid */}
                  <div className="grid gap-3 mb-6">
                    <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                      <div className="flex-shrink-0">
                        <Globe className="w-5 h-5 text-blue-600" />
                      </div>
                      <span className="text-gray-700 font-medium">Social Media Management</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                      <div className="flex-shrink-0">
                        <FileText className="w-5 h-5 text-cyan-600" />
                      </div>
                      <span className="text-gray-700 font-medium">Email Marketing Campaigns</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                      <div className="flex-shrink-0">
                        <Search className="w-5 h-5 text-blue-600" />
                      </div>
                      <span className="text-gray-700 font-medium">PPC Advertising</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                      <div className="flex-shrink-0">
                        <BarChart3 className="w-5 h-5 text-cyan-600" />
                      </div>
                      <span className="text-gray-700 font-medium">Analytics & Reporting</span>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gray-900 mb-4">
                      $1,200<span className="text-xl text-gray-600">+</span>
                    </div>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        const element = document.getElementById('contact');
                        if (element) {
                          const isMobile = window.innerWidth < 768;
                          const offset = isMobile ? 1830 : 0;
                          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                          window.scrollTo({
                            top: elementPosition + offset,
                            behavior: 'smooth'
                          });
                        }
                      }}
                      className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>


          </div>

          {/* Website Design Mobile Accordion Content */}
          <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isWebsiteDesignOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
          } hidden lg:block`}>
            <div className="mt-6 bg-gradient-to-r from-indigo-50 via-purple-50 to-indigo-50 rounded-3xl p-8 border-2 border-indigo-100 shadow-xl ring-2 ring-indigo-50 relative">
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                 Mobile Website <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Design</span>
                </h3>
                
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  We specialize in creating high-performance Shopify and WordPress websites that convert visitors into customers with stunning design and flawless functionality.
                </p>
                
                {/* Features Grid */}
                <div className="grid gap-3 mb-6">
                  <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                    <div className="flex-shrink-0">
                      <Smartphone className="w-5 h-5 text-indigo-600" />
                    </div>
                    <span className="text-gray-700 font-medium">Mobile-First Responsive Design</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                    <div className="flex-shrink-0">
                      <Search className="w-5 h-5 text-green-600" />
                    </div>
                    <span className="text-gray-700 font-medium">SEO-Optimized Architecture</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                    <div className="flex-shrink-0">
                      <Palette className="w-5 h-5 text-purple-600" />
                    </div>
                    <span className="text-gray-700 font-medium">Custom Theme Development</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                    <div className="flex-shrink-0">
                      <Shield className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="text-gray-700 font-medium">Security & Performance Optimization</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                    <div className="flex-shrink-0">
                      <Zap className="w-5 h-5 text-orange-600" />
                    </div>
                    <span className="text-gray-700 font-medium">Fast Loading Speed</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                    <div className="flex-shrink-0">
                      <Check className="w-5 h-5 text-green-600" />
                    </div>
                    <span className="text-gray-700 font-medium">Quality Assurance Testing</span>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-900 mb-4">
                    $2,500<span className="text-xl text-gray-600">/project</span>
                  </div>
       
                </div>
              </div>
            </div>
          </div>

          {/* Brand Identity Desktop Accordion Content */}
          <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isBrandIdentityOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
          } hidden lg:block`}>
            <div className="bg-gradient-to-r from-purple-50 via-pink-50 to-purple-50 rounded-3xl p-8 lg:p-12 border-2 border-purple-100 shadow-xl ring-2 ring-purple-50 relative mb-20">
              {/* Decorative Elements */}
              <div className="absolute top-8 right-8 w-20 h-20 opacity-30">
                <div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-xl"></div>
              </div>
              <div className="absolute bottom-8 left-8 w-16 h-16 opacity-30">
                <div className="w-full h-full bg-gradient-to-br from-pink-400 to-purple-400 rounded-full blur-xl"></div>
              </div>

              <div className="relative z-10">
                <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-start">
                  {/* Left Column - Content */}
                  <div className="lg:col-span-2">
                    <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                      Brand <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Identity</span>
                    </h3>
                    
                    <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                      We create memorable brand identities that build trust, enhance engagement, and ensure your business leaves a lasting impression on your audience across all platforms and media.
                    </p>
                    
                    {/* Brand Identity Highlights */}
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-white/60 rounded-2xl p-6 border border-gray-100">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                            <Palette className="w-5 h-5 text-white" />
                          </div>
                          <h4 className="text-xl font-bold text-gray-900">Logo & Visual Identity</h4>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Custom logo design with comprehensive brand guidelines and visual identity systems.
                        </p>
                      </div>
                      
                      <div className="bg-white/60 rounded-2xl p-6 border border-gray-100">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                            <Shield className="w-5 h-5 text-white" />
                          </div>
                          <h4 className="text-xl font-bold text-gray-900">Brand Strategy</h4>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Strategic brand positioning and messaging that resonates with your target audience.
                        </p>
                      </div>
                    </div>
                    
                    {/* Features Grid */}
                    <div className="grid md:grid-cols-2 gap-4 mb-8">
                      <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                        <div className="flex-shrink-0">
                          <Palette className="w-5 h-5 text-purple-600" />
                        </div>
                        <span className="text-gray-700 font-medium">Custom Logo Design</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                        <div className="flex-shrink-0">
                          <FileText className="w-5 h-5 text-pink-600" />
                        </div>
                        <span className="text-gray-700 font-medium">Brand Guidelines Document</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                        <div className="flex-shrink-0">
                          <Zap className="w-5 h-5 text-purple-600" />
                        </div>
                        <span className="text-gray-700 font-medium">Color Palette & Typography</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                        <div className="flex-shrink-0">
                          <Check className="w-5 h-5 text-green-600" />
                        </div>
                        <span className="text-gray-700 font-medium">Business Card Design</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                        <div className="flex-shrink-0">
                          <Globe className="w-5 h-5 text-pink-600" />
                        </div>
                        <span className="text-gray-700 font-medium">Social Media Templates</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                        <div className="flex-shrink-0">
                          <FileText className="w-5 h-5 text-purple-600" />
                        </div>
                        <span className="text-gray-700 font-medium">Marketing Materials</span>
                      </div>


   <div className="max-w-6xl mx-auto px-6"> 

        {/* Trusted by 100+ brands scrolling section */}
        <div className="mt-8 lg:mt-4 lg:-mb-10">
          <p className="text-left text-gray-400 text-sm mb-8 tracking-wider uppercase">
           Artist & Influencer Collabs
          </p>
       <div className="relative overflow-hidden">
            <div className="flex w-max animate-seamless-scroll">
            
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

                      
                    </div>
                  </div>
                  
                  {/* Right Column - Pricing */}
                  <div className="lg:col-span-1">
                    <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200 sticky top-8">
                      <div className="absolute top-6 right-6 w-8 h-8">
                        <Palette className="w-6 h-6 text-purple-400" />
                      </div>
                        
                      <div className="mb-6">
                        <h4 className="text-2xl font-bold text-gray-900 mb-4">Pricing Tiers</h4>
                        
                        <div className="space-y-4">
                          <div className="border-l-4 border-purple-500 pl-4">
                            <div className="text-lg font-bold text-gray-900">Logo Package</div>
                            <div className="text-sm text-gray-600">Starting at $1,500</div>
                          </div>
                          
                          <div className="border-l-4 border-pink-500 pl-4">
                            <div className="text-lg font-bold text-gray-900">Brand Identity</div>
                            <div className="text-sm text-gray-600">Starting at $3,500</div>
                          </div>
                          
                          <div className="border-l-4 border-purple-500 pl-4">
                            <div className="text-lg font-bold text-gray-900">Complete Rebrand</div>
                            <div className="text-sm text-gray-600">Starting at $5,500</div>
                          </div>
                        </div>
                      </div>
                      
                 <a href="#contact" className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2 group mb-4">
  <span>Book Now</span>

</a>
       <div className="text-center text-sm text-gray-500">
                    <div className="flex items-center justify-center ">
                      <span className="text-2xl">💯</span> <span className="font-semibold">Satisfaction Guarantee</span>
                    </div>
                  </div>
                      
                    </div>
                    
                    {/* Recent Projects Preview */}
                    <div className="mt-6 bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                      <h5 className="font-bold text-gray-900 text-lg mb-4">Recent Projects</h5>
                      <div className="grid grid-cols-2 gap-3">
                        <img 
                          src="/portfolio-slider/coming_soon.webp" 
                          alt="Recent brand project 1" 
                          className="w-full h-16 object-cover rounded-lg"
                        />
                        <img 
                          src="/portfolio-slider/coming_soon.webp" 
                          alt="Recent brand project 2" 
                          className="w-full h-16 object-cover rounded-lg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Website Design Desktop Accordion Content */}
          <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isWebsiteDesignOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
          } hidden lg:block`}>
            <div className="bg-gradient-to-r from-indigo-50 via-purple-50 to-indigo-50 rounded-3xl p-8 lg:p-12 border-2 border-indigo-100 shadow-xl ring-2 ring-indigo-50 relative mb-20">
              {/* Decorative Elements */}
              <div className="absolute top-8 right-8 w-20 h-20 opacity-30">
                <div className="w-full h-full bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full blur-xl"></div>
              </div>
              <div className="absolute bottom-8 left-8 w-16 h-16 opacity-30">
                <div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-xl"></div>
              </div>

              <div className="relative z-10">
                <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-start">
                  {/* Left Column - Content */}
                  <div className="lg:col-span-2">
                    <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2 leading-tight">
                      Website <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Design</span>
                    </h3>
                    
                    <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                      We specialize in creating high-performance Shopify and WordPress websites that convert visitors into customers with stunning design and flawless functionality.
                    </p>
                    
                    {/* Platform Highlights */}
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-white/60 rounded-2xl p-6 border border-gray-100">
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="  border-4 w-10 h-10   w-11 h-11 relative z-10 transition-all duration-300 rounded-full flex items-center justify-center">
                                            <img 
                  src="/shopify-circle-logo.webp"
                  alt="Shopify Ecommerce Logo"
                  className=""
                />
                          </div> 

                                        {/* First set of logos */}
 


 
                          
 
                       <h4 className="font-bold text-gray-900  "><span className="text-xl font-bold text-gray-900">Shopify Store</span>                              <div className="flex items-center ">
<span className="animate-wobble ">🔥</span> <div className="flex items-center">
  <span className="bg-orange-500 px-2  py-0.5 text-white px-1 rounded-full text-[9px] font-medium uppercase flex-shrink-0">
    POPULAR
  </span>  </div> 
</div> </h4> 
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Custom Shopify stores with advanced features, payment integration, and conversion optimization.
                        </p>
                      </div>
                      
                      <div className="bg-white/60 rounded-2xl p-6 border border-gray-100">
                        <div className="flex items-center space-x-0 mb-4">
                          <div className="  border-4 w-10 h-10   w-11 h-11 relative z-10 transition-all duration-300 rounded-full flex items-center justify-center">
                                            <img 
                  src="/wordpress-circle-logo.webp"
                  alt="Wordpress Logo"
                  className=""
                /> 
                          </div> 
                                                    <div className=" border-4 relative absolute -left-4 z-10 w-11 h-11  rounded-full flex items-center justify-center">
                                            <img
                  src="/woocommerce-circle-logo.webp"
                  alt="woocommerce logo" 
                  className=""
                />
                          </div>
                          
                      
                          <h4 className="text-[18px] font-bold text-gray-900">WordPress / <span className="text-[17px]">WooCommerce</span>        <div className="flex items-center space-x-1">
<span className="animate-wobble">🍂</span>


                            
  <span className="bg-[#cd5145] text-white px-2 py-0.5 rounded-full text-[9px] font-medium uppercase flex-shrink-0">Fall Sale - GET $1000 OFF WOO</span>
</div></h4> 
                        </div> 
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Custom WordPress sites with advanced functionality, SEO optimization, and content management.
                        </p>
                      </div>
                    </div>
                    
                    {/* Features Grid */}
                    <div className="grid md:grid-cols-2 gap-4 mb-8">
                      <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                        <div className="flex-shrink-0">
                          <Smartphone className="w-5 h-5 text-indigo-600" />
                        </div>
                        <span className="text-gray-700 font-medium">Mobile-First Responsive Design</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                        <div className="flex-shrink-0">
                          <Search className="w-5 h-5 text-green-600" />
                        </div>
                        <span className="text-gray-700 font-medium">SEO-Optimized Architecture</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                        <div className="flex-shrink-0">
                          <Palette className="w-5 h-5 text-purple-600" />
                        </div>
                        <span className="text-gray-700 font-medium">Custom Theme Development</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                        <div className="flex-shrink-0">
                          <Shield className="w-5 h-5 text-blue-600" />
                        </div>
                        <span className="text-gray-700 font-medium">Security & Performance Optimization</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                        <div className="flex-shrink-0">
                          <Zap className="w-5 h-5 text-orange-600" />
                        </div>
                        <span className="text-gray-700 font-medium">Fast Loading Speed</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                        <div className="flex-shrink-0">
                          <Check className="w-5 h-5 text-green-600" />
                        </div>
                        <span className="text-gray-700 font-medium">Quality Assurance Testing</span>
                      </div>

   <div className="max-w-6xl mx-auto px-6"> 






 
        {/* Trusted by 100+ brands scrolling section */}
        <div className="mt-8 lg:mt-4 lg:-mb-10">
          <p className="text-left text-gray-400 text-sm mb-8 tracking-wider uppercase">
           Trusted by 100+ Brands
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
 

        

      </div>
                      
                    </div>

            


                    
                  </div>



                  
                  {/* Right Column - Pricing */}
                  <div className="lg:col-span-1">
                    <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200 sticky top-8">
                      <div className="absolute top-6 right-6 w-8 h-8">
                        <Monitor className="w-6 h-6 text-indigo-400" />
                      </div>


 
  


                      
                      <div className="mb-6">
                        <h4 className="text-2xl font-bold text-gray-900 mb-4">Pricing Tiers</h4>
 
<div className="grid grid-cols-2 grid-rows-2 gap-0">
    <div>
                           <div className="border-l-4 border-[#9034ea] pl-4">
                            <div className="text-md font-bold text-gray-900">Landing Page</div>
                            <div className="text-sm text-gray-600">From $2,500</div>
                          </div>  </div>
  <div>
                           <div className="border-l-4 border-[#5b43e6] pl-4 ml-2">
                            <div className="text-md font-bold text-gray-900">WordPress Site</div>
                            <div className="text-sm text-gray-600">From  $3,500</div>
                          </div>
  </div>
    <div>
  <div className="border-l-4 border-[#9034ea] pl-4  space-x-1 "> 
                            <div className="text-md font-bold text-gray-900">WooCommerce</div>
                            <div className="text-[11px] text-gray-600 ">From <s>$4,500</s> <span className="text-sm"><b>$3,500</b></span></div>
                                          <div className="flex items-center space-x-1">
<span className="animate-wobble">🍂</span>
 <span className="bg-[#cd5145] text-white px-2 py-0.5 rounded-full text-[9px] font-medium uppercase flex-shrink-0">
   Fall Sale
  </span> 
</div>
                          </div>
  </div>  
  
                         
  <div>
   <div className="border-l-4 border-[#5b43e6] pl-4 ml-2">
                            <div className="text-md font-bold text-gray-900">Shopify Store</div>
                            <div className="text-sm text-gray-600">From $4,500</div> 
                                      <div className="flex items-center space-x-1">
<span className="animate-wobble ">🔥</span> 
   <span className="bg-orange-500 px-2  py-0.5 text-white px-1 rounded-full text-[9px] font-medium uppercase flex-shrink-0">
    POPULAR 
  </span> 
</div> 
                          </div> 
  </div>

</div>
                        

                      </div>
                      
<a href="#contact" className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:scale-105 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2 group mb-4">
  <span>Book Now</span>
</a>

               <div className="lg:text-center">      <div className={` hidden lg:inline-flex items-center space-x-2 ${themeClasses.cardBg} border ${themeClasses.cardBorder} rounded-full px-4 py-2 mb-6 backdrop-blur-sm`}>
  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
  <span className={`text-sm font-medium ${themeClasses.textTertiary}`}>Payment Plans Available</span>
</div>
</div> 
                           <div className="text-center text-sm text-gray-500">
                    <div className="flex items-center justify-center ">
                     <button
                onClick={() => setIsGuaranteeModalOpen(true)}
                className={`${themeClasses.textSecondary} hover:${themeClasses.text.split(' ')[0]} font-semibold transition-colors flex items-center space-x-1 group`}
              >
              <span className="font-semibold text-[15px]"><span className="text-[22px]">💯</span> <span className="font-semibold">Satisfaction Gaurantee</span></span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
                    </div>
                  </div>    

                       
                    </div>
                    
                    {/* Recent Projects Preview */}
                    <div className="mt-6 bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                      <h5 className="font-bold text-gray-900 text-lg mb-4">Recent Projects</h5>
                      <div className="grid grid-cols-2 gap-3">
                        <img 
                          src="/portfolio-slider/coming_soon.webp" 
                          alt="Recent project 1" 
                          className="w-full h-16 object-cover rounded-lg"
                        />
                        <img 
                          src="/portfolio-slider/coming_soon.webp"
                          alt="Recent project 2" 
                          className="w-full h-16 object-cover rounded-lg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              

            </div>
          </div>

          {/* Marketing Desktop Accordion Content */}
          <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isMarketingOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
          } hidden lg:block`}>
            <div className="bg-gradient-to-r from-blue-50 via-cyan-50 to-blue-50 rounded-3xl p-8 lg:p-12 border-2 border-blue-100 shadow-xl ring-2 ring-blue-50 relative mb-20">
              {/* Decorative Elements */}
              <div className="absolute top-8 right-8 w-20 h-20 opacity-30">
                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full blur-xl"></div>
              </div>
              <div className="absolute bottom-8 left-8 w-16 h-16 opacity-30">
                <div className="w-full h-full bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full blur-xl"></div>
              </div>

              <div className="relative z-10">
                <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-start">
                  {/* Left Column - Content */}
                  <div className="lg:col-span-2">
                    <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                      <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Marketing Desktop</span>
                    </h3>
                    
                    <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                      We design marketing campaigns that drive results and set you up for long-term success. From social media to email campaigns, we create strategies that resonate with your audience and convert leads into customers.
                    </p>
                    
                    {/* Marketing Highlights */}
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-white/60 rounded-2xl p-6 border border-gray-100">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center">
                            <TrendingUp className="w-5 h-5 text-white" />
                          </div>
                          <h4 className="text-xl font-bold text-gray-900">Digital Marketing</h4>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Comprehensive digital marketing strategies including social media, email campaigns, and content marketing.
                        </p>
                      </div>
                      
                      <div className="bg-white/60 rounded-2xl p-6 border border-gray-100">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                            <Target className="w-5 h-5 text-white" />
                          </div>
                          <h4 className="text-xl font-bold text-gray-900">Lead Generation</h4>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Targeted campaigns designed to generate qualified leads and convert them into paying customers.
                        </p>
                      </div>
                    </div>
                    
                    {/* Features Grid */}
                    <div className="grid md:grid-cols-2 gap-4 mb-8">
                      <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                        <div className="flex-shrink-0">
                          <Globe className="w-5 h-5 text-blue-600" />
                        </div>
                        <span className="text-gray-700 font-medium">Social Media Management</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                        <div className="flex-shrink-0">
                          <FileText className="w-5 h-5 text-cyan-600" />
                        </div>
                        <span className="text-gray-700 font-medium">Email Marketing Campaigns</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                        <div className="flex-shrink-0">
                          <Search className="w-5 h-5 text-blue-600" />
                        </div>
                        <span className="text-gray-700 font-medium">PPC Advertising</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                        <div className="flex-shrink-0">
                          <BarChart3 className="w-5 h-5 text-cyan-600" />
                        </div>
                        <span className="text-gray-700 font-medium">Analytics & Reporting</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                        <div className="flex-shrink-0">
                          <Target className="w-5 h-5 text-blue-600" />
                        </div>
                        <span className="text-gray-700 font-medium">Lead Generation Funnels</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                        <div className="flex-shrink-0">
                          <TrendingUp className="w-5 h-5 text-cyan-600" />
                        </div>
                        <span className="text-gray-700 font-medium">Conversion Optimization</span>
                      </div>

   <div className="max-w-6xl mx-auto px-6"> 

        {/* Trusted by 100+ brands scrolling section */}
        <div className="mt-8 lg:mt-4 lg:-mb-10">
          <p className="text-left text-gray-400 text-sm mb-8 tracking-wider uppercase">
           Trusted by 100+ Brands
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

      </div>

                      
                    </div>
                  </div>
                  
                  {/* Right Column - Pricing */}
                  <div className="lg:col-span-1">
                    <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200 sticky top-8">
                      <div className="absolute top-6 right-6 w-8 h-8">
                        <TrendingUp className="w-6 h-6 text-blue-400" />
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-2xl font-bold text-gray-900 mb-4">Pricing Tiers</h4>
                        
                        <div className="space-y-4">
                          <div className="border-l-4 border-blue-500 pl-4">
                            <div className="text-lg font-bold text-gray-900">Social Media</div>
                            <div className="text-sm text-gray-600">Starting at $800</div>
                          </div>
                          
                          <div className="border-l-4 border-cyan-500 pl-4">
                            <div className="text-lg font-bold text-gray-900">Digital Marketing</div>
                            <div className="text-sm text-gray-600">Starting at $1,200</div>
                          </div>
                          
                          <div className="border-l-4 border-blue-500 pl-4">
                            <div className="text-lg font-bold text-gray-900">Full Campaign</div>
                            <div className="text-sm text-gray-600">Starting at $2,500</div>
                          </div>
                        </div>
                      </div>
                      
                      <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2 group mb-4">
                        <span>Book Now</span>
                      </button>
       <div className="text-center text-sm text-gray-500">
                    <div className="flex items-center justify-center ">
                      <span className="text-2xl">💯</span> <span className="font-semibold">Satisfaction Guarantee</span>
                    </div>
                  </div>
                        
                    </div>
                    
                    {/* Recent Projects Preview */}
                    <div className="mt-6 bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                      <h5 className="font-bold text-gray-900 text-lg mb-4">Recent Campaigns</h5>
                      <div className="grid grid-cols-2 gap-3">
                        <img 
                          src="/portfolio-slider/coming_soon.webp" 
                          alt="Recent marketing campaign 1" 
                          className="w-full h-16 object-cover rounded-lg"
                        />
                        <img 
                          src="/portfolio-slider/coming_soon.webp" 
                          alt="Recent marketing campaign 2" 
                          className="w-full h-16 object-cover rounded-lg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Maintenance Plan Accordion */}
          <div className="mb-16">
            <MaintenancePlanAccordion />
          </div> 
            
 <DesignSubscription /> 
          
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
                  alt="Website Design Process"
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
    </section>
    
    <GuaranteeModal
      isOpen={isGuaranteeModalOpen}
      onClose={() => setIsGuaranteeModalOpen(false)}
      scrollToSection={scrollToSection}
    />
    </>
  );
};

export default WhatIDo;