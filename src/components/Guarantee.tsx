import { ArrowRight, Shield, Award, CheckCircle, Truck, Users, Factory } from 'lucide-react';

const guaranteeFeatures = [
  { icon: Shield, text: "25-Year Warranty" },
  { icon: Award, text: "Medical-Grade Orthopedic Construction" },
  { icon: CheckCircle, text: "Certified Materials" },
  { icon: Truck, text: "Free Delivery" },
  { icon: Users, text: "Built For 30+ Professionals & Couples" },
  { icon: Factory, text: "Direct-from-Factory Quality" }
];

export default function Guarantee() {
  const handleCTA = () => {
    window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSfRHD2QhXCiPhY5Fsdy8fGV73i2yaDMJ6ybHq-OLGsn9lV-lw/viewform';
  };

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
            The SpineMat Guarantee
          </h2>
          <p className="text-base sm:text-lg text-blue-100 leading-relaxed max-w-4xl mx-auto">
            You're not buying a random mattress — you're buying <span className="font-semibold text-white">doctor-approved spine support</span> engineered for real relief.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl mb-10">
          <p className="text-base sm:text-lg text-gray-800 leading-relaxed text-center mb-10">
            If SpineMat doesn't improve your sleep, reduce your back pain, and make your mornings easier…
            <span className="block mt-4 font-semibold text-blue-600">
              you can reach out to our support team immediately.
            </span>
            <span className="block mt-2 text-lg text-gray-700">
              We stand behind every inch of what we make.
            </span>
          </p>

          <div className="border-t border-gray-200 pt-10">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Every SpineMat Includes:
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {guaranteeFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-5 bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl border border-blue-100 hover:shadow-md transition-shadow"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="font-semibold text-gray-800 leading-snug">
                      {feature.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-2xl sm:text-3xl font-bold text-white mb-8">
            No guesswork. No risk.<br />
            <span className="text-blue-200">A mattress trusted by doctors — and protected by us.</span>
          </p>

          <button
            onClick={handleCTA}
            className="group inline-flex items-center gap-3 bg-white hover:bg-gray-50 text-blue-600 px-10 py-5 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Reserve My Mattress Offer
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
