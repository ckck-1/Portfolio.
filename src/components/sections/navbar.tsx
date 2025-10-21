"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Works", href: "#works" },
  { label: "Contact", href: "#contact" },
];

const NavHoverLink = ({ href, label }: { href: string; label: string }) => (
  <a
    href={href}
    className="relative group overflow-hidden block h-6 leading-6 text-base font-medium text-white/95 hover:text-white"
  >
    <span className="block transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
      {label}
    </span>
    <span className="absolute top-0 left-0 block transition-transform duration-300 ease-in-out translate-y-full group-hover:translate-y-0">
      {label}
    </span>
  </a>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  const handleMenuToggle = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-body ${
        isScrolled ? "bg-black/95 backdrop-blur-md h-20 border-b border-white/5" : "bg-transparent h-24"
      }`}
    >
      <div className="container mx-auto flex h-full items-center justify-between px-6 md:px-12 xl:px-18">
        <Link href="/" aria-label="home" onClick={closeMenu} className="flex items-center">
          <span className="font-display text-3xl font-bold text-white tracking-tight">CK</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-12">
          {navItems.map((item) => (
            <NavHoverLink key={item.label} href={item.href} label={item.label} />
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden z-50 text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          onClick={handleMenuToggle}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu Panel */}
        <div
          className={`lg:hidden fixed inset-0 bg-black/98 backdrop-blur-md z-40 flex flex-col items-center justify-center space-y-10 transition-opacity duration-300 ${
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          onClick={closeMenu}
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-white text-3xl md:text-4xl font-semibold tracking-tight hover:text-accent transition-colors"
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;