"use client";

import React, { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import polinkImg from "../../../public/assests/PolinkLogo.png";
import uviImg from '../../../public/assests/uviLogo.png';
import polluxImg from "../../../public/assests/polluxchain.png";
import sulanaImg from "../../../public/assests/SulanaLogo.svg";
import sulmineImg from "../../../public/assests/sulmineLogo.svg";
import crowdImg from "../../../public/assests/crowdLogo.png";
import polluxBlackImg from "../../../public/assests/polluxlogowhite.png";
import akamaiImg from "../../../public/assests/akamai.png";
import xinfinImg from "../../../public/assests/xinfin.png";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { FiPlusCircle } from "react-icons/fi";
import { FiMinusCircle } from "react-icons/fi";
const data = [
  {
    img: uviImg,
    title: "UviSwap",
    subtitle: "DEX",
    description:
      "UviSwap is a cutting-edge decentralized exchange (DEX) that brings concentrated liquidity to the forefront, offering unparalleled benefits for both users and liquidity providers. By enabling liquidity providers to allocate their funds within specific price ranges, UviSwap reduces slippage and enhances trading efficiency.",
    stack1: "Solidity",
    stack2: "NodeJS",
    stack3: "ReactJS",
    stack4: "Javascript",
    url: "https://uviswap.org/",
  },
  {
    img: polluxImg,
    title: "Polluxchain",
    subtitle: "CHAIN",
    description:
      "PolluxChain is a hybrid Layer 1 blockchain designed to provide scalable, efficient, and decentralized solutions for developers, businesses, and users. It supports advanced features such as concentrated liquidity, seamless DeFi applications, and token interoperability while enabling fast, secure, and low-cost transactions",
    stack1: "NextJS",
    stack2: "ReactJS",
    stack3: "Typescript",
    stack4: "Solidity",
    url: "https://polluxchain.com/",
  },
 {
    img: sulanaImg,
    title: "Sulaana ",
    subtitle: "CRYPTO",
    description:
      "Sulaana is a blockchain-powered platform designed to provide comprehensive solutions for cryptocurrency and blockchain-related information. It offers a decentralized encyclopedia-like experience, enabling users to access, contribute, and govern content through AI-enhanced features like article summarization and community-driven content curation. Sulaana is fueled by the Sulaana (SUL) token, which supports platform governance, incentivization, and engagement within the SulaanaDAO.",
    stack1: "Solidity",
    stack2: "NodeJS",
    stack3: "NextJS",
    stack4: "Typescript",
    url: "https://sulaana.com/"
  },
  {
    img: sulmineImg,
    title: "Sulmine  ",
    subtitle: "MLM",
    description:
      "Sulmine is a specialized mining protocol developed on the Sulaana blockchain, designed to enable efficient and secure mining of digital assets. It leverages advanced blockchain technologies to ensure high performance, scalability, and a seamless mining experience. Sulmine focuses on empowering users to maximize their mining potential while maintaining a secure and transparent ecosystem for cryptocurrency mining.",
      stack1: "Solidity",
      stack2: "NodeJS",
      stack3: "NextJS",
      stack4: "Typescript",
    url: "https://sulmine.sulaana.com/",
  },
  {
    img: crowdImg,
    title: "Crowd 1",
    subtitle: "MLM",
    description:
      "Crowd1 is a decentralized multi-level marketing (MLM) project built on blockchain technology. Users are required to create an ID by setting a minimum token ID, which acts as their unique identifier. Through this setup, users can generate referral income and participate in a reward system based on levels of income,  This approach allows for structured growth and incentivizes community engagement within the platform.",
    stack1: "Solidity",
    stack2: "NodeJS",
    stack3: "ReactJS",
    stack4: "Javascript",
    url: "https://crowd1.club/",
  },
  {
    img: polinkImg,
    title: "Polink",
    subtitle: "DEFI",
    description:
      "A non-custodial wallet designed to securely manage your digital assets while ensuring complete control over your funds. Polink also supports a governance model, allowing users to participate in decision-making within the ecosystem. Experience seamless transactions with PolluxChain's native token and beyond.",
    stack1: "Solidity",
    stack2: "NodeJS",
    stack3: "Kotlin",
    stack4: "Java",
    url: "https://chromewebstore.google.com/detail/polink/afeibjjgfjfphjedhdjgbgbhpomolbjm",
  },
 
];

type CardProps = {
  img: string | StaticImageData;
  title: string;
  subtitle: string;
  description: string;
  stack1: string;
  stack2: string;
  stack3: string;
  stack4: string;
  url: string;
};

const Card: React.FC<CardProps> = ({
  img,
  title,
  subtitle,
  description,
  stack1,
  stack2,
  stack3,
  stack4,
  url
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="w-full md:w-[50%] rounded-2xl py-2 md:py-5 px-2 md:px-4 bg-lightestGreen hover:bg-lightblack font-medium ">
      {/* Wrapper for Title, Subtitle, and Arrow */}
      <div className="flex flex-row items-center justify-between">
        {/* Title and Subtitle */}
        <div className="flex flex-row items-center space-y-2 md:space-y-0 space-x-2 w-full">
          <Image
            src={img}
            alt="banner-image"
            width={0}
            height={0}
            style={{ width: "8%" }} // Set default width to 100% for mobile
            className="rounded-2xl w-full " // Use Tailwind's responsive width utilities
          />

          <p className="text-white text-md md:text-xl font-medium text-nowrap">
            {title}
          </p>
        </div>
        {/* Arrow */}
        <div className="flex justify-end w-full md:w-auto">
          <p className="text-black bg-green-gradient hover:bg-yellow-gradient rounded-md px-4 py-1 flex items-center justify-center mt-2 md:mt-0 font-semibold alegreya-font ">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Description */}
      <div className="flex flex-row">
        <p
          className="text-lightGray text-[15px] md:text-[17px] font-medium leading-snug py-4 w-full transition-all duration-300 alegreya-font"
          style={{
            maxHeight: isExpanded ? "none" : "3.6em", // Adjust height for 2 lines (line-height × 2)
            overflow: "hidden",
          }}
        >
          {description}
        </p>
      </div>

      {/* Toggle "View More" / "View Less" */}
      <div className="flex justify-between items-center">
        <button
          onClick={toggleDescription}
          className="text-orange font-medium leading-snug py-4 text-justify"
        >
          {isExpanded ? (
            <FiMinusCircle size={24} />
          ) : (
            <FiPlusCircle size={24} />
          )}
        </button>
      </div>
      {/* Technology stack */}
      <div className="flex flex-row justify-between items-center">
        <div>
          <p className="text-white text-[15px]">Technology Stack:</p>
          <div className="flex flex-row items-center space-x-1 lg:space-x-4 mt-2">
            <p className="text-lightGray bg-lightblack hover:bg-lightestGreen px-1 md:px-2 py-1 rounded-md text-[12px] lg:text-[15px]">
              {stack1}
            </p>
            <p className="text-lightGray bg-lightblack hover:bg-lightestGreen px-1 md:px-2 py-1 rounded-md text-[12px] lg:text-[15px]">
              {stack2}
            </p>
            <p className="text-lightGray bg-lightblack hover:bg-lightestGreen px-1 md:px-2 py-1 rounded-md text-[12px] lg:text-[15px]">
              {stack3}
            </p>
            <p className="text-lightGray bg-lightblack hover:bg-lightestGreen px-1 md:px-2 py-1 rounded-md text-[12px] lg:text-[15px]">
              {stack4}
            </p>
          </div>
        </div>

        <div className="flex md:justify-end w-full md:w-auto ml-3 lg:ml-0 mt-5 md:mt-6 lg:mt-0">
          <a href={url}>
          <p className="hidden md:block text-black bg-green-gradient hover:bg-yellow-gradient rounded-full p-1 items-center justify-center mt-2 md:mt-0">
            <MdArrowOutward size={24} />
          </p>
          </a>
          
          <a href={url}>
          <p className="flex md:hidden text-black bg-green-gradient rounded-full p-1 items-center justify-center mt-2 md:mt-0">
            <MdArrowOutward size={16} />
          </p>
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div id="work" className="px-4 md:px-8 lg:px-16 xl:px-48 mt-8 lg:mt-12 ">
      <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white md:leading-tight ">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green to-lightgreen">
          Blockchain{" "}
        </span>
        Projects We have Crafted
      </p>

      <div className="flex flex-col space-y-5 mt-6 ">
        {Array.from({ length: 5 }).map((_, rowIndex) => (
          <div
            key={rowIndex}
            className="flex flex-col md:flex-row w-full space-x-0 md:space-x-5 space-y-5 md:space-y-0"
          >
            {data.slice(rowIndex * 2, rowIndex * 2 + 2).map((item, index) => (
              <Card
                key={index}
                img={item.img}
                title={item.title}
                subtitle={item.subtitle}
                description={item.description}
                stack1={item.stack1}
                stack2={item.stack2}
                stack3={item.stack3}
                stack4={item.stack4}
                url={item.url}
              />
            ))}
          </div>
        ))}
      </div>

      <div className="-mt-4">
        <div className="flex flex-col md:flex-row space-x-0 md:space-x-5 space-y-5 md:space-y-0 w-full">
          <div className="rounded-2xl py-5 px-2 md:px-4 bg-lightestGreen hover:bg-lightblack w-full md:w-[33%] flex flex-row justify-center items-center space-x-6">
          <Image
            src={polluxBlackImg}
            alt="banner-image"
            width={0}
            height={0}
            className="w-20" // Use Tailwind's responsive width utilities
          />
          <p className="dancing-font text-lightGray text-2xl md:text-3xl">PolluxChain</p>
          </div>

          <div className="rounded-2xl py-5 px-2 md:px-4 bg-lightestGreen hover:bg-lightblack w-full md:w-[33%] flex flex-row justify-center items-center space-x-6 ">
          <Image
            src={akamaiImg}
            alt="banner-image"
            width={0}
            height={0}
            className="w-10" // Use Tailwind's responsive width utilities
          />
          <p className="dancing-font text-lightGray text-2xl md:text-3xl">Akamai</p>
          </div>
          <div className="rounded-2xl py-5 px-2 md:px-4 bg-lightestGreen hover:bg-lightblack w-full md:w-[33%] flex flex-row justify-center items-center space-x-6 ">
          <Image
            src={xinfinImg}
            alt="banner-image"
            width={0}
            height={0}
            className="w-20" // Use Tailwind's responsive width utilities
          />
          <p className="dancing-font text-lightGray text-2xl md:text-3xl">Xinfin Network</p>
          </div>
         
        </div>

        {/* <div className="flex flex-col md:flex-row space-x-0 md:space-x-5 space-y-5 md:space-y-0 w-full mt-5">
          <p className="rounded-2xl py-10 px-2 md:px-4 bg-lightestGreen w-full md:w-[25%]"></p>
          <p className="rounded-2xl py-10 px-2 md:px-4 bg-lightestGreen w-full md:w-[25%]"></p>
          <p className="rounded-2xl py-10 px-2 md:px-4 bg-lightestGreen w-full md:w-[25%]"></p>
          <p className="rounded-2xl py-10 px-2 md:px-4 bg-lightestGreen w-full md:w-[25%]"></p>
          <p className="rounded-2xl py-10 px-2 md:px-4 bg-lightestGreen w-full md:w-[25%]"></p>
        </div>

        <div className="flex flex-col md:flex-row space-x-0 md:space-x-5 space-y-5 md:space-y-0 w-full mt-5">
          <p className="rounded-2xl py-10 px-2 md:px-4 bg-lightestGreen w-full md:w-[25%]"></p>
          <p className="rounded-2xl py-10 px-2 md:px-4 bg-lightestGreen w-full md:w-[25%]"></p>
          <p className="rounded-2xl py-10 px-2 md:px-4 bg-lightestGreen w-full md:w-[25%]"></p>
          <p className="rounded-2xl py-10 px-2 md:px-4 bg-lightestGreen w-full md:w-[25%]"></p>
        </div> */}
      </div>
    </div>
  );
};

export default Projects;
