import React from "react";

export default function SeoContentSection() {
  return (
    <section className="w-full bg-gray-50 py-16 lg:py-24 border-t border-gray-200">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Column */}
          <div>
            <p className="font-roboto font-bold text-[#F77D0E] text-sm md:text-base mb-2 uppercase tracking-wide">
              Trusted Jyotish Services
            </p>
            <h2 className="font-aclonica font-normal text-gray-900 text-[28px] md:text-[36px] leading-[1.3] mb-6">
              Best Astrologer for Accurate Predictions & Remedies
            </h2>
            <div className="w-20 h-1 bg-[#F77D0E] rounded-full mb-6"></div>

            <div className="space-y-5 font-roboto text-gray-600 text-[15px] sm:text-base leading-relaxed">
              <p>
                Led by the renowned and highly awarded{" "}
                <strong>Smt. Amrita Maitra (M.Phil in Astrology)</strong>,{" "}
                <strong>Basanti Jyotish Karyalaya</strong> is deeply committed
                to bringing light and clarity into your life. Regarded as the{" "}
                <strong>best astrologer in Madhyamgram kolkata</strong> and the{" "}
                <strong>best astrologer in kolkata</strong>, she specializes in
                providing highly accurate horoscope readings and future
                predictions. For those seeking numerical guidance, we are
                recognized as the{" "}
                <strong>best numerologist in barasat kolkata</strong>, offering
                name correction and destiny insights.
              </p>
              <p>
                Whether you are facing hurdles in your career or experiencing
                turbulence in your personal relationships, our Jyotish services
                are tailored to guide you. We are widely trusted as the{" "}
                <strong>best tantrik near barasat</strong> and the{" "}
                <strong>best tantrik in dum dum cantorment</strong>, providing
                authentic Mantra and spiritual remedies for profound awakening.
                We also offer meticulous Kundali Matching and serve as the{" "}
                <strong>best horoscope consultant in airport</strong> for a
                blissful marriage.
              </p>
              <p>
                Beyond standard readings, we provide expert Vastu Shastra
                consultations to harmonize your living and commercial spaces. As
                the <strong>best vastu consultant in new barrackpore</strong>,
                the <strong>best vastu consultant in birati</strong>, and the
                overall <strong>best vastu consultant in kolkata</strong>, we
                leave no stone unturned in ensuring your holistic well-being. By
                combining these time-tested disciplines, we empower our clients
                to make confident decisions and attract prosperity.
              </p>
            </div>
          </div>

          {/* Image/Visual Column */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src="/assets/services-about-bg.jpg"
                alt="Vedic Astrology and Kundali Reading"
                className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                style={{ filter: "brightness(90%) sepia(20%)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

              {/* Overlay Content */}
              <div className="absolute bottom-0 left-0 p-8">
                <div className="inline-block bg-[#FFA91E] text-white px-4 py-1.5 rounded-full text-sm font-bold tracking-wide mb-3">
                  100% Authentic
                </div>
                <h3 className="text-white text-2xl font-aclonica mb-2">
                  Illuminate Your Life's Path
                </h3>
                <p className="text-gray-200 text-sm font-roboto max-w-sm">
                  Discover the cosmic blueprint of your destiny with our trusted
                  astrological guidance and spiritual remedies.
                </p>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#FFA91E]/10 rounded-full blur-xl -z-10"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#3E4100]/10 rounded-full blur-xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
