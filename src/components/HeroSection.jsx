import React from 'react';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full min-h-[500px] bg-cover bg-no-repeat bg-center flex items-center pt-[100px] pb-[50px] md:pt-[250px] md:pb-[150px] lg:pt-[15%] lg:pb-[10%]"
      style={{
        backgroundImage: `url('/assets/hero-bg.jpg')`,
        backgroundPosition: '0px 0px',
      }}
    >
      {/* Rule 1: Multiply Gradient Overlay: linear-gradient(48deg, #FFA91E 30%, #FFA91E 100%), opacity 1, multiply */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(48deg, #FFA91E 30%, #FFA91E 100%)',
          opacity: 1,
          mixBlendMode: 'multiply',
        }}
      />

      <div className="relative z-10 w-full max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full lg:w-[65.51%]">
          {/* Rule 6: H1 Title in Aclonica (45px desktop, 30px tablet/mobile, weight 800, line-height 1.3em) */}
          <h1 className="font-aclonica font-extrabold text-white text-[30px] lg:text-[45px] leading-[1.3] text-left md:text-center lg:text-left mb-4">
            Guiding Your Life’s Path with Wisdom, Insight, and Clarity
          </h1>

          {/* Rule 7: Text editor (max-width 64.255% on desktop, color #FFFFFF, text-align left) */}
          <div className="w-full lg:max-w-[64.255%] text-left">
            <p className="font-roboto font-normal text-white text-base leading-relaxed mb-10">
              At Basanti Jyotish, we offer insightful astrology services to guide you through life’s challenges. Our expert astrologers provide accurate readings and solutions tailored to your personal needs.
            </p>
          </div>

          {/* Rule 10 & 12: Button wrap with margin-top 40px */}
          <div className="mt-[40px] text-left md:w-1/2 lg:w-auto">
            <a
              href="tel:9831419874"
              className="inline-block font-roboto font-semibold text-[16px] text-[#3E4100] bg-white border-2 border-transparent hover:border-[#FFA91E] hover:bg-[#FFA91E] hover:text-white px-[21px] py-[14px] rounded transition-all duration-300 shadow-md"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
