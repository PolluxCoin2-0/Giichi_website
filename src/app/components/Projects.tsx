"use client";

import React, { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import polinkImg from "../../../public/assests/PolinkLogo.png";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { FiPlusCircle } from "react-icons/fi";
import { FiMinusCircle } from "react-icons/fi";
const data = [
  {
    img: polinkImg,
    title: "Polink",
    subtitle: "Defi",
    description:
      "Our mission at Rock'n'Block is to pioneer the frontier of DeFi development, creating innovative DeFi solutions that empower businesses worldwide. We are dedicated to driving the evolution of decentralized finance with our DeFi development services, fostering financial inclusivity.",
    stack1: "Solidity",
    stack2: "React",
    stack3: "Flutter",
    stack4: "Javascript",
  },
  {
    img: polinkImg,
    title: "Polink",
    subtitle: "Dex",
    description:
      "Our mission at Rock'n'Block is to pioneer the frontier of DeFi development, creating innovative DeFi solutions that empower businesses worldwide. We are dedicated to driving the evolution of decentralized finance with our DeFi development services, fostering financial inclusivity.",
    stack1: "Solidity",
    stack2: "React",
    stack3: "Flutter",
    stack4: "Javascript",
  },
  {
    img: polinkImg,
    title: "Polink",
    subtitle: "Defi",
    description:
      "Our mission at Rock'n'Block is to pioneer the frontier of DeFi development, creating innovative DeFi solutions that empower businesses worldwide. We are dedicated to driving the evolution of decentralized finance with our DeFi development services, fostering financial inclusivity.",
    stack1: "Solidity",
    stack2: "React",
    stack3: "Flutter",
    stack4: "Javascript",
  },
  {
    img: polinkImg,
    title: "Polink",
    subtitle: "Defi",
    description:
      "Our mission at Rock'n'Block is to pioneer the frontier of DeFi development, creating innovative DeFi solutions that empower businesses worldwide. We are dedicated to driving the evolution of decentralized finance with our DeFi development services, fostering financial inclusivity.",
    stack1: "Solidity",
    stack2: "React",
    stack3: "Flutter",
    stack4: "Javascript",
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
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="w-full md:w-[50%] rounded-2xl py-2 md:py-5 px-2 md:px-4 bg-lightestGreen font-medium">
      {/* Wrapper for Title, Subtitle, and Arrow */}
      <div className="flex flex-row items-center justify-between">
        {/* Title and Subtitle */}
        <div className="flex flex-row items-center space-y-2 md:space-y-0 space-x-2 w-full">
          <Image
            src={img}
            alt="banner-image"
            width={0}
            height={0}
            style={{ width: "10%" }} // Set default width to 100% for mobile
            className="rounded-2xl w-full " // Use Tailwind's responsive width utilities
          />

          <p className="text-white text-lg md:text-xl font-medium text-nowrap">
            {title}
          </p>
        </div>
        {/* Arrow */}
        <div className="flex justify-end w-full md:w-auto">
          <p className="text-black bg-green-gradient rounded-md px-4 py-1 flex items-center justify-center mt-2 md:mt-0 font-semibold">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Description */}
      <div className="flex flex-row">
        <p
          className="text-lightGray text-[15px] font-medium leading-snug py-4 text-justify w-full md:w-[90%] transition-all duration-300"
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
            <p className="text-lightGray bg-lightblack px-2 py-1 rounded-md text-[12px] lg:text-[15px]">
              {stack1}
            </p>
            <p className="text-lightGray bg-lightblack px-2 py-1 rounded-md text-[12px] lg:text-[15px]">
              {stack2}
            </p>
            <p className="text-lightGray bg-lightblack px-2 py-1 rounded-md text-[12px] lg:text-[15px]">
              {stack3}
            </p>
            <p className="text-lightGray bg-lightblack px-2 py-1 rounded-md text-[12px] lg:text-[15px]">
              {stack4}
            </p>
          </div>
        </div>

        <div className="flex md:justify-end w-full md:w-auto ml-3 lg:ml-0 mt-5 md:mt-6 lg:mt-0">
          <p className="hidden md:block text-black bg-green-gradient rounded-full p-1 items-center justify-center mt-2 md:mt-0">
            <MdArrowOutward size={24} />
          </p>

          <p className="flex md:hidden text-black bg-green-gradient rounded-full p-1 items-center justify-center mt-2 md:mt-0">
            <MdArrowOutward size={16} />
          </p>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-48 2xl:px-64 mt-8 lg:mt-12 ">
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
              />
            ))}
          </div>
        ))}
      </div>

      <div className="-mt-10">
        <div className="flex flex-col md:flex-row space-x-0 md:space-x-5 space-y-5 md:space-y-0 w-full">
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
          <p className="rounded-2xl py-10 px-2 md:px-4 bg-lightestGreen w-full md:w-[25%]"></p>
        </div>

        <div className="flex flex-col md:flex-row space-x-0 md:space-x-5 space-y-5 md:space-y-0 w-full mt-5">
          <p className="rounded-2xl py-10 px-2 md:px-4 bg-lightestGreen w-full md:w-[25%]"></p>
          <p className="rounded-2xl py-10 px-2 md:px-4 bg-lightestGreen w-full md:w-[25%]"></p>
          <p className="rounded-2xl py-10 px-2 md:px-4 bg-lightestGreen w-full md:w-[25%]"></p>
          <p className="rounded-2xl py-10 px-2 md:px-4 bg-lightestGreen w-full md:w-[25%]"></p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
