import React from 'react';

export default function ServicesSection() {
  const services = [
    {
      title: 'Astrology',
      desc: "Expert astrology services offering accurate predictions, personalized guidance, and remedies to navigate life's challenges and achieve success.",
      gradient: 'radial-gradient(at top left, #3E4100 0%, #FFA91E 100%)',
    },
    {
      title: 'Tantra and Mantra',
      desc: 'Tantra and Mantra specialize in ancient spiritual practices. We guide individuals to unlock their inner potential and achieve personal growth through sacred rituals and transformative techniques.',
      gradient: 'radial-gradient(at top left, #FFA91E 0%, #3E4100 100%)',
    },
    {
      title: 'Horoscope Matching',
      desc: 'Specializing in horoscope matching to ensure harmonious relationships, offering accurate insights for perfect compatibility and lifelong happiness.',
      gradient: 'radial-gradient(at top left, #3E4100 0%, #FFA91E 100%)',
    },
    {
      title: 'Palmistry',
      desc: "Combining astrology and palmistry, we provide a unique, detailed analysis of your life's path, character, and future possibilities through hand readings.",
      gradient: 'radial-gradient(at top left, #FFA91E 0%, #3E4100 100%)',
    },
    {
      title: 'Vedic',
      desc: 'Expert in Vastu Shastra, providing personalized guidance for harmonious living spaces, balancing energies for prosperity, health, and happiness.',
      gradient: 'radial-gradient(at top left, #3E4100 0%, #FFA91E 100%)',
    },
    {
      title: 'Gem Therapy',
      desc: 'Offering expert gem therapy solutions to balance energies, enhance well-being, and attract positivity through carefully selected healing gemstones.',
      gradient: 'radial-gradient(at top left, #FFA91E 0%, #3E4100 100%)',
    },
    {
      title: ' Vastu ',
      desc: 'Align your living and worksplaces with cosmic energies, enhancing prosperity, well-being, and harmony through traditional Vastu principles.',
      gradient: 'radial-gradient(at top left, #3E4100 0%, #FFA91E 100%)',
    },
    {
      title: 'Numerology',
      desc: "Discover your life's path with our expert numerology services, offering insights and guidance for personal growth, success, and happiness.",
      gradient: 'radial-gradient(at top left, #FFA91E 0%, #3E4100 100%)',
    },
  ];

  return (
    <section
      id="service"
      className="relative w-full bg-fixed-parallax py-[50px] lg:py-[100px] scroll-mt-[70px] lg:scroll-mt-[100px]"
      style={{
        backgroundImage: `url('/assets/services-about-bg.jpg')`,
        backgroundPosition: 'center center',
      }}
    >
      {/* Rule 20: Multiply Overlay linear-gradient(0deg, #4E4600 0%, #4E4600 100%) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(0deg, #4E4600 0%, #4E4600 100%)',
          opacity: 1,
          mixBlendMode: 'multiply',
        }}
      />

      <div className="relative z-10 max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-aclonica font-light text-white text-[30px] lg:text-[45px] leading-[1.3] mb-3">
            What we do
          </h2>
          <p className="font-roboto text-white text-base sm:text-lg leading-relaxed">
            Everything we do to offer you a better service experience. We cover almost everything, that you may need from an expert in this field.
          </p>
        </div>

        {/* 8 Service Boxes Grid: 4 cols on desktop, 2 cols on tablet, 1 col on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="ct-service-box p-[45px] rounded-[10px] border border-[#E4E9F0] text-left md:text-center lg:text-left flex flex-col justify-start cursor-pointer transition-all duration-300"
              style={{
                backgroundImage: service.gradient,
              }}
            >
              <h3 className="font-roboto font-bold text-white text-[20px] mb-[10px] leading-snug">
                {service.title}
              </h3>
              <p className="font-roboto text-white text-[15px] leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
