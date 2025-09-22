import React, { useState, useEffect } from 'react';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  title: string;
  company: string;
  avatar: string; 
}          <span className="text-gray-600 font-bold mt-1 sm:mt-0 text-2xl pl-4">  <img 
                      src="/Google_logo.svg"
                      alt="Google Logo"
                      className="w-24 h-24"
                    /></span> 

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Softriver designed an incredible brand in record time. No bloated process and endless meetings, just sharp, smart design with fast delivery and zero fluff.",
    author: "Paul Darmas",
    title: "Founder of",
    company: "Digitality",
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    id: 2,
    quote: "Working with Alex was a game-changer for our brand. The attention to detail and creative vision exceeded all our expectations. Highly recommend!",
    author: "Sarah Johnson",
    title: "CEO of",
    company: "TechFlow",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    id: 3,
    quote: "The design process was seamless and the results speak for themselves. Our conversion rates increased by 40% after the rebrand.",
    author: "Michael Chen",
    title: "Marketing Director at",
    company: "GrowthLab",
    avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  }
];

const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(slideInterval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="w-full max-w-7xl mx-auto px-6">
      <div className="bg-gradient-to-b from-white to-indigo-50 rounded-3xl p-12 relative overflow-hidden">
        
        <div className="relative z-10 text-center">
          {/* Quote */}
          <blockquote className="text-2xl md:text-3xl font-normal text-gray-600 leading-relaxed mb-8">
            "{currentTestimonial.quote}"
          </blockquote>
          
          {/* Author info */}
          <div className="flex items-center justify-center gap-4">
            <img
              src={currentTestimonial.avatar}
              alt={currentTestimonial.author}
              className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
            />
            <div className="text-left">
              <div className="font-bold text-xl text-gray-900">
                {currentTestimonial.author}
              </div>
              <div className="text-gray-600 flex items-center gap-2">
                <span>{currentTestimonial.title}</span>
                <span className="bg-gray-900 text-white px-3 py-1 rounded-lg text-sm font-medium">
                  {currentTestimonial.company}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Navigation dots */}
      <div className="flex justify-center gap-3 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-indigo-600 scale-125'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;