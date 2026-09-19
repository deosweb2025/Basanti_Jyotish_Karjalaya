import React from 'react';

export default function CtaBanner() {
  return (
    <section
      id="c2a"
      className="relative w-full bg-fixed-parallax py-[50px]"
      style={{
        backgroundImage: `url('/assets/services-about-bg.jpg')`,
        backgroundPosition: 'center center',
      }}
    >
      {/* Rule 80: Dark Olive Multiply Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(0deg, #4E4600 0%, #4E4600 100%)',
          opacity: 1,
          mixBlendMode: 'multiply',
        }}
      />

      <div className="relative z-10 max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Rule 81 & 82: Banner container with linear-gradient(159deg, #3E4100 0%, #FFA91E 100%) and 3px 5px 0 0 #FFFFFF shadow */}
        <div
          className="relative overflow-hidden rounded-[15px] p-[30px] lg:p-[60px] flex flex-col md:flex-row items-center justify-between gap-6"
          style={{
            backgroundImage: 'linear-gradient(159deg, #3E4100 0%, #FFA91E 100%)',
            boxShadow: '3px 5px 0px 0px #FFFFFF',
          }}
        >
          {/* Rule 83: Pseudo background overlay with #FF1E00 and pattern.svg repeat contain */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundColor: '#FF1E00',
              backgroundImage: `url('/assets/pattern.svg')`,
              backgroundRepeat: 'repeat',
              backgroundSize: 'contain',
              opacity: 0.1,
            }}
          />

          {/* Rule 84, 145, 146, 173: Heading in Aclonica (30px desktop, 25px tablet, 17px mobile) */}
          <div className="relative z-10 text-center md:text-left">
            <h2 className="font-aclonica font-light text-white text-[17px] md:text-[25px] lg:text-[30px] leading-[1.3]">
              Discover Your Cosmic Path, <br className="hidden sm:inline" />
              Book a Consultation Today!
            </h2>
          </div>

          {/* Rule 85 & 86: Action button with exact padding 16px 23px and color transitions */}
          <div className="relative z-10 flex-shrink-0 text-center">
            <a
              href="tel:7470635086"
              className="inline-block font-roboto font-semibold text-[16px] sm:text-[18px] text-[#3E4100] bg-white hover:bg-[#3E4100] hover:text-white px-[23px] py-[16px] rounded transition-colors duration-300 shadow-md"
            >
              Contact us now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
