import { ArrowRight, Play } from 'lucide-react';

const reels = [
  { id: 1, thumbnail: "Customer using SpineMat" },
  { id: 2, thumbnail: "Morning stretch routine" },
  { id: 3, thumbnail: "Before/After testimonial" },
  { id: 4, thumbnail: "Product unboxing" },
  { id: 5, thumbnail: "Sleep quality demo" },
  { id: 6, thumbnail: "Doctor recommendation" }
];

export default function Reels() {
  const handleCTA = () => {
    window.location.href = '#reserve-form';
  };

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            See SpineMat <span className="text-blue-600">In Action</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real customers sharing their transformation stories
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-12">
          {reels.map((reel) => (
            <div
              key={reel.id}
              className="group aspect-[9/16] bg-gradient-to-br from-slate-200 to-slate-300 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer relative"
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-gray-900 ml-1" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                <p className="text-white text-sm font-medium">{reel.thumbnail}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={handleCTA}
            className="group inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Reserve Your Trial Now. Pay Nothing Today
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
