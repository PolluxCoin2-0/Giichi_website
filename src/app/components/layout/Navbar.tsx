"use client";
import React, { useState } from "react";
import Image from "next/image";
import GiichiLogo from "../../../../public/assests/logo-light.png";
import { RiMenu3Line, RiCloseLargeFill } from "react-icons/ri";
import { CgMenuLeft } from "react-icons/cg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-black px-4 md:px-8 lg:px-16 xl:px-48 2xl:px-64 py-4 flex justify-between items-center relative pt-2">
      {/* Logo */}
      <div>
        <Image
          src={GiichiLogo}
          alt="banner-image"
          width={0}
          height={0}
          style={{ width: "70%" }}
          className=""
        />
      </div>

      {/* Desktop Navigation */}
      <div
        className="hidden lg:flex flex-row items-center lg:space-x-10 xl:space-x-16 rounded-full p-4 lg:pl-8 lg:pr-8 xl:pl-20 xl:pr-20"
        style={{
          boxShadow:
            "0 2px 20px rgba(0, 0, 0, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.4)",
        }}
      >
        <p className="text-md font-medium text-white text-lg">Work</p>
        <p className="text-md font-medium text-white text-lg">Services</p>
        <p className="text-md font-medium text-white text-lg">Industry</p>
        <p className="text-md font-medium text-white text-lg">About</p>
      </div>

      {/* "Work With Us" Button */}
      <div
        className="hidden lg:flex flex-row items-center space-x-6 rounded-full p-3 pl-6 pr-4 text-white cursor-pointer">
       <CgMenuLeft size={48}/>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="lg:hidden z-20">
        {isMenuOpen ? (
          <RiCloseLargeFill
            className="text-white text-2xl cursor-pointer"
            onClick={closeMenu}
          />
        ) : (
          <RiMenu3Line
            className="text-white text-2xl cursor-pointer"
            onClick={toggleMenu}
          />
        )}
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        
        <div
          className="absolute top-0 left-0 w-full bg-black p-8  lg:hidden z-10"
          style={{
            boxShadow: "0 2px 20px rgba(0, 0, 0, 0.8)",
          }}
        >
          <div  className="flex justify-start">
           <Image
          src={GiichiLogo}
          alt="banner-image"
          width={0}
          height={0}
          style={{ width: "30%" }}
          className=""
        />
        </div>
          <div className="flex flex-col items-start  space-y-6 mt-8">
          <p className="text-md font-medium text-white text-lg">Work</p>
          <p className="text-md font-medium text-white text-lg">Services</p>
          <p className="text-md font-medium text-white text-lg">Industry</p>
          <p className="text-md font-medium text-white text-lg">About</p>
          {/* <div
            className="flex flex-row items-center space-x-6 border-[1px] rounded-full p-2 pl-6 pr-4"
            style={{
              boxShadow:
                "0 2px 20px rgba(0, 0, 0, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.4)",
            }}
          >
            <p className="text-md font-medium text-white">Contact</p>
            <p className="bg-green-gradient rounded-full p-1">
              <MdOutlineArrowForward size={24} />
            </p>
          </div> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
