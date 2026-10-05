import React, { useState, useEffect } from "react";
import { Search, Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Header({ onOpenSearch, onOpenMobileMenu }) {
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/#home" },
    { label: "About", href: "/#about" },
    { label: "Service", href: "/services" },
    { label: "Certificates", href: "/#certificates" },
    { label: "Why Choose Us", href: "/#why-choose-us" },
    { label: "FAQ", href: "/#faq" },
    { label: "Contact", href: "/#contact" },
  ];

  // Determine styles based on scroll state and page
  const headerBg = isSticky
    ? "bg-[#0C0606]/90 backdrop-blur-md shadow-2xl h-[85px] lg:h-[110px]"
    : "bg-gradient-to-b from-black/80 via-black/30 to-transparent h-[85px] lg:h-[110px]";

  const textColor = isSticky
    ? "text-[#E7EBEE]"
    : isHomePage
      ? "text-[#E7EBEE]"
      : "text-[#102136]";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg} flex items-center`}
    >
      <div className="w-full max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Site Title */}
        <Link
          to="/#home"
          className="flex items-center space-x-3 sm:space-x-4 group py-1"
        >
          <img
            src="/assets/Basanti_Logo.png"
            alt="Basanti Jyotish Karyalaya Logo"
            width="80"
            height="80"
            loading="eager"
            decoding="async"
            fetchpriority="high"
            className="h-14 sm:h-16 lg:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_4px_10px_rgba(0,0,0,0.6)]"
          />
          <div className="flex flex-col">
            <span className="font-roboto font-extrabold text-[18px] sm:text-[22px] lg:text-[26px] text-[#FFA91E] leading-tight tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Basanti Jyotish
            </span>
            <span className="font-roboto font-bold text-[11px] sm:text-[13px] lg:text-[15px] text-white tracking-[0.2em] uppercase leading-tight drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
              Karyalaya
            </span>
          </div>
        </Link>

        {/* Desktop Navigation: 12px uppercase bold, 30px spacing */}
        <div className="hidden lg:flex items-center space-x-[30px]">
          <nav className="flex items-center space-x-[30px]">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`font-roboto font-bold text-[12px] uppercase tracking-wider transition-colors hover:text-[#FFA91E] ${textColor}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Search Trigger Icon */}
          {/* <button
            onClick={onOpenSearch}
            aria-label="Open Search"
            className={`p-1 transition-colors hover:text-[#FFA91E] ${textColor}`}
          >
            <Search className="w-5 h-5" />
          </button> */}
        </div>

        {/* Mobile & Tablet Trigger Buttons */}
        <div className="flex lg:hidden items-center space-x-2">
          <button
            onClick={onOpenSearch}
            aria-label="Open Search"
            className={`p-2 transition-colors hover:text-[#FFA91E] ${textColor}`}
          >
            <Search className="w-5 h-5" />
          </button>
          <button
            onClick={onOpenMobileMenu}
            aria-label="Open Menu"
            className={`p-2 transition-colors hover:text-[#FFA91E] ${textColor}`}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
