import { ArrowRight } from 'lucide-react';
import Typewriter from './Typewriter';

export default function Hero() {
  const handleCTA = () => {
    window.location.href = '#reserve-form';
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 relative">
        <div className="text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-8 shadow-sm">
            <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
            Doctor Recommended
          </div>

          <Typewriter
            lines={[
              'Recommended by Doctors.',
              'Chosen by Thousands.',
              'Trusted by Backs That Hurt.',
              ''
            ]}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6 whitespace-normal break-words"
            typingSpeed={35}
            pauseBetweenLines={600}
            cursor="|"
          />

          <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed mb-10 max-w-4xl mx-auto">
            Wake up pain-free with India's premium orthopedic mattress engineered to support your spine,
            improve sleep quality, eliminate morning stiffness and enjoy a <span className="font-semibold text-blue-600">bonus sofa-bed mattress</span> for your home.
          </p>

          <button
            onClick={handleCTA}
            className="group inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 sm:px-12 py-4 sm:py-5 rounded-full text-lg sm:text-xl font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Reserve My Mattress Offer
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <p className="text-sm sm:text-base text-gray-600 mt-4">
            ✓ Free delivery. ✓ Free sofa-bed mattress. ✓ Limited stock available.
          </p>
        </div>

        {/* <div className="mt-16 relative">
          <div className="aspect-video bg-gradient-to-br from-blue-100 to-slate-200 rounded-3xl shadow-2xl overflow-hidden max-w-5xl mx-auto border-8 border-white">
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
                </div>
                <p className="text-gray-600 text-lg">Hero Image / Product Visualization</p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
