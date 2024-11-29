import React from "react";
import Image from "next/image";

import { GiStrikingArrows } from "react-icons/gi";
import serviceLogo from "../../../public/assests/solution_img.png";
// Reusable Feature Component
const FeatureCard = ({ icon, text }) => (
  <div
    className="flex flex-row space-x-3 justify-center items-center p-3 pl-8 pr-8 rounded-md w-[25%] hover:bg-green-gradient transform transition-transform duration-200 hover:scale-105"
    style={{
      boxShadow:
        "0 2px 20px rgba(0, 0, 0, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.4)",
    }}
  >
    <p className="text-green">{icon}</p>
    <p className="text-white text-lg font-medium">{text}</p>
  </div>
);

// Main Services Component
const Services = () => {
  const features = [
    { id: 1, text: "Eliminate Repeat Entry" },
    { id: 2, text: "Simplify Communication" },
    { id: 3, text: "Speed Up Transactions" },
    { id: 4, text: "Structure Data & Docs" },
    { id: 5, text: "Automate Workflows" },
    { id: 5, text: "Automate Workflows" },
    
  ];

  return (
    <div className="mt-32 pb-32 px-64">
      {/* Header Section */}
      <div className="flex flex-col">
        <p className="text-2xl font-bold text-white">OUR SERVICES</p>
        <p className="text-6xl font-bold text-white mt-4 leading-tight">
          Manage Service Delivery <br />
          Across Various
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green to-lightgreen">
            {" "}
            Web3 <br />
            Ecosystem
          </span>
        </p>
        <p className="text-lg font-medium text-white mt-5">
          Giichi has been helping organizations throughout the World to manage
          their <br /> Web3 Industry with our unique approach to technology
          management <br />
          and consultancy solutions.
        </p>
      </div>

      {/* Features Section */}
      <div className="mt-12">
        <div className="flex flex-wrap w-full gap-10">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              icon={<GiStrikingArrows size={20} />}
              text={feature.text}
            />
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div className="mt-24">
        <p className="text-2xl font-bold text-white">OUR CORE SERVICES</p>
        <p className="text-6xl font-bold mt-4 text-white">Tailored to Your  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green to-lightgreen">Needs</span></p>
        
        <div className="flex flex-row items-center w-full mt-16">
          {/* services */}
          <div className="w-[50%]">
            <div className="flex flex-row space-x-4">
              <div className="bg-green-gradient rounded-full w-4"></div>
              <div>
                <p className="text-white text-2xl font-bold  ">Smart Contracts</p>
                <p className="text-white text-md font-medium pt-2">Revolutionizing business with smart contracts. We write all<br/>
                  types of smart contracts including token gen, staking<br/>
                  protocols, DAOs, DEXs, NFTs, yield farms, & more.</p>
              </div>
            </div>

            <div className="flex flex-row space-x-4 mt-12">
              <div className="bg-green-gradient rounded-full w-4"></div>
              <div>
                <p className="text-white text-2xl font-bold  ">DApps</p>
                <p className="text-white text-md font-medium pt-2">Experience the future of decentralized computing. Our Dapps<br/>
                                           empower users with transparency, security, and control. From<br/>
DeFi to NFTs, explore limitless possibilities.</p>
              </div>
            </div>

              <div className="flex flex-row space-x-4 mt-12">
              <div className="bg-green-gradient rounded-full w-4"></div>
              <div>
                <p className="text-white text-2xl font-bold  ">Node As Service</p>
                <p className="text-white text-md font-medium pt-2">Custom nodes and APIs tailored to your needs. Utilize our<br/>
expertise to create scalable, high-performance, and<br/>
secure blockchain infrastructure for your applications</p>
              </div>
            </div>
          </div>
          
          {/* images */}
          <div className="w-[50%]">
          <Image
            src={serviceLogo}
            alt="banner-image"
            width={0}
            height={0}
            style={{ width: "90%" }} // Set default width to 100% for mobile
            className="rounded-2xl w-full md:w-[100%] lg:w-[70%]" // Use Tailwind's responsive width utilities
          />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
