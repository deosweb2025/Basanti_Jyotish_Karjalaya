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
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/#home" },
    { label: "About", href: "/#about" },
    { label: "Service", href: "/services" },
    { label: "Testimonials", href: "/#testimonial" },
    { label: "Contact", href: "/#footer" },
  ];

  // Determine styles based on scroll state and page
  const headerBg = isSticky
    ? "bg-[#0C0606]/80 backdrop-blur-md shadow-lg h-[70px] lg:h-[100px]"
    : "bg-transparent h-[70px] lg:h-[100px]";

  const textColor = isSticky
    ? "text-[#E7EBEE]"
    : isHomePage
      ? "text-[#E7EBEE]"
      : "text-[#102136]";

  const logoColor = isSticky
    ? "text-[#FFA91E]"
    : isHomePage
      ? "text-[#FFA91E]"
      : "text-[#102136]";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg} flex items-center`}
    >
      <div className="w-full max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo / Site Title: 20px bold */}
        <Link
          to="/#home"
          className={`font-roboto font-bold text-[20px] transition-colors hover:text-[#FFA91E] ${logoColor}`}
        >
          Basanti Jyotish Karyalaya
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
