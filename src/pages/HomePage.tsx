import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Star, CheckCircle, Globe, Smartphone, Palette, Code, TrendingUp, Users, Award, Clock, ChevronRight, Play, ExternalLink, Mail, Phone, MapPin, Send, MessageCircle, Zap, Target, BarChart3, Lightbulb, Rocket, Shield, Heart, Coffee, Briefcase, User, Eye, MousePointer, Search, PenTool, Monitor, Layers, Calendar, Moon, ArrowUpRight, Sun } from 'lucide-react';
import TopBar from '../components/TopBar';
import PortfolioSlider from '../components/PortfolioSlider';
import CountingNumber from '../components/CountingNumber';
import TestimonialsSection from '../components/TestimonialsSection';
import BrandIdentitySection from '../components/BrandIdentitySection';
import TestimonialSlider from '../components/TestimonialSlider';
import AboutSection from '../components/AboutSection';
import StatsCounter from '../components/StatsCounter';
import PortfolioSection from '../components/PortfolioSection';
import FeaturedSection from '../components/FeaturedSection';
import ContactSection from '../components/ContactSection';
import MarketingPropSection from '../components/MarketingPropSection';
import WhatIDo from '../components/WhatIDo';
import VideoTestimonial from '../components/VideoTestimonial';
import ValuePropositionSection from '../components/ValuePropositionSection';
import HeroHome from '../components/HeroHome';
import Navigation from '../components/Navigation';
import SeeYouSection from '../components/SeeYouSection';
import RightFitSection from '../components/RightFitSection';
import CheapWebsiteSection from '../components/CheapWebsiteSection';
import StopLosingSection from '../components/StopLosingSection';
import MoneyMakingSection from '../components/MoneyMakingSection';
import MemorableBrandSection from '../components/MemorableBrandSection';
import TestimonialsTrustpilot from '../components/TestimonialsTrustpilot';
import TestimonialsGoogle from '../components/TestimonialsGoogle';
import TestimonialsGoogle2 from '../components/TestimonialsGoogle2';
import ArtistCollabSection from '../components/ArtistCollabSection';
import ArtistCollabSection2 from '../components/ArtistCollabSection2';
import TestimonialsSection2 from '../components/TestimonialsSection2'; 
import FloatingVideoWidget from '../components/FloatingVideoWidget';
import { 
  plantsPortfolioItems, 
  mobilePortfolioItems, 
  brandPortfolioItems, 
  pawsPortfolioItems, 
  techcodePortfolioItems, 
  tattooPortfolioItems, 
  localfinderPortfolioItems 
} from '../data/portfolioSlidersData';

function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isTopBarVisible, setIsTopBarVisible] = useState(true);
  const [isGuaranteeModalOpen, setIsGuaranteeModalOpen] = useState(false);
  // Slider images
  const sliderImages = [
    '/slide_1.jpg',
    '/slide_2.jpg',
    '/slide_3.jpg'
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentHeroImage, setCurrentHeroImage] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const heroImages = [
    {
      url: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Team collaborating on web design"
    },
    {
      url: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Designer working on laptop"
    },
    {
      url: "https://images.pexels.com/photos/6077368/pexels-photo-6077368.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Modern workspace setup"
    },
    {
      url: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Creative team meeting"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, Fashion Forward",
      company: "E-commerce Store",
      content: "WebCraft transformed our Shopify store completely. Sales increased by 180% within the first month of launch. Their attention to detail is unmatched.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    {
      name: "Michael Chen",
      role: "Founder, TechStart",
      company: "SaaS Platform",
      content: "The WordPress site they built for us is not only beautiful but incredibly fast. Our conversion rate doubled and user engagement is through the roof.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    {
      name: "Emily Rodriguez",
      role: "Owner, Artisan Crafts",
      company: "Handmade Goods",
      content: "Working with WebCraft was a dream. They understood our vision perfectly and delivered a stunning Shopify store that showcases our products beautifully.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'services', 'portfolio', 'testimonials', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    const throttledHandleScroll = () => {
      setTimeout(() => {
        handleScroll();
      }, 50);
    };

    window.addEventListener('scroll', throttledHandleScroll);
    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextHeroImage = () => {
    setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
  };

  const prevHeroImage = () => {
    setCurrentHeroImage((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const themeClasses = {
    bg: isDarkMode ? 'bg-black' : 'bg-white',
    text: isDarkMode ? 'text-white' : 'text-gray-900',
    textSecondary: isDarkMode ? 'text-gray-400' : 'text-gray-600',
    textTertiary: isDarkMode ? 'text-gray-300' : 'text-gray-700',
    navBg: isDarkMode ? 'bg-black/40' : 'bg-white/40',
    border: isDarkMode ? 'border-white/10' : 'border-gray-200',
    cardBg: isDarkMode ? 'bg-white/5' : 'bg-gray-50',
    cardBorder: isDarkMode ? 'border-white/10' : 'border-gray-200',
    inputBg: isDarkMode ? 'bg-white/5' : 'bg-gray-100',
    inputBorder: isDarkMode ? 'border-white/10' : 'border-gray-300',
    placeholder: isDarkMode ? 'placeholder-gray-400' : 'placeholder-gray-500',
    gradientFrom: isDarkMode ? 'from-purple-900/20' : 'from-blue-100/50',
    gradientTo: isDarkMode ? 'to-pink-900/20' : 'to-indigo-100/50',
    statsBg: isDarkMode ? 'border-white/10' : 'border-gray-200'
  };

  useEffect(() => {
    // Load Calendly script dynamically
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);


    // Cleanup function to remove script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className={`min-h-screen ${themeClasses.bg} ${themeClasses.text} transition-colors duration-300`}>
      {/* Top Bar - Fixed at top of viewport */}
      <TopBar 
        isVisible={isTopBarVisible}
        onClose={() => setIsTopBarVisible(false)}
      />
      
      <Navigation
        themeClasses={themeClasses}
        isDarkMode={isDarkMode}
        isScrolled={isScrolled}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        toggleTheme={toggleTheme}
        isTopBarVisible={isTopBarVisible}
      />

      <HeroHome 
        themeClasses={themeClasses}
        scrollToSection={scrollToSection}
        isTopBarVisible={isTopBarVisible}
      />
      
<div className="lg:hidden">   
          {/* New Testimonials Section */}
      <TestimonialsSection themeClasses={themeClasses} scrollToSection={scrollToSection} />
      </div>
      
   <div className="hidden lg:flex">         {/* Portfolio Slider  - Above About Section */}

  <PortfolioSlider 
          items={plantsPortfolioItems}
          backgroundColor="bg-gradient-to-r from-green-500 via-emerald-400 to-teal-500"
          animationClass="animate-seamless-scroll"
        />
</div>
  {/* About Section */}
      <StopLosingSection 
        themeClasses={themeClasses}
        scrollToSection={scrollToSection}
      />

 
          {/* New Testimonials Section */}
      <TestimonialsSection themeClasses={themeClasses} scrollToSection={scrollToSection} />
      
      <AboutSection 
        themeClasses={themeClasses}
        isDarkMode={isDarkMode}
        scrollToSection={scrollToSection}
      />

      <StatsCounter themeClasses={themeClasses} />

      {/* Artist Collaboration Section */}
      <ArtistCollabSection />

      {/* New Testimonials Google2 Section */}
      <TestimonialsGoogle2 themeClasses={themeClasses} scrollToSection={scrollToSection} />

      {/* Right Fit Section */}
      <RightFitSection 
        themeClasses={themeClasses}
        scrollToSection={scrollToSection}
      />

      {/* Money Making Section */}
      <MoneyMakingSection 
        themeClasses={themeClasses}
        scrollToSection={scrollToSection}
      />
      
      {/* Portfolio Slider 1 */}
      <PortfolioSlider 
        items={mobilePortfolioItems}
        backgroundColor="bg-gradient-to-r from-orange-500 to-red-500"
        animationClass="animate-seamless-scroll-reverse"
        itemWidthClass="w-[22rem]"
        itemHeightClass="h-80"
        spacing="space-x-32"
      />

      
      {/* Value Proposition Section */}
      <ValuePropositionSection 
        themeClasses={themeClasses}
        scrollToSection={scrollToSection}
      />

      {/* Cheap Website Section */}
      <CheapWebsiteSection 
        themeClasses={themeClasses}
        scrollToSection={scrollToSection}
      />

 
           {/* Trustpilot Testimonials Section */}
      <TestimonialsTrustpilot 
        themeClasses={themeClasses}
        scrollToSection={scrollToSection}
      />
  

      <BrandIdentitySection 
        themeClasses={themeClasses}
        scrollToSection={scrollToSection}
      />

      <MemorableBrandSection 
        themeClasses={themeClasses}
        scrollToSection={scrollToSection}
      />

      {/* Google Testimonials Section */}
      <TestimonialsGoogle 
        themeClasses={themeClasses}
        scrollToSection={scrollToSection}
      />


        
      <MarketingPropSection 
        themeClasses={themeClasses}
        scrollToSection={scrollToSection}
      />
    
      {/* See You Section */}
      <SeeYouSection 
        themeClasses={themeClasses}
        scrollToSection={scrollToSection}
      />
    
      {/* Portfolio Slider 6 */}
      <PortfolioSlider 
        items={localfinderPortfolioItems}
        backgroundColor="bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-500"
        animationClass="animate-seamless-scroll"
      />
      
      {/* New Testimonials Section */}
      <TestimonialsSection themeClasses={themeClasses} scrollToSection={scrollToSection} />
    
         
      {/* Portfolio Slider 2 */}
      <PortfolioSlider 
        items={brandPortfolioItems}
        backgroundColor="linear-gradient(to right, #f6d93b, #d59f08)"
        animationClass="animate-seamless-scroll-reverse"
        itemWidthClass="w-[36rem]"
        itemHeightClass="h-80"
        spacing="space-x-32"
      />

      {/* What I Do Section */}
    <section id="services"> <WhatIDo /> </section>
         
         
     
{/* New Testimonials Section 2 */}
<TestimonialsSection2 
  themeClasses={themeClasses} 
  scrollToSection={scrollToSection} 
/> 


       {/* Portfolio Slider */}
        <PortfolioSlider 
          items={pawsPortfolioItems}
          backgroundColor="bg-gradient-to-r from-violet-500 via-purple-400 to-indigo-300"
          animationClass="animate-seamless-scroll"
          itemHeightClass="h-80"
        />
            
  

      <PortfolioSection themeClasses={themeClasses} />

      {/* Portfolio Slider 3 */}
      <PortfolioSlider 
        items={techcodePortfolioItems}
        backgroundColor="bg-gradient-to-r from-purple-500 via-indigo-500 to-fuchsia-500"
        animationClass="animate-seamless-scroll-reverse"
        itemHeightClass="h-80"
      />


      <FeaturedSection themeClasses={themeClasses} />

      {/* Portfolio Slider 5 */}
      <PortfolioSlider 
        items={tattooPortfolioItems}
        backgroundColor="#f8133c"
        animationClass="animate-seamless-scroll"
        itemHeightClass="h-80"
      />

      <ContactSection themeClasses={themeClasses} />

          {/* Artist Collaboration Section 2 */}
      <ArtistCollabSection2 />

      {/* Testimonial Slider */}
      <section className="pt-20 pb-32 bg-white">
        <div className="container mx-auto px-6">
          <TestimonialSlider />
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 border-t ${themeClasses.border}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <img 
                src={isDarkMode ? "/mind-logo-w.webp" : "/mind-logo-b.webp"} 
                alt="Mind Media" 
                className="h-8 w-auto"
              />
              <span className={`${themeClasses.textSecondary} text-sm`}>
                © 2024 Mind Media. All rights reserved.
              </span>
            </div>
            <div className="flex items-center space-x-6">
              <button className={`${themeClasses.textSecondary} hover:${themeClasses.text.split(' ')[0]} transition-colors`}>
                <Mail className="w-5 h-5" />
              </button>
              <button className={`${themeClasses.textSecondary} hover:${themeClasses.text.split(' ')[0]} transition-colors`}>
                <Phone className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Video Widget */}
      <FloatingVideoWidget />
    </div>
  );
}

export default HomePage;