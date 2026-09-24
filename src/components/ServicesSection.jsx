import React from "react";
import { Link } from "react-router-dom";

export default function ServicesSection() {
  const services = [
    {
      title: "Astrology",
      desc: "Expert astrology services offering accurate predictions, personalized guidance, and remedies to navigate life's challenges and achieve success.",
      gradient: "radial-gradient(at top left, #3E4100 0%, #FFA91E 100%)",
    },
    {
      title: "Tantra and Mantra",
      desc: "Tantra and Mantra specialize in ancient spiritual practices. We guide individuals to unlock their inner potential and achieve personal growth through sacred rituals and transformative techniques.",
      gradient: "radial-gradient(at top left, #FFA91E 0%, #3E4100 100%)",
    },
    {
      title: "Horoscope Matching",
      desc: "Specializing in horoscope matching to ensure harmonious relationships, offering accurate insights for perfect compatibility and lifelong happiness.",
      gradient: "radial-gradient(at top left, #3E4100 0%, #FFA91E 100%)",
    },
    {
      title: "Palmistry",
      desc: "Combining astrology and palmistry, we provide a unique, detailed analysis of your life's path, character, and future possibilities through hand readings.",
      gradient: "radial-gradient(at top left, #FFA91E 0%, #3E4100 100%)",
    },
    {
      title: "Vedic",
      desc: "Expert in Vastu Shastra, providing personalized guidance for harmonious living spaces, balancing energies for prosperity, health, and happiness.",
      gradient: "radial-gradient(at top left, #3E4100 0%, #FFA91E 100%)",
    },
    {
      title: "Gem Therapy",
      desc: "Offering expert gem therapy solutions to balance energies, enhance well-being, and attract positivity through carefully selected healing gemstones.",
      gradient: "radial-gradient(at top left, #FFA91E 0%, #3E4100 100%)",
    },
    {
      title: "Vastu",
      desc: "Align your living and worksplaces with cosmic energies, enhancing prosperity, well-being, and harmony through traditional Vastu principles.",
      gradient: "radial-gradient(at top left, #3E4100 0%, #FFA91E 100%)",
    },
    {
      title: "Numerology",
      desc: "Discover your life's path with our expert numerology services, offering insights and guidance for personal growth, success, and happiness.",
      gradient: "radial-gradient(at top left, #FFA91E 0%, #3E4100 100%)",
    },
  ];

  return (
    <section
      id="service"
      className="relative w-full bg-fixed-parallax py-[50px] lg:py-[100px] scroll-mt-[70px] lg:scroll-mt-[100px]"
      style={{
        backgroundImage: `url('/assets/services-about-bg.jpg')`,
        backgroundPosition: "center center",
      }}
    >
      {/* Rule 20: Multiply Overlay linear-gradient(0deg, #4E4600 0%, #4E4600 100%) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(0deg, #4E4600 0%, #4E4600 100%)",
          opacity: 1,
          mixBlendMode: "multiply",
        }}
      />

      <div className="relative z-10 max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-aclonica font-light text-white text-[30px] lg:text-[45px] leading-[1.3] mb-3">
            What we do
          </h2>
          <p className="font-roboto text-white text-base sm:text-lg leading-relaxed">
            Everything we do to offer you a better service experience. We cover
            almost everything, that you may need from an expert in this field.
          </p>
        </div>

        {/* Infinite Scrolling Marquee Slider */}
        <div className="relative overflow-hidden w-full group py-4 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex gap-6 animate-marquee group-hover:[animation-play-state:paused] w-max">
            {[...services, ...services].map((service, index) => {
              const slug = service.title
                .toLowerCase()
                .trim()
                .replace(/\s+/g, "-");
              return (
                <Link
                  to={`/services#${slug}`}
                  key={index}
                  className="w-[280px] sm:w-[300px] lg:w-[320px] flex-shrink-0 group/card relative p-6 sm:p-8 rounded-2xl border border-white/20 text-left flex flex-col justify-between cursor-pointer transition-all duration-500 min-h-[300px] transform hover:-translate-y-3 whitespace-normal"
                  style={{
                    backgroundImage: service.gradient,
                    boxShadow: "0 15px 35px rgba(0,0,0,0.3)",
                  }}
                >
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-white/0 group-hover/card:bg-white/10 transition-colors duration-500 rounded-2xl pointer-events-none"></div>

                  <div className="relative z-10">
                    <h3 className="font-roboto font-extrabold text-white text-[22px] mb-3 leading-tight group-hover/card:text-[#ffe6a2] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <div className="w-10 h-1 bg-[#FFA91E] mb-4 rounded-full group-hover/card:w-16 transition-all duration-500"></div>
                    <p className="font-roboto text-white/95 text-[14px] leading-relaxed font-medium">
                      {service.desc}
                    </p>
                  </div>

                  <div className="relative z-10 mt-6 flex items-center text-[#FFA91E] font-bold tracking-wider uppercase text-sm group-hover/card:text-white transition-colors duration-300">
                    <span>Read More</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 ml-2 transform group-hover/card:translate-x-2 transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* View All Services Button */}
        <div className="mt-14 text-center">
          <Link
            to="/services"
            className="inline-flex items-center justify-center bg-transparent border-2 border-[#FFA91E] text-[#FFA91E] font-bold font-roboto uppercase tracking-widest text-sm px-10 py-4 rounded-full hover:bg-[#FFA91E] hover:text-[#0C0606] transition-all duration-300 shadow-[0_0_15px_rgba(255,169,30,0.2)] hover:shadow-[0_0_25px_rgba(255,169,30,0.5)]"
          >
            Show All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
