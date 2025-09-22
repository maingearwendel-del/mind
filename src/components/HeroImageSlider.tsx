import React, { useState, useEffect } from 'react';

interface ImageSet {
  id: number;
  leftImage: string;
  rightLogo: string;
  leftAlt: string;
  rightAlt: string;
}

interface BottomCardSet {
  id: number;
  topCardImage: string;
  bottomCardImage: string;
  topCardAlt: string;
  bottomCardAlt: string;
}
const HeroImageSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentBottomIndex, setCurrentBottomIndex] = useState(0);

  // Image sets for the slider
  const imageSets: ImageSet[] = [
    {
      id: 1,
      leftImage: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400",
      rightLogo: "/company-logos/mg_logo_cyan_wordmark_black.svg",
      leftAlt: "3D Design Element",
      rightAlt: "Apytel Logo"
    },
    {
      id: 2,
      leftImage: "https://images.pexels.com/photos/6077368/pexels-photo-6077368.jpeg?auto=compress&cs=tinysrgb&w=400",
      rightLogo: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=200",
      leftAlt: "Modern Workspace",
      rightAlt: "Brand Logo"
    },
    {
      id: 3,
      leftImage: "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=400",
      rightLogo: "https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=200",
      leftAlt: "Mobile Interface",
      rightAlt: "Tech Logo"
    }
  ];

  // Bottom card sets for the left column slider
  const bottomCardSets: BottomCardSet[] = [
    {
      id: 1,
      topCardImage: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=300",
      bottomCardImage: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=300",
      topCardAlt: "Bitamine Logo",
      bottomCardAlt: "Mobile App Interface"
    },
    {
      id: 2,
      topCardImage: "https://images.pexels.com/photos/6077368/pexels-photo-6077368.jpeg?auto=compress&cs=tinysrgb&w=300",
      bottomCardImage: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=300",
      topCardAlt: "Brand Identity",
      bottomCardAlt: "Design Portfolio"
    },
    {
      id: 3,
      topCardImage: "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=300",
      bottomCardImage: "https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=300",
      topCardAlt: "Creative Work",
      bottomCardAlt: "Tech Solutions"
    }
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageSets.length);
    }, 3000);

    // Separate interval for bottom cards starting after 1.5 second delay
    const bottomTimeout = setTimeout(() => {
      setCurrentBottomIndex((prevIndex) => (prevIndex + 1) % bottomCardSets.length);
      
      // Start the regular interval for bottom cards after the initial delay
      const bottomInterval = setInterval(() => {
        setCurrentBottomIndex((prevIndex) => (prevIndex + 1) % bottomCardSets.length);
      }, 3000);
      
      return () => clearInterval(bottomInterval);
    }, 1500);

    return () => {
      clearInterval(interval);
      clearTimeout(bottomTimeout);
    };
  }, [imageSets.length, bottomCardSets.length]);

  return ( 
    <div className="mb-8 lg:px-0 px-4"> 
      {/* Top Row - Original slider */} 
      <div className="grid grid-cols-[40%_60%] gap-4 mb-4 h-32">
        {/* Left Block - Blue with 3D element in bottom-right */}
        <div className="relative h-full bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl   overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out h-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {imageSets.map((imageSet, index) => (
              <div key={`left-${imageSet.id}`} className="relative w-full h-full flex-shrink-0">
                {/* 3D Element positioned in bottom-right */}
                <div className="absolute bottom-4 right-4 w-24 h-24">
                  <img
                    src={imageSet.leftImage}
                    alt={imageSet.leftAlt}
                    className="w-full h-full object-cover rounded-lg shadow-lg opacity-80"
                  />
                </div>
                 
                {/* Decorative elements */}
                <div className="absolute top-6 left-6 w-8 h-8 bg-white/20 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/10 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Block - Light gray with centered logo */}
        <div className="relative h-full bg-gradient-to-br from-blue-50 to-gray-100 rounded-3xl overflow-hidden lg:w-full w-[95%]">
          <div 
            className="flex transition-transform duration-500 ease-in-out h-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {imageSets.map((imageSet, index) => (
              <div key={`right-${imageSet.id}`} className="relative w-full h-full flex-shrink-0 flex items-center justify-center">
                {/* Centered Logo */}
                <div className="w-48 h-24 flex items-center justify-center">
                  <img
                    src={imageSet.rightLogo}
                    alt={imageSet.rightAlt}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Row - New cards section */}
      <div className="grid grid-cols-[40%_60%] gap-4 h-88">
        {/* Left Column - Two stacked cards with slider */}
        <div className="flex flex-col gap-4">

          {/* Bottom Card - Phone/App style */}
          <div className="relative h-40 bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out h-full"
              style={{ transform: `translateX(-${currentBottomIndex * 100}%)` }} 
            >
              {bottomCardSets.map((cardSet, index) => (
                <div key={`bottom-card-${cardSet.id}`} className="relative w-full h-full flex-shrink-0">
                  {/* Phone mockup in bottom-right */}
                  <div className="absolute bottom-4 right-4 w-20 h-16 bg-gray-800 rounded-lg overflow-hidden">
                    <div className="w-full h-full bg-gray-900 flex items-center justify-center">
                      {/* App icons */}
                      <div className="grid grid-cols-2 gap-2">
                        <div className="w-6 h-6 bg-red-500 rounded-md flex items-center justify-center">
                          <div className="w-3 h-3 bg-white rounded-full"></div>
                        </div>
                        <div className="w-6 h-6 bg-blue-500 rounded-md"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-6 left-6 w-8 h-8 bg-white/20 rounded-lg"></div>
                </div>
              ))}
            </div>
          </div>

        {/* Left Block - Blue with 3D element in bottom-right */}
        <div className="relative h-full bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out h-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {imageSets.map((imageSet, index) => (
              <div key={`left-${imageSet.id}`} className="relative w-full h-full flex-shrink-0">
                {/* 3D Element positioned in bottom-right */}
                <div className="absolute bottom-4 right-4 w-24 h-24">
                  <img
                    src={imageSet.leftImage}
                    alt={imageSet.leftAlt}
                    className="w-full h-full object-cover rounded-lg shadow-lg opacity-80"
                  />
                </div>
                 
                {/* Decorative elements */}
                <div className="absolute top-6 left-6 w-8 h-8 bg-white/20 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/10 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
          
        </div>





         
        {/* Right Column - Large card with hand holding credit card */}
        <div className="relative h-full">
          
          {/* Animated Signature - Positioned to the left of the image */}
          <div className="absolute -right-[20px] top-[400px] lg:right-20  lg:top-[410px] -translate-y-1/2 z-20 ">

             
            <div className=" signature-container w-full h-24"> 
              <svg 
                viewBox="0 0 595 285.9" 
                className="w-full lg:w-[500px] h-full"
                xmlns="http://www.w3.org/2000/svg"
              > 
                <g> 
                  <path 
                    className="signature-path-1"
                    d="M584.8,149.4c-3.4-0.4-6.7-0.9-10.1-1.2c-1.7-0.1-3.5,0-5.2,0.5c-5.5,1.9-11,4-16.6,6.1c-6.1,2.3-12.2,4.7-18.5,6.9c-3.7,1.2-7.4,1.3-10.6-0.7c-1.2-0.7-2.3-1.8-3-2.9c-0.8-1.2-1.6-1.3-2.9-0.7c-2.7,1.2-5.4,2.2-8,3.5c-8.1,4.1-16.2,8.3-24.5,12.4c-3.3,1.6-6.6,3.3-10.4,3.3c-2.5,0-4.8-0.4-6.5-2c-1.9-1.8-2.1-5.3-0.3-7.7c3.3-4.1,6.8-8.1,10.1-12.1c0.3-0.3,0.5-0.7,0.7-1.1c-0.5,0.1-1.1,0.1-1.5,0.3c-7.1,4.3-14.3,8.7-21.4,13.2c-5.7,3.6-11.2,7.5-16.8,11.4c-9.5,6.6-19.1,13.3-28.9,20c-7.3,5-14.7,10.2-22.4,15.1c-5.8,3.7-11.8,7.3-18.1,10.5c-6,3.2-12.4,5.6-19.3,5.9c-8.1,0.3-12.8-2.5-14.3-8.3c-0.9-3.3-0.2-6.9,1.1-10.4c0.4-1.1,0.7-2.1,1-3.2c0.1-0.4,0-0.8,0.1-1.2c-0.5,0.2-1,0.2-1.4,0.5c-2,1.2-4,2.7-6.1,3.8c-5.1,2.5-10.3,5.2-15.7,7.2c-4.7,1.7-8.5-0.9-7.8-4.6c0.2-1.2,0.9-2.1,2.3-2.8c5-2.4,10.1-4.7,14.9-7.5c5.2-3,10.1-6.3,15-9.6c3.7-2.4,7.4-4.9,11-7.5c1-0.7,1.9-1.7,2.6-2.7c2.3-3.2,4.3-6.6,6.7-9.7c5-6.3,10.1-12.5,15.1-18.6c3.4-4.1,6.7-8.2,10.2-12.1c3.9-4.3,8-8.5,12-12.7c2.9-3,5.7-6.1,8.6-9.1c3.7-3.9,7.4-7.8,11.2-11.5c6.8-6.6,13.5-13.2,20.3-19.6c2.7-2.5,5.4-5,8.2-7.4c8.5-7.2,16.8-14.5,25.3-21.3c7.4-5.9,15.1-11.3,22.6-16.7c7.4-5.2,14.9-10.2,22.3-15.1c3.2-2.1,6.7-3.9,10-5.8c0.7-0.4,1.4-1,2.1-1.4c3.4-1.9,6.7-3.8,10-5.5c7.6-4,15.1-7.8,23-10.9c3.7-1.4,7.4-2.8,11.1-3.9c1.6-0.4,3.4,0,5.2,0c0.6,0,1.3,0,1.9,0.2c2.4,0.8,4,3.2,4.3,5.8c0.3,2.7-0.9,5-2.1,7.3c-2.8,5.4-6.7,10.3-11.1,14.8c-5.6,5.8-11.3,11.6-17.3,17.2c-5.8,5.3-12,10.4-18.3,15.5c-7.5,6-15.2,11.9-23,17.9c-5.4,4.1-11,8.1-16.5,12.2c-4.9,3.6-9.8,7.3-14.8,10.9c-3,2.2-6.2,4.2-9.2,6.4c-3.2,2.3-6.4,4.7-9.7,7.1c-4.4,3.2-9,6.4-13.5,9.7c-3.9,2.9-7.8,5.9-11.8,8.9c-4.4,3.3-8.9,6.5-13.4,9.8c-6.9,5-13.9,10.2-20.9,15.3c-7.6,5.6-15.3,11.2-23.2,16.9c-5.9,4.3-12,8.6-18,13c-0.9,0.7-1.5,1.7-2,2.6c-2.6,4.6-5.3,9.1-7.5,13.8c-1.5,3.3-2.5,6.7-3.3,10.1c-0.6,2.4,0.5,3.2,3.4,3c3.7-0.2,7.2-1.5,10.5-3.2c5.6-2.8,11.1-5.7,16.4-8.9c5.1-3,9.8-6.4,14.7-9.6c3.2-2.1,6.5-4.2,9.7-6.4c4.6-3.1,9.2-6.2,13.8-9.4c6.4-4.4,12.7-9,19.1-13.3c5.9-4,11.9-7.9,17.8-11.7c3.9-2.5,7.8-5.1,11.8-7.4c7.7-4.5,15.2-9,23.4-12.2c2.6-1,5.2-1.4,7.9-1c1.8,0.3,2.4,1.7,3,3.1c0.5,1.2,0.3,2.4-0.4,3.7c-3,5.7-7.6,10.3-12.2,15.1c-1,1-1.9,2-2.9,3c-0.2,0.2-0.3,0.6-0.5,0.9c0.4-0.1,0.7-0.1,1.1-0.2c3.6-1.8,7-3.7,10.6-5.3c7.1-3.3,14.1-7,21.5-9.2c2.6-0.8,5.2-0.9,7.6,0c2,0.7,3.2,2.2,3.8,4.1c0.3,1.1,0.9,1.1,1.9,0.9c6.5-1.2,12.3-4.1,18.3-6.5c6-2.4,12-5,18.1-6.6c4.1-1.1,7.9-0.5,11.8,0.3c4.1,0.8,8.3,1.1,12.4,1.7c1,0.1,2.2,0.4,2.7,1.1c0.9,1.3,0,2.5-1.8,3.5c-2.1,1.1-4.2,1.4-6.4,1.4C584.9,149.2,584.8,149.3,584.8,149.4z M575.3,8.1c-0.4,0-0.7,0.1-1.1,0.1c-5.2,0.5-9.9,2.3-14.5,4.5c-6.1,2.9-12.2,6-18.3,9.3c-4.8,2.6-9.6,5.3-14.2,8.3c-5.8,3.7-11.6,7.6-17.3,11.5c-4.5,3.1-9,6.2-13.4,9.6c-8.1,6.2-16.4,12.6-24.5,19.2c-6.3,5.1-12.6,10.4-18.6,16c-8.9,8.2-17.6,16.7-26.4,25.4c-6.6,6.6-13,13.6-19.5,20.6c-5.7,6.2-11.4,12.5-17,19c-4.3,5-8.5,10.2-12.7,15.4c-0.2,0.3-0.4,0.7-0.6,1c0.4-0.2,0.9-0.3,1.2-0.5c4-2.8,7.9-5.6,11.8-8.4c5.2-3.7,10.3-7.5,15.4-11.1c7.4-5.3,14.7-10.4,21.9-15.5c5.4-3.8,10.7-7.6,16-11.3c3.5-2.4,7.1-4.8,10.6-7.2c2.3-1.5,4.6-2.9,6.9-4.4c3.1-2.1,6.2-4.3,9.3-6.5c3.6-2.5,7.1-5,10.6-7.5c4.5-3.2,9-6.3,13.4-9.5c5.2-3.8,10.3-7.7,15.4-11.6c3.5-2.6,7-5.3,10.5-7.9c3.1-2.4,6.1-4.9,9.2-7.3c2.5-2,5.1-4,7.5-6.1c4.8-4.3,9.6-8.6,14.2-13c3.3-3.1,6.6-6.1,9.6-9.4c3.8-4.2,7.3-8.7,11-13c2.2-2.5,3.8-5.3,4.8-8.4C576.6,8.3,576.2,8.1,575.3,8.1z"
                    fill="#000000"
                  />
                  <path 
                    className="signature-path-2"
                    d="M272.5,35.9c-13.7-0.1-27.8,1-42.1,3.5c-7.6,1.3-15.4,2.8-23.1,4.7c-13.3,3.3-26.5,7.4-39.8,12c-13.4,4.7-26.5,10.3-39.4,16.5C112.3,80.3,97,88.8,82.7,98.6c-6.9,4.8-13.2,9.9-19.2,15.2c-5.5,4.9-10.6,10-14.8,15.4c-4.2,5.4-6.8,10.9-7.7,16.4c-0.4,2.2-1.4,4.5-5.1,5.9c-3.8,1.4-10.5,1.1-9.7-2.5c1-4.3,2.2-8.7,4.4-13c2.3-4.5,5.2-9,8.8-13.3c4.3-5,9-9.9,14.5-14.4c6.9-5.5,13.6-11.1,21.7-15.8c4.3-2.5,8-5.4,12.2-7.8c7.4-4.3,14.8-8.4,22.4-12.3c6.7-3.4,13.8-6.5,20.7-9.5c2.8-1.2,5.9-2.1,8.7-3.2c2.3-0.9,4.4-2.1,6.6-3c14.2-5.9,28.7-10.5,43.2-14.5c5.9-1.6,11.8-3,17.7-4.5c9-2.3,18-3.9,26.9-5c7-0.9,13.9-1.7,20.8-2.1c6.1-0.4,12.1-0.2,18.1-0.2c11.1-0.1,21.6,1.3,31.4,3.6c7.3,1.7,14,4.1,19.6,7.6c4.2,2.6,7.7,5.7,10.4,9.3c2.1,2.9,4.3,5.9,5.8,9c2.1,4.4,2.6,9.4,2.5,14.4c-0.1,5.8-1.6,11.6-4,17.4c-4.2,10-11.2,19.4-20.4,28.2c-4.4,4.2-8.6,8.6-13.4,12.6c-6.4,5.3-13.1,10.5-20.1,15.6c-7.7,5.6-15.7,10.9-23.8,16.4c-3.3,2.2-6.8,4.3-10.3,6.4c-1.2,0.7-1.4,1.2-0.9,2c2.5,3.9,1.2,8.4-1.1,13.1c-0.5,1-0.6,2.1-0.9,3.1c1.2-0.3,2.5-0.5,3.7-1c5-2.1,10-4.3,15-6.4c6.2-2.7,12.3-5.5,18.5-8c2.4-1,5.2-1.6,7.5-1.7c3.3,0,6.2,0.8,6.9,3.6c0.7,2.8,0.8,2.8,4.9,1.8c3.3-0.8,6.6-1.7,9.9-2.5c1.3-0.3,2.6-0.3,4-0.5c0.7-0.1,1.6-0.3,2.3-0.6c2.6-1.5,4.9-3,8.1-3.2c1.5-0.1,3.3-1.3,5-2c3.5-1.4,5.2-1.4,6.3,1.1c0.5,1.1,0.1,2.3-1.3,3.3c-1.4,1-2.9,1.8-4.4,2.7c-0.3,0.2-0.6,0.5-0.9,0.7c0.3,0.1,0.6,0.1,0.9,0.2c1.4,0.1,2.8,0.2,4.2,0.4c1.8,0.3,1.6,1.7,1.3,2.9c-0.2,1.4-1.6,2.1-3,2.7c-1,0.5-2.1,1-3,1.7c-2.1,1.4-4.5,1.8-6.8,2.1c-3.2,0.4-6.2,0.4-8.3-1.4c-0.7-0.6-2.3-0.5-3.3-0.9c-0.8-0.3-1.5-0.6-2-1.1c-0.6-0.5-1.1-0.6-2.3-0.2c-3,1.1-6.1,2.3-9.1,2.9c-6,1.1-9.9-0.6-11.7-4.4c-0.4-1-1.2-0.9-2.4-0.5c-5.9,1.8-11.5,4.5-17.1,7.3c-6.1,3-12.3,6-18.6,8.9c-6.1,2.7-13.5,1.9-15.8-1.4c-1.8-2.8-0.9-6,0.7-9.3c1.1-2.3,1.8-4.5,2.7-6.8c0.1-0.3-0.1-0.7-0.2-1c-0.5,0.2-1.1,0.3-1.6,0.6c-10.2,6-20.4,12.3-31,18.3c-10.2,5.9-20.7,11.6-31.3,17.4c-8.9,4.9-17.9,9.9-27.1,14.8c-7.4,4-15,7.9-22.7,11.8c-10.8,5.5-21.7,11.1-32.9,16.4c-15.7,7.3-31.9,14.2-49,19.3c-8,2.4-16.1,4.6-23.7,4.5c-3.2-0.1-6.8-0.4-8.8-1.6c-2-1.2-3.2-3.3-1.5-6.2c1.3-2.1,1.8-4.2,3-6.2c2.4-4.2,6.9-7.9,11.1-11.6c7.9-6.9,17.2-13,26.3-18.8c7.7-4.9,16-9.2,24.1-13.7c5.6-3.1,11.2-6.2,17-8.9c10.8-5.1,21.5-10.1,32.3-14.7c8.5-3.6,17.2-6.6,25.7-9.7c6.8-2.5,13.6-4.8,20.4-7c9.7-3.2,19.4-6.2,29.1-8.2c4.9-1,9.8-2.4,14.7-3.4c7.9-1.5,15.6-2.5,23.1-2.4c0.5,0,1.2-0.3,1.6-0.5c7.7-4.8,15.4-9.5,22.8-14.3c7.3-4.8,14.4-9.8,21.3-14.7c4.5-3.2,8.9-6.4,13-9.8c4.4-3.6,8.8-7.4,12.7-11.2c6.1-6.1,12.2-12.1,16.4-18.8c2.4-3.8,4.6-7.7,6.3-11.6c4.4-10.4,4.9-20.3,0.4-29.3c-2.5-5.1-6.8-9.2-12.5-12.4c-10.4-5.8-23.1-8.4-37.1-9.3c-1.6-0.1-3.1-0.2-4.7-0.3C275.6,36,274.1,36,272.5,35.9z M29.7,270.8c0.2,0,1.1-0.1,1.9-0.4c7.9-2.4,15.8-4.2,23.3-7.2c10.8-4.2,21.7-8.1,31.9-13.2c6.8-3.4,13.8-6.4,20.5-9.6c5.2-2.5,10.1-5.2,15.2-7.8c1.4-0.7,2.8-1.5,4.2-2.3c5.3-2.7,10.6-5.3,15.8-8c3.5-1.8,6.8-3.8,10.2-5.6c6.7-3.6,13.5-7.2,20.1-10.8c4.8-2.6,9.5-5.3,14.3-7.9c1.2-0.6,2.6-0.9,3.7-1.6c2.5-1.5,4.8-3.1,7.2-4.6c7.6-4.4,15.2-8.8,22.6-13.1c0.3-0.2,0.5-0.5,0.8-0.7c-0.4-0.1-0.7-0.2-1.1-0.2c-1.2,0.1-2.3,0.3-3.5,0.5c-10.7,1.8-21.4,4.7-32.2,7.9c-14.2,4.1-28.4,9.3-42.7,14.9c-21.8,8.4-43.4,18.4-64.6,30.2c-12.5,7-24.8,14.6-35.9,23.2c-5.5,4.3-10.9,8.7-14.6,13.7C25,270.9,25.3,271.2,29.7,270.8z"
                    fill="#000000"
                  />
                  <path 
                    className="signature-path-3"
                    d="M78.2,142.8c-2.4,6.5-4.8,13.1-7.1,19.7c-2.8,7.9-5.4,15.9-8.5,23.9c-3.6,9.1-7.8,18.3-11.6,27.6c-1.3,3.2-2.2,6.4-3.3,9.6c-0.3,0.8-0.4,1.5-0.7,2.3c-0.8,2.2-2.6,3.3-5.7,3.6c-4.7,0.5-6.2-0.3-6.6-3.3c-0.9-6,1.8-12.4,4.7-18.8c1.3-2.8,2.5-5.6,3.6-8.4c2.8-6.6,5.7-13.3,8.2-19.8c3.4-9.3,6.4-18.6,9.6-27.8c1.3-3.6,2.3-7.2,3.9-10.8c0.6-1.5,2.2-3,3.6-4.3c0.5-0.5,2-0.7,3-0.9c4.7-0.7,8.2,1.6,7.3,4.7c-0.3,1-0.7,1.9-1.1,2.9C77.8,142.8,78,142.8,78.2,142.8z"
                    fill="#000000"
                  />
                </g>
              </svg>

        <span className="lg:-ml-[130px] text-[10px] pr-[20px] text-right block w-full text-nowrap"><b>Wendel Santos</b><br></br>Creative Genius · Billionaire</span> 
            </div>
          </div> 

          {/* Floating image positioned above the card */}
          <div className="absolute bottom-[122px] left-[65px] lg:bottom-0 lg:left-[55px] lg:right-0 w-[180px] h-20 lg:w-72 lg:h-40 z-10 ">
            <img    
              src="/wendel-santos-hero.webp"
              alt="Wendel Santos Wearing Mind Shirt" 
              className="w-full"
            /> 
          </div>
           
          {/* Card background */}
          <div className="h-full bg-gradient-to-br from-pink-200 to-rose-200 rounded-3xl overflow-hidden lg:w-full w-[95%] ">
            {/* Impactful Text Content */}
<div className="relative h-full flex flex-col justify-start items-start p-6 text-left">
 
 
              <div className="space-y-2 ">
                <div className="ml-2 lg:ml-4 text-gray-900 font-black text-[21px] lg:text-[32px] leading-none transform scale-y-125 scale-x-115">
                 IF YOUR SITE 
                </div>
<div className="italic ml-2 lg:ml-4 text-gray-900 font-black text-4xl lg:text-6xl leading-none tracking-wider transform scale-y-150  scale-x-115">
 
  
                  SUCKS     
                </div>
                <div className="pt-[7px] italic text-gray-700 font-bold text-[11px] lg:text-[23px] leading-none scale-y-110  tracking-wide ">
                OR YOUR BRAND IS 
                </div>                <div className="  -ml-3 lg:-ml-4 italic text-gray-700 font-black text-4xl lg:text-5xl leading-none tracking-wide scale-y-130  scale-x-90">
                 WEAK  
                </div>
          
                <div className=" pt-2 lg:pt-2 text-gray-900 font-black text-[20px] lg:text-[18px] leading-[20px] tracking-wider transform lg:scale-x-140 lg:ml-9  lg:scale-y-150 scale-y-125 ">
                  I'M YOUR
                </div>
                <div className="hidden lg:block text-gray-900 font-black text-4xl leading-none tracking-wider transform lg:scale-x-140 lg:ml-9 scale-y-150  lg:pt-2">
                 MAN
                </div>
                                <div className="lg:hidden text-gray-900 font-black text-1xl leading-none tracking-wider transform scale-y-125 pt-[5px]">
             MAN
                </div>
                                                <div className="-ml-2 lg:hidden text-gray-900 font-black text-3xl leading-none tracking-wider transform  pt-[5px]">
               <span className="inline-block text-gray-800 text-4xl sm:text-5xl lg:text-3xl xl:text-3xl animate-bounce-up-down">😎 </span>
                </div>

                
              </div>
            </div>
          </div>
        </div>


          {/* Bottom Card - Phone/App style */} 
          <div className="relative h-40 bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl overflow-hidden lg:hidden">
            <div  
              className="flex transition-transform duration-500 ease-in-out h-full"
              style={{ transform: `translateX(-${currentBottomIndex * 100}%)` }}
            >
              {bottomCardSets.map((cardSet, index) => (
                <div key={`bottom-card-${cardSet.id}`} className="relative w-full h-full flex-shrink-0">
                  {/* Phone mockup in bottom-right */}
                  <div className="absolute bottom-4 right-4 w-20 h-16 bg-gray-800 rounded-lg overflow-hidden">
                    <div className="w-full h-full bg-gray-900 flex items-center justify-center">
                      {/* App icons */}
                      <div className="grid grid-cols-2 gap-2">
                        <div className="w-6 h-6 bg-red-500 rounded-md flex items-center justify-center">
                          <div className="w-3 h-3 bg-white rounded-full"></div>
                        </div>
                        <div className="w-6 h-6 bg-blue-500 rounded-md"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-6 left-6 w-8 h-8 bg-white/20 rounded-lg"></div>
                </div>
              ))}
            </div>
          </div>
        
      </div>
      
    </div>
  );
};

export default HeroImageSlider;