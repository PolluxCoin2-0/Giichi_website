import Image from "next/image";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import GiichiLightLogo from "../../../../public/assests/logo1.png";
import { HiHomeModern } from "react-icons/hi2";

const Footer = () => {
  return (
    <div className="bg-black pb-12 border-2 ">
      <div className="flex flex-col md:flex-row justify-start md:space-x-8 md:justify-around px-4 md:px-8 lg:px-16 xl:px-48 pt-10 pb-10 border-b-[1px] border-[#7c7c7c]">
        <div className="">
          <p className=" text-transparent bg-clip-text bg-gradient-to-r from-green to-lightgreen text-2xl md:text-lg lg:text-2xl  font-bold pb-0 md:pb-4">
            Company
          </p>
          <p className="text-md md:text-sm lg:text-lg font-semibold text-[#ffffff] pt-4">
            About
          </p>
          <p className="text-md md:text-sm lg:text-lg font-semibold text-[#ffffff] pt-4">
            Blog
          </p>
          <p className="text-md md:text-sm lg:text-lg font-semibold text-[#ffffff] pt-4">
            Portfolio
          </p>
          <p className="text-md md:text-sm lg:text-lg font-semibold text-[#ffffff] pt-4">
            Insights
          </p>
          <p className="text-md md:text-sm lg:text-lg font-semibold text-[#ffffff] pt-4">
            Terms & Services
          </p>
          <p className="text-md md:text-sm lg:text-lg font-semibold text-[#ffffff] pt-4">
            Privacy Policy
          </p>
          
        </div>

        <div className="mt-8 md:mt-0">
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-green to-lightgreen text-2xl md:text-lg lg:text-2xl font-bold pb-0 md:pb-4">
            Services
          </p>
          <p className="text-md md:text-sm lg:text-lg font-semibold text-[#ffffff] pt-4">
            DApps
          </p>
          <p className="text-md md:text-sm lg:text-lg font-semibold text-[#ffffff] pt-4">
            Node As Service
          </p>
          <p className="text-md md:text-sm lg:text-lg font-semibold text-[#ffffff] pt-4">
            Smart Contract
          </p>
          
        </div>

        <div className="mt-8 md:mt-0">
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-green to-lightgreen text-2xl md:text-lg lg:text-2xl font-bold pb-0 md:pb-4">
            Solution
          </p>
          <p className="text-md md:text-sm lg:text-lg font-semibold text-[#ffffff] pt-4">
            Web3
          </p>
          <p className="text-md md:text-sm lg:text-lg font-semibold text-[#ffffff] pt-4">
            NFT
          </p>
          <p className="text-md md:text-sm lg:text-lg font-semibold text-[#ffffff] pt-4">
            DeFi
          </p>
          <p className="text-md md:text-sm lg:text-lg font-semibold text-[#ffffff] pt-4">
            DAO
          </p>
       
        </div>

        <div className="mt-8 md:mt-0">
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-green to-lightgreen text-2xl md:text-lg lg:text-2xl font-bold  pb-0 md:pb-4">
            Products
          </p>
          <p className="text-md md:text-sm lg:text-lg font-semibold text-[#ffffff] pt-4">
            Crypto Exchange
          </p>
          <p className="text-md md:text-sm lg:text-lg font-semibold text-[#ffffff] pt-4">
            Crypto Wallet
          </p>
          <p className="text-md md:text-sm lg:text-lg font-semibold text-[#ffffff] pt-4">
            NFT Marketplace
          </p>
          <p className="text-md md:text-sm lg:text-lg font-semibold text-[#ffffff] pt-4">
            Launchpad
          </p>
        </div>

        <div className="mt-8 md:mt-0">
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-green to-lightgreen text-2xl md:text-lg lg:text-2xl font-bold  pb-0 md:pb-4">
            Social Media
          </p>
          <p className="text-md md:text-lg font-semibold text-[#ffffff] pt-4">
            Follow Us On Social Media
          </p>
          <div className="flex flex-row justify-between space-x-0 md:space-x-5 pt-6">
            <a href="https://x.com/GiichiPvt?t=7FutgqPG6G_2umfDR53SgQ&s=09" target="_blank">
            <p className="bg-green-gradient px-3 py-3 rounded-full animated-icon cursor-pointer">
              <FaXTwitter size={24} />
            </p>
            </a>

            <a href="https://www.linkedin.com/company/giichi-it-solution/" target="_blank">
            <p className="bg-green-gradient px-3 py-3 rounded-full animated-icon cursor-pointer">
              <FaLinkedinIn size={24} />
            </p>
            </a>

            <a  href="https://www.instagram.com/giichi_it_solutions?igsh=MWhhY3RpMmtpeHBveA==" target="_blank">
            <p className="bg-green-gradient px-3 py-3 rounded-full animated-icon cursor-pointer">
              <ImInstagram size={24} />
            </p>
            </a>
            
            <a  href="" target="_blank">
            <p className="bg-green-gradient px-3 py-3 rounded-full animated-icon cursor-pointer">
              <FaTelegramPlane size={24} />
            </p>
            </a>
          </div>

          <p className="text-[#ffffff] text-md md:text-lg font-bold pt-7">
            Business Enquiry: +91 9252552665
          </p>
          {/* <p className="text-[#ffffff] text-md md:text-lg x font-bold pt-6">
            For Job: +91 93614 23585
          </p> */}
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:space-x-10 justify-between px-4 md:px-8 lg:px-16 xl:px-48 2xl:px-64 pt-10">
        <div>
          <Image src={GiichiLightLogo} alt="" className="" />
          <p className="pt-5 text-[#ffffff] text-xs  font-semibold">
            Giichi Solutions & Pvt Ltd is a software development <br />
            company in India that provides mobile app <br />
            development, custom software development <br />
            and digital marketing services.
          </p>
        </div>

        <div>
          <div className="flex flex-row space-x-4 items-center mt-6 md:mt-0">
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-green to-lightgreen text-2xl md:text-3xl font-bold ">
              Visit Us{" "}
            </p>
            <p className="text-green">
              <HiHomeModern size={40} />
            </p>
          </div>

          <p className="pt-5 text-[#ffffff] text-xs  font-semibold mr-12">
            Giichi IT Solution Pvt Ltd <br /> Sushma Infinium, 4/64 <br />{" "}
            Zirakpur, Gazipur, Punjab, 140603
          </p>
        </div>
      </div>

      <div className="text-center mt-10 md:mt-16 text-[#ffffff] text-sm md:text-lg font-medium px-6 md:px-0 ">
        Copyright © 2024 Giichi IT Solution & Private Limited. All Rights
        Reserved.
      </div>
    </div>
  );
};

export default Footer;
