import { ArrowRight } from 'lucide-react';

interface Benefit {
  title: string;
  description: string;
  whyMatters?: string[];
}

const benefits: Benefit[] = [
  {
    title: "Immediate Back Support",
    description: "Experience precise orthopedic alignment that reduces pressure on the lower back, hips and shoulders from the very first night.",
    whyMatters: [
      "Back pain isn't caused by age — it's caused by poor posture during sleep.",
      "SpineMat keeps your spine in perfect position, helping your body recover naturally."
    ]
  },
  {
    title: "Zero Motion Transfer",
    description: "Your partner moves… you don't feel a thing. Perfect for light sleepers and couples."
  },
  {
    title: "Temperature-Regulated Comfort",
    description: "Advanced cooling layers maintain optimal sleep temperature all night, no sweating, no tossing, no overheating."
  },
  {
    title: "Designed for Indian Back Structures",
    description: "Not imported. Not generic. SpineMat is engineered for Indian sleeping habits, Indian climates and common Indian posture issues."
  },
  {
    title: "Relieves Pressure Points",
    description: "Eliminates strain on the neck, shoulders, spine and hips by distributing weight evenly. Goodbye muscle tension. Hello deep, restorative sleep."
  },
  {
    title: "25-Year Durability Guarantee",
    description: "Engineered with certified orthopedic materials that don't sag, sink or deform. Built to stay firm, supportive and perfect for decades."
  }
];

export default function Benefits() {
  const handleCTA = () => {
    window.location.href = '#reserve-form';
  };

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            6 Ways SpineMat <span className="text-blue-600">Changes Your Life</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Doctor-approved technology meets real-world results
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 sm:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
            >
              <div className="mb-6">
                <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-slate-100 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <p className="text-gray-500 font-medium">GIF Animation</p>
                </div>
              </div>

              <div className="flex items-start gap-3 mb-4">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
                  {benefit.title}
                </h3>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                {benefit.description}
              </p>

              {benefit.whyMatters && (
                <div className="bg-blue-50 rounded-xl p-5 mb-6 border border-blue-100">
                  <h4 className="font-semibold text-blue-900 mb-3">Why It Matters</h4>
                  <ul className="space-y-2">
                    {benefit.whyMatters.map((point, idx) => (
                      <li key={idx} className="text-gray-700 leading-relaxed flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <button
                onClick={handleCTA}
                className="group/btn inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-lg transition-colors"
              >
                CLAIM My Mattress Offer
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
