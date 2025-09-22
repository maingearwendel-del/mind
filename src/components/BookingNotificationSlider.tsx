import React, { useState, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';

interface BookingNotification {
  id: number;
  name: string;
  location: string;
  timeAgo: string;
  verified: boolean;
}

const BookingNotificationSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const bookingNotifications: BookingNotification[] = [
    {
      id: 1,
      name: "Marcus M.",
      location: "Brooklyn, NY",
      timeAgo: "Booked 1 day ago",
      verified: true
    },
    {
      id: 2,
      name: "Sarah K.",
      location: "Los Angeles, CA",
      timeAgo: "Booked 3 hours ago",
      verified: true
    },
    {
      id: 3,
      name: "David L.",
      location: "Miami, FL",
      timeAgo: "Booked 2 days ago",
      verified: true
    }
  ];
 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bookingNotifications.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [bookingNotifications.length]);

  const currentNotification = bookingNotifications[currentIndex];

  return ( 
    <div className="mt-5 lg:mt-0 flex items-center justify-center">
      <div className=" rounded-full px-4 py-3   transition-all duration-500 ease-in-out">
  
        
        {/* Two-line layout */}
        <div className="text-center">
          {/* First line - Name and location */}
          <div className="text-sm text-gray-700 font-medium whitespace-nowrap">
            <span className="font-semibold text-blue-600">{currentNotification.name}</span>
            <span className="text-gray-500"> from </span>
            <span className="font-medium">{currentNotification.location}</span>
          </div>
          
          {/* Second line - Time and verified */}
          <div className="flex items-center justify-center space-x-2 text-xs text-gray-500 whitespace-nowrap mt-1">
            <span>{currentNotification.timeAgo}</span>
            {currentNotification.verified && (
              <div className="flex items-center space-x-1">
               ·  
               &nbsp;   <CheckCircle className="w-3 h-3 text-blue-500" />

                <div className="relative group">
                  <span className="text-blue-500 font-medium">Verified </span>   
                                               {/* Tooltip */}
                <div className="pr-2  absolute left-full top-1/2 transform -translate-y-1/2 ml-2 lg:px-3 px-1 py-2 bg-white text-gray-800 text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50 shadow-lg border border-gray-200">
                    <div className="flex items-center lg:space-x-2">
                      <span className="text-[10px] hidden md:block">by</span>
                      <img src="/calendly_logo.webp" alt="Calendly" className="h-full w-[70px] max-w-[70px]" />
                    </div>  
                    {/* Tooltip arrow */}
                    <div className="absolute right-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-white"></div>
                  </div>
                </div>
              </div>
       
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingNotificationSlider;