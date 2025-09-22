import React from 'react';
import { ExternalLink } from 'lucide-react';

interface PortfolioSectionProps {
  themeClasses: {
    cardBg: string;
    cardBorder: string;
    textTertiary: string;
    textSecondary: string;
    text: string;
  };
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({ themeClasses }) => {
  return (
    <section id="portfolio" className={`py-24 bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className={`text-5xl lg:text-6xl font-bold  bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 tracking-tight leading-loose py-2`}>
            My work
          </h2>
          <p className={`text-xl ${themeClasses.textSecondary} max-w-3xl mx-auto`}>
            A selection of projects I'm proud to have created
          </p>
        </div>

        {/* Mosaic Portfolio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Top Left - Banking App */}
          <div className={`group relative aspect-[4/3] rounded-3xl overflow-hidden ${themeClasses.cardBg} border ${themeClasses.cardBorder} bg-gradient-to-br from-pink-100 to-purple-100`}>
            <div className="absolute inset-0 bg-gradient-to-br from-pink-200/50 to-purple-200/50"></div>
            <div className="relative h-full p-8 lg:p-12 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-2 mb-6">
                  <span className="bg-white/80 backdrop-blur-sm text-gray-800 text-xs px-3 py-1 rounded-full font-medium">Fintech</span>
                  <span className="bg-white/80 backdrop-blur-sm text-gray-800 text-xs px-3 py-1 rounded-full font-medium">Mobile App</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  Modern Banking,<br />
                  Reimagined For You
                </h3>
                <p className="text-gray-700 mb-6 text-sm lg:text-base">
                  No branches. No fees. Just smart, secure, global banking—right from your phone.
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-xs text-gray-600">
                  <span>Zelle</span>
                  <span>Square</span>
                  <span>PayPal</span>
                  <span>Stripe</span>
                </div>
                <button className={`${themeClasses.text} hover:text-purple-500 transition-colors opacity-0 group-hover:opacity-100`}>
                  <ExternalLink className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="absolute bottom-4 right-4 w-32 h-48 opacity-80">
              <img
                src="https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Mobile banking interface"
                className="w-full h-full object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>

          {/* Top Right - Government Services */}
          <div className={`group relative aspect-[4/3] rounded-3xl overflow-hidden ${themeClasses.cardBg} border ${themeClasses.cardBorder} bg-gradient-to-br from-blue-50 to-teal-50`}>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 to-teal-100/30"></div>
            <div className="relative h-full p-8 lg:p-12 flex flex-col">
              <div className="flex items-center space-x-2 mb-6">
                <span className="bg-white/80 backdrop-blur-sm text-gray-800 text-xs px-3 py-1 rounded-full font-medium">Government</span>
                <span className="bg-white/80 backdrop-blur-sm text-gray-800 text-xs px-3 py-1 rounded-full font-medium">Portal</span>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 aspect-square">
                  <div className="w-full h-16 bg-gradient-to-br from-blue-400 to-teal-400 rounded-lg mb-3"></div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">Start planning your next adventure.</h4>
                  <p className="text-xs text-gray-600">Travel docs made simple</p>
                </div>
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 aspect-square">
                  <div className="w-full h-16 bg-gradient-to-br from-green-400 to-blue-400 rounded-lg mb-3"></div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">Apply for government docs</h4>
                  <p className="text-xs text-gray-600">Without pulling your hair out</p>
                </div>
              </div>
              <div className="mt-auto">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Turning travel dreams into reality with HelloGov</h3>
                <button className={`${themeClasses.text} hover:text-blue-500 transition-colors opacity-0 group-hover:opacity-100`}>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Left - Crypto Platform */}
          <div className={`group relative rounded-3xl overflow-hidden ${themeClasses.cardBg} border ${themeClasses.cardBorder} bg-gradient-to-br from-purple-900 to-blue-900`} style={{ height: 'calc(100% - 0rem)' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-800/50 to-blue-800/50"></div>
            <div className="relative h-full p-8 lg:p-12 flex flex-col justify-between text-white">
              <div>
                <div className="flex items-center space-x-2 mb-6">
                  <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full font-medium">DeFi</span>
                  <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full font-medium">Crypto</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-4 leading-tight">
                  The Future Of<br />
                  Perpetuals Is Here
                </h3>
                <p className="text-blue-200 mb-6 text-sm">
                  Leverage up to 20x on a protocol created with billions for its price execution, lower fees and improved liquidity.
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-xl font-bold">$3,900,368.17</div>
                    <div className="text-xs text-blue-300">All-time trade volume</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold">9834</div>
                    <div className="text-xs text-blue-300">Total Traders</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold">$1M</div>
                    <div className="text-xs text-blue-300">Open Interest</div>
                  </div>
                </div>
                <button className="text-white hover:text-blue-300 transition-colors opacity-0 group-hover:opacity-100">
                  <ExternalLink className="w-5 h-5" />
                </button>
              </div>
              <div className="absolute top-8 right-8 w-32 h-32 opacity-20">
                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>

          {/* Bottom Right - Split into two sections */}
          <div className="space-y-6 lg:space-y-8">
            {/* Vexlio */}
            <div className={`group relative aspect-[2/1] rounded-3xl overflow-hidden ${themeClasses.cardBg} border ${themeClasses.cardBorder} bg-gradient-to-br from-orange-600 to-red-600`}>
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/50 to-red-500/50"></div>
              <div className="relative h-full p-6 lg:p-8 flex items-center justify-between text-white">
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">V</span>
                    </div>
                    <h3 className="text-2xl font-bold">vexlio</h3>
                  </div>
                  <p className="text-orange-100 text-sm">Brand identity & web design</p>
                </div>
                <button className="text-white hover:text-orange-200 transition-colors opacity-0 group-hover:opacity-100">
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Bottom row with Supa and Zestful */}
            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              {/* Supa */}
              <div className={`group relative aspect-square rounded-2xl overflow-hidden ${themeClasses.cardBg} border ${themeClasses.cardBorder} bg-gradient-to-br from-gray-800 to-black`}>
                <div className="relative h-full p-4 lg:p-6 flex flex-col justify-between text-white">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-6 h-6 bg-blue-500 rounded-md flex items-center justify-center">
                      <span className="text-white font-bold text-xs">S</span>
                    </div>
                    <h3 className="font-bold">supa</h3>
                  </div>
                  <div className="mt-auto">
                    <div className="relative">
                      <div className="w-full h-20 bg-gradient-to-br from-blue-400 to-purple-400 rounded-lg flex items-center justify-center">
                        <div className="text-white font-bold text-lg">SUPA</div>
                      </div>
                    </div>
                  </div>
                  <button className="absolute top-4 right-4 text-white hover:text-blue-300 transition-colors opacity-0 group-hover:opacity-100">
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>

              {/* Zestful */}
              <div className={`group relative aspect-square rounded-2xl overflow-hidden ${themeClasses.cardBg} border ${themeClasses.cardBorder} bg-gradient-to-br from-gray-100 to-gray-200`}>
                <div className="relative h-full p-4 lg:p-6 flex flex-col justify-between">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-6 h-6 bg-black rounded-md flex items-center justify-center">
                      <span className="text-white font-bold text-xs">Z</span>
                    </div>
                    <h3 className="font-bold text-gray-900">Zestful</h3>
                  </div>
                  <div className="mt-auto">
                    <div className="relative">
                      <div className="w-full h-20 bg-gradient-to-br from-green-400 to-lime-400 rounded-lg flex items-center justify-center">
                        <div className="text-black font-bold text-lg">VISA</div>
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-16 h-12 bg-gradient-to-br from-yellow-400 to-green-400 rounded-md flex items-center justify-center">
                        <div className="text-black font-bold text-xs">VISA</div>
                      </div>
                    </div>
                  </div>
                  <button className="absolute top-4 right-4 text-gray-900 hover:text-green-600 transition-colors opacity-0 group-hover:opacity-100">
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;