import React, { useState } from 'react';
import { Play, Star, TrendingUp, Calendar, MapPin, User, Clock } from 'lucide-react';

const VideoTestimonial: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <section className="pb-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">


        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Content Section */}
            <div className="relative">
              <div className="mb-8">               <h3 className="text-6xl font-bold text-[#3d3d3d] mb-4">
             <div className="flex items-center gap-6">
              <div className="relative">
                {/* Floating pill centered on image */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-2 py-0.5 rounded-full text-sm font-semibold shadow-lg z-10 whitespace-nowrap">
                  Hugo S.
                </div>
               <img 
                 src="/hugo.png"
                 alt="Success story"
                 className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg flex-shrink-0"
               />
              </div>
               <div>
                 From Zero To<br />
                 <span className="text-7xl bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                   Fully Booked
                 </span>
               </div>
             </div>
                </h3>
                <blockquote className="text-gray-700 text-xl leading-relaxed italic mb-6 border-l-4 border-purple-500 pl-6 pt-4">
                  "Within 48 hours of launching my new website, I received my first booking. 
                  By the end of the first week, I was completely booked for the next month!"
                </blockquote>
                
                {/* 5 Star Review */}
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-gray-600 font-medium">5.0 out of 5</span>
                </div>                <div className="text-gray-500 text-sm mt-2">
                  yourmobilefloorstore.com
                </div>
              </div>
            </div>

            {/* Right Column - Video Section */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl overflow-hidden shadow-2xl">
                {!isPlaying ? (
                  <>
                    {/* Video Thumbnail */}
                    <div className="relative aspect-video bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                      <img 
                        src="https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop"
                        alt="Mike - Mobile Flooring Business Owner"
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <button
                          onClick={handlePlayClick}
                          className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 group"
                        >
                          <Play className="w-8 h-8 text-gray-900 ml-1 group-hover:text-blue-600 transition-colors" fill="currentColor" />
                        </button>
                      </div>
                      
                      {/* Video Duration */}
                      <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                        2:34
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="aspect-video bg-gray-900 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                      <p className="text-lg">Loading video...</p>
                      <p className="text-sm text-gray-300 mt-2">Video would play here in production</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonial;