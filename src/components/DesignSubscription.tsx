import React from 'react';
import { Check, Play } from 'lucide-react';

const DesignSubscription: React.FC = () => {
  return (
    <>
 
 
      <div className="max-w-[83.875rem]  mx-auto mt-7 ">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 ">  

            {/* Monthly Subscription Card */}
            <div className="lg:col-span-2"> 
              <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-[30px] p-6 sm:p-6 lg:p-12 text-white relative overflow-hidden group hover:shadow-2xl transition-all duration-500 border border-gray-600 glow-border ">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-900/30 to-transparent"></div>
                  <div className="absolute top-8 right-8 w-32 h-32 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-8 left-8 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-full blur-2xl"></div>
                </div>
                
                <div className="relative z-10">
                  <div className="grid lg:grid-cols-2 gap-0 lg:gap-12 items-center">
                    {/* Left Column - Content */}
                    <div> 
   
               <h3 className="hidden lg:block text-5xl lg:text-7xl font-bold mb-4 leading-tight text-white">
                     <span className="block purple-pink-blue-gradient lg:text-[7rem]">    Unlimited </span>    Designs  + Web        
                  
                      
                      </h3> 

                                   <h3 className="block lg:hidden text-[4rem] font-bold mb-4 leading-[70px] text-white mt-1">
                     <span className="block purple-pink-blue-gradient text-[4.2rem]">    Unlimited </span>    <span className="text-[5rem]"> Designs  <span className="block purple-pink-blue-gradient text-[5.8rem]">+ Web    </span>   </span>     
                  
                      
                      </h3>         

                      
                      <p className="text-gray-300 text-base lg:text-lg mb-8 leading-relaxed mt-8 lg:mt-0">
                        Get unlimited design requests for a flat monthly rate. Perfect for businesses that need consistent, high-quality design work without the overhead. high-quality design work without thehigh-quality design work without the
                      </p>


                        {/* Desktop Subscribe Price */}
                     <div className="hidden sm:flex flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8 ">
                         <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-4 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2 group">
                          <span>Subscribe</span>
                        </button>
                        <button className="border border-white/30 hover:border-white/50 text-white px-4 py-2 rounded-full font-semibold transition-all duration-300 hover:bg-white/10">
                          Learn More
                        </button>
                                                <div className="w-px h-12 "></div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-white">$4,995</div>
                          <div className="text-sm text-gray-400">per month</div>
                        </div>
                        <div className="w-px h-12 bg-gray-600"></div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-white">48h</div>
                          <div className="text-sm text-gray-400">avg delivery</div>
                        </div>     
                      </div>
                      
  
   
                    </div>
                    
                    {/* Right Column - Features */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                     
                      <div>
                        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 lg:p-6">
                          <h4 className="text-xl font-bold text-white mb-4">What's Included?</h4>
                          <div className="space-y-3">
                            <div className="flex items-center space-x-2">
                              <div className="w-6 h-6  rounded-full flex items-center justify-center flex-shrink-0">
                                  <Check className="w-4 h-4 text-green-500" />
                              </div>
                              <span className="text-gray-300">One request at a time</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-6 h-6  rounded-full flex items-center justify-center flex-shrink-0">
                                <Check className="w-4 h-4 text-green-500" />
                              </div>
                              <span className="text-gray-300">Average 48 hour delivery</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">
                                  <Check className="w-4 h-4 text-green-500" />
                              </div>
                              <span className="text-gray-300">Unlimited brands</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-6 h-6  rounded-full flex items-center justify-center flex-shrink-0">
                                    <Check className="w-4 h-4 text-green-500" />
                              </div>
                              <span className="text-gray-300">Unlimited stock photos</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Check className="w-4 h-4 text-green-500" />
                              </div>
                              <span className="text-gray-300">Project Manager Included</span>
                            </div>
                                                        <div className="flex items-center space-x-2">
                              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">
                                   <Check className="w-4 h-4 text-green-500" />
                              </div>
                              <span className="text-gray-300">Source Files Included</span>
                            </div>
                                                        <div className="flex items-center space-x-2">
                              <div className="w-6 h-6  rounded-full flex items-center justify-center flex-shrink-0">
                                   <Check className="w-4 h-4 text-green-500" />
                              </div>
                              <span className="text-gray-300">Unlimited Revisions</span>
                            </div>
                                                        <div className="flex items-center space-x-2">
                              <div className="w-6 h-6  rounded-full flex items-center justify-center flex-shrink-0">
                                   <Check className="w-4 h-4 text-green-500" />
                              </div>
                              <span className="text-gray-300">Pause or cancel anytime</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-6 h-6  rounded-full flex items-center justify-center flex-shrink-0">
                                   <Check className="w-4 h-4 text-green-500" />
                              </div>
                              <span className="text-gray-300">Pause or cancel anytime</span>
                            </div>
                          </div>
                        </div>
                        
                        
                      </div>
 





                      
                       <div>
                        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-4 lg:p-6">
                          <h4 className="text-xl font-bold text-white mb-4">Who's this for?</h4>
                          <div className="relative aspect-video bg-gradient-to-br from-gray-600 to-gray-700 rounded-xl overflow-hidden group/video cursor-pointer flex-shrink-0">
                            <img 
                              src="/designer_sub_thumbnail2.webp"
                              alt="Unlimited Design Subscription Preview"
                              className="w-full h-full object-cover"
                            />
                            
                                         {/* Play Button Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center group-hover/video:bg-black/50 transition-all duration-300">
                              <div className="w-14 h-14 md:w-10 md:h-10 bg-gradient-to-r from-purple-500/70 to-indigo-500/70 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 group">
        <Play className="w-6 h-6 md:w-5 md:h-5 text-white ml-0.5 transition-colors" fill="currentColor" />
 
                              </div>
                            </div>
                            
                            {/* Video Duration */}
                            <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-sm font-medium">
                              2:45
                            </div>
                          </div>
                        </div>

                          {/* Gaurantee Desktop */}
                        <div className="space-y-3 hidden md:block">
                        <div className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 border border-indigo-500/30 rounded-2xl p-4 mt-4 mb-6 lg:mt-6">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center">
                              <span className="text-white font-bold text-sm">!</span>
                            </div>
                            <div>
                              <div className="text-white font-semibold text-sm">No contracts</div>
                              <div className="text-gray-300 text-xs">Scale up or down as needed</div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-2xl p-4">
                          <div className="flex items-center space-x-3">
                            <div class="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                             <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold text-sm">Try it for a week</div>
                              <div className="text-purple-200 text-xs">Not loving it? Get 75% back</div>
                            </div>
                          </div>
 
                        </div>
       
                        </div>

 



                          {/* Gaurantee Mobile */}
                        <div className="space-y-3 md:hidden mt-6 ">
                        <div className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 border border-indigo-500/30 rounded-2xl p-4 mt-4 mb-6 lg:mt-6">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center">
                              <span className="text-white font-bold text-sm">!</span>
                            </div>
                            <div>
                              <div className="text-white font-semibold text-sm">No contracts</div>
                              <div className="text-gray-300 text-xs">Scale up or down as needed</div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-2xl p-4">
                          <div className="flex items-center space-x-3">
                            <div class="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                             <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold text-sm">Try it for a week</div>
                              <div className="text-purple-200 text-xs">Not loving it? Get 75% back</div>
                            </div>
                          </div>
                        </div>
                        </div>
 

{/* Mobile Subscribe Price */}
    <div className="grid grid-cols-2 gap-4 mb-4 mt-8 md:hidden">
     <div className="text-center col-span-1">
                          <div className="text-3xl font-bold text-white">$4,995</div>
                          <div className="text-sm text-gray-400">per month</div>
                        </div>
                              
                        <div className="text-center col-span-1 h-14 border-l border-gray-600">
                 <div className="text-3xl font-bold text-white">         48h</div>
                          <div className="text-sm text-gray-400">avg delivery</div>
                        </div>     
                         <button className="mt-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-4 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2 group">
                          <span>Subscribe</span>
                        </button>
                        <button className="mt-4 border border-white/30 hover:border-white/50 text-white px-4 py-2 rounded-full font-semibold transition-all duration-300 hover:bg-white/10">
                          Learn More
                        </button>
                       
                      </div>
                         
                      </div>




                      
                    </div>
       

                    </div>
                  </div>
                </div>
              </div>
            </div>
    </div>
         

      
      <div className="max-w-7xl mx-auto px-6 mt-10 ">

        

         
        <div className=" mt-8 lg:mt-8 mb-0">
          <p className="text-center text-gray-400 text-sm mb-8 tracking-wider uppercase">
            Trusted by 100+ Brands and Artists
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
                  className="hh-32 lg:h-24 opacity-100 lg:opacity-60 hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
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
                  className="h-32 lg:h-24 lg:h-24 opacity-100 lg:opacity-60 hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
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

        {/* Trusted by 100+ brands scrolling section */}
        <div className=" ">
          <div className="relative overflow-hidden  ">
            <div className="flex w-max animate-seamless-scroll-reverse">
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

    </>
  );
};

export default DesignSubscription;