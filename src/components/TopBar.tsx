import React, { useState } from 'react';
import { X } from 'lucide-react';

interface TopBarProps {
  isVisible: boolean;
  onClose: () => void;
}

const TopBar: React.FC<TopBarProps> = ({ isVisible, onClose }) => {
  if (!isVisible) return null;
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 px-4 ios-fixed-topbar" style={{ position: '-webkit-sticky', position: 'sticky', top: '0' }}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left side - Free Brand Audit */}
        <div className="flex items-center space-x-2 hidden md:block">
          <span className="text-yellow-300">✦</span>
          <span className="text-sm font-medium ">Get Your Free Ultimate Brand Audit Here</span>
          <span className="text-yellow-300">✦</span>
        </div>

        {/* Right side - Q3 2025 Projects */}
        <div className="hidden md:flex items-center space-x-2">
          <span className="text-sm font-medium">Now Taking Projects for Q3 2025</span>
          <span className="text-yellow-300">💼</span>
          <span className="text-sm font-medium">Save Your Spot</span>
          <span className="text-yellow-300">📅</span>
        </div>

        {/* Fall Sale text - Left of close button */}
        <div className="text-sm flex items-center space-x-3"> 
          <span className="text-sm font-medium">🍂 <b>Fall Sale</b> - GET $1k OFF</span>
           <img src="WooCommerce_logo_white.svg" alt="Woocommerce Logo" description="Start Selling With Woocommerce" className="h-5 lg:h-5 pr-2 inline-block align-middle ml-1 translate-y-0.95" />   Sites
        {/* Close button */} 
        <button
          onClick={onClose}
          className="text-white hover:text-yellow-300 transition-colors p-1"
          aria-label="Close announcement"
        >
          <X className="w-4 h-4" />
        </button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;