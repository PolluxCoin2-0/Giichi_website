import React, { ReactNode } from "react";
import Image from "next/image";
import { GiStrikingArrows } from "react-icons/gi";
import serviceLogo from "../../../public/assests/solution_img.png";
interface FeatureCardProps {
  icon: ReactNode; // Accepts any React node (e.g., icons, JSX elements)
  text: string; // Text should be a string
}

// Reusable Feature Component
const FeatureCard: React.FC<FeatureCardProps> = ({ icon, text }) => (
  <div
    className="flex flex-row space-x-3 justify-center items-center p-3 pl-8 pr-8 rounded-md hover:bg-green-gradient transform transition-transform duration-200 hover:scale-105"
    style={{
      boxShadow:
        "0 2px 20px rgba(0, 0, 0, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.4)",
    }}
  >
    <p className="text-green">{icon}</p>
    <p className="text-white text-sm lg:text-lg font-medium text-nowrap">{text}</p>
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
    <div className="mt-12 md:mt-20 lg:mt-20 xl:mt-40 px-4 md:px-8 lg:px-16 xl:px-48 2xl:px-64">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row ">
        <div className="flex flex-col w-full md:w-[60%]">
          <p className="text-md md:text-lg lg:text-2xl font-bold text-white">
            OUR SERVICES
          </p>
          <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mt-4 md:leading-tight">
            Manage Service Delivery <br />
            Across Various
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green to-lightgreen">
              {" "}
              Web3 <br />
              Ecosystem
            </span>
          </p>
          <p className="block md:hidden lg:block text-sm lg:text-lg font-medium text-white mt-5 w-full xl:w-[80%]">
            Giichi has been helping organizations throughout the World to manage
            their  Web3 Industry with our unique approach to technology
            management 
            and consultancy solutions.
          </p>

          <p className="hidden md:block lg:hidden text-sm lg:text-lg font-medium text-white mt-5">
            Giichi has been helping organizations throughout the World to manage
            their Web3 Industry with our unique approach to technology management 
            and consultancy solutions.
          </p>
        </div>

        {/* Image */}
        <div className="w-full md:w-[40%]"></div>
      </div>

      {/* Features Section */}
      <div className="mt-6 md:mt-12 w-[95%] md:w-[100%] lg:w-[90%] xl:w-[80%] text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-10 w-full">
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
        <p className="text-md md:text-lg lg:text-2xl font-bold text-white">
          OUR CORE SERVICES
        </p>
        <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mt-4 text-white">
          Tailored to Your{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green to-lightgreen">
            Needs
          </span>
        </p>

        <div className="flex flex-col md:flex-row items-center w-full mt-8 xl:mt-16">
          {/* services */}
          <div className="w-full md:w-[70%] lg:w-[50%]">
            <div className="flex flex-row space-x-4">
              <div className="bg-green-gradient rounded-full w-5"></div>
              <div>
                <p className="text-white text-xl xl:text-2xl font-bold  ">
                  Smart Contracts
                </p>
                <p className="text-white text-xs xl:text-lg font-medium pt-2 w-full md:w-[90%] lg:w-[60%] xl:w-[80%]">
                  Revolutionizing business with smart contracts. We write all
                  types of smart contracts including token gen, staking
                  protocols, DAOs, DEXs, NFTs, yield farms, & more.
                </p>
              </div>
            </div>

            <div className="flex flex-row space-x-4 mt-12">
              <div className="bg-green-gradient rounded-full w-5"></div>
              <div>
                <p className="text-white text-xl xl:text-2xl font-bold  ">
                  DApps
                </p>
                <p className="text-white text-xs xl:text-lg font-medium pt-2 w-full md:w-[90%] lg:w-[60%] xl:w-[80%]">
                  Experience the future of decentralized computing. Our Dapps
                  empower users with transparency, security, and control. From
                  DeFi to NFTs, explore limitless possibilities.
                </p>
              </div>
            </div>

            <div className="flex flex-row space-x-4 mt-12">
              <div className="bg-green-gradient rounded-full w-5"></div>
              <div>
                <p className="text-white text-xl xl:text-2xl font-bold  ">
                  Node As Service
                </p>
                <p className="text-white text-xs xl:text-lg font-medium pt-2 w-full md:w-[90%] lg:w-[60%] xl:w-[80%]">
                  Custom nodes and APIs tailored to your needs. Utilize our
                  expertise to create scalable, high-performance, and secure
                  blockchain infrastructure for your applications
                </p>
              </div>
            </div>
          </div>

          {/* images */}
          <div className="w-full md:w-[70%] lg:w-[50%] mt-10 md:mt-0">
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
