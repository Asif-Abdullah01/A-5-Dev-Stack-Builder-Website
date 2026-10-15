
import { useState } from "react";
import logo from "../assets/logo-text.png";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Technologies", href: "#technologies" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-8">

        {/* Mobile Hamburger */}
        <button
          type="button"
          className="flex items-center justify-center lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <span className="text-2xl text-gray-800">✕</span>
          ) : (
            <div className="flex flex-col gap-1.5">
              <span className="h-0.5 w-6 bg-gray-800"></span>
              <span className="h-0.5 w-6 bg-gray-800"></span>
              <span className="h-0.5 w-6 bg-gray-800"></span>
            </div>
          )}
        </button>

        {/* Brand Logo */}
        <a href="#home" className="flex items-center">
          <img
            src={logo}
            alt="Dev Stack Logo"
            className="w-28 sm:w-36"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-600 transition hover:text-pink-600"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Authentication Buttons */}
        <div className="flex items-center gap-2 sm:gap-5">
          <button
            type="button"
            className="cursor-pointer text-xs font-medium text-gray-700 hover:text-pink-600 sm:text-sm"
          >
            Sign In
          </button>

          <button
            type="button"
            className="brand-gradient cursor-pointer rounded-full px-3 py-2 text-xs font-semibold text-white transition hover:opacity-90 sm:px-6 sm:py-3 sm:text-sm"
          >
            Sign Up
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full border-b border-gray-100 bg-white p-4 shadow-lg lg:hidden">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-pink-50 hover:text-pink-600"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

export default Navbar;
