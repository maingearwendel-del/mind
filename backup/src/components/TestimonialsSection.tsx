import React from 'react';
import { ArrowRight } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  return (
    <section className="pt-0 lg:pt-4 mb-10 lg:pb-10 mt-0 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center justify-center min-h-[20vh] mt-12">
            
            {/* Left Column - Hugo S. Image and Header */}
            <div className="relative ml-[50px]">
              <div className="mb-0  mt-12">
                <div className="relative">
                  {/* Glowing background effect */}
                  <div className="absolute -inset-4blur-3xl rounded-3xl"></div>
                  
                  <h3 className="relative text-6xl lg:text-7xl font-black text-gray-900 mb-4 leading-none">
                    <span className="block  transform hover:scale-105 transition-transform duration-300 text-[#3d3d3d]">
                     {/* Opening quote mark - positioned right before the F */}
                     <span className="absolute top-[-20px] -left-14 text-8xl font-black text-purple-400 opacity-80 select-none pointer-events-none -z-10">"</span>
                      From <br className="block lg:hidden" /> Zero To
                    </span>
                    <span className="block bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent animate-gradient-x bg-300% font-black transform hover:scale-110 transition-all duration-500 drop-shadow-2xl leading-none pb-4 relative z-10" style={{ fontSize: 'calc(6rem - 15px)' }}>
                      Fully Booked
                     {/* Closing quote mark - positioned right after the d */}
                    <span className="absolute right-100 top-0 text-8xl font-black text-purple-400 opacity-80 select-none pointer-events-none -z-10 translate-x-[-30px] sm:translate-x-0 translate-y-[40px] sm:translate-y-0">"</span>
                    </span>
                  </h3>
                  
                  {/* Decorative elements */}
                  <div className="absolute -top-8 -right-8 w-12 h-12 bg-gradient-to-br from-purple-400 to-indigo-400 rounded-full opacity-20 blur-xl animate-float"></div>
                  <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full opacity-15 blur-lg animate-float" style={{ animationDelay: '1s' }}></div>
                </div>
              </div>
            </div>

            {/* Right Column - Review Content */}
            <div className="relative">
              <div className="bg-white rounded-3xl p-5 pl-8 shadow-xl border border-gray-200">
                <blockquote className="text-gray-700 text-xl leading-relaxed italic mb-6 border-l-4 border-purple-500 pl-6 pt-4">
                  "Within 48 hours of launching my new website, I received my first booking. 
                  By the end of the first week, I was completely booked for the next month!"
                </blockquote>
                
                {/* Hugo Image with Stars and Website */}
                <div className="flex items-center gap-4 -mt-4 mb-4">
                  {/* Hugo S. Image */}
                  <div className="relative flex-shrink-0">
                    {/* Floating pill centered on image */}
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-2 py-0.2 rounded-full text-sm font-semibold shadow-lg z-10 whitespace-nowrap">
                      Hugo S.
                    </div>
                    <img 
                      src="/hugo.png"
                      alt="Success story"
                      className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                  </div>
                  
                  {/* Stars and Website Info */}
                  <div className="flex flex-col">
                    {/* 5 Star Review */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 -mb-1">
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="ml-3 w-8 h-8 text-yellow-400 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))} 
                      </div> 
         <div className="grid grid-cols-2 gap-4 pl-4">
         <div className="mt-1"><span className="text-gray-600 font-bold  sm:mt-0 text-[1.1rem] ">5 out of 5</span></div>
         <div><span className="text-gray-600 font-bold  sm:mt-0 "><img 
                      src="/Google_logo.svg"
                      alt="Google Logo"
                      className="lg:w-20 w-16 h-10"
                    /></span></div>
         </div>
                      
                    
        
                    </div>
                           
                    <div className="text-gray-500 text-sm ml-4 ">
                      yourmobilefloorstore.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
        </div>
          <div className="lg:hidden flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12 mt-12">
            <button
              onClick={() => scrollToSection('portfolio')}
              className="sm:hidden animated-gradient-btn text-white font-semibold px-20 py-5 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center space-x-2 group"
            >
              <span>Book Now</span>
            </button>

          </div> 
      </div>
      
  
    </section>
  );
};

export default TestimonialsSection;