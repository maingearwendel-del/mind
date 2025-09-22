import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import GuaranteeModal from './GuaranteeModal';
 
interface TestimonialsSectionProps {
  themeClasses?: {
    text: string;
    textSecondary: string;
  };
  scrollToSection?: (sectionId: string) => void;
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ 
  themeClasses = { text: 'text-gray-900', textSecondary: 'text-gray-600' },
  scrollToSection = () => {}
}) => {
  const [isGuaranteeModalOpen, setIsGuaranteeModalOpen] = React.useState(false);

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



            
<div className="grid grid-cols-2 gap-4 md:hidden  -mb-8  mt-10 ">
  {/* First Column Content */}  
  <div>  
              {/* Mobile-only Video Thumbnail - Above the paragraph */}
              <div className="lg:hidden mb-8 flex justify-center">
                <div className="w-[7.5rem] h-44 rounded-3xl overflow-hidden shadow-lg relative bg-gradient-to-br from-gray-900 to-gray-800 hover:scale-105 transition-transform duration-300 mr-6">
                  <button
                    className="relative w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center cursor-pointer hover:bg-gradient-to-br hover:from-gray-600 hover:to-gray-700 transition-all duration-300 group"
                  > 
                    <div className="relative w-full h-full"> 
                      <img 
                        src="/stop_losing_thumbnail_mobilex.webp"
                        alt="Stop Losing Customers"
                        className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                      />
                      <img 
                        src="/stop_losing_thumbnail_hover_mobilex.webp"
                        alt="Stop Losing Customers - Hover"
                        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                      />
                    </div>
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0  flex items-center justify-center">
                      <div className="w-14 h-14 bg-gradient-to-r from-purple-500/70 to-pink-500/70 hover:from-purple-600/80 hover:to-pink-600/80 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300">
                        <Play className="w-6 h-6 text-white ml-0.5 transition-colors" fill="currentColor" />
                      </div>
                    </div>
                    
                    {/* Video Duration */}
                    <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                     0:30
                    </div>
                  </button>
                </div> 
              </div>
  </div>
  {/* Second Column Content */}
  <div>
                  <h3 className="relative text-3xl lg:text-7xl font-black text-gray-900 mb-4 leading-none mt-4">
                    <span className="block  transform hover:scale-105 transition-transform duration-300 text-[#3d3d3d]">
                     {/* Opening quote mark - positioned right before the F */}
                     <span className="absolute top-[-20px] -left-8 text-6xl font-black text-purple-400  opacity-80 select-none pointer-events-none -z-10">"</span>
                     From <br className="block lg:hidden" /> Zero To <span className="hidden sm:inline-block animate-bounce-up-down"> ✔️ </span>
                    </span>
                    <span className="block bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent animate-gradient-x bg-300% font-black transform hover:scale-110 transition-all duration-500 drop-shadow-2xl leading-none pb-4 relative z-10" style={{ fontSize: 'calc(4rem - 25px)' }}>
                    <span className="text-6xl"> Fully</span> <br></br>Booked 
                     {/* Closing quote mark - positioned right after the d */}
                    <span className="absolute right-100 -top-[50px] text-6xl font-black text-purple-400  opacity-80 select-none pointer-events-none -z-10 translate-x-[-0px] sm:translate-x-0 translate-y-[95px] sm:translate-y-0">"</span>
                    </span>   
                  </h3>

  </div>
</div>

            {/* Left Column - Hugo S. Image and Header */}
            <div className="relative hidden md:block">
              <div className="mb-0  mt-12">
                <div className="relative">
                  {/* Glowing background effect */}
                  <div className="absolute -inset-4 blur-3xl rounded-3xl"></div>
                  
                  <h3 className="relative text-4xl lg:text-7xl font-black text-gray-900 mb-4 leading-none  ">
                    <span className="block  transform hover:scale-105 transition-transform duration-300 text-[#3d3d3d]">
                     {/* Opening quote mark - positioned right before the F */}
                     <span className="absolute top-[-20px] -left-14 text-8xl font-black text-purple-400  opacity-80 select-none pointer-events-none -z-10">"</span>
                     From <br className="block lg:hidden" /> Zero To <span className="hidden sm:inline-block animate-bounce-up-down"> ✔️ </span>
                    </span>
                    <span className="block bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent animate-gradient-x bg-300% font-black transform hover:scale-110 transition-all duration-500 drop-shadow-2xl leading-none pb-4 relative z-10" style={{ fontSize: 'calc(7rem - 25px)' }}>
                      Fully Booked 
                     {/* Closing quote mark - positioned right after the d */}
                    <span className="absolute right-100 top-0 text-8xl font-black text-purple-400  opacity-80 select-none pointer-events-none -z-10 translate-x-[-0px] sm:translate-x-0 translate-y-[95px] sm:translate-y-0">"</span>
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
              <div className="max-w-xl bg-white rounded-[60px] p-4 sm:p-5 sm:pl-8 shadow-xl border border-gray-200 mx-2 sm:mx-0">
                <blockquote className="text-gray-700 text-lg lg:text-xl leading-relaxed italic mb-6 border-l-4 border-purple-500 pl-6  mt-4 ml-3 font-semibold">
                  "Starting a new business in San diego, i needed someone to design me a new site and get me on google asap. <span className="bg-[#fff2cd] text-[#374151]">my new website</span>, I received my first booking. 
                  By the end of the first week, I was completely booked for the next month!" 
                </blockquote>
                
                {/* Hugo Image with Stars and Website */}
                <div className="flex items-center gap-4 -mt-4 mb-4 ml-[7px]">
                  {/* Hugo S. Image */}
                  <div className="relative flex-shrink-0">
                    {/* Floating pill centered on image */}
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-2 py-0.2 rounded-full text-sm font-semibold shadow-lg z-10 whitespace-nowrap hover:scale-110 transition-transform duration-300 ml-[6px] lg:ml-[0px]"> 
                      Antonio
                    </div>
                    <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg group hover:scale-110 transition-transform duration-300 lg:ml-0 ml-[12px]">
                      <img 
                        src="/hugo_silva_testimonial.webp"
                        alt="Success story"
                        className="w-full h-full object-cover group-hover:opacity-0 "
                      />
                      <img 
                        src="/hugo_thumbnail_hover.webp"
                        alt="Success story - Hover"
                        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 "
                      />
                    </div>
                  </div>
                  
                {/* Stars and Website Info  DESKTOP */}
                  <div className="flex flex-col  flex-col">              

<div class="grid grid-cols-1 md:grid-cols-[46%_27%_27%] gap-3 hidden lg:flex">
  {/* Column 1 */}
  <div class="p-2 "> 
<div className="flex space-x-1 lg:-ml-[5px]">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-8 h-8 text-yellow-400 fill-current" viewBox="0 0 20 20"> 
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg> 
                        ))}  
                      </div>
                    <div className="text-gray-500 text-sm mb-1">
                      barbercraftsd.com
                    </div> 
                       <div className="text-gray-500 text-sm lg:text-[12px]">
                      San Diego · California
                    </div>
  </div>
 
  {/* Column 2 */}
  <div class="px-2 flex items-center justify-center">
      <div className="-mt-[0px]"><span className="justify-center text-gray-600 font-bold  sm:mt-0 text-[1.3rem]  italic whitespace-nowrap ml-[5px] ">5 <span className="text-[20px]">out of</span> 5</span> <span className="text-gray-600 font-bold  sm:mt-0 "><img 
                      src="/Google_logo.svg"
                      alt="Google Logo"
                      className="lg:w-[88px] mt-2"   
                    /></span></div> 
        
  </div>

  {/* Column 3 */}
  <div class="p-2 flex items-center justify-center">
    <div><span className="text-gray-600 font-bold  sm:mt-0 "><img 
                      src="/your_mobile_floor.webp"
                      alt="Your mobile floor store"
                      className="lg:w-20 w-[70px] h-10 animate-run-right-and-back"  
                    /></span></div>
  </div>


  
</div>
                    

                  {/* Stars and Website Info  MOBILE*/}
                  <div className="flex flex-col lg:hidden ml-2 mt-2 "> 
                    {/* 5 Star Review */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 -mb-1">
                      <div className="flex space-x-1"> 
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="-ml-1 w-8 h-8 text-yellow-400 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg> 
                        ))} 
                      </div>  
         <div className="grid grid-cols-2 gap-4 ">
         <div className="mt-[5px]"><span className="text-gray-600 font-bold  sm:mt-0 text-[1.1rem] whitespace-nowrap ">5 out of 5</span></div>
         <div><span className="text-gray-600 font-bold  sm:mt-0 "><img 
                      src="/Google_logo.svg"
                      alt="Google Logo"
                      className="lg:w-20 w-[70px] h-10 lg:ml-[10px]"  
                    /></span></div>
         </div>
                      
                     
        
                    </div> 
                           
                    <div className="text-gray-500 text-sm  ">
                      yourmobilefloorstore.com 
                    </div>
                  </div>
  

                    
                  </div>





                  
                </div>
              </div>
            </div>
          </div>
        
        </div>
          <div className="lg:hidden flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12 mt-12">
            <button
              onClick={(e) => {
                e.stopPropagation();
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  if (window.innerWidth < 768) {
                    const rect = contactSection.getBoundingClientRect();
                    const offsetTop = window.pageYOffset + rect.top + 1830; // Add 1830px offset for mobile
                    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
                  } else {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }
              }}
              className="sm:hidden animated-gradient-btn text-white font-semibold px-20 py-5 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center space-x-2 group"
            > 
              <span>Get The Same Results</span> 
            </button>
 <div class="grid grid-cols-2 gap-0 mt-4">
  <div class="col-span-1">
   <button
  onClick={() => scrollToSection('portfolio')}
  className={`${themeClasses.textSecondary} hover:${themeClasses.text.split(' ')[0]} font-semibold transition-colors flex items-center space-x-1 group w-full justify-center pr-6`}
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
</div>







          </div> 
      </div>
      
      {/* Guarantee Modal */}
      <GuaranteeModal
        isOpen={isGuaranteeModalOpen}
        onClose={() => setIsGuaranteeModalOpen(false)}
        scrollToSection={scrollToSection}
      />
    </section>
  );
};

export default TestimonialsSection;