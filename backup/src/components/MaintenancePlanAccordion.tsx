import React, { useState } from 'react';
import { ChevronDown, Wrench, Infinity, Shield, FileText, User, Calendar, Pause, ArrowUpDown, Search, TrendingUp, BarChart3, Target, Zap, Globe, Bot, MessageCircle, Clock, Brain, Users, Headphones, Settings, BarChart } from 'lucide-react';

const MaintenancePlanAccordion: React.FC = () => {
  const [isMaintenanceOpen, setIsMaintenanceOpen] = useState(false);
  const [isSeoOpen, setIsSeoOpen] = useState(false);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const handleMaintenanceToggle = () => {
    setIsMaintenanceOpen(!isMaintenanceOpen);
    if (!isMaintenanceOpen) {
      setIsSeoOpen(false);
      setIsChatbotOpen(false);
    }
  };

  const handleSeoToggle = () => {
    setIsSeoOpen(!isSeoOpen);
    if (!isSeoOpen) {
      setIsMaintenanceOpen(false);
      setIsChatbotOpen(false);
    }
  };

  const handleChatbotToggle = () => {
    setIsChatbotOpen(!isChatbotOpen);
    if (!isChatbotOpen) {
      setIsMaintenanceOpen(false);
      setIsSeoOpen(false);
    }
  };

  const maintenanceFeatures = [
    {
      icon: <Infinity className="w-5 h-5 text-blue-600" />,
      title: "Unlimited Maintenance Requests"
    },
    {
      icon: <Shield className="w-5 h-5 text-blue-600" />,
      title: "Unlimited Security Requests"
    },
    {
      icon: <FileText className="w-5 h-5 text-blue-600" />,
      title: "Unlimited Content Update Requests"
    },
    {
      icon: <User className="w-5 h-5 text-purple-600" />,
      title: "One Active Request at a Time"
    },
    {
      icon: <User className="w-5 h-5 text-purple-600" />,
      title: "Dedicated Project Manager"
    },
    {
      icon: <Calendar className="w-5 h-5 text-blue-600" />,
      title: "Weekly Updates & Progress Reports"
    },
    {
      icon: <Pause className="w-5 h-5 text-gray-600" />,
      title: "Pause or Cancel Anytime"
    },
    {
      icon: <ArrowUpDown className="w-5 h-5 text-gray-600" />,
      title: "Upgrade or Downgrade Anytime"
    }
  ];

  const chatbotFeatures = [
    {
      icon: <Bot className="w-5 h-5 text-blue-600" />,
      title: "Custom AI Chat Bot Development"
    },
    {
      icon: <MessageCircle className="w-5 h-5 text-blue-600" />,
      title: "24/7 Customer Support Automation"
    },
    {
      icon: <Brain className="w-5 h-5 text-purple-600" />,
      title: "Advanced Natural Language Processing"
    },
    {
      icon: <Users className="w-5 h-5 text-blue-600" />,
      title: "Multi-Platform Integration"
    },
    {
      icon: <BarChart className="w-5 h-5 text-orange-600" />,
      title: "Analytics & Performance Tracking"
    },
    {
      icon: <Settings className="w-5 h-5 text-gray-600" />,
      title: "Custom Training & Fine-tuning"
    },
    {
      icon: <Clock className="w-5 h-5 text-green-600" />,
      title: "Real-time Response Optimization"
    },
    {
      icon: <Pause className="w-5 h-5 text-gray-600" />,
      title: "Pause or Cancel Anytime"
    }
  ];

  const seoFeatures = [
    {
      icon: <Search className="w-5 h-5 text-green-600" />,
      title: "SEO Optimization & Strategy"
    },
    {
      icon: <FileText className="w-5 h-5 text-green-600" />,
      title: "Automated Blog Content Creation"
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-green-600" />,
      title: "Keyword Research & Tracking"
    },
    {
      icon: <BarChart3 className="w-5 h-5 text-orange-600" />,
      title: "Monthly Analytics Reports"
    },
    {
      icon: <Target className="w-5 h-5 text-orange-600" />,
      title: "Competitor Analysis"
    },
    {
      icon: <Globe className="w-5 h-5 text-green-600" />,
      title: "Local SEO Optimization"
    },
    {
      icon: <Zap className="w-5 h-5 text-gray-600" />,
      title: "Fast Implementation"
    },
    {
      icon: <Pause className="w-5 h-5 text-gray-600" />,
      title: "Pause or Cancel Anytime"
    }
  ];
  return (
    <div className="max-w-7xl mx-auto">
      {/* Three Column Grid - Mobile: Stack vertically, Desktop: Side by side */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-9">
        
        {/* Column 1: Maintenance Plan */}
        <div className="lg:col-span-1">
          <button
            onClick={handleMaintenanceToggle}
            className="w-full flex items-center justify-between p-6 bg-gradient-to-r from-indigo-50 via-purple-50 to-indigo-50 hover:from-indigo-100 hover:via-purple-100 hover:to-indigo-100 rounded-[20px] shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-indigo-100 hover:border-indigo-200 ring-2 ring-indigo-50 hover:ring-indigo-100 hover:scale-[1.02] transform"
          >
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                <Wrench className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col space-y-0">
                <span className="text-xl font-semibold text-gray-900">Maintenance</span>
                <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-1.5 py-0.5 rounded-full text-xs font-medium uppercase tracking-wide shadow-lg w-fit">
                  Popular
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right leading-none">
                <div className="text-sm text-gray-500 font-light tracking-wide leading-none">from</div>
                <div className="text-xl font-semibold text-gray-800 tracking-tight leading-none">
                  $999<span className="text-base text-gray-600 font-normal">/mo</span>
                </div>
              </div>
              <ChevronDown 
                className={`w-6 h-6 text-gray-600 transition-transform duration-300 ${
                  isMaintenanceOpen ? 'rotate-180' : ''
                }`} 
              />
            </div>
          </button>
          
          {/* Maintenance Accordion Content - Mobile: Below button, Desktop: Hidden here */}
          <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMaintenanceOpen ? 'max-h-[1150px] opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="mt-6 mb-8 bg-gradient-to-r from-indigo-50 via-purple-50 to-indigo-50 rounded-3xl p-8 border-2 border-indigo-100 shadow-xl ring-2 ring-indigo-50 relative">
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  Maintenance
                </h3>
                
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  For businesses of all sizes that need a hands-on team to keep their websites secure and up-to-date without headaches.
                </p>
                
                {/* Features Grid */}
                <div className="grid gap-3 mb-6">
                  {maintenanceFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                      <div className="flex-shrink-0">
                        {feature.icon}
                      </div>
                      <span className="text-gray-700 font-medium">{feature.title}</span>
                    </div>
                  ))}
                </div>
                
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-900 mb-4">
                    $395<span className="text-xl text-gray-600">/m</span>
                  </div>
                  <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    Subscribe Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Column 2: SEO/Blog Plan */}
        <div className="lg:col-span-1">
          <button
            onClick={handleSeoToggle}
            className="w-full flex items-center justify-between p-6 bg-gradient-to-r from-purple-50 via-pink-50 to-purple-50 hover:from-purple-100 hover:via-pink-100 hover:to-purple-100 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-purple-100 hover:border-purple-200 ring-2 ring-purple-50 hover:ring-purple-100 hover:scale-[1.02] transform"
          >
    <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg">
                <Search className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col space-y-0">
                <span className="text-xl font-semibold text-gray-900">SEO/Blog</span>
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-1.5 py-0.5 rounded-full text-xs font-medium uppercase tracking-wide shadow-lg w-fit">
                  Growth
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right leading-none">
                <div className="text-sm text-gray-500 font-light tracking-wide leading-none">from</div>
                <div className="text-xl font-semibold text-gray-800 tracking-tight leading-none">
                  $800<span className="text-base text-gray-600 font-normal">/mo</span>
                </div>
              </div>
              <ChevronDown 
                className={`w-6 h-6 text-gray-600 transition-transform duration-300 ${
                  isSeoOpen ? 'rotate-180' : ''
                }`} 
              />
            </div>
          </button>
          
          {/* SEO Accordion Content - Mobile: Below button, Desktop: Hidden here */}
          <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isSeoOpen ? 'max-h-[1150px] opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="mt-6 mb-8 bg-gradient-to-r from-purple-50 via-pink-50 to-purple-50 rounded-3xl p-8 border-2 border-purple-100 shadow-xl ring-2 ring-purple-50 relative">
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  SEO & Blog
                </h3>
                
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  Boost your online visibility and drive organic traffic with our comprehensive SEO optimization and automated blog content creation services.
                </p>
                
                {/* Features Grid */}
                <div className="grid gap-3 mb-6">
                  {seoFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                      <div className="flex-shrink-0">
                        {feature.icon}
                      </div>
                      <span className="text-gray-700 font-medium">{feature.title}</span>
                    </div>
                  ))}
                </div>
                
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-900 mb-4">
                    $800<span className="text-xl text-gray-600">/m</span>
                  </div>
                  <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    Subscribe Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Column 3: AI Chat Bot */}
        <div className="lg:col-span-1">
          <button
            onClick={handleChatbotToggle}
            className="w-full flex items-center justify-between p-6 bg-gradient-to-r from-blue-50 via-cyan-50 to-blue-50 hover:from-blue-100 hover:via-cyan-100 hover:to-blue-100 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-blue-100 hover:border-blue-200 ring-2 ring-blue-50 hover:ring-blue-100 hover:scale-[1.02] transform"
          >
    <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center shadow-lg">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col space-y-0">
                <span className="text-xl font-semibold text-gray-900">AI Chat Bot</span>
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-1.5 py-0.5 rounded-full text-xs font-medium uppercase tracking-wide shadow-lg w-fit">
                  Smart
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right leading-none">
                <div className="text-sm text-gray-500 font-light tracking-wide leading-none">from</div>
                <div className="text-xl font-semibold text-gray-800 tracking-tight leading-none">
                  $500<span className="text-base text-gray-600 font-normal">/mo</span>
                </div>
              </div>
              <ChevronDown 
                className={`w-6 h-6 text-gray-600 transition-transform duration-300 ${
                  isChatbotOpen ? 'rotate-180' : ''
                }`} 
              />
            </div>
          </button>
          
          {/* Chatbot Accordion Content - Mobile: Below button, Desktop: Hidden here */}
          <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isChatbotOpen ? 'max-h-[1150px] opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="mt-6 mb-8 bg-gradient-to-r from-blue-50 via-cyan-50 to-blue-50 rounded-3xl p-8 border-2 border-blue-100 shadow-xl ring-2 ring-blue-50 relative">
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  AI Chat Bot
                </h3>
                
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  Transform your customer service with intelligent AI chat bots that provide instant, personalized responses 24/7, increasing customer satisfaction and reducing support costs.
                </p>
                
                {/* Features Grid */}
                <div className="grid gap-3 mb-6">
                  {chatbotFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                      <div className="flex-shrink-0">
                        {feature.icon}
                      </div>
                      <span className="text-gray-700 font-medium">{feature.title}</span>
                    </div>
                  ))}
                </div>
                
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-900 mb-4">
                    $500<span className="text-xl text-gray-600">/m</span>
                  </div>
                  <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    Subscribe Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Accordion Content - Hidden on mobile */}
      {/* Maintenance Accordion Content */}
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
        isMaintenanceOpen ? 'max-h-[1150px] opacity-100' : 'max-h-0 opacity-0'
      } hidden lg:block`}>
        <div className="mt-6 mb-10 bg-gradient-to-r from-indigo-50 via-purple-50 to-indigo-50 rounded-3xl p-8 lg:p-12 border-2 border-indigo-100 shadow-xl ring-2 ring-indigo-50 relative">
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
                <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                  Maintenance
                </h3>
                
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  For businesses of all sizes that need a hands-on team to keep their websites secure and up-to-date without headaches.
                </p>
                
                {/* Features Grid */}
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {maintenanceFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                      <div className="flex-shrink-0">
                        {feature.icon}
                      </div>
                      <span className="text-gray-700 font-medium">{feature.title}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Right Column - Pricing */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200 sticky top-8">
                  {/* Decorative wave */}
                  <div className="absolute top-6 right-6 w-8 h-8">
                    <Wrench className="w-6 h-6 text-purple-400" />
                  </div>
                  
                  <div className="text-center mb-6">
                    <div className="text-5xl font-bold text-gray-900 mb-2">
                      $395<span className="text-2xl text-gray-600">/m</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2 group mb-4">
                    <span>Subscribe Now</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  
                  <div className="text-center text-sm text-gray-500">
                    <div className="flex items-center justify-center animate-gentle-wobble">
                      <span className="text-xl">💯</span> <span className="font-semibold">Satisfaction Guarantee</span>
                    </div>
                  </div>
                </div>
                
                {/* Testimonial - Below the pricing card */}
                <div className="mt-6 bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-lg">Sarah Johnson</div>
                      <div className="text-gray-600 text-sm">CEO at TechFlow</div>
                      <div className="text-gray-500 text-sm italic mt-2">"Amazing service and support!"</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SEO/Blog Accordion Content */}
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
        isSeoOpen ? 'max-h-[1150px] opacity-100' : 'max-h-0 opacity-0'
      } hidden lg:block`}>
        <div className="mt-6 mb-10 bg-gradient-to-r from-purple-50 via-pink-50 to-purple-50 rounded-3xl p-8 lg:p-12 border-2 border-purple-100 shadow-xl ring-2 ring-purple-50 relative">
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
                  SEO & Blog
                </h3>
                
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  Boost your online visibility and drive organic traffic with our comprehensive SEO optimization and automated blog content creation services.
                </p>
                
                {/* Features Grid */}
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {seoFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                      <div className="flex-shrink-0">
                        {feature.icon}
                      </div>
                      <span className="text-gray-700 font-medium">{feature.title}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Right Column - Pricing */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200 sticky top-8">
                  {/* Decorative elements */}
                  <Search className="absolute top-6 right-6 w-6 h-6 text-purple-400" />
                  
                  <div className="absolute bottom-6 left-6 w-6 h-6">
                    <svg viewBox="0 0 24 24" className="w-full h-full text-gray-300">
                      <path
                        fill="currentColor"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  
                  <div className="text-center mb-6">
                    <div className="text-5xl font-bold text-gray-900 mb-2">
                      $800<span className="text-2xl text-gray-600">/m</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2 group mb-4">
                    <span>Subscribe Now</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  
                  <div className="text-center text-sm text-gray-500">
                    <div className="flex items-center justify-center animate-gentle-wobble">
                      <span className="text-xl">💯</span> <span className="font-semibold">Satisfaction Guarantee</span>
                    </div>
                  </div>
                </div>
                
                {/* Testimonial - Below the pricing card */}
                <div className="mt-6 bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-lg">Mike Rodriguez</div>
                      <div className="text-gray-600 text-sm">Marketing Director at GrowthCorp</div>
                      <div className="text-gray-500 text-sm italic mt-2">"Our traffic increased 300%!"</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI Chat Bot Accordion Content */}
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
        isChatbotOpen ? 'max-h-[1150px] opacity-100' : 'max-h-0 opacity-0'
      } hidden lg:block`}>
        <div className="mt-6 mb-10 bg-gradient-to-r from-blue-50 via-cyan-50 to-blue-50 rounded-3xl p-8 lg:p-12 border-2 border-blue-100 shadow-xl ring-2 ring-blue-50 relative">
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
                  AI Chat Bot
                </h3>
                
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  Transform your customer service with intelligent AI chat bots that provide instant, personalized responses 24/7, increasing customer satisfaction and reducing support costs.
                </p>
                
                {/* Features Grid */}
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {chatbotFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-gray-100">
                      <div className="flex-shrink-0">
                        {feature.icon}
                      </div>
                      <span className="text-gray-700 font-medium">{feature.title}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Right Column - Pricing */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200 sticky top-8">
                  {/* Decorative elements */}
                  <div className="absolute top-6 right-6 w-8 h-8">
                    <Bot className="w-6 h-6 text-blue-400" />
                  </div>
                  
                  <div className="absolute bottom-6 left-6 w-6 h-6">
                    <Bot className="w-full h-full text-blue-400" />
                  </div>
                  
                  <div className="text-center mb-6">
                    <div className="text-5xl font-bold text-gray-900 mb-2">
                      $500<span className="text-2xl text-gray-600">/m</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2 group mb-4">
                    <span>Subscribe Now</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  
                  <div className="text-center text-sm text-gray-500 flex items-center justify-center">
                    <div className="flex items-center justify-center animate-gentle-wobble">
                      <span className="text-xl">💯</span> <span className="font-semibold">Satisfaction Guarantee</span>
                    </div>
                  </div>
                </div>
                
                {/* Testimonial - Below the pricing card */}
                <div className="mt-6 bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-lg">Lisa Chen</div>
                      <div className="text-gray-600 text-sm">Customer Success at TechStart</div>
                      <div className="text-gray-500 text-sm italic mt-2">"24/7 support that actually works!"</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaintenancePlanAccordion;