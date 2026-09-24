import React from "react";
import { MapPin, Phone, Mail, ChevronRight } from "lucide-react";
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="footer"
      className="w-full text-white scroll-mt-[70px] lg:scroll-mt-[100px]"
    >
      {/* Main Footer Body */}
      <div
        className="w-full py-10 md:py-12 relative overflow-hidden"
        style={{
          backgroundColor: "#3E4100",
          backgroundImage:
            'linear-gradient(rgba(40, 45, 0, 0.88), rgba(40, 45, 0, 0.88)), url("/assets/testimonials-bg.jpg")',
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Column 1: Contact Info */}
            <div>
              <h3 className="font-bold text-lg md:text-xl text-white mb-3 tracking-wider uppercase font-roboto">
                Contact Info
              </h3>
              <div className="w-16 h-1 bg-[#FFA91E] rounded-full mb-6"></div>
              <p className="text-gray-300 text-sm leading-relaxed mb-6 font-light">
                Nunc lobortis mattis aliquam faucibus purus in massa arcu odio
                ut sem nulla pharetra diam amet.
              </p>

              <div className="space-y-4 text-sm text-gray-300 font-light">
                <div className="flex items-start group">
                  <div className="mt-0.5 mr-3 flex-shrink-0 bg-white/5 p-2 rounded-full group-hover:bg-[#FFA91E] group-hover:text-white transition-all duration-300 shadow-sm">
                    <MapPin className="w-3.5 h-3.5 text-[#FFA91E] group-hover:text-white transition-colors" />
                  </div>
                  <span className="leading-relaxed">
                    2No, Sarada Sarani, Sreepur, Badamtala, Madhyamgram, West
                    Bengal, Kolkata - 700130
                  </span>
                </div>

                <div className="flex items-center group">
                  <div className="mr-3 flex-shrink-0 bg-white/5 p-2 rounded-full group-hover:bg-[#FFA91E] transition-all duration-300 shadow-sm">
                    <Phone className="w-3.5 h-3.5 text-[#FFA91E] group-hover:text-white transition-colors" />
                  </div>
                  <a
                    href="tel:9831419874"
                    className="hover:text-[#FFA91E] transition-colors duration-300"
                  >
                    +91 98314 19874
                  </a>
                </div>

                <div className="flex items-center group">
                  <div className="mr-3 flex-shrink-0 bg-white/5 p-2 rounded-full group-hover:bg-[#FFA91E] transition-all duration-300 shadow-sm">
                    <Mail className="w-3.5 h-3.5 text-[#FFA91E] group-hover:text-white transition-colors" />
                  </div>
                  <a
                    href="mailto:amritamaitra95@gmail.com"
                    className="hover:text-[#FFA91E] transition-colors duration-300 break-all"
                  >
                    amritamaitra95@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Column 2: About us */}
            <div>
              <h3 className="font-bold text-lg md:text-xl text-white mb-3 tracking-wider uppercase font-roboto">
                About Us
              </h3>
              <div className="w-16 h-1 bg-[#FFA91E] rounded-full mb-6"></div>
              <ul className="space-y-3 text-sm text-gray-300 font-light">
                <li>
                  <a
                    href="#about"
                    className="inline-flex items-center hover:text-[#FFA91E] hover:translate-x-2 transition-all duration-300"
                  >
                    <ChevronRight className="w-3.5 h-3.5 mr-1.5 text-[#FFA91E]" />
                    About Organization
                  </a>
                </li>
                <li>
                  <a
                    href="#service"
                    className="inline-flex items-center hover:text-[#FFA91E] hover:translate-x-2 transition-all duration-300"
                  >
                    <ChevronRight className="w-3.5 h-3.5 mr-1.5 text-[#FFA91E]" />
                    Our Clients
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonial"
                    className="inline-flex items-center hover:text-[#FFA91E] hover:translate-x-2 transition-all duration-300"
                  >
                    <ChevronRight className="w-3.5 h-3.5 mr-1.5 text-[#FFA91E]" />
                    Our Partners
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Quick Links */}
            <div>
              <h3 className="font-bold text-lg md:text-xl text-white mb-3 tracking-wider uppercase font-roboto">
                Quick Links
              </h3>
              <div className="w-16 h-1 bg-[#FFA91E] rounded-full mb-6"></div>
              <ul className="space-y-3 text-sm text-gray-300 font-light">
                <li>
                  <a
                    href="#home"
                    className="inline-flex items-center hover:text-[#FFA91E] hover:translate-x-2 transition-all duration-300"
                  >
                    <ChevronRight className="w-3.5 h-3.5 mr-1.5 text-[#FFA91E]" />
                    Introduction
                  </a>
                </li>
                <li>
                  {/* Active Link Styling as shown in screenshot */}
                  <a
                    href="#about"
                    className="inline-flex items-center text-[#FFA91E] translate-x-1 font-medium transition-all duration-300"
                  >
                    <ChevronRight className="w-3.5 h-3.5 mr-1.5 text-[#FFA91E]" />
                    Organisation Team
                  </a>
                </li>
                <li>
                  <a
                    href="#footer"
                    className="inline-flex items-center hover:text-[#FFA91E] hover:translate-x-2 transition-all duration-300"
                  >
                    <ChevronRight className="w-3.5 h-3.5 mr-1.5 text-[#FFA91E]" />
                    Press Enquiries
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="w-full bg-[#0a0a0a] py-5 border-t border-white/5 relative z-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-3">
          <p className="text-sm text-gray-400 font-light">
            Copyright © {currentYear}{" "}
            <span className="text-white font-medium">
              Basanti Jyotish Karyalaya
            </span>
          </p>
          <p className="text-sm text-gray-400 font-light">
            Design & Developed by{" "}
            <a
              href="https://www.teamdeoskolkata.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-medium hover:text-[#FFA91E] transition-colors duration-300 ml-1"
            >
              Digital Exposure Online Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
