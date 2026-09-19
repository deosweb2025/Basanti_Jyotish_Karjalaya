import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="w-full text-white scroll-mt-[70px] lg:scroll-mt-[100px]">
      {/* Middle Row: Exact Blocksy background image with olive linear-gradient overlay */}
      <div
        className="w-full py-[40px] md:py-[50px] lg:py-[70px]"
        style={{
          backgroundColor: '#3E4100',
          backgroundImage:
            'linear-gradient(rgba(68, 74, 0, 0.73), rgba(68, 74, 0, 0.73)), url("/assets/testimonials-bg.jpg")',
          backgroundPosition: '52% 51%',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
            {/* Column 1: Contact Info */}
            <div className="text-left">
              <h3 className="font-roboto font-bold text-[16px] text-[#E7EBEE] mb-4">
                Contact Info
              </h3>
              <p className="text-white text-sm leading-relaxed mb-6">
                Nunc lobortis mattis aliquam faucibus purus in massa arcu odio ut sem nulla pharetra diam amet.
              </p>
              <div className="space-y-3 text-sm text-white">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-[#FFA91E] flex-shrink-0 mt-0.5" />
                  <span>2No, Sarada Sarani, Sreepur, Badamtala, Madhyamgram, West Bengal, Kolkata - 700130</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-[#FFA91E] flex-shrink-0" />
                  <a
                    href="tel:9831419874"
                    className="hover:text-[#FFA91E] transition-colors"
                  >
                    +91 98314 19874
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-[#FFA91E] flex-shrink-0" />
                  <a
                    href="mailto:amritamaitra95@gmail.com"
                    className="hover:text-[#FFA91E] transition-colors break-all"
                  >
                    amritamaitra95@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Column 2: About us & Achievements (Centered on Desktop/Tablet per Blocksy rule) */}
            <div className="text-left md:text-center">
              <h3 className="font-roboto font-bold text-[16px] text-[#E7EBEE] mb-4">
                About us
              </h3>
              <ul className="space-y-2 text-sm text-white mb-6">
                <li>
                  <a href="#about" className="hover:text-[#FFA91E] transition-colors">
                    About Organization
                  </a>
                </li>
                <li>
                  <a href="#service" className="hover:text-[#FFA91E] transition-colors">
                    Our Clients
                  </a>
                </li>
                <li>
                  <a href="#testimonial" className="hover:text-[#FFA91E] transition-colors">
                    Our Partners
                  </a>
                </li>
              </ul>

              <h4 className="font-roboto font-bold text-[16px] text-[#E7EBEE] mb-2">
                Achievements
              </h4>
              <p className="text-white text-sm leading-relaxed">
                Massa sed elementum tempus egestas sed sed risus at ultrices mi tempus imperdiet nulla.
              </p>
            </div>

            {/* Column 3: Quick Links & Useful Information */}
            <div className="text-left">
              <h3 className="font-roboto font-bold text-[16px] text-[#E7EBEE] mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2 text-sm text-white mb-6">
                <li>
                  <a href="#home" className="hover:text-[#FFA91E] transition-colors">
                    Introduction
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-[#FFA91E] transition-colors">
                    Organisation Team
                  </a>
                </li>
                <li>
                  <a href="#footer" className="hover:text-[#FFA91E] transition-colors">
                    Press Enquiries
                  </a>
                </li>
              </ul>

              <h4 className="font-roboto font-bold text-[16px] text-[#E7EBEE] mb-2">
                Useful Information
              </h4>
              <p className="text-white text-sm leading-relaxed">
                Amet commodo nulla facilisi nullam vehicula ipsum. Faucibus pulvinar elementum integer enim.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row: Exact Blocksy #0C0606 Copyright Bar */}
      <div className="w-full bg-[#0C0606] py-[15px] sm:py-[25px]">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-roboto text-[14px] sm:text-[15px] text-white">
            Copyright © {currentYear} Basanti Jyotish Karyalaya - Powered by
            <a
              href="https://www.teamdeoskolkata.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold hover:text-red-700 transition-colors duration-300 ml-1"
            >
              Digital Exposure Online Service
            </a>.
          </p>
        </div>
      </div>
    </footer>
  );
}
