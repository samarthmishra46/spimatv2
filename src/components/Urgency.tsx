import { ArrowRight, Clock, AlertCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Urgency() {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 23, seconds: 14 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          hours = 0;
          minutes = 23;
          seconds = 14;
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleCTA = () => {
    window.location.href = '#reserve-form';
  };

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-red-500/20 text-red-300 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-red-500/30">
            <AlertCircle className="w-4 h-4" />
            <span>Limited Time Offer</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
            Limited Stock. High Demand.<br />
            <span className="text-yellow-400">Don't Miss Your Chance.</span>
          </h2>

          <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
            Premium SpineMat mattresses are produced in small, controlled batches to maintain medical-grade orthopedic quality.
            <span className="block mt-4 font-semibold text-white">
              Because of this, only a limited number of free sofa-bed bonus units are available each month.
            </span>
          </p>

          <p className="text-base sm:text-lg text-red-300 font-semibold">
            Once this batch is claimed — the offer closes.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl mb-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-4">
              <Clock className="w-6 h-6 text-red-500" />
              <h3 className="text-2xl font-bold text-gray-900">Offer Ends In:</h3>
            </div>

            <div className="flex justify-center gap-4 sm:gap-6">
              <div className="text-center">
                <div className="bg-gradient-to-br from-red-500 to-red-600 text-white rounded-2xl w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center shadow-lg">
                  <span className="text-3xl sm:text-5xl font-bold">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-2 font-medium">Hours</p>
              </div>

              <div className="text-4xl sm:text-6xl font-bold text-gray-400 self-center">:</div>

              <div className="text-center">
                <div className="bg-gradient-to-br from-red-500 to-red-600 text-white rounded-2xl w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center shadow-lg">
                  <span className="text-3xl sm:text-5xl font-bold">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-2 font-medium">Minutes</p>
              </div>

              <div className="text-4xl sm:text-6xl font-bold text-gray-400 self-center">:</div>

              <div className="text-center">
                <div className="bg-gradient-to-br from-red-500 to-red-600 text-white rounded-2xl w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center shadow-lg">
                  <span className="text-3xl sm:text-5xl font-bold">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-2 font-medium">Seconds</p>
              </div>
            </div>

            <p className="text-sm text-gray-600 mt-6">
              Timer auto-resets monthly — secure your mattress before the bonus units run out.
            </p>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <h3 className="text-xl font-bold text-gray-900 text-center mb-4">
              Current Status:
            </h3>

            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 border border-red-200">
              <div className="flex items-center justify-between mb-3">
                <span className="text-gray-700 font-medium">Units Reserved This Month:</span>
                <span className="text-2xl font-bold text-red-600">93%</span>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-red-500 to-red-600 h-full rounded-full transition-all duration-1000"
                  style={{ width: '93%' }}
                ></div>
              </div>

              <p className="text-center text-gray-700 mt-4 leading-relaxed">
                <span className="font-semibold text-red-600">93% of this month's SpineMat + Free Sofa-Bed units are already booked.</span>
                <span className="block mt-2">
                  If you're seeing this page right now, it means a few units are still left — but they will not last.
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={handleCTA}
            className="group inline-flex items-center gap-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-10 py-5 rounded-full text-lg font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Reserve My Mattress Offer
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="text-sm text-gray-300 mt-4">
            ✓ Free delivery. ✓ Free sofa-bed mattress included. ✓ Limited bonus units remaining.
          </p>
        </div>
      </div>
    </section>
  );
}
