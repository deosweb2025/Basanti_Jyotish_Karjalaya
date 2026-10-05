import React from "react";
import { Award, ShieldCheck, Compass, HeartHandshake, Star } from "lucide-react";

export default function WhyChooseUsSection() {
  const features = [
    {
      icon: Award,
      title: "M.Phil Qualified Astrologer",
      description:
        "Guided by Smt. Amrita Maitra, holder of M.Phil in Astrology, Jyotish Bharati & Golden Achievement Award from Govt. recognized institutes.",
    },
    {
      icon: ShieldCheck,
      title: "Authentic Vedic Remedies",
      description:
        "Providing genuine, effective gemstone therapy, Vedic horoscope analysis, and sacred Tantra & Mantra spiritual solutions.",
    },
    {
      icon: Compass,
      title: "Scientific Vastu Consultation",
      description:
        "Harmonizing spatial energy for residences and business spaces across Madhyamgram, Barasat & Kolkata for peace and prosperity.",
    },
    {
      icon: HeartHandshake,
      title: "100% Confidential & Caring",
      description:
        "Over 10,000+ satisfied clients trust us for private, empathetic, and highly accurate life & marriage compatibility guidance.",
    },
  ];

  return (
    <section
      id="why-choose-us"
      className="relative w-full bg-[#130E07] py-16 lg:py-24 text-white scroll-mt-[85px] lg:scroll-mt-[110px] overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#FFA91E]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#3E4100]/20 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#FFA91E] text-xs uppercase tracking-widest font-semibold">
            <Star className="w-3.5 h-3.5 fill-[#FFA91E]" /> Trust &amp; Legacy
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight font-roboto">
            Why Choose Basanti Jyotish Karyalaya
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#FFA91E] to-[#F77D0E] mx-auto rounded-full mb-6"></div>
          <p className="font-roboto text-gray-300 text-[15px] sm:text-base leading-relaxed font-light">
            Empowering individuals and families with time-tested astrological wisdom, precise horoscope predictions, and proven Vastu remedies for over two decades.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-2xl p-6 sm:p-8 backdrop-blur-xl bg-white/[0.05] border border-white/15 hover:border-[#FFA91E]/60 shadow-xl hover:shadow-[0_15px_30px_rgba(255,169,30,0.2)] transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between"
              >
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FFA91E]/20 to-[#FFA91E]/5 border border-[#FFA91E]/30 text-[#FFA91E] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#FFA91E] group-hover:text-black transition-all duration-300 shadow-lg">
                    <IconComp className="w-7 h-7" />
                  </div>
                  <h3 className="font-bold text-lg text-white mb-3 group-hover:text-[#FFA91E] transition-colors font-roboto">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
