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
  };s
  isDarkMode: boolean;
  isScrolled: boolean;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
  toggleTheme: () => void;
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
}) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4">
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
              {['Home', 'About', 'Services', 'Portfolio', 'Testimonials', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.toLowerCase()
                      ? themeClasses.text
                      : `${themeClasses.textSecondary} hover:${themeClasses.text.split(' ')[0]}`
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="flex items-center space-x-6">
              <a 
                href="tel:(619) 663-4272" 
                className={`font-semibold ${themeClasses.textSecondary} hover:${themeClasses.text.split(' ')[0]} transition-all duration-300 hover:scale-105 hidden lg:flex items-center space-x-2 whitespace-nowrap`}
              >
                <span className="text-lg">📱</span>
                <span>(619) 663-4272</span>
              </a>
              <button
                className={`font-medium ${themeClasses.textSecondary} hover:${themeClasses.text.split(' ')[0]} transition-all duration-300 hover:scale-105 hidden lg:flex items-center space-x-2 whitespace-nowrap`}
                onClick={() => {
                  // Add your live chat functionality here
                  console.log('Live chat clicked');
                }}
              >
                <span className="text-lg">💬</span>
                <span>Live Chat</span>
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
                className="animated-gradient-btn text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg relative z-10"
              >
                <span className="relative z-10 whitespace-nowrap">Book Now</span>
              </button>
            </div>
          </div>

          {/* Mobile Phone and Menu */}
          <div className="md:hidden flex items-center space-x-4">
            <a 
              href="tel:(619) 663-4272" 
              className={`font-semibold ${themeClasses.textSecondary} hover:${themeClasses.text.split(' ')[0]} transition-all duration-300 hover:scale-105 flex items-center space-x-2 whitespace-nowrap`}
            >
              <span>(619) 663-4272</span>
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
                {['Home', 'About', 'Services'].map((item) => (
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
                {['Portfolio', 'Testimonials', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`block w-full text-left py-3 text-sm font-medium ${themeClasses.textSecondary} hover:${themeClasses.text.split(' ')[0]} transition-colors`}
                  >
                    {item}
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