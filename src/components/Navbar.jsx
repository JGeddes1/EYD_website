import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white-100 h-28 z-50 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center h-full">
        <div className="text-black text-2xl font-bold h-full">
          <a href="/" className="h-full">
            <img
              src="src/assets/EYD_PDF.jpg"
              alt="Logo"
              className="h-full w-auto object-contain"
            />
          </a>
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="text-black md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Menu Items */}
        <ul
          className={`md:flex space-x-6 ${
            isOpen ? "block" : "hidden"
          } md:block absolute md:relative bg-white-100  w-full md:w-auto top-20 md:top-auto left-0 md:left-auto z-50`}
        >
          <li>
            <a
              href="#"
              className="text-black block p-4 hover:text-white transition"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-black block p-4 hover:text-slate-300 transition"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="text-black block p-4 hover:text-slate-300 transition"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-black block p-4 hover:text-slate-300 transition"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
