import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FaqSection() {
  const faqs = [
    {
      question:
        "Why is Basanti Jyotish considered one of the best astrology centers?",
      answer:
        "Basanti Jyotish has a legacy of providing highly accurate Vedic astrology predictions, personalized horoscope reading, and effective astrological remedies. Our expert astrologers deeply analyze planetary positions to offer guidance for career growth, relationship harmony, and financial stability, making us a trusted choice for clients worldwide.",
    },
    {
      question: "How can Vastu Shastra consultation improve my daily life?",
      answer:
        "Vastu Shastra is the ancient Indian science of architecture and spatial geometry. A Vastu consultation with our experts helps align your home or workplace with positive cosmic energies. By making simple structural or placement changes, you can attract prosperity, improve health, and foster peace and happiness in your family.",
    },
    {
      question:
        "What should I expect during a Kundali (Horoscope) Matching session?",
      answer:
        "During a Kundali Milan or Horoscope matching session, our senior astrologers compare the birth charts of prospective partners across 8 categories (Ashtakoot Guna Milan). We assess mental compatibility, financial prospects, health, and family harmony to ensure a blessed and successful marital life.",
    },
    {
      question: "Do you offer Gemstone (Ratna) recommendations?",
      answer:
        "Yes, we specialize in Gem Therapy. Based on the strength and weakness of planets in your birth chart (Janam Kundali), we recommend authentic, high-quality gemstones. Wearing the right gemstone can balance energies, mitigate negative planetary impacts, and bring luck, focus, and health.",
    },
    {
      question: "Can Palmistry predict my future accurately?",
      answer:
        "Palmistry (Chiromancy) is a profound science that studies the lines, mounts, and shape of your hands. Our palmistry experts combine these readings with your astrological chart to provide a highly accurate and holistic view of your life path, career milestones, health timeline, and romantic prospects.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative w-full bg-white py-16 md:py-24">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <p className="font-roboto font-bold text-[#F77D0E] text-base mb-2 uppercase tracking-wide">
            Common Queries
          </p>
          <h2 className="font-aclonica font-normal text-gray-900 text-[30px] lg:text-[40px] leading-[1.3] mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-20 h-1 bg-[#F77D0E] mx-auto rounded-full"></div>
          <p className="mt-4 font-roboto text-gray-600 text-base md:text-lg">
            Find answers to common questions about our Vedic astrology, Vastu,
            and spiritual services.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 ${openIndex === index ? "shadow-md ring-1 ring-[#F77D0E]/20" : "hover:shadow-sm"}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full text-left px-6 py-5 flex justify-between items-center bg-white hover:bg-gray-50 transition-colors focus:outline-none"
              >
                <span
                  className={`font-roboto font-medium text-lg ${openIndex === index ? "text-[#F77D0E]" : "text-gray-800"}`}
                >
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 flex-shrink-0 ${openIndex === index ? "transform rotate-180 text-[#F77D0E]" : ""}`}
                />
              </button>

              <div
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-96 py-5 border-t border-gray-100 bg-gray-50" : "max-h-0 py-0"}`}
              >
                <p className="font-roboto text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
