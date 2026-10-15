
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import logo from "../assets/logo-text.png";

const footerLinks = {
  Product: [
    { name: "Home", href: "#home" },
    { name: "Technologies", href: "#technologies" },
    { name: "Projects", href: "#projects" },
  ],
  Company: [
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
    { name: "Careers", href: "#careers" },
  ],
  Legal: [
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
  ],
};

function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-5 pt-16 pb-8 md:px-8">

        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5 lg:gap-8">

          {/* Brand Section */}
          <div className="lg:col-span-2">
            <a href="#home" className="inline-block">
              <img
                src={logo}
                alt="Dev Stack Logo"
                className="w-36 object-contain"
              />
            </a>

            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-500">
              Curated tools, technologies, and resources for
              developers building modern software.
            </p>

            {/* Social Media Links */}
            <div className="mt-5 flex items-center gap-4">

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-slate-600 transition-colors hover:text-pink-600"
              >
                <FaGithub size={18} />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-slate-600 transition-colors hover:text-pink-600"
              >
                <FaTwitter size={18} />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-slate-600 transition-colors hover:text-pink-600"
              >
                <FaLinkedin size={18} />
              </a>

            </div>
          </div>

          {/* Footer Navigation Groups */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="mb-5 text-xs font-bold uppercase tracking-wide text-slate-900">
                {title}
              </h3>

              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-500 transition-colors hover:text-pink-600"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Footer Bottom */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-gray-100 pt-7 md:flex-row">

          <p className="text-center text-xs text-slate-400 md:text-left">
            © {new Date().getFullYear()} Dev Stack.
            All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#privacy"
              className="text-xs text-slate-400 transition-colors hover:text-pink-600"
            >
              Privacy
            </a>

            <a
              href="#terms"
              className="text-xs text-slate-400 transition-colors hover:text-pink-600"
            >
              Terms
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
