import React from 'react';
import { useEffect } from 'react';
import { X, Zap, Target, DollarSign } from 'lucide-react';

interface GuaranteeModalProps {
  isOpen: boolean;
  onClose: () => void;
  scrollToSection: (sectionId: string) => void;
}

const GuaranteeModal: React.FC<GuaranteeModalProps> = ({ isOpen, onClose, scrollToSection }) => {
  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.overflow = 'hidden';
      
      return () => {
        document.body.style.overflow = '';
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleClaimGuarantee = () => {
    onClose();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      if (window.innerWidth < 768) {
        const rect = contactSection.getBoundingClientRect();
        const offsetTop = window.pageYOffset + rect.top + 1830;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      } else {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-2 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-72 max-w-sm bg-white rounded-[30px] shadow-2xl overflow-hidden my-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 z-10 w-6 h-6 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 transition-all duration-300"
        >
          <X className="w-3 h-3" />
        </button>

        {/* Header with gradient background */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-500 px-4 py-4 text-center">
          <div className="text-2xl mb-1">✅</div>
          <h2 className="text-lg font-bold text-white leading-tight">
            Your Website Will Perform—Guaranteed
          </h2>
        </div>

        {/* Content */}
        <div className="px-4 py-4">
          <div className="text-gray-700 text-sm leading-relaxed mb-4">
     
            
            <p className="mb-3 font-semibold text-gray-900 text-sm">
              At Mind Media, we guarantee results:
            </p>

            <div className="space-y-2 mb-4">
              <div className="flex items-center space-x-2 p-2 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-100">
                <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Zap className="w-3 h-3 text-white" />
                </div>
                <span className="text-gray-800 font-semibold text-sm">Faster load times</span>
              </div>

              <div className="flex items-center space-x-2 p-2 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-100">
                <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Target className="w-3 h-3 text-white" />
                </div>
                <span className="text-gray-800 font-semibold text-sm">Cleaner design</span>
              </div>

              <div className="flex items-center space-x-2 p-2 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-100">
                <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-3 h-3 text-white" />
                </div>
                <span className="text-gray-800 font-semibold text-sm">More conversions</span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-3 border border-gray-200 mb-3">
              <p className="text-gray-800 font-semibold text-center text-sm">
                If your site doesn't hit these marks, I'll fix it free.
              </p>
            </div>

            <p className="text-center text-gray-700 mb-1 text-sm">
              Your website should be an investment, not an expense.
            </p>
            <p className="text-center text-gray-900 font-semibold mb-4 text-sm">
              Let's build your money-making machine today.
            </p>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <button
              onClick={handleClaimGuarantee}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-green-500/25 text-sm"
            >
              <span>👉</span>
              <span>Claim My Guarantee</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuaranteeModal;