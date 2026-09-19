import React from 'react';

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full bg-fixed-parallax pt-[50px] pb-0 lg:py-[100px] scroll-mt-[70px] lg:scroll-mt-[100px]"
      style={{
        backgroundImage: `url('/assets/services-about-bg.jpg')`,
        backgroundPosition: 'center center',
      }}
    >
      {/* Rule 89: Multiply Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(0deg, #4E4600 0%, #4E4600 100%)',
          opacity: 1,
          mixBlendMode: 'multiply',
        }}
      />

      <div className="relative z-10 max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Column 1: Astrologer Photo (39.987% on desktop, 100% on tablet/mobile) */}
          <div className="w-full lg:w-[39.987%] flex justify-center mb-8 lg:mb-0">
            <div
              className="rounded-[15px] overflow-hidden max-w-[400px] w-full"
              style={{
                boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.5)',
              }}
            >
              <img
                src="/assets/about-astrologer.jpg"
                alt="About Astrologer"
                className="w-full h-auto object-cover rounded-[15px] block"
                style={{
                  filter: 'brightness(80%) contrast(161%) saturate(80%) blur(0px) hue-rotate(31deg)',
                }}
              />
            </div>
          </div>

          {/* Column 2: Content (60.013% on desktop, 100% on tablet/mobile) */}
          <div className="w-full lg:w-[60.013%] lg:p-[80px] md:py-[50px] text-left md:text-center lg:text-left">
            {/* Rule 101: About Us kicker */}
            <p className="font-roboto font-bold text-white text-base mb-2">
              <strong>About Us</strong>
            </p>

            {/* Rule 102 & 150: Heading in Aclonica (40px desktop, 30px tablet) */}
            <h2 className="font-aclonica font-normal text-white text-[30px] lg:text-[40px] leading-[1.3] mb-6">
              Guiding Stars, Enlightening Lives
            </h2>

            {/* Rule 103: Narrative text (font-weight 500, color #FFFFFF) */}
            <p className="font-roboto font-medium text-white text-[15px] sm:text-[16px] leading-[1.8]">
              Basanti Jyotish is your trusted guide in the world of astrology, offering personalized astrological consultations and remedies to help you navigate life’s challenges. With years of experience, our expert astrologers provide insightful readings that delve deep into your birth chart, offering clarity and guidance on career, relationships, health, and more. We believe in empowering individuals through the ancient wisdom of Vedic astrology, helping them make informed decisions and find peace of mind. Whether you seek answers or wish to understand your life’s path better, Basanti Jyotish is dedicated to illuminating your journey with accurate insights.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
