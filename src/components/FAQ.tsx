import { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string | string[];
}

const faqs: FAQItem[] = [
  {
    question: "Is SpineMat really effective for back pain?",
    answer: "Yes. SpineMat is a doctor-recommended orthopedic mattress engineered for proper spinal alignment. It reduces pressure on your lower back, hips, and shoulders, helping you wake up without stiffness or pain. Thousands of users report noticeable relief within the first week."
  },
  {
    question: "What happens after I click on 'Reserve My Mattress Offer'?",
    answer: [
      "A quick 1-minute form will appear. Once you fill the form, you'll receive a quick call from our sleep expert to:",
      "• Understand your back issue",
      "• Recommend the right firmness",
      "• Confirm your mattress details",
      "• Arrange delivery to your home",
      "",
      "The call is simple and usually takes less than 3 minutes."
    ]
  },
  {
    question: "Do I have to pay anything extra for the free sofa-bed mattress?",
    answer: "No. The sofa-cum-bed mattress is a free bonus with your SpineMat purchase. There are no hidden charges or additional fees."
  },
  {
    question: "How is SpineMat different from regular mattresses?",
    answer: [
      "SpineMat is designed specifically for:",
      "• Orthopedic back support",
      "• Indian sleeping styles",
      "• Long working hours and poor posture",
      "• Better alignment for 30+ adults",
      "• Body-weight distribution",
      "• Heat management for deeper sleep",
      "",
      "Other mattresses may feel soft — SpineMat is medically supportive."
    ]
  },
  {
    question: "Will the mattress sink, sag, or lose shape?",
    answer: "No. SpineMat comes with a 25-year durability warranty, ensuring it stays firm, supportive, and stable for years without deformation."
  },
  {
    question: "How soon will I feel the difference?",
    answer: "Most customers experience relief in 7–10 days, and many feel improvement on the very first night."
  },
  {
    question: "Is SpineMat suitable for couples?",
    answer: "Absolutely. The mattress has zero motion transfer, so one person's movement doesn't disturb the other's sleep."
  },
  {
    question: "Is this mattress suitable for adults above 40?",
    answer: [
      "Yes. SpineMat is specifically engineered for:",
      "• Aging spines",
      "• Reduced muscle support",
      "• Posture correction",
      "• Deep sleep requirements for 40+ adults",
      "",
      "If you wake up sore or tired, this mattress is ideal."
    ]
  },
  {
    question: "I'm not sure which mattress size or firmness to choose.",
    answer: [
      "No problem. Once you reserve the offer, our expert will call and guide you based on your:",
      "• Weight",
      "• Sleeping position",
      "• Back condition",
      "• Room size",
      "• Partner needs",
      "",
      "You'll get the perfect recommendation."
    ]
  },
  {
    question: "How fast is the delivery?",
    answer: "Delivery typically takes 3–7 days, and metro cities are often faster."
  },
  {
    question: "Are there any hidden charges?",
    answer: [
      "No. You get:",
      "• Free delivery",
      "• Free sofa-cum-bed mattress",
      "• Warranty coverage",
      "• Direct-from-factory pricing",
      "",
      "Everything is transparent."
    ]
  },
  {
    question: "How do I reserve my mattress offer?",
    answer: "Click the CTA button below. A quick 1-minute form will appear. Fill it, and your bonus sofa-bed unit is reserved immediately."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleCTA = () => {
    window.location.href = '#reserve-form';
  };

  const renderAnswer = (answer: string | string[]) => {
    if (typeof answer === 'string') {
      return <p className="text-gray-700 leading-relaxed">{answer}</p>;
    }

    return (
      <div className="text-gray-700 leading-relaxed space-y-2">
        {answer.map((line, idx) => (
          <p key={idx}>{line}</p>
        ))}
      </div>
    );
  };

  return (
    <section className="py-16 sm:py-24 bg-white" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Your Questions, <span className="text-blue-600">Answered</span>
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about SpineMat
          </p>
        </div>

        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl overflow-hidden border border-gray-200 hover:border-blue-300 transition-colors"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 sm:p-8 flex items-start justify-between gap-4 group"
              >
                <span className="text-lg sm:text-xl font-semibold text-gray-900 leading-tight pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`flex-shrink-0 w-6 h-6 text-blue-600 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-[1000px]' : 'max-h-0'
                }`}
              >
                <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                  {renderAnswer(faq.answer)}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={handleCTA}
            className="group inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Reserve My Mattress Offer
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
