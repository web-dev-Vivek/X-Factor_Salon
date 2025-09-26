import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // npm install lucide-react

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed w-full text-white p-5 pl-[10vw] pr-[10vw] h-[8vh] bg-white/30 backdrop-blur-md flex justify-between items-center z-50">
      {/* Logo */}
      <div
        className="text-[30px] font-bold"
        style={{ fontFamily: "Bubblegum Sans, cursive" }}
      >
        X-Factor
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex w-[35%] justify-between items-center">
        <div
          className="hover:text-black hover:border-black hover:border-b-2 border-white transform hover:-translate-y-1 transition ease-in-out duration-900 cursor-pointer"
          style={{ fontFamily: "Bubblegum Sans, cursive" }}
        >
          About
        </div>
        <div
          className="hover:text-black hover:border-black hover:border-b-2 border-white transform hover:-translate-y-1 transition ease-in-out duration-900 cursor-pointer"
          style={{ fontFamily: "Bubblegum Sans, cursive" }}
        >
          Location
        </div>
        <div
          className="hover:text-black hover:border-black hover:border-b-2 border-white transform hover:-translate-y-1 transition ease-in-out duration-900 cursor-pointer"
          style={{ fontFamily: "Bubblegum Sans, cursive" }}
        >
          Services
        </div>
        <div
          className="hover:text-black hover:border-black hover:border-b-2 border-white transform hover:-translate-y-1 transition ease-in-out duration-900 cursor-pointer"
          style={{ fontFamily: "Bubblegum Sans, cursive" }}
        >
          Gallery
        </div>
        <div
          className="hover:text-black hover:border-black hover:border-b-2 border-white transform hover:-translate-y-1 transition ease-in-out duration-900 cursor-pointer"
          style={{ fontFamily: "Bubblegum Sans, cursive" }}
        >
          Media
        </div>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden cursor-pointer z-50">
        {isOpen ? (
          <X size={28} onClick={() => setIsOpen(false)} />
        ) : (
          <Menu size={28} onClick={() => setIsOpen(true)} />
        )}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-[8vh] left-0 w-full bg-white/90 backdrop-blur-lg flex flex-col items-center py-5 space-y-4 md:hidden">
          <div
            className="hover:border-b-2 border-black transform hover:-translate-y-1 transition ease-in-out duration-500 cursor-pointer"
            style={{ fontFamily: "Bubblegum Sans, cursive" }}
            onClick={() => setIsOpen(false)}
          >
            About
          </div>
          <div
            className="hover:border-b-2 border-black transform hover:-translate-y-1 transition ease-in-out duration-500 cursor-pointer"
            style={{ fontFamily: "Bubblegum Sans, cursive" }}
            onClick={() => setIsOpen(false)}
          >
            Location
          </div>
          <div
            className="hover:border-b-2 border-black transform hover:-translate-y-1 transition ease-in-out duration-500 cursor-pointer"
            style={{ fontFamily: "Bubblegum Sans, cursive" }}
            onClick={() => setIsOpen(false)}
          >
            Services
          </div>
          <div
            className="hover:border-b-2 border-black transform hover:-translate-y-1 transition ease-in-out duration-500 cursor-pointer"
            style={{ fontFamily: "Bubblegum Sans, cursive" }}
            onClick={() => setIsOpen(false)}
          >
            Gallery
          </div>
          <div
            className="hover:border-b-2 border-black transform hover:-translate-y-1 transition ease-in-out duration-500 cursor-pointer"
            style={{ fontFamily: "Bubblegum Sans, cursive" }}
            onClick={() => setIsOpen(false)}
          >
            Media
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
