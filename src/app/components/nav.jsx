"use client";
import { useState } from "react";
import { Bars3Icon, XCircleIcon } from "@heroicons/react/24/outline";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      {/* Hamburger Menu Icon */}
      <button onClick={toggleMenu} className="block fixed top-5 left-5 z-50">
        {isMenuOpen ? (
          <XCircleIcon className="h-11 w-11 hover:scale-110 text-white transition duration-300 ease-in-out" />
        ) : (
          <Bars3Icon className="h-11 w-11 hover:scale-110 text-white transition duration-300 ease-in-out" />
        )}
      </button>

      {/* Menu Content */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-90 z-40 transition-opacity duration-300">
          <div className="absolute top-5 left-5">
            <button onClick={toggleMenu}>
              <XCircleIcon className="h-11 w-11 hover:scale-110 text-white transition duration-300 ease-in-out" />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center h-full">
            <nav className="text-white">
              <ul className="space-y-4 text-2xl text-center">
                <li>
                  <a
                    href="#about"
                    className="text-7xl hover:text-8xl transition duration-500 ease-in-out hover:text-pink-800"
                    onClick={toggleMenu} // Close menu on click
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#stories"
                    className="text-7xl hover:text-8xl transition duration-500 ease-in-out hover:text-pink-800"
                    onClick={toggleMenu} // Close menu on click
                  >
                    Stories that engage
                  </a>
                </li>
                <li>
                  <a
                    href="#dm"
                    className="text-7xl hover:text-8xl transition duration-500 ease-in-out hover:text-pink-800"
                    onClick={toggleMenu} // Close menu on click
                  >
                    Digital marketing
                  </a>
                </li>
                <li>
                  <a
                    href="#offer"
                    className="text-7xl hover:text-8xl transition duration-500 ease-in-out hover:text-pink-800"
                    onClick={toggleMenu} // Close menu on click
                  >
                    Grab your Special offer
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
