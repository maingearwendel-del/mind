import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import CountingNumber from './CountingNumber';
import GuaranteeModal from './GuaranteeModal';

const StatsCounter: React.FC = () => {
  const [isGuaranteeModalOpen, setIsGuaranteeModalOpen] = React.useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-4 lg:pt-10 py-20 pb-0 lg:pb-5 bg-white">
       
      <div className="container mx-auto px-6">
         
        <div className="max-w-6xl mx-auto">
      
          <div className="    grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-8 gap-x-1 md:gap-12 lg:gap-12">

  

             
            {/* Years of Experience */}
            <div className="text-center relative">
              
              <div className="text-5xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent py-2">
                <CountingNumber end={15} suffix="+" />
              </div>
              <p className="text-gray-600 text-base md:text-lg font-medium px-2">Years of <br className="block sm:hidden" />Experience</p>
              
              {/* Vertical divider after first column */}
              <div className="absolute top-0 -right-6 w-px h-full bg-gray-200 hidden lg:block"></div>
            </div>

            {/* Projects Completed */}
            <div className="text-center relative">
              <div className="text-5xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent py-2">
                <CountingNumber end={200} suffix="+" />
              </div>
              <p className="text-gray-600 text-base md:text-lg font-medium px-2">Projects <br className="block sm:hidden" />Completed</p>
              
              {/* Vertical divider after second column */}
              <div className="absolute top-0 -right-6 w-px h-full bg-gray-200 hidden lg:block"></div>
            </div>

            {/* Happy Clients */}
            <div className="text-center relative">
              <div className="text-5xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent py-2">
                <CountingNumber end={150} suffix="+" />
              </div>
              <p className="text-gray-600 text-base md:text-lg font-medium px-2">Happy Clients</p>
              
              {/* Vertical divider after third column */}
              <div className="absolute top-0 -right-6 w-px h-full bg-gray-200 hidden lg:block"></div>
            </div>

            {/* Awards Won */}
            <div className="text-center relative">
              <div className="text-5xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent py-2">
                <CountingNumber end={5} suffix="+" />
              </div>
              <p className="text-gray-600 text-base md:text-lg font-medium px-2">Awards Won</p>
            </div>
          </div>
          
          {/* Action Buttons */}
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
              className="sm:hidden animated-gradient-btn text-white font-semibold px-28 py-5 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center space-x-2 group"
            >
              <span>Book Now</span>
            </button>

 <div class="grid grid-cols-2 gap-0 mt-4">
  <div class="col-span-1">
   <button
  onClick={() => scrollToSection('portfolio')}
  className="text-gray-600 hover:text-blue-600 font-semibold transition-colors flex items-center space-x-1 group w-full justify-center pr-6"
>
  <span>View Work</span>
  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform " />
</button> 

  </div>
  <div class="col-span-1 ">
    <button
                onClick={() => setIsGuaranteeModalOpen(true)}
                className="text-gray-600 hover:text-blue-600 font-semibold transition-colors flex items-center space-x-1 group"
              >
                <span>Our 💯 Gaurantee</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
  </div>
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

export default StatsCounter;





