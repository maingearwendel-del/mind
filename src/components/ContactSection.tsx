import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

interface ContactSectionProps {
  themeClasses: {
    cardBg: string;
    cardBorder: string;
    textTertiary: string;
  };
}

const ContactSection: React.FC<ContactSectionProps> = ({ themeClasses }) => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-indigo-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-indigo-200/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 bg-clip-text text-transparent">
              Let's work together 
            </span>
          </h2>
          <p className="text-xl text-gray-700 mx-auto leading-relaxed">
            Ready to transform your business? Get in touch and let's create something
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-start justify-center lg:justify-start">
          {/* Left Column - Contact Info & Map */}
          <div className="space-y-8 w-full max-w-2xl mx-auto lg:mx-0">
            {/* Contact Information and Map - Two Cards Side by Side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-[95%] sm:w-full mx-auto px-1 sm:px-0 justify-items-center sm:justify-items-stretch">
              {/* Contact Information Card */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-4 sm:p-6 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300 w-full max-w-sm sm:max-w-none">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-1 h-8 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"></div>
                  <h3 className="text-2xl font-bold text-gray-900">📱 Contact Info</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 font-medium">Email</p>
                      <p className="text-gray-900 font-semibold">hello@mindmedia.co</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 font-medium">Call us</p>
                      <p className="text-gray-900 font-semibold">(619) 663-4272</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 font-medium">Location #1</p>
                      <p className="text-gray-900 font-semibold">San Diego, CA</p>
          
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 font-medium">Location #2</p>
                      <p className="text-gray-900 font-semibold">Union, NJ</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Second Find Us Card */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-4 sm:p-6 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300 w-full max-w-sm sm:max-w-none">
                <div className="flex items-center space-x-3 mb-6">
   
                  <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></div>
                  <h3 className="text-2xl font-bold text-gray-900">💬 Chat with us</h3>
                </div>
                <div className="w-full h-64 rounded-2xl overflow-hidden shadow-lg">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.123456789!2d-74.0059413!3d40.7127753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjAiTiA3NMKwMDAnMjEuNCJX!5e0!3m2!1sen!2sus!4v1234567890123"
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Our Location"
                      className="rounded-lg"
                    ></iframe>
                </div>
              </div>
            </div>

        {/* Find Us Cards - Below Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-[95%] sm:w-full mx-auto px-1 sm:px-0 justify-items-center sm:justify-items-stretch">
          {/* Find Us Card 1 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-4 sm:p-6 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300 w-full max-w-sm sm:max-w-none">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">San Diego, California</h3>
                <p className="text-sm text-gray-600 font-medium">1741 Eastlake Pkwy ste 102 2009, Chula Vista, CA 91915</p>
              </div>
              
            </div>
            <div className="w-full h-64 rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.4!2d-74.0059!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjEiTiA3NMKwMDAnMjEuMiJX!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              ></iframe>
            </div>
          </div>

          {/* Find Us Card 2 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-4 sm:p-6 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300 w-full max-w-sm sm:max-w-none">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Union, New Jersey</h3>
                <p className="text-sm text-gray-600 font-medium">Location #2</p>
              </div>
            </div>
            <div className="w-full h-64 rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.4!2d-74.0059!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjEiTiA3NMKwMDAnMjEuNCJX!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              ></iframe>
            </div>
          </div>
        </div> 
      </div>
          
          {/* Right Column - Calendly Embed */}  
          <div className="px-0 sm:px-0 w-[98vw] sm:w-full max-w-[98vw] sm:max-w-none mx-auto"> 
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden h-full min-h-[600px] border border-white/50 hover:shadow-3xl transition-all duration-300 w-full max-w-[98vw] sm:max-w-none mx-auto">
              <div className="pl-2 pt-4 sm:p-8 border-gradient-to-r from-indigo-100 to-purple-100 "> 
                       <div className="flex items-center mb-2 "> 
                  <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full ml-2"></div>
                  <div className="flex items-center pl-2">
                    <h3 className="text-2xl font-bold text-gray-900 hidden sm:block">📅 Book a Free 15 Minute Call </h3>
                     <h3 className="text-[18px] font-bold text-gray-900 block lg:hidden">Book a Free 15 Minute Call </h3>
 
               <div className="inline-flex items-center space-x-2 rounded-full px-1 py-1 backdrop-blur-sm ml-auto lg:ml-5"> 
                  <div className="inline-flex items-center space-x-2  rounded-full px-3 py-1 backdrop-blur-sm animate-blink-pulse">
                        <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>  
                        <span className="text-[13px] font-medium text-black hidden lg:block ">Limited Availability</span>  
                        <span className="text-[13px] font-medium text-black lg:hidden ">Limited Slots</span> 
                      </div>
                  </div>
                    
                   
                  </div>
                  
                </div>
                <p className="text-gray-600 leading-relaxed"> We take on only a limited number of projects each month to ensure quality and fit. Let's discuss and explore how we can bring your vision to life.  </p>
              </div>
              <div className="px-4 sm:px-8 pb-4 sm:pb-8 pt-0 h-full">
                <div
                  className="calendly-inline-widget"
                  data-url="https://calendly.com/wendel-mindmedia/30min?hide_event_type_details=1&hide_gdpr_banner=1"
                  style={{minWidth: '280px', maxWidth: '100%', height: '600px', width: '100%'}}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;