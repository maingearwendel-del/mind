import React, { useState, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';

interface BookingNotification {
  id: number;
  name: string;
  location: string;
  timeAgo: string;
  verified: boolean;
}

const BookingNotificationSliderOneLine: React.FC = () => {
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
    <div className="flex items-center justify-start h-full lg:-ml-2">
      <div className="rounded-full py-2 transition-all duration-500 ease-in-out">
  
        {/* Single line layout */}
        <div className="flex items-center space-x-2 text-sm text-gray-700 font-medium whitespace-nowrap">
          <span className="font-semibold text-blue-600">{currentNotification.name}</span>
          <span className="text-gray-500">from</span>
          <span className="font-medium">{currentNotification.location}</span>
          <span className="text-gray-500">·</span>
          <span className="text-xs text-gray-500">{currentNotification.timeAgo}</span>
          {currentNotification.verified && (
            <>
              <span className="text-gray-500">·</span>
              <div className="relative group flex items-center space-x-1">
                <CheckCircle className="w-3 h-3 text-blue-500" />
                <span className="text-blue-500 font-medium text-xs">Verified</span>
                                {/* Tooltip */}
                <div className="absolute left-full top-1/2 transform -translate-y-1/2 ml-2 px-3 py-2 bg-white text-gray-800 text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50 shadow-lg border border-gray-200">
                    <div className="flex items-center space-x-2">
                      <span className="text-[10px]">by</span> 
                      <img src="/calendly_logo.webp" alt="Calendly" className="h-full w-[70px] max-w-[70px]" />
                    </div>  
                    {/* Tooltip arrow */}
                    <div className="absolute right-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-white"></div>
                  </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingNotificationSliderOneLine;