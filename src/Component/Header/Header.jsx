// src/components/Header.jsx
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { HashLink } from "react-router-hash-link";
import Logo from "../../assets/images/horizontal-logo-2.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [manualActive, setManualActive] = useState(null); // 👈 new state

  // Detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      // if user clicked manually, don't override immediately
      if (manualActive) return;

      const sections = ["home", "features", "pricing", "cta"];
      let current = "home";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section && window.scrollY >= section.offsetTop - 140) {
          current = id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [manualActive]);

  // after a small delay, release manualActive so scroll tracking works again
  useEffect(() => {
    if (manualActive) {
      const timer = setTimeout(() => setManualActive(null), 800); // adjust timing
      return () => clearTimeout(timer);
    }
  }, [manualActive]);

  return (
    <nav className="sticky top-0 z-50 border-gray-200 bg-gray-50 font-myfont shadow-sm">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <HashLink
          smooth
          to="#home"
          onClick={() => {
            setActiveSection("home");
            setManualActive("home");
            setIsOpen(false);
          }}
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={Logo} className="h-16" alt="RouteMyClaim Logo" />
        </HashLink>

        {/* Mobile toggle button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="mobile-menu"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Menu */}
        <div
          id="mobile-menu"
          className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
        >
          <ul className="flex flex-col items-start md:items-center font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-transparent">
            {["home", "features", "pricing"].map((id) => (
              <li key={id}>
                <HashLink
                  smooth
                  to={`#${id}`}
                  onClick={() => {
                    setActiveSection(id);
                    setManualActive(id); // 👈 freeze scroll updates briefly
                    setIsOpen(false);
                  }}
                  className={`block py-2 px-3 text-[18px] font-myfont md:p-0 rounded-sm transition-colors ${
                    activeSection === id
                      ? "text-blue-700"
                      : "text-gray-900 hover:text-blue-700"
                  }`}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </HashLink>
              </li>
            ))}

            {/* Contact as Button */}
            <li>
              <HashLink
                smooth
                to="#cta"
                onClick={() => {
                  setActiveSection("cta");
                  setManualActive("cta"); // 👈 freeze scroll updates briefly
                  setIsOpen(false);
                }}
                className={`flex items-center justify-center text-[18px] min-h-[56px] min-w-[216px] text-center rounded-full transition-colors ${
                  activeSection === "cta"
                    ? "bg-blue-700 text-white"
                    : "bg-gradient-to-r from-green-400 to-blue-600 text-white hover:opacity-90"
                }`}
              >
                Contact Us
              </HashLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
