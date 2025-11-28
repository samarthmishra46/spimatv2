import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const images = [
  "https://via.placeholder.com/1200x675/3B82F6/FFFFFF?text=SpineMat+Image+1",
  "https://via.placeholder.com/1200x675/1E40AF/FFFFFF?text=SpineMat+Image+2",
  "https://via.placeholder.com/1200x675/2563EB/FFFFFF?text=SpineMat+Image+3",
  "https://via.placeholder.com/1200x675/1D4ED8/FFFFFF?text=SpineMat+Image+4",
];

export default function VideoSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleCTA = () => {
    window.location.href = '#reserve-form';
  };

  // Auto-swipe every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl overflow-hidden shadow-2xl relative">
          <div className="aspect-video relative">
            {/* Image Display */}
            <div className="relative w-full h-full overflow-hidden">
              <img
                src={images[currentIndex]}
                alt={`SpineMat showcase ${currentIndex + 1}`}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-colors z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5 text-gray-900" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-colors z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5 text-gray-900" />
            </button>

            {/* Dots Navigation */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex justify-center gap-2 z-10">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex ? 'w-8 bg-white' : 'w-2 bg-white/50'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
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
