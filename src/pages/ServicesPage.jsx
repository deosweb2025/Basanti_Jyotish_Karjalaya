import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Helmet } from "react-helmet-async";

const serviceData = [
  {
    id: "astrology",
    title: "Astrology",
    image: "/assets/generated/astrology.jpg",
    description:
      "Our Vedic Astrology service offers profound insights into your life by analyzing your birth chart. We decode planetary alignments and their influence on your career, health, relationships, and finance. Discover your strengths, overcome obstacles, and navigate your future with clarity.",
    features: [
      "In-depth Birth Chart (Kundali) Analysis",
      "Career & Finance Predictions",
      "Health & Wellness Insights",
      "Personalized Remedies (Upayas)",
    ],
  },
  {
    id: "tantra-and-mantra",
    title: "Tantra and Mantra",
    image: "/assets/generated/tantra.jpg",
    description:
      "Rooted in ancient Indian spiritual traditions, Tantra and Mantra involve powerful rituals and sound vibrations. These sacred practices are designed to help you unlock inner potential, remove negative energies, and achieve profound personal and spiritual growth.",
    features: [
      "Customized Mantra Chanting Guidance",
      "Negative Energy Cleansing Rituals",
      "Spiritual Awakening Practices",
      "Protection and Prosperity Yantras",
    ],
  },
  {
    id: "horoscope-matching",
    title: "Horoscope Matching",
    image: "/assets/generated/horoscope.jpg",
    description:
      "Marriage is a sacred bond, and Kundali Milan ensures it is harmonious and blessed. We meticulously compare the horoscopes of the prospective bride and groom across 8 aspects (Ashtakoot Guna Milan) to predict compatibility, longevity, and prosperity in married life.",
    features: [
      "Detailed Ashtakoot Guna Milan",
      "Manglik Dosha Analysis",
      "Compatibility and Harmony Check",
      "Remedies for Relationship Obstacles",
    ],
  },
  {
    id: "palmistry",
    title: "Palmistry",
    image: "/assets/generated/palmistry.jpg",
    description:
      "Your hands hold the map of your life. Our expert palmistry service reads the lines, mounts, and shapes of your hands to reveal your character traits, potential health issues, career trajectory, and romantic possibilities.",
    features: [
      "Life Line & Heart Line Analysis",
      "Career & Fate Predictions",
      "Personality & Character Insights",
      "Future Milestones Forecasting",
    ],
  },
  {
    id: "vedic",
    title: "Vedic",
    image: "/assets/generated/vedic.jpg",
    description:
      "Vedic astrology provides a comprehensive approach to understanding your karma and destiny. We offer generalized and specialized readings based on classical texts to bring you peace of mind and success.",
    features: [
      "Prashna Kundali (Horary Astrology)",
      "Muhurta (Auspicious Timing)",
      "Varshphal (Yearly Predictions)",
      "Dasha and Transit Analysis",
    ],
  },
  {
    id: "gem-therapy",
    title: "Gem Therapy",
    image: "/assets/generated/gem_therapy.jpg",
    description:
      "Gemstones carry specific cosmic frequencies that can balance malefic planets and enhance benefic ones. We recommend authentic, energized gemstones based strictly on your birth chart to attract health, wealth, and positivity.",
    features: [
      "Personalized Gemstone Recommendation",
      "Guidance on Wearing Rituals",
      "Remedies for Planetary Afflictions",
      "Aura and Energy Balancing",
    ],
  },
  {
    id: "vastu",
    title: "Vastu",
    image: "/assets/generated/vastu.jpg",
    description:
      "Vastu Shastra is the ancient science of architecture. We help you align your home, office, or commercial space with the five elements and cosmic directions. Correcting Vastu doshas can bring unparalleled prosperity, health, and harmony.",
    features: [
      "Residential & Commercial Vastu",
      "Vastu Dosha Correction without Demolition",
      "Placement and Direction Guidance",
      "Energy Flow Optimization",
    ],
  },
  {
    id: "numerology",
    title: "Numerology",
    image: "/assets/generated/numerology.jpg",
    description:
      "Numbers govern the universe. Through Numerology, we decode your Life Path, Destiny, and Soul Urge numbers derived from your birth date and name. Discover your true calling and make decisions aligned with your numerical vibrations.",
    features: [
      "Life Path & Destiny Number Calculation",
      "Name Correction Suggestions",
      "Lucky Dates & Colors Identification",
      "Career & Compatibility Insights",
    ],
  },
];

export default function ServicesPage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <div className="pt-[100px] pb-16 min-h-screen bg-gray-50">
      <Helmet>
        <title>
          Premium Services | Best Astrologer in Kolkata & Madhyamgram
        </title>
        <meta
          name="description"
          content="Explore our premium services: Vedic Astrology, Vastu Shastra, Horoscope Matching, Numerology, and Tantrik solutions across Kolkata, Barasat, and Dum Dum."
        />
        <link
          rel="canonical"
          href="http://www.basantijyotishkaryalaya.co.in/services"
        />
      </Helmet>
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <Link
            to="/#service"
            className="inline-flex items-center justify-center text-[#F77D0E] hover:text-[#e06900] font-medium mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-aclonica font-normal text-gray-900 mb-4">
            Our Premium Services
          </h1>
          <div className="w-24 h-1.5 bg-[#F77D0E] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg font-roboto">
            Explore our comprehensive range of spiritual, astrological, and
            Vastu services designed to bring clarity, peace, and prosperity to
            your life.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-16 lg:space-y-24">
          {serviceData.map((service, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={service.id}
                id={service.id}
                className="bg-white rounded-3xl shadow-xl overflow-hidden scroll-mt-24"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 ${!isEven ? "lg:flex-row-reverse" : ""}`}
                >
                  {/* Image Column */}
                  <div
                    className={`relative h-72 lg:h-auto ${!isEven ? "lg:order-2" : ""}`}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                      style={{ filter: "brightness(85%) sepia(20%)" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-8">
                      <div className="inline-block bg-[#FFA91E] text-white px-4 py-1.5 rounded-full text-sm font-bold tracking-wide mb-3 uppercase">
                        Premium Service
                      </div>
                      <h2 className="text-3xl sm:text-4xl font-aclonica text-white leading-tight">
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div
                    className={`p-8 lg:p-12 flex flex-col justify-center ${!isEven ? "lg:order-1" : ""}`}
                  >
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 font-roboto">
                      About {service.title}
                    </h3>
                    <div className="w-16 h-1 bg-[#F77D0E] rounded-full mb-6"></div>
                    <p className="text-gray-600 leading-relaxed mb-8 font-roboto text-[15px] sm:text-lg">
                      {service.description}
                    </p>

                    <h4 className="text-xl font-bold text-gray-900 mb-4 font-roboto">
                      What You Will Get
                    </h4>
                    <ul className="space-y-4 mb-8">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle2 className="w-6 h-6 text-[#F77D0E] mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 font-roboto leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div>
                      <Link
                        to="/#footer"
                        className="inline-block bg-gray-900 text-white px-8 py-3.5 rounded-lg font-bold hover:bg-[#F77D0E] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                      >
                        Book Consultation
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
