import React, { useState } from 'react';
import { Play, X } from 'lucide-react';

const FloatingVideoWidget: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isWidgetVisible, setIsWidgetVisible] = useState(true);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  const stopVideo = () => {
    setIsPlaying(false);
  };

  const dismissWidget = () => {
    setIsWidgetVisible(false);
  };

  if (!isWidgetVisible) {
    return null;
  }

  return (
    <>
      {/* Floating Video Widget - Desktop Only */}
      <div className="hidden lg:block fixed bottom-32 right-8 z-40">
        <div className={`${isPlaying ? 'w-52 h-80' : 'w-32 h-48'} rounded-3xl overflow-hidden shadow-2xl relative bg-gradient-to-br from-gray-900 to-gray-800 hover:scale-110 transition-all duration-500 group animate-float`}>
          {/* Dismiss X Button */}
          <button
            onClick={dismissWidget}
            className="absolute top-2 right-2 z-20 w-6 h-6 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100"
          >
            <X className="w-3 h-3" />
          </button>
          
          {!isPlaying ? (
            <button
              onClick={handlePlayClick}
              className="relative w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center cursor-pointer hover:bg-gradient-to-br hover:from-gray-600 hover:to-gray-700 transition-all duration-300"
            >
              <div className="relative w-full h-full">
                <img 
                  src="/m_thumbnail_v3.webp"
                  alt="What Makes Great Marketing"
                  className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-90"
                />
              </div>
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500/80 to-pink-500/80 hover:from-purple-600/90 hover:to-pink-600/90 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300">
                  <Play className="w-5 h-5 text-white ml-0.5 transition-colors" fill="currentColor" />
                </div>
              </div>
              
              {/* Video Duration */}
              <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded-full text-xs font-medium">
                4:12
              </div>
            </button>
          ) : (
            <div className="relative w-full h-full bg-black">
              {/* Video Player */}
              <iframe
                src="https://www.youtube.com/embed/VjcV_s9EyBU?autoplay=1&si=SjSWiFa0mbizMN1C&controls=0"
                title="Marketing video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              />
              
              {/* Stop button */}
              <button
                onClick={stopVideo}
                className="absolute top-2 left-2 z-20 w-6 h-6 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100"
              >
                <span className="text-white font-bold text-sm">−</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FloatingVideoWidget;