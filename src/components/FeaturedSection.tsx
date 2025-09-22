import React from 'react';

interface FeaturedSectionProps {
  themeClasses: {
    border: string;
    textSecondary: string;
    text: string;
  };
}

const FeaturedSection: React.FC<FeaturedSectionProps> = ({ themeClasses }) => {
  return (
    <section id="testimonials" className={`py-20 lg:py-32 border-t ${themeClasses.border}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className={`inline-block ${themeClasses.textSecondary} text-sm font-medium tracking-wider uppercase mb-4`}>
            SUCCESS STORIES
          </div>
          <h2 className={`text-5xl lg:text-6xl font-bold ${themeClasses.text} mb-6 tracking-tight`}>
            How my work transforms brands
          </h2>
        </div>

        {/* 3-Column Masonry Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Column 1 */}
          <div className="space-y-6">
            {/* OvationOXM Testimonial */}
            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">O</span>
                </div>
                <span className="font-bold text-gray-900">OvationOXM</span>
              </div>
              <p className="text-gray-700 mb-8 leading-relaxed">
                "Alex is an extremely talented designer and I strongly recommend him to anyone that needs design work across branding, marketing, product design or anything else. He can do everything from incredible illustrations to detailed UX designs."
              </p>
              <div className="flex items-center space-x-3">
                <img
                  src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                  alt="Alan Finlay"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">Alan Finlay</div>
                  <div className="text-sm text-gray-600">Co-Founder of OvationOXM</div>
                </div>
              </div>
            </div>

            {/* 180% Growth Card */}
            <div className="bg-gray-800 text-white p-8 rounded-3xl">
              <div className="text-6xl font-bold mb-4">180%</div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                "Ovation grew 180% in 2020 following the redesign of their brand & launch of their new interface."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-blue-500 rounded-md flex items-center justify-center">
                  <span className="text-white font-bold text-xs">O</span>
                </div>
                <span className="font-medium text-gray-300">OvationOXM</span>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="space-y-6">
            {/* 35% Growth Card */}
            <div className="bg-gray-800 text-white p-8 rounded-3xl">
              <div className="text-6xl font-bold mb-4">35%</div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Remojo achieved 35% sales growth after the redesign of their app.
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-md flex items-center justify-center">
                  <span className="text-white font-bold text-xs">R</span>
                </div>
                <span className="font-medium text-gray-300">REMOJO</span>
              </div>
            </div>

            {/* REMOJO Testimonial */}
            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">R</span>
                </div>
                <span className="font-bold text-gray-900">REMOJO</span>
              </div>
              <p className="text-gray-700 mb-8 leading-relaxed">
                "Alex is an amazing designer who has a great sense of aesthetics and professionalism which has impressed the whole team. He has redesigned our apps, UI and assets and made them look polished, premium and ready to scale - exactly what we need to go to the next level."
              </p>
              <div className="flex items-center space-x-3">
                <img
                  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                  alt="Jack Jenkins"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">Jack Jenkins</div>
                  <div className="text-sm text-gray-600">REMOJO Founder</div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div className="space-y-6">
            {/* SENSE Testimonial */}
            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">S</span>
                </div>
                <span className="font-bold text-gray-900">SENSE</span>
              </div>
              <p className="text-gray-700 mb-8 leading-relaxed">
                "Alex was phenomenally helpful in mapping out various paths in our logo design. He responded well to feedback and was quick to implement changes. I highly recommend his services to anyone looking for a new brand or redesign"
              </p>
              <div className="flex items-center space-x-3">
                <img
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                  alt="Kenton Prescott"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">Kenton Prescott</div>
                  <div className="text-sm text-gray-600">Co-Founder of Sense</div>
                </div>
              </div>
            </div>

            {/* $110 Million Card */}
            <div className="bg-gray-800 text-white p-8 rounded-3xl">
              <div className="text-4xl lg:text-5xl font-bold mb-4">$110 Million</div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Stamped.io was acquired by Wecommerce for $110 Million following their brand refresh & website redesign.
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-orange-500 rounded-md flex items-center justify-center">
                  <span className="text-white font-bold text-xs">S</span>
                </div>
                <span className="font-medium text-gray-300">Stamped</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;