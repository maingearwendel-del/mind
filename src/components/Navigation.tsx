import React from 'react';
import { Menu, X, Sun, Moon, MessageCircle } from 'lucide-react';

interface NavigationProps {
  themeClasses: {
    navBg: string;
    border: string;
    text: string;
    textSecondary: string;
    cardBg: string;
    cardBorder: string;
  };
  isDarkMode: boolean;
  isScrolled: boolean;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
  toggleTheme: () => void;
  isTopBarVisible: boolean;
}

const Navigation: React.FC<NavigationProps> = ({
  themeClasses,
  isDarkMode,
  isScrolled,
  isMenuOpen,
  setIsMenuOpen,
  activeSection,
  scrollToSection,
  toggleTheme,
  isTopBarVisible,
}) => {
  const [currentPhoneDisplay, setCurrentPhoneDisplay] = React.useState(0);
  const [isStoreMegaMenuOpen, setIsStoreMegaMenuOpen] = React.useState(false);
  const [isServicesMegaMenuOpen, setIsServicesMegaMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhoneDisplay((prev) => (prev + 1) % phoneDisplays.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
 
  const phoneDisplays = [
    { content: "(619) 663-4272", type: "phone" },
    { content: "WhatsApp", type: "whatsapp" }
  ]; 

  const storeProducts = [
    {
      id: 1,
      title: "Website Design Package",
      description: "Complete website design and development",
      image: "/portfolio-slider/techcode/1.webp",
      price: "$2,999"
    },
    {
      id: 2,
      title: "Brand Identity Kit",
      description: "Logo, colors, and brand guidelines",
      image: "/portfolio-slider/brand/1.webp",
      price: "$1,499"
    },
    {
      id: 3,
      title: "Brand Identity Kit",
      description: "Logo, colors, and brand guidelines",
      image: "/portfolio-slider/brand/1.webp",
      price: "$1,499"
    },
    
    {
      id: 4,
      title: "Marketing Package",
      description: "SEO and social media setup",
      image: "/portfolio-slider/localfinder/1.webp",
      price: "$1,999"
    } 
  ];

  const serviceProducts = [
    {
      id: 1,
      title: "Website Design",
      description: "Custom website design and development",
      image: "/portfolio-slider/techcode/1.webp",
    },
    {
      id: 2,
      title: "Brand Identity",
      description: "Logo design and brand guidelines",
      image: "/portfolio-slider/brand/1.webp",
    },
    {
      id: 3,
      title: "SEO + Blog",
      description: "Search engine optimization",
      image: "/portfolio-slider/localfinder/1.webp",
    },
    {
      id: 4,
      title: "Ads (Marketing)",
      description: "Digital advertising and marketing campaigns",
      image: "/portfolio-slider/techcode/2.webp",
    },
    {
      id: 5,
      title: "Maintenance Plans",
      description: "Ongoing website support and updates",
      image: "/portfolio-slider/techcode/3.webp",
    },
    {
      id: 6,
      title: "AI Chat Bot",
      description: "Intelligent customer support automation",
      image: "/portfolio-slider/techcode/4.webp",
    },
    {
      id: 7,
      title: "Hosting",
      description: "Reliable web hosting solutions",
      image: "/portfolio-slider/techcode/5.webp",
    },
    {
      id: 8,
      title: "Designer Subscription",
      description: "Unlimited design requests monthly",
      image: "/portfolio-slider/brand/2.webp",
    }
  ];

  return (
    <nav className={`fixed ${isTopBarVisible ? 'top-12' : 'top-0'} left-0 right-0 z-40 p-4 transition-all duration-300 z-50`}>
      <div className={`${themeClasses.navBg} backdrop-blur-xl border ${themeClasses.border} nav-rounded px-4 py-3 transition-all duration-500 mx-auto ${
        isScrolled ? 'max-w-6xl' : 'max-w-7xl'
      }`}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#home" 
            className="flex items-center md:hover:scale-[1.03] cursor-pointer transition-all duration-500 flex-shrink-0"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <img 
              src={isDarkMode ? "/mind-logo-w.webp" : "/mind-logo-b.webp"} 
              alt="Mind Media" 
              className={`w-auto transition-all duration-500 ${
              isScrolled ? 'h-6 md:h-6' : 'h-6 md:h-7'
              } object-contain`}
            />
          </a>
           

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center flex-1 ml-8">
            <div className="flex items-center space-x-8 flex-1 justify-center">
              {['About', 'Services', 'Portfolio', 'Testimonials', 'Contact', 'Store', 'Art'].map((item) => (
                <div key={item} className="relative">
                  {item === 'Services' ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setIsServicesMegaMenuOpen(true)}
                      onMouseLeave={() => setIsServicesMegaMenuOpen(false)}
                    >
                      <button
                        onClick={() => scrollToSection(item.toLowerCase())}
                        className={`text-sm font-medium transition-colors ${
                          activeSection === item.toLowerCase() || isServicesMegaMenuOpen
                            ? 'text-purple-600'
                            : `${themeClasses.textSecondary} hover:text-purple-600`
                        }`}
                      >
                        {item}
                      </button>
                       
                      {/* Services Mega Menu */} 
                      <div className={` absolute top-full -left-[200px] transform translate-x-0 mt-6 transition-all duration-300 z-30 ${
                        isServicesMegaMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'
                      }`}>
                        <div className="bg-white/95 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-2xl p-6 transition-all duration-500">
                          <div className="grid grid-cols-4 gap-4 w-[1000px] gap-y-8">  
                            {serviceProducts.map((product) => (
                              <div
                                key={product.id}
                                className="group cursor-pointer flex-shrink-0 flex items-center space-x-3 "
                              >
                                <div className="w-16 h-20 rounded-lg overflow-hidden shadow-sm flex-shrink-0">
                                  <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                  />
                                </div>
                                 
                                <div className="flex-1">
                                  <h4 className="font-semibold text-gray-900 text-sm leading-tight">
                                    {product.title}
                                  </h4>
                                  <p className="text-xs text-gray-500 leading-relaxed mt-1">
                                    {product.description}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : item === 'Store' ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setIsStoreMegaMenuOpen(true)}
                      onMouseLeave={() => setIsStoreMegaMenuOpen(false)}
                    > 
                      <button
                        onClick={() => scrollToSection(item.toLowerCase())}
                        className={`text-sm font-medium transition-colors ${
                          activeSection === item.toLowerCase() || isStoreMegaMenuOpen
                            ? 'text-purple-600'
                            : `${themeClasses.textSecondary} hover:text-purple-600`
                        }`}
                      >
                        <span className="flex items-center space-x-1">
                          <span>{item}</span>
                          <span className="bg-purple-500 text-white px-1.5 py-0 rounded-full text-[8px] font-medium uppercase flex-shrink-0">
                            NEW 
                          </span>
                        </span>
                      </button>
                       
                      {/* Mega Menu */}
                      <div className={` absolute top-full left-1/2 transform -translate-x-1/2 mt-6 transition-all duration-300 z-30 ${
                        isStoreMegaMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'
                      }`}>
                        <div className="bg-white/95 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-2xl p-6 transition-all duration-500 min-w-max">
                          <div className="flex gap-14 justify-center">  
                            {storeProducts.map((product) => (
                              <div
                                key={product.id}
                               className="group cursor-pointer flex-shrink-0 flex items-center space-x-3"
                              >
                                <div className="w-16 h-20 rounded-lg overflow-hidden shadow-sm flex-shrink-0">
                                  <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                  />
                                </div>
                               <div className="flex-1">
                                  <h4 className="font-semibold text-gray-900 text-sm leading-tight">
                                    {product.title}
                                  </h4>
                                 <p className="text-xs text-gray-500 leading-relaxed mt-1">
                                    Explore and Learn
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div> 
                  ) : (
                    <button
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className={`text-sm font-medium transition-colors ${
                        activeSection === item.toLowerCase()
                          ? themeClasses.text
                          : `${themeClasses.textSecondary} hover:${themeClasses.text.split(' ')[0]}`
                      }`}
                    >
                      {item === 'Art' ? (
                        <span className="flex items-center space-x-1">
                          <span>{item}</span>
                          🎨
                        </span>
                      ) : (
                        item
                      )}
                    </button>
                  )}
                </div>
              ))}
            </div>

            


            
            <div className={`flex items-center transition-all duration-500 ${
              isScrolled ? 'space-x-3' : 'space-x-6'
            }`}> 
 
              <button
                className={`font-medium ${themeClasses.textSecondary} hover:${themeClasses.text.split(' ')[0]} transition-all duration-300 hover:scale-105 ${
                  isScrolled ? 'hidden xl:flex' : 'hidden lg:flex'
                } items-center whitespace-nowrap`}
                onClick={() => {
                  // Add your live chat functionality here
                  console.log('Live chat clicked');
                }}
              >     <div className="  pr-2 rounded-lg flex justify-center flex items-center">
         <img 
                  src="/wendel_santos_v4.webp"
                  alt="Wendel Santos"
                  className="w-8 h-8 lg:w-8 lg:h-8 rounded-full object-cover border-2 border-purple-500 flex-shrink-0"
                />
      </div>
                <div className="flex flex-col items-start -mt-[4px] ">
 
                      
                  <span>Chat with me</span> 
 
                    <div className="flex items-center space-x-2 w-24  -mt-[2px]"> 
                       
                  <span className="bg-green-500 text-white px-1.5 py-0.5 rounded-full text-[8px] font-medium uppercase flex-shrink-0">
                    ONLINE
                  </span> 
                  <div className="w-[58px] overflow-hidden relative h-3">
                    <span className="text-[9px] font-bold absolute whitespace-nowrap animate-scroll-text top-0 left-0">Monday - Friday: 9am-6pm • Monday - Friday: 9am-6pm</span>
                  </div>

                    </div>
                  
                </div>
              </button>

  <a 
                href="tel:(619) 663-4272"
                className={`font-semibold ${themeClasses.textSecondary} hover:${themeClasses.text.split(' ')[0]} transition-all duration-300 hover:scale-105 ${
                  isScrolled ? 'hidden xl:flex' : 'hidden lg:flex'
                } items-center space-x-2 whitespace-nowrap`}
              >
                <span className="text-lg">📱</span>
                 
                <div className="flex flex-col">

                  <span>(619) 663-4272</span>
                                                      <div className="w-[105px] overflow-hidden relative h-3 ">
                    <span className="text-[9px] font-bold absolute whitespace-nowrap animate-scroll-text top-0 left-0">Tap to text or call speak to my AI Agent.</span>
                  </div>
                </div>
                
              </a>
              
              <button
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
                className={`animated-gradient-btn text-white rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg relative z-10 ${
                  isScrolled ? 'px-4 py-1.5' : 'px-6 py-2'
                }`}
              >
                <span className="relative z-10 whitespace-nowrap">Book Now</span>
              </button>
            </div>
          </div>

          {/* Mobile Phone and Menu */}
          <div className="md:hidden flex items-center space-x-4">
            <a 
              href={phoneDisplays[currentPhoneDisplay].type === "whatsapp" ? "https://wa.me/16196634272" : "tel:(619) 663-4272"}
              className={`font-semibold ${themeClasses.textSecondary} hover:${themeClasses.text.split(' ')[0]} transition-all duration-300 hover:scale-105 flex items-center space-x-2 whitespace-nowrap`}
            >
              <span className="font-bold text-sm flex items-center space-x-1 min-w-[140px] justify-end text-right">
                {phoneDisplays[currentPhoneDisplay].type === "whatsapp" && (
                  <svg className="w-4 h-4 text-green-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.588z"/>
                  </svg>
                )}
                <span className="transition-all duration-300">
                  {phoneDisplays[currentPhoneDisplay].content}
                </span>
              </span>
            </a>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-full ${themeClasses.cardBg} border ${themeClasses.cardBorder} ${themeClasses.textSecondary} hover:${themeClasses.text.split(' ')[0]} transition-all duration-300`}
            >
              {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
 
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`md:hidden mt-4 pt-4 border-t ${themeClasses.border}`}>
            <div className="grid grid-cols-2 gap-x-4">
              {/* Left Column */}
              <div>
                {['About', 'Services', 'Art'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`block w-full text-left py-3 text-sm font-medium ${themeClasses.textSecondary} hover:${themeClasses.text.split(' ')[0]} transition-colors`}
                  >
                    {item}
                  </button>
                ))}
              </div>
              
              {/* Right Column */}
              <div>
                {['Portfolio', 'Testimonials', 'Contact', 'Store'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`block w-full text-left py-3 text-sm font-medium ${themeClasses.textSecondary} hover:${themeClasses.text.split(' ')[0]} transition-colors`}
                  >
                    {item === 'Store' ? (
                      <span className="flex items-center space-x-1">
                        <span>{item}</span>
                        <span className="bg-purple-500 text-white px-1.5 py-0.5 rounded-full text-[8px] font-medium uppercase flex-shrink-0">
                          NEW
                        </span>
                      </span>
                    ) : (
                      item
                    )}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-3 mt-6">
                          <button
                onClick={() => {
                  // Add your live chat functionality here
                  console.log('Live chat clicked');
                }}
                className="flex-1 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap flex items-center justify-center space-x-1"
              >
                <span>💬</span>
                <span>Live Chat</span>
              </button>
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
                  className="flex-1 animated-gradient-btn text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap"
                >
                  Book Now
                </button>
           

            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;