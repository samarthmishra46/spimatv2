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
            <video
              className="w-full h-full object-cover"
              src="https://res.cloudinary.com/dqyizevct/video/upload/v1763996749/WhatsApp_Video_2025-11-24_at_12.59.18_PM_sp2zd1.mp4"
              controls
              playsInline
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="text-center mt-10">
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-8">
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
