import { ArrowRight, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  age: number;
  location: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Rakesh Kumar",
    age: 46,
    location: "Gurgaon",
    content: "I genuinely wasn't expecting results this fast. For the first time in 7 years, I woke up without that horrible lower-back stiffness. My wife said I looked 'fresh' in the morning — that hasn't happened in a long time. If you're suffering from morning back pain, just try this mattress once and you will feel the difference. It's the safest decision you'll make."
  },
  {
    name: "Shalini Menon",
    age: 28,
    location: "Bangalore",
    content: "Every morning my shoulders and neck used to hurt because of my old mattress. SpineMat literally changed my sleep in the first week. I fall asleep faster, I wake up lighter, and the pain is almost gone. If you're reading this and still thinking… don't wait. I wasted months researching. Just reserve the offer — trust me."
  },
  {
    name: "Sandeep Rao",
    age: 32,
    location: "Noida",
    content: "My physiotherapist told me to try orthopedic mattresses. I tried two brands before this — nothing worked. Then I came across SpineMat. The support is on another level. Back feels aligned… I can actually sit through my office calls without pain. Don't overthink. Reserve the offer and feel the difference yourself."
  },
  {
    name: "Chirag Patel",
    age: 39,
    location: "Ahmedabad",
    content: "My wife used to wake up every morning with backache. After switching to SpineMat, the pain reduced within days. She sleeps better, smiles more, and wakes up energetic. This Mattress is a blessing — you can test it without any risk."
  },
  {
    name: "Soumya Reddy",
    age: 44,
    location: "Chennai",
    content: "I have sciatica, and the pain used to shoot down my leg every morning. This mattress literally changed my life. Pressure relief is amazing. I sleep peacefully now. And the sofa cum bed mattress I got for free is now our go-to for guests. If you have lower-back or nerve-related pain, DEFINITELY try this mattress."
  },
  {
    name: "Arjun Singh",
    age: 47,
    location: "Jaipur",
    content: "I didn't realize how bad my old mattress was until I slept on this one. My posture is better, my sleep is deeper, and honestly… I feel younger. Wish I found this earlier."
  },
  {
    name: "Priya Nambiar",
    age: 41,
    location: "Kochi",
    content: "Between work, kids, and stress, sleep was always a struggle. SpineMat changed that. It hugs the body, supports the spine, and feels premium. Every night feels like a reset now. If your back hurts or you wake up tired, take the mattress immediately."
  }
];

export default function SocialProof() {
  const handleCTA = () => {
    window.location.href = '#reserve-form';
  };

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="text-xl">⭐⭐⭐⭐⭐</span>
            <span>4.9/5 from 3,200+ customers</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Real People. <span className="text-blue-600">Real Relief.</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Thousands have transformed their sleep and eliminated back pain with SpineMat
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative ${
                index === testimonials.length - 1 ? 'lg:col-start-2' : ''
              }`}
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-blue-200" />

              <div className="mb-6">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {testimonial.name}, {testimonial.age}
                </h3>
                <p className="text-sm text-gray-600">{testimonial.location}</p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                {testimonial.content}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button
            onClick={handleCTA}
            className="group inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Reserve My Mattress Offer
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="text-sm text-gray-600 mt-4">
            No upfront-payment required. Limited units remaining.
          </p>
        </div>
      </div>
    </section>
  );
}
