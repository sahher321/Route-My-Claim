// src/components/Header.jsx
import React, { useState } from "react";
import { Menu, X } from "lucide-react"; 
import Logo from "../../assets/images/horizontal-logo-2.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-gray-200 bg-gray-50 font-myfont ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        
        {/* Logo */}
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={Logo} className="h-14" alt="RouteMyClaim Logo" />
        </a>

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
            
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0  text-blue-700 rounded-sm md:bg-transparent "
                aria-current="page"
              >
                Home
              </a>
            </li>
            
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700"
              >
                Features
              </a>
            </li>
            
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700"
              >
                Pricing
              </a>
            </li>

            {/* Contact as Button */}
            <li>
              <a
                href="#"
                className="block py-2 px-12 md:py-2 md:px-5 text-white rounded-3xl bg-gradient-to-r from-green-400 to-blue-600 transition-colors"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
