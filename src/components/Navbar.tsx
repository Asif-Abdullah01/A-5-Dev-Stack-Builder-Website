
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
  const [activeLink, setActiveLink] = useState("Home");

  const handleLinkClick = (name: string) => {
    setActiveLink(name);
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white">
      <nav className="mx-auto flex h-[70px] max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">

        {/* Mobile Hamburger */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-9 w-9 shrink-0 cursor-pointer flex-col items-center justify-center gap-[5px] lg:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <span className="text-2xl text-slate-900">×</span>
          ) : (
            <>
              <span className="h-[2px] w-5 bg-slate-900"></span>
              <span className="h-[2px] w-5 bg-slate-900"></span>
              <span className="h-[2px] w-5 bg-slate-900"></span>
            </>
          )}
        </button>

        {/* Brand Logo */}
        <a
          href="#home"
          onClick={() => handleLinkClick("Home")}
          className="flex shrink-0 items-center"
        >
          <img
            src={logo}
            alt="Dev Stack Logo"
            className="h-auto w-[105px] sm:w-[130px]"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => handleLinkClick(link.name)}
              className={`text-[13px] font-medium transition-colors hover:text-pink-600 ${
                activeLink === link.name
                  ? "text-pink-600"
                  : "text-slate-600"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Authentication Buttons */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-4">
          <button
            type="button"
            className="cursor-pointer whitespace-nowrap text-[11px] font-medium text-slate-700 transition hover:text-pink-600 sm:text-[13px]"
          >
            Sign In
          </button>

          <button
            type="button"
            className="cursor-pointer whitespace-nowrap rounded-full bg-[#e31183] px-3 py-2 text-[11px] font-medium text-white transition hover:bg-pink-700 sm:px-5 sm:py-2.5 sm:text-[13px]"
          >
            Sign Up
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Navigation */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full border-b border-slate-100 bg-white px-5 py-3 shadow-lg lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleLinkClick(link.name)}
                className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                  activeLink === link.name
                    ? "bg-pink-50 text-pink-600"
                    : "text-slate-600 hover:bg-slate-50 hover:text-pink-600"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
