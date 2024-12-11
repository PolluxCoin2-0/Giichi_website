"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import GiichiLogo from "../../../../public/assests/logo-light.png";
import { RiMenu3Line, RiCloseLargeFill } from "react-icons/ri";
import { CgMenuLeft } from "react-icons/cg";
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);
  const [isConsultingMenuOpen, setIsConsultingMenuOpen] = useState(false);
  const [isDefiOpen, setIsDefiOpen] = useState(false);
  const [isNftOpen, setIsNftOpen] = useState(false);
  const [isDappOpen, setIsDappOpen] = useState(false);
  const [isTokenOpen, setIsTokenOpen] = useState(false);
  const [isGamifyOpen, setIsGamifyOpen] = useState(false);
  const [isAiSolutionOpen, setIsAiSolutionOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDefiOpen(false);
        setIsNftOpen(false);
        setIsDappOpen(false);
        setIsTokenOpen(false);
        setIsGamifyOpen(false);
        setIsAiSolutionOpen(false);
      }
    };
  
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsServicesMenuOpen(false);
    setIsConsultingMenuOpen(false);
  };

  const toggleServicesMenu = () => {
    setIsServicesMenuOpen(!isServicesMenuOpen);
  };

  const toggleConsultingMenu = () => {
    setIsConsultingMenuOpen(!isConsultingMenuOpen);
  };

  const toggleDefi = () => setIsDefiOpen((prev) => !prev);
  const toggleNft = () => setIsNftOpen((prev) => !prev);
  const toggleDapp = () => setIsDappOpen((prev) => !prev);
  const toggleToken = () => setIsTokenOpen((prev) => !prev);
  const toggleGamify = () => setIsGamifyOpen((prev) => !prev);
  const toggleAiSolution = () => setIsAiSolutionOpen((prev) => !prev);

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
        className="hidden lg:flex flex-row items-center lg:space-x-10 xl:space-x-28 rounded-full p-4 lg:pl-8 lg:pr-8 xl:pl-32 xl:pr-32"
        style={{
          boxShadow:
            "0 2px 20px rgba(0, 0, 0, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.4)",
        }}
      >
        <Link href="">
          {" "}
          <p className="text-md font-medium text-white text-lg">Work</p>
        </Link>
        <p className="text-md font-medium text-white text-lg">About</p>

        {/* Services Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <p
            className="text-md font-medium text-white text-lg cursor-pointer"
            onClick={toggleServicesMenu}
          >
            Services
          </p>
          {isServicesMenuOpen && (
            <div
              className="absolute top-full left-0 mt-4 bg-black p-6 rounded-xl shadow-lg w-[500px]"
              style={{
                boxShadow:
                  "0 2px 20px rgba(0, 0, 0, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.4)",
              }}
            >
              <div className="flex flex-row space-x-12 space-y-2 w-full">
                <div className="flex flex-row items-center justify-between border-b-[1px] border-white border-opacity-10 w-[50%]">
                  <p className="text-white text-lg">Defi</p>
                  <p
                    className="text-end cursor-pointer"
                    onClick={() => toggleDefi()}
                  >
                    {isDefiOpen === "Defi" ? (
                      <FiMinusCircle color="#ffffff" size={24} />
                    ) : (
                      <FiPlusCircle color="#ffffff" size={24} />
                    )}
                  </p>
                </div>

                {isDefiOpen === "Defi" && (
                  <div className="text-white mt-2">
                    Defi submenu content here
                  </div>
                )}

                <div className="flex flex-row items-center justify-between border-b-[1px] border-white border-opacity-10 w-[50%]">
                  <p className="text-white text-lg">NFT</p>
                  <p
                    className="text-end cursor-pointer"
                    onClick={() => toggleNft()}
                  >
                    {isNftOpen === "NFT" ? (
                      <FiMinusCircle color="#ffffff" size={24} />
                    ) : (
                      <FiPlusCircle color="#ffffff" size={24} />
                    )}
                  </p>
                </div>

                {isNftOpen === "NFT" && (
                  <div className="text-white mt-2">
                    NFT submenu content here
                  </div>
                )}
              </div>

              <div className="flex flex-row space-x-12 space-y-2 w-full mt-4">
                <div className="flex flex-row items-center justify-between border-b-[1px] border-white border-opacity-10 w-[50%]">
                  <p className="text-white text-lg">DApp</p>
                  <p
                    className="text-end cursor-pointer"
                    onClick={() => toggleDapp()}
                  >
                    {isDappOpen === "DApp" ? (
                      <FiMinusCircle color="#ffffff" size={24} />
                    ) : (
                      <FiPlusCircle color="#ffffff" size={24} />
                    )}
                  </p>
                </div>

                {isDappOpen === "DApp" && (
                  <div className="text-white mt-2">
                    DApp submenu content here
                  </div>
                )}

                <div className="flex flex-row items-center justify-between border-b-[1px] border-white border-opacity-10 w-[50%]">
                  <p className="text-white text-lg">Token</p>
                  <p
                    className="text-end cursor-pointer"
                    onClick={() => toggleToken()}
                  >
                    {isTokenOpen === "Token" ? (
                      <FiMinusCircle color="#ffffff" size={24} />
                    ) : (
                      <FiPlusCircle color="#ffffff" size={24} />
                    )}
                  </p>
                </div>

                {isTokenOpen === "Token" && (
                  <div className="text-white mt-2">
                    Token submenu content here
                  </div>
                )}
              </div>

              <div className="flex flex-row space-x-12 space-y-2 w-full mt-4">
                <div className="flex flex-row items-center justify-between border-b-[1px] border-white border-opacity-10 w-[50%]">
                  <p className="text-white text-lg">Gamify</p>
                  <p
                    className="text-end cursor-pointer"
                    onClick={() => toggleGamify()}
                  >
                    {isGamifyOpen === "Gamify" ? (
                      <FiMinusCircle color="#ffffff" size={24} />
                    ) : (
                      <FiPlusCircle color="#ffffff" size={24} />
                    )}
                  </p>
                </div>

                {isGamifyOpen === "Gamify" && (
                  <div className="text-white mt-2">
                    Gamify submenu content here
                  </div>
                )}

                <div className="flex flex-row items-center justify-between border-b-[1px] border-white border-opacity-10 w-[50%]">
                  <p className="text-white text-lg text-nowrap">AI Solution</p>
                  <p
                    className="text-end cursor-pointer"
                    onClick={() => toggleAiSolution()}
                  >
                    {isAiSolutionOpen === "AI Solution" ? (
                      <FiMinusCircle color="#ffffff" size={24} />
                    ) : (
                      <FiPlusCircle color="#ffffff" size={24} />
                    )}
                  </p>
                </div>

                {isAiSolutionOpen === "AI Solution" && (
                  <div className="text-white mt-2">
                    AI Solution submenu content here
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Consulting Dropdown */}
        <div className="relative">
          <p
            className="text-md font-medium text-white text-lg cursor-pointer"
            onClick={toggleConsultingMenu}
          >
            Consulting
          </p>

          {isConsultingMenuOpen && (
            <div
              className="absolute top-full left-0 mt-4 bg-black p-6 rounded-lg shadow-lg"
              style={{
                boxShadow:
                  "0 2px 20px rgba(0, 0, 0, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.4)",
              }}
            >
              <div className="flex flex-col space-y-2">
                <p className="text-white text-lg text-nowrap">
                  Blockchain consulting service
                </p>
                <p className="text-white text-lg text-nowrap">
                  Blockchain security audit
                </p>
                <p className="text-white text-lg text-nowrap">
                  Tokenized RWA Development
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* "Work With Us" Button */}
      <div className="hidden lg:flex flex-row items-center space-x-6 rounded-full p-3 pl-6 pr-4 text-white cursor-pointer">
        <CgMenuLeft size={48} />
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
          className="absolute top-0 left-0 w-full bg-black p-8 lg:hidden z-10"
          style={{
            boxShadow: "0 2px 20px rgba(0, 0, 0, 0.8)",
          }}
        >
          <div className="flex justify-start">
            <Image
              src={GiichiLogo}
              alt="banner-image"
              width={0}
              height={0}
              style={{ width: "30%" }}
              className=""
            />
          </div>
          <div className="flex flex-col items-start space-y-6 mt-8">
            <p className="text-md font-medium text-white text-lg">Work</p>
            <p className="text-md font-medium text-white text-lg">Services</p>
            <p className="text-md font-medium text-white text-lg">Consulting</p>
            <p className="text-md font-medium text-white text-lg">About</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
