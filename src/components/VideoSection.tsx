import { ArrowRight } from 'lucide-react';

export default function VideoSection() {
  const handleCTA = () => {
    window.location.href = '#reserve-form';
  };

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl overflow-hidden shadow-2xl">
          <div className="aspect-video relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-white/30 transition-all">
                  <div className="w-0 h-0 border-t-12 border-t-transparent border-l-20 border-l-white border-b-12 border-b-transparent ml-2"></div>
                </div>
                <p className="text-white/80 text-lg">Video Sales Letter (Govinda Video)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto mb-8">
            Experience why thousands trust SpineMat for deeper sleep, faster recovery and complete back relief
            <span className="font-semibold text-blue-600"> approved by experts and loved by real customers.</span>
          </p>

          <button
            onClick={handleCTA}
            className="group inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Reserve My Mattress Offer
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
