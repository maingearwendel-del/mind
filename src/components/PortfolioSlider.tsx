import React, { useState, useEffect, useRef } from 'react';
import { PortfolioItem } from '../data/portfolioSlidersData';

interface PortfolioSliderProps {
  items: PortfolioItem[];
  backgroundColor: string;
  animationClass: string;
  itemWidthClass?: string;
  itemHeightClass?: string;
  spacing?: string;
}

const PortfolioSlider: React.FC<PortfolioSliderProps> = ({ 
  items, 
  backgroundColor, 
  animationClass,
  itemWidthClass = "w-80",
  itemHeightClass = "h-64",
  spacing = "space-x-20"
}) => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Check if backgroundColor is a hex color, CSS gradient, or Tailwind class
  const isHexColor = backgroundColor.startsWith('#');
  const isCSSGradient = backgroundColor.includes('gradient') && !backgroundColor.startsWith('bg-');
  const sectionStyle = (isHexColor || isCSSGradient) ? { background: backgroundColor } : {};
  const sectionClassName = (isHexColor || isCSSGradient) ? 'py-16 overflow-hidden relative' : `py-16 ${backgroundColor} overflow-hidden relative`;
  return (
    <section ref={sectionRef} className={sectionClassName} style={sectionStyle}>
      <div className="relative">
        <div className={`flex ${spacing} w-max ${isInView ? animationClass : ''}`}>
          {/* First set of items */}
          {items.map((item) => (
            <div
              key={`first-${item.id}`}
              className={`flex-shrink-0 ${itemWidthClass} ${itemHeightClass} rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 portfolio-image-glossy`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover rounded-3xl"
                loading="lazy"
              />
            </div>
          ))}
          
          {/* Duplicate set for seamless loop */}
          {items.map((item) => (
            <div
              key={`second-${item.id}`}
              className={`flex-shrink-0 ${itemWidthClass} ${itemHeightClass} rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 portfolio-image-glossy`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover rounded-3xl"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSlider;