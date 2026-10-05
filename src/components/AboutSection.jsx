import React from "react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full bg-fixed-parallax pt-[50px] pb-0 lg:py-[100px] scroll-mt-[85px] lg:scroll-mt-[110px]"
      style={{
        backgroundImage: `url('/assets/services-about-bg.jpg')`,
        backgroundPosition: "center center",
      }}
    >
      {/* Rule 89: Multiply Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(0deg, #4E4600 0%, #4E4600 100%)",
          opacity: 1,
          mixBlendMode: "multiply",
        }}
      />

      <div className="relative z-10 max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Column 1: Astrologer Photo (39.987% on desktop, 100% on tablet/mobile) */}
          <div className="w-full lg:w-[39.987%] flex justify-center mb-8 lg:mb-0">
            <div
              className="rounded-[15px] overflow-hidden max-w-[400px] w-full relative group"
              style={{
                boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)",
              }}
            >
              <img
                src="/assets/about-astrologer.jpg"
                alt="Smt. Amrita Maitra - Best Astrologer in Kolkata"
                width="400"
                height="500"
                className="w-full h-auto object-cover rounded-[15px] block transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                decoding="async"
                style={{
                  filter:
                    "brightness(80%) contrast(161%) saturate(80%) blur(0px) hue-rotate(31deg)",
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-3 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-[#FFA91E] font-roboto font-bold text-sm">
                  Smt. Amrita Maitra
                </p>
                <p className="text-white text-xs">
                  M.Phil (Jyotish Vidya Bachaspati)
                </p>
              </div>
            </div>
          </div>

          {/* Column 2: Content (60.013% on desktop, 100% on tablet/mobile) */}
          <div className="w-full lg:w-[60.013%] lg:p-[80px] md:py-[50px] text-left md:text-center lg:text-left">
            {/* Rule 101: About Us kicker */}
            <p className="font-roboto font-bold text-[#FFA91E] text-base mb-2 tracking-wider uppercase">
              <strong>About Us</strong>
            </p>

            {/* Rule 102 & 150: Heading in Aclonica (40px desktop, 30px tablet) */}
            <h2 className="font-aclonica font-normal text-white text-[30px] lg:text-[40px] leading-[1.3] mb-6">
              Guiding Stars, Enlightening Lives
            </h2>

            {/* Narrative text with SEO rich details */}
            <div className="font-roboto font-medium text-white text-[15px] sm:text-[16px] leading-[1.8] space-y-4">
              <p>
                Founded and led by <strong>Smt. Amrita Maitra</strong>, Basanti
                Jyotish Karyalaya is your trusted guide in the world of Vedic
                astrology. Based in Madhyamgram, Kolkata, Smt. Amrita Maitra is
                a highly decorated astrologer holding the esteemed titles of{" "}
                <strong>'Jyotish Bharati'</strong> (Diploma) and{" "}
                <strong>'Jyotish Vidya Bachaspati'</strong> (M.Phil in
                Astrology) conferred by the prestigious Viswa Jyotish Vidyapith
                and the Astrological Research Project.
              </p>
              <p>
                As a brilliant scholar who secured the{" "}
                <strong>
                  Third Position in the M.Phil Final Examination (2006)
                </strong>{" "}
                and recipient of the{" "}
                <strong>Golden Achievement Award (2005)</strong>, she brings
                decades of profound academic knowledge and practical experience.
                She provides insightful readings that delve deep into your birth
                chart, offering clarity and guidance on career, relationships,
                health, and more.
              </p>
              <p>
                We believe in empowering individuals through the ancient wisdom
                of Vedic astrology, helping them make informed decisions and
                find peace of mind. Whether you seek answers or wish to
                understand your life's path better, Smt. Amrita Maitra is
                dedicated to illuminating your journey with highly accurate
                insights and authentic astrological remedies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
