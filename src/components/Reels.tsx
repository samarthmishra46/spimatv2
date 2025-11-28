import { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ReelData {
  id: number;
  thumbnail: string;
  videoUrl?: string;
}

const reels: ReelData[] = [
  { id: 1, thumbnail: "Customer using SpineMat", videoUrl: "https://res.cloudinary.com/dqyizevct/video/upload/v1763996749/WhatsApp_Video_2025-11-24_at_12.59.18_PM_sp2zd1.mp4" },
  { id: 2, thumbnail: "Morning stretch routine", videoUrl: "https://res.cloudinary.com/dqyizevct/video/upload/v1764005165/Spinemat_script_7_jvi0yg.mp4" },
  { id: 3, thumbnail: "Before/After testimonial", videoUrl: "https://res.cloudinary.com/dqyizevct/video/upload/v1764004997/WhatsApp_Video_2025-11-24_at_12.56.54_PM_kwxaum.mp4" },
  { id: 4, thumbnail: "Product unboxing", videoUrl: "https://res.cloudinary.com/dqyizevct/video/upload/v1764005556/Spinemat_script_1_1_piu0i4.mp4" },
  { id: 5, thumbnail: "Sleep quality demo", videoUrl: "https://res.cloudinary.com/dqyizevct/video/upload/v1764005027/WhatsApp_Video_2025-11-24_at_12.59.17_PM_nvhjcm.mp4" },
  { id: 6, thumbnail: "Doctor recommendation", videoUrl: "https://res.cloudinary.com/dqyizevct/video/upload/v1764005589/Spinemat_Script_5_1_lp9s6n.mp4" }
];

// Single Reel Card Component
const ReelCard = ({
  reel,
  isActive,
  globalMuted,
  setGlobalMuted,
 
}: {
  reel: ReelData;
  isActive: boolean;
  globalMuted: boolean;
  setGlobalMuted: (v: boolean) => void;
  videoRefsIndex: number;
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [playError, setPlayError] = useState<string | null>(null);

  // Register the video ref on mount by assigning to the parent refs array (handled in parent via videoRefs)
  useEffect(() => {
    // parent manages refs array; parent will pass and sync via effect. This file-level ref still used locally.
  }, []);

  // Sync DOM muted to globalMuted
  useEffect(() => {
    if (videoRef.current) {
      try {
        videoRef.current.muted = globalMuted;
      } catch (e) {
        console.warn('Error syncing muted', e);
      }
    }
  }, [globalMuted]);

  // Play/pause when active changes. handle play promise rejection.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    setPlayError(null);

    if (isActive) {
      // try to play (muted allowed to autoplay)
      v.play()
        .then(() => {
          // playing
        })
        .catch((err) => {
          console.warn('Video play failed:', err);
          // If autoplay blocked, show overlay to ask user to tap
          setPlayError('playback-blocked');
        });
    } else {
      // pause and reset when not active
      try {
        v.pause();
        v.currentTime = 0;
      } catch (e) {
        console.warn('Error pausing/resetting video', e);
      }
    }
  }, [isActive]);

  // Click anywhere on reel: treat as user gesture to unmute globally and resume playback
  const handleAnyClick = (e: React.MouseEvent) => {
    // Prevent interfering with small mute button clicks
    e.stopPropagation();
    if (globalMuted) {
      setGlobalMuted(false); // global unmute
    }

    // Attempt to play the clicked reel (user gesture allows playback with sound)
    const v = videoRef.current;
    if (!v) return;
    v.muted = false;
    v.play().catch((err) => {
      console.warn('play after user gesture failed', err);
    });
    setPlayError(null);
  };

  // Small button to globally mute again
  const handleGlobalMuteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setGlobalMuted(true);
  };

  return (
    <div
      className="w-full max-w-[360px] md:max-w-[400px] lg:max-w-[450px] mx-auto rounded-2xl shadow-2xl bg-white overflow-hidden border border-gray-200"
      // clicking anywhere on this card triggers unmute (user gesture)
      onClick={handleAnyClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          // keyboard accessibility
          handleAnyClick(e as any);
        }
      }}
    >
      <div className="w-full aspect-[9/16] relative bg-gradient-to-br from-slate-200 to-slate-300">
        {reel.videoUrl ? (
          <>
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              src={reel.videoUrl}
              loop
              muted={globalMuted}
              playsInline
              preload="metadata"
              onError={(e) => console.error('video error', e)}
            />

            {/* If globalMuted is true OR play was blocked, show center overlay prompting user gesture.
                This overlay still respects the parent onClick because it's inside the card. */}
            {(globalMuted || playError) && (
              <div
                className="absolute inset-0 flex items-center justify-center bg-black/40 text-white text-sm px-4 py-2 font-medium pointer-events-none"
                aria-hidden
              >
                {/* pointer-events-none ensures underlying card onClick receives the click; 
                    But to keep accessibility, the entire card has onClick handler. */}
                <span className="pointer-events-none">
                  {playError ? 'Tap to Play & Unmute' : 'Tap anywhere to Unmute 🔊'}
                </span>
              </div>
            )}

            {/* Global mute button (visible when unmuted). Clicking it will mute all videos. 
                Make sure it stops propagation so it doesn't immediately re-unmute by the parent card click. */}
            {!globalMuted && (
              <button
                onClick={handleGlobalMuteClick}
                className="absolute bottom-4 right-4 bg-black/60 text-white text-xs px-3 py-1.5 rounded-lg hover:bg-black/80 transition-colors z-30"
                aria-label="Mute all videos"
              >
                🔇 Mute
              </button>
            )}
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-gray-900 border-b-8 border-b-transparent ml-1"></div>
              </div>
              <p className="text-gray-600 text-sm px-4">{reel.thumbnail}</p>
            </div>
          </div>
        )}

        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
          <p className="text-white text-sm font-medium">{reel.thumbnail}</p>
        </div>
      </div>
    </div>
  );
};

export default function Reels() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // globalMuted controls mute/unmute for all videos
  const [globalMuted, setGlobalMuted] = useState(true);

  // Keep refs to all video elements so parent can directly operate if needed (optional)
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);

  // Auto-swipe every 20 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reels.length);
    }, 20000);
    return () => clearInterval(timer);
  }, []);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reels.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + reels.length) % reels.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handleCTA = () => {
    window.location.href = '#reserve-form';
  };

  // When globalMuted changes, sync all known video elements' .muted prop (defensive)
  useEffect(() => {
    videoRefs.current.forEach((v) => {
      if (v) {
        try {
          v.muted = globalMuted;
        } catch (e) {
          console.warn('Error syncing child video muted', e);
        }
      }
    });
  }, [globalMuted]);

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

        <div className="relative w-full py-10 flex flex-col items-center justify-center mb-12">
          <div className="relative w-full flex justify-center">
            {reels.map((r, i) => (
              <div
                key={r.id}
                className={`${i === currentIndex ? 'block' : 'hidden'}`}
                aria-hidden={i === currentIndex ? false : true}
              >
                {/* Pass globalMuted + setter to child. The child uses its own internal ref for playback,
                    and the parent keeps a refs array as optional sync (not strictly required). */}
                <ReelCard
                  reel={r}
                  isActive={i === currentIndex}
                  globalMuted={globalMuted}
                  setGlobalMuted={setGlobalMuted}
                  videoRefsIndex={i}
                />
              </div>
            ))}
          </div>

          <button
            onClick={goToPrev}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors z-10"
            aria-label="Previous reel"
          >
            <ChevronLeft className="w-5 h-5 text-gray-900" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors z-10"
            aria-label="Next reel"
          >
            <ChevronRight className="w-5 h-5 text-gray-900" />
          </button>

          <div className="flex justify-center gap-2 mt-6">
            {reels.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all ${index === currentIndex ? 'w-8 bg-blue-600' : 'w-2 bg-gray-300'}`}
                aria-label={`Go to reel ${index + 1}`}
              />
            ))}
          </div>
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
