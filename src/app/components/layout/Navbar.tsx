"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import GiichiLogo from "../../../../public/assests/logo-light.png";
import { RiMenu3Line, RiCloseLargeFill } from "react-icons/ri";
import { CgMenuLeft } from "react-icons/cg";
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";
import { CgMenuRight } from "react-icons/cg";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuIconHovered, setIsMenuIconHovered] = useState(false);
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
        setIsServicesMenuOpen(false);
        setIsConsultingMenuOpen(false);
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
    setIsConsultingMenuOpen(false);
  };

  const toggleConsultingMenu = () => {
    setIsConsultingMenuOpen(!isConsultingMenuOpen);
    setIsServicesMenuOpen(false);
  };

  const toggleDefi = () => {
    setIsDefiOpen((prev) => !prev);
  };
  const toggleNft = () => {
    setIsNftOpen((prev) => !prev);
  };
  const toggleDapp = () => {
    setIsDappOpen((prev) => !prev);
  };
  const toggleToken = () => {
    setIsTokenOpen((prev) => !prev);
  };
  const toggleGamify = () => {
    setIsGamifyOpen((prev) => !prev);
  };
  const toggleAiSolution = () => {
    setIsAiSolutionOpen((prev) => !prev);
  };

  return (
    <div className="bg-black px-4 md:px-8 lg:px-16 xl:px-48 py-4 flex justify-between items-center relative pt-2">
      {/* Logo */}
      <div className="hidden md:block">
        <Image
          src={GiichiLogo}
          alt="banner-image"
          width={0}
          height={0}
          style={{ width: "80%" }}
          className=""
        />
      </div>
      <div className="block md:hidden">
        <Image
          src={GiichiLogo}
          alt="banner-image"
          width={0}
          height={0}
          style={{ width: "50%" }}
          className=""
        />
      </div>

      {/* Desktop Navigation */}
      <div
        className="hidden lg:flex flex-row items-center lg:space-x-10 xl:space-x-12 2xl:space-x-16 rounded-full p-4 lg:pl-8 lg:pr-8 xl:pl-12 xl:pr-12 2xl:pl-24 2xl:pr-24"
        style={{
          boxShadow:
            "0 2px 20px rgba(0, 0, 0, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.4)",
        }}
      >
        <Link href="#work">
          {" "}
          <p className="text-md font-medium text-white text-lg hover:text-lightGray cursor-pointer">Work</p>
        </Link>
        <p className="text-md font-medium text-white text-lg hover:text-lightGray cursor-pointer">About</p>

        {/* Services Dropdown */}
        <div className="relative z-40" ref={dropdownRef}>
          <p
            className="text-md font-medium text-white text-lg cursor-pointer hover:text-lightGray"
            onClick={toggleServicesMenu}
            onMouseEnter={toggleServicesMenu}
          >
            Services
          </p>
          {isServicesMenuOpen && (
            <div
              className="absolute top-full left-0 mt-4 bg-black p-6 rounded-xl shadow-lg lg:w-[400px] xl:w-[500px]"
              style={{
                boxShadow:
                  "0 2px 20px rgba(0, 0, 0, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.4)",
              }}
            >
              {/* DEFI & NFT*/}
              <div className="flex flex-row space-x-12 space-y-2 w-full">
                <div className="flex flex-row items-center justify-between relative w-[50%] border-b-[1px] border-white border-opacity-10 group">
                  <p className="text-white text-lg">DeFi</p>
                  <div
                    className="text-end cursor-pointer"
                    onClick={() => toggleDefi()}
                  >
                    <FiPlusCircle color="#ffffff" size={24} />
                  </div>
                  {/* Animated border-bottom*/}
                  <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-white transition-all duration-500 group-hover:w-full"></div>
                </div>
                {isDefiOpen && (
                  <div
                    className="absolute z-50 text-white -top-2 -left-12 mt-4 bg-black lg:p-4 xl:p-6 rounded-xl shadow-lg lg:w-[460px] xl:w-[610px]"
                    style={{
                      boxShadow:
                        "0 2px 20px rgba(0, 0, 0, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.4)",
                    }}
                  >
                    <div className="flex flex-row space-x-4 items-center">
                      <p className="lg:text-lg xl:text-xl font-medium">DeFi</p>
                      <FiMinusCircle
                        color="#ffffff"
                        size={24}
                        onClick={() => toggleDefi()}
                      />
                    </div>
                    <div className="flex flex-row lg:space-x-6 xl:space-x-12 lg:mt-4 xl:mt-6">
                      <div className="lg:space-y-2 xl:space-y-4">
                        <p className="lg:text-[12px] xl:text-[15px] text-nowrap font-medium hover:text-lightGray ">
                          DeFi Development Services
                        </p>
                        <p className="lg:text-[12px] xl:text-[15px] text-nowrap font-medium hover:text-lightGray">
                          Crypto Trading Bot Development
                        </p>
                        <p className="lg:text-[12px] xl:text-[15px] text-nowrap font-medium hover:text-lightGray">
                          DeFi Yeild Farming Development
                        </p>
                        <p className="lg:text-[12px] xl:text-[15px] text-nowrap font-medium hover:text-lightGray">
                          Token Staking Development
                        </p>
                        <p className="lg:text-[12px] xl:text-[15px] text-nowrap font-medium hover:text-lightGray">
                          Crypto LaunchPad Development
                        </p>
                        <p className="lg:text-[12px] xl:text-[15px] text-nowrap font-medium hover:text-lightGray">
                          DeFi Smart Contract Development{" "}
                        </p>
                      </div>

                      <div className="lg:space-y-2 xl:space-y-4">
                        <p className="lg:text-[12px] xl:text-[15px] text-nowrap font-medium hover:text-lightGray">
                          Decentralized Exchange Development
                        </p>
                        <p className="lg:text-[12px] xl:text-[15px] text-nowrap font-medium hover:text-lightGray">
                          Concentrated Liquidity DEX Development
                        </p>
                        <p className="lg:text-[12px] xl:text-[15px] text-nowrap font-medium hover:text-lightGray">
                          Perpetual DEX Development
                        </p>
                        <p className="lg:text-[12px] xl:text-[15px] text-nowrap font-medium hover:text-lightGray">
                          Cross Chain Bridge Development
                        </p>
                        <p className="lg:text-[12px] xl:text-[15px] text-nowrap font-medium hover:text-lightGray">
                          Crypto Tools Development
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex flex-row items-center justify-between relative border-b-[1px] border-white border-opacity-10 w-[50%] group">
                  <p className="text-white text-lg">NFT</p>
                  <div
                    className="text-end cursor-pointer"
                    onClick={() => toggleNft()}
                  >
                    {" "}
                    <FiPlusCircle color="#ffffff" size={24} />
                  </div>
                  {/* Animated border-bottom*/}
                  <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-white transition-all duration-500 group-hover:w-full"></div>
                </div>
                {isNftOpen && (
                  <div
                    className="absolute z-50 text-white -top-2 -left-12 mt-4 bg-black lg:p-4 xl:p-6 rounded-xl shadow-lg lg:w-[430px] xl:w-[550px] lg:h-48 xl:h-auto"
                    style={{
                      boxShadow:
                        "0 2px 20px rgba(0, 0, 0, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.4)",
                    }}
                  >
                    <div className="flex flex-row space-x-4 items-center">
                      <p className="lg:text-lg xl:text-xl font-medium">NFT</p>
                      <FiMinusCircle
                        color="#ffffff"
                        size={24}
                        onClick={() => toggleNft()}
                      />
                    </div>
                    <div className="flex flex-row lg:space-x-6 xl:space-x-12 mt-6">
                      <div className="lg:space-y-2 xl:space-y-4">
                        <p className="lg:text-[12px] xl:text-[15px] text-nowrap font-medium hover:text-lightGray">
                          NFT Project Development
                        </p>
                        <p className="lg:text-[12px] xl:text-[15px] text-nowrap font-medium hover:text-lightGray">
                          NFT Marketplace Development
                        </p>
                        <p className="lg:text-[12px] xl:text-[15px] text-nowrap font-medium hover:text-lightGray">
                          Blockchain Game Development
                        </p>
                      </div>
                      <div className="lg:space-y-2 xl:space-y-4">
                        <p className="lg:text-[12px] xl:text-[15px] text-nowrap font-medium hover:text-lightGray">
                          Metaverse App Development
                        </p>
                        <p className="lg:text-[12px] xl:text-[15px] text-nowrap font-medium hover:text-lightGray">
                          NFT Smart Contract Development
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* DAPP & TOKEN */}
              <div className="flex flex-row space-x-12 space-y-2 w-full mt-4">
                <div className="flex flex-row items-center justify-between border-b-[1px] border-white border-opacity-10 relative group w-[50%]">
                  <p className="text-white text-lg">DApp</p>
                  <p
                    className="text-end cursor-pointer"
                    onClick={() => toggleDapp()}
                  >
                    <FiPlusCircle color="#ffffff" size={24} />
                  </p>
                  {/* Animated border-bottom*/}
                  <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-white transition-all duration-500 group-hover:w-full"></div>
                </div>

                {isDappOpen && (
                  <div
                    className="absolute z-50 text-white -top-2 -left-12 mt-4 bg-black lg:p-4 xl:p-6 rounded-xl shadow-lg lg:w-[460px] xl:w-[580px]"
                    style={{
                      boxShadow:
                        "0 2px 20px rgba(0, 0, 0, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.4)",
                    }}
                  >
                    <div className="flex flex-row space-x-4 items-center">
                      <p className="lg:text-lg xl:text-2xl font-semibold">
                        DApp
                      </p>
                      <FiMinusCircle
                        color="#ffffff"
                        size={24}
                        onClick={() => toggleDapp()}
                      />
                    </div>
                    <div className="flex flex-row lg:space-x-6 xl:space-x-12 mt-6">
                      <div className="lg:space-y-2 xl:space-y-4">
                        <p className=" lg:text-[12px] xl:text-[15px] text-nowrap font-medium hover:text-lightGray">
                          DApp Development Services
                        </p>
                        <p className="lg:text-[12px] xl:text-[15px] text-nowrap font-medium hover:text-lightGray">
                          Decentralized Exchange Development
                        </p>
                        <p className="lg:text-[12px] xl:text-[15px] text-nowrap font-medium hover:text-lightGray">
                          Blockchain Game Development
                        </p>
                        <p className="lg:text-[12px] xl:text-[15px] text-nowrap font-medium hover:text-lightGray">
                          Cross Chain Bridge Development
                        </p>
                        <p className="lg:text-[12px] xl:text-[15px] text-nowrap font-medium hover:text-lightGray">
                          Crypto Launchpad Development
                        </p>
                      </div>
                      <div className="lg:space-y-2 xl:space-y-4">
                        <p className="lg:text-[12px] xl:text-[15px] text-nowrap font-medium hover:text-lightGray">
                          Smart Contract Development
                        </p>
                        <p className="lg:text-[12px] xl:text-[15px] text-nowrap font-medium hover:text-lightGray">
                          Cryptocurrency Wallet Development
                        </p>
                        <p className="lg:text-[12px] xl:text-[15px] text-nowrap font-medium hover:text-lightGray">
                          Web3 Development Services
                        </p>
                        <p className="lg:text-[12px] xl:text-[15px] text-nowrap font-medium hover:text-lightGray">
                          DAO Development Services
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex flex-row items-center justify-between border-b-[1px] border-white border-opacity-10 relative group w-[50%]">
                  <p className="text-white text-lg">Token</p>
                  <p
                    className="text-end cursor-pointer"
                    onClick={() => toggleToken()}
                  >
                    <FiPlusCircle color="#ffffff" size={24} />
                  </p>
                  {/* Animated border-bottom*/}
                  <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-white transition-all duration-500 group-hover:w-full"></div>
                </div>

                {isTokenOpen && (
                  <div
                    className="absolute z-50 text-white -top-2 -left-12 mt-4 bg-black  lg:p-4 xl:p-6 rounded-xl shadow-lg lg:w-[430px] xl:w-[550px]"
                    style={{
                      boxShadow:
                        "0 2px 20px rgba(0, 0, 0, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.4)",
                    }}
                  >
                    <div className="flex flex-row space-x-4 items-center">
                      <p className="lg:text-lg xl:text-2xl font-semibold">
                        Token
                      </p>
                      <FiMinusCircle
                        color="#ffffff"
                        size={24}
                        onClick={() => toggleToken()}
                      />
                    </div>
                    <div className="flex flex-row space-x-12 mt-6">
                      <div className="space-y-4">
                        <p className="lg:text-[12px] xl:text-[15px] text-nowrap font-medium hover:text-lightGray">
                          Token Sale Development
                        </p>
                        <p className="lg:text-[12px] xl:text-[15px] text-nowrap font-medium hover:text-lightGray">
                          Token Development
                        </p>
                        <p className="lg:text-[12px] xl:text-[15px] text-nowrap font-medium hover:text-lightGray">
                          Token Vesting Development
                        </p>
                        <p className="lg:text-[12px] xl:text-[15px] text-nowrap font-medium hover:text-lightGray">
                          Token Staking Development
                        </p>
                      </div>
                      <div className="space-y-4">
                        <p className="lg:text-[12px] xl:text-[15px] text-nowrap font-medium hover:text-lightGray">
                          Cross Chain Bridge Development
                        </p>
                        <p className="lg:text-[12px] xl:text-[15px] text-nowrap font-medium hover:text-lightGray">
                          Assets Tokenization
                        </p>
                        <p className="lg:text-[12px] xl:text-[15px] text-nowrap font-medium hover:text-lightGray">
                          Smart Contract Development
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* GAMIFY & AI SOLUTION */}
              <div className="flex flex-row space-x-12 space-y-2 w-full mt-4">
                <div className="flex flex-row items-center justify-between border-b-[1px] border-white border-opacity-10 relative group w-[50%]">
                  <p className="text-white text-lg">Gamify</p>
                  <p
                    className="text-end cursor-pointer"
                    onClick={() => toggleGamify()}
                  >
                    {isGamifyOpen ? (
                      <FiMinusCircle color="#ffffff" size={24} />
                    ) : (
                      <FiPlusCircle color="#ffffff" size={24} />
                    )}
                  </p>
                  {/* Animated border-bottom*/}
                  <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-white transition-all duration-500 group-hover:w-full"></div>
                </div>

                {/* {isGamifyOpen && (
                  <div className="text-white mt-2">
                   
                  </div>
                )} */}

                <div className="flex flex-row items-center justify-between border-b-[1px] border-white border-opacity-10 relative group w-[50%]">
                  <p className="text-white text-lg text-nowrap">AI Solution</p>
                  <p
                    className="text-end cursor-pointer"
                    onClick={() => toggleAiSolution()}
                  >
                    {isAiSolutionOpen ? (
                      <FiMinusCircle color="#ffffff" size={24} />
                    ) : (
                      <FiPlusCircle color="#ffffff" size={24} />
                    )}
                  </p>
                  {/* Animated border-bottom*/}
                  <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-white transition-all duration-500 group-hover:w-full"></div>
                </div>

                {/* {isAiSolutionOpen && (
                  <div className="text-white mt-2">
                  
                  </div>
                )} */}
              </div>
            </div>
          )}
        </div>

        {/* Consulting Dropdown */}
        <div className="relative">
          <p
            className="text-md font-medium text-white text-lg cursor-pointer hover:text-lightGray"
            onClick={toggleConsultingMenu}
            onMouseEnter={toggleConsultingMenu}
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
                <p className="text-white lg:text-lg font-medium hover:text-lightGray cursor-pointer text-nowrap">
                  Blockchain consulting service
                </p>
                <p className="text-white lg:text-lg font-medium hover:text-lightGray cursor-pointer text-nowrap">
                  Blockchain security audit
                </p>
                <p className="text-white lg:text-lg font-medium hover:text-lightGray cursor-pointer text-nowrap">
                  Tokenized RWA Development
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* "Work With Us" Button */}
      <div className="hidden lg:flex flex-row items-center space-x-6 rounded-full p-3 pl-6 pr-4 text-white cursor-pointer"
      onMouseEnter={() => setIsMenuIconHovered(true)}
      onMouseLeave={() => setIsMenuIconHovered(false)}>
        <div className="icon-container">
      {isMenuIconHovered ? <CgMenuRight size={48} /> : <CgMenuLeft size={48} />}
      </div>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="lg:hidden z-20">
        {isMenuOpen ? (
          <RiCloseLargeFill
            className="text-white text-2xl cursor-pointer mt-5"
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
          className="absolute top-0 left-0 w-full bg-black p-8 lg:hidden z-10 min-h-screen"
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
            <div className="relative z-40" ref={dropdownRef}>
              <p
                className="text-md font-medium text-white text-lg cursor-pointer"
                onClick={toggleServicesMenu}
              >
                Services
              </p>
              
              {isServicesMenuOpen && (
              <div className="space-y-4 mt-4">
                {/* DEFI */}
                <div className="flex flex-row items-center justify-between relative w-[270px] border-b-[1px] border-white border-opacity-10 group pb-1">
                  <p className="text-white text-[15px] font-medium ">DeFi</p>
                  <div
                    className="text-end cursor-pointer"
                    onClick={() => toggleDefi()}
                  >
                    {isDefiOpen ? (
                      <FiMinusCircle color="#ffffff" size={20} />
                    ) : (
                      <FiPlusCircle color="#ffffff" size={20} />
                    )}
                  </div>
                  {/* Animated border-bottom*/}
                  <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-white transition-all duration-500 group-hover:w-full"></div>
                </div>
                {isDefiOpen && (
                  <div className=" text-white -top-2 -left-12 mt-4 bg-black rounded-xl shadow-lg w-[610px]">
                    <div className="w-full space-y-2">
                      <p className="text-sm font-medium text-lightGray">
                        DeFi Development Services
                      </p>
                      <p className="text-sm font-medium text-lightGray">
                        Crypto Trading Bot Development
                      </p>
                      <p className="text-sm font-medium text-lightGray">
                        DeFi Yeild Farming Development
                      </p>
                      <p className="text-sm font-medium text-lightGray">
                        Token Staking Development
                      </p>
                      <p className="text-sm font-medium text-lightGray">
                        Crypto LaunchPad Development
                      </p>
                      <p className="text-sm font-medium text-lightGray">
                        DeFi Smart Contract Development{" "}
                      </p>

                      <p className="text-sm font-medium text-lightGray">
                        Decentralized Exchange Development
                      </p>
                      <p className="text-sm font-medium text-lightGray">
                        Concentrated Liquidity DEX Development
                      </p>
                      <p className="text-sm font-medium text-lightGray">
                        Perpetual DEX Development
                      </p>
                      <p className="text-sm font-medium text-lightGray">
                        Cross Chain Bridge Development
                      </p>
                      <p className="text-sm font-medium text-lightGray">
                        Crypto Tools Development
                      </p>
                    </div>
                  </div>
                )}
                {/* NFT*/}
                <div className="flex flex-row items-center justify-between relative border-b-[1px] border-white border-opacity-10 w-[270px] group">
                  <p className="text-white text-sm">NFT</p>
                  <div
                    className="text-end cursor-pointer"
                    onClick={() => toggleNft()}
                  >
                    {isNftOpen ? (
                      <FiMinusCircle color="#ffffff" size={20} />
                    ) : (
                      <FiPlusCircle color="#ffffff" size={20} />
                    )}
                  </div>
                  {/* Animated border-bottom*/}
                  <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-white transition-all duration-500 group-hover:w-full"></div>
                </div>
                {isNftOpen && (
                  <div className=" text-white -top-2 -left-12 mt-4 bg-black rounded-xl shadow-lg w-[610px]">
                    <div className="w-[270px] space-y-2">
                      <p className="text-sm font-medium text-lightGray">
                        NFT Project Development
                      </p>
                      <p className="text-sm font-medium text-lightGray">
                        NFT Marketplace Development
                      </p>
                      <p className="text-sm font-medium text-lightGray">
                        Blockchain Game Development
                      </p>
                      <p className="text-sm font-medium text-lightGray">
                        Metaverse App Development
                      </p>
                      <p className="text-sm font-medium text-lightGray">
                        NFT Smart Contract Development
                      </p>
                    </div>
                  </div>
                )}

                {/* DAPP */}
                <div className="flex flex-row items-center justify-between border-b-[1px] border-white border-opacity-10 relative group w-[270px]">
                  <p className="text-white text-sm">DApp</p>
                  <p
                    className="text-end cursor-pointer"
                    onClick={() => toggleDapp()}
                  >
                    {isDappOpen ? (
                      <FiMinusCircle color="#ffffff" size={20} />
                    ) : (
                      <FiPlusCircle color="#ffffff" size={20} />
                    )}
                  </p>
                  {/* Animated border-bottom*/}
                  <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-white transition-all duration-500 group-hover:w-full"></div>
                </div>
                {isDappOpen && (
                  <div className=" text-white -top-2 -left-12 mt-4 bg-black rounded-xl shadow-lg w-[610px]">
                    <div className="w-[270px] space-y-2">
                      <p className="text-sm font-medium text-lightGray">
                        DApp Development Services
                      </p>
                      <p className="text-sm font-medium text-lightGray">
                        Decentralized Exchange Development
                      </p>
                      <p className="text-sm font-medium text-lightGray">
                        Blockchain Game Development
                      </p>
                      <p className="text-sm font-medium text-lightGray">
                        Cross Chain Bridge Development
                      </p>
                      <p className="text-sm font-medium text-lightGray">
                        Crypto Launchpad Development
                      </p>
                      <p className="text-sm font-medium text-lightGray">
                        Smart Contract Development
                      </p>
                      <p className="text-sm font-medium text-lightGray">
                        Cryptocurrency Wallet Development
                      </p>
                      <p className="text-sm font-medium text-lightGray">
                        Web3 Development Services
                      </p>
                      <p className="text-sm font-medium text-lightGray">
                        DAO Development Services
                      </p>
                    </div>
                  </div>
                )}
                {/* TOKEN */}
                <div className="flex flex-row items-center justify-between border-b-[1px] border-white border-opacity-10 relative group w-[270px]">
                  <p className="text-white text-sm">Token</p>
                  <p
                    className="text-end cursor-pointer"
                    onClick={() => toggleToken()}
                  >
                    {isTokenOpen ? (
                      <FiMinusCircle color="#ffffff" size={20} />
                    ) : (
                      <FiPlusCircle color="#ffffff" size={20} />
                    )}
                  </p>
                  {/* Animated border-bottom*/}
                  <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-white transition-all duration-500 group-hover:w-full"></div>
                </div>
                {isTokenOpen && (
                  <div className=" text-white -top-2 -left-12 mt-4 bg-black rounded-xl shadow-lg w-[610px]">
                    <div className="w-[270px] space-y-2">
                      <p className="text-sm font-medium text-lightGray">
                        Token Sale Development
                      </p>
                      <p className="text-sm font-medium text-lightGray">
                        Token Development
                      </p>
                      <p className="text-sm font-medium text-lightGray">
                        Token Vesting Development
                      </p>
                      <p className="text-sm font-medium text-lightGray">
                        Token Staking Development
                      </p>
                      <p className="text-sm font-medium text-lightGray">
                        Cross Chain Bridge Development
                      </p>
                      <p className="text-sm font-medium text-lightGray">
                        Assets Tokenization
                      </p>
                      <p className="text-sm font-medium text-lightGray">
                        Smart Contract Development
                      </p>
                    </div>
                  </div>
                )}

                {/* GAMIFY */}
                <div className="flex flex-row items-center justify-between border-b-[1px] border-white border-opacity-10 relative group w-[270px]">
                  <p className="text-white text-sm">Gamify</p>
                  <p
                    className="text-end cursor-pointer"
                    onClick={() => toggleGamify()}
                  >
                    {isGamifyOpen ? (
                      <FiMinusCircle color="#ffffff" size={20} />
                    ) : (
                      <FiPlusCircle color="#ffffff" size={20} />
                    )}
                  </p>
                  {/* Animated border-bottom*/}
                  <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-white transition-all duration-500 group-hover:w-full"></div>
                </div>
                {/* AI SOLUTION */}
                <div className="flex flex-row items-center justify-between border-b-[1px] border-white border-opacity-10 relative group w-[270px]">
                  <p className="text-white text-sm text-nowrap">AI Solution</p>
                  <p
                    className="text-end cursor-pointer"
                    onClick={() => toggleAiSolution()}
                  >
                    {isAiSolutionOpen ? (
                      <FiMinusCircle color="#ffffff" size={20} />
                    ) : (
                      <FiPlusCircle color="#ffffff" size={20} />
                    )}
                  </p>
                  {/* Animated border-bottom*/}
                  <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-white transition-all duration-500 group-hover:w-full"></div>
                </div>

                <div></div>
              </div>
              )}
            </div>

            <div className="relative"  >
            <p className="text-md font-medium text-white text-lg cursor-pointer" 
            onClick={toggleConsultingMenu}>Consulting
            </p>
            {isConsultingMenuOpen && (
            <div
              className="left-0 mt-4 bg-black p-0 rounded-lg shadow-lg">
              <div className="flex flex-col space-y-2">
                <p className="text-white text-[15px] hover:text-lightGray text-nowrap">
                  Blockchain consulting service
                </p>
                <p className="text-white text-[15px] hover:text-lightGray text-nowrap">
                  Blockchain security audit
                </p>
                <p className="text-white text-[15px] hover:text-lightGray text-nowrap">
                  Tokenized RWA Development
                </p>
              </div>
            </div>
          )}
            </div>
            <p className="text-md font-medium text-white text-lg">About</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
