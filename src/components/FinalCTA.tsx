import { ArrowRight, Moon, Heart, Sparkles } from 'lucide-react';

export default function FinalCTA() {
  const handleCTA = () => {
    window.location.href = '#reserve-form';
  };

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 relative overflow-hidden" id="reserve-form">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Moon className="w-10 h-10 text-blue-200" />
            <Heart className="w-10 h-10 text-red-300" />
            <Sparkles className="w-10 h-10 text-yellow-300" />
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Your New Sleep<br />Begins Tonight
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-blue-100 leading-relaxed mb-8 max-w-3xl mx-auto">
            Better mornings, zero back pain, deeper sleep —<br />
            all it takes is one decision.
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 sm:p-12 mb-10 border border-white/20">
            <p className="text-lg sm:text-xl font-semibold text-white leading-relaxed mb-4">
              You're not upgrading your bed.
            </p>
            <p className="text-base sm:text-lg text-blue-100">
              You're upgrading <span className="font-bold text-yellow-300">every morning of the next 10 years.</span>
            </p>
          </div>

          <button
            onClick={handleCTA}
            className="group inline-flex items-center gap-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-12 py-6 rounded-full text-xl font-bold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 mb-6"
          >
            Reserve My Mattress
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>

          <p className="text-blue-200 text-lg">
            Secure your slot today. No upfront-payment required.
          </p>
        </div>

        <div className="mt-16 pt-16 border-t border-white/20">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-white mb-2">3,200+</p>
              <p className="text-blue-200">Happy Customers</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white mb-2">25 Years</p>
              <p className="text-blue-200">Warranty</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white mb-2">4.9/5</p>
              <p className="text-blue-200">Customer Rating</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white mb-2">100%</p>
              <p className="text-blue-200">Doctor Approved</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
