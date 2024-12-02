"use client";
import Image from "next/image";
import PortfolioImg from "../../../../public/assests/nft_img.png";
import Button from "../Button";

const ExchangePage = () => {
  return (
    <div className="text-[#ffffff] bg-[#000000] px-2  md:px-0 pt-6 md:pt-10  flex flex-col lg:flex-row items-center space-x-0 lg:space-x-24 justify-between ">
      <div className="w-full lg:w-[50%]">
        <p className="text-xl md:text-2xl lg:text-4xl xl:text-5xl font-bold md:leading-tight">
          We Create Products That Users Love
        </p>
        <p className="text-sm md:text-lg font-normal pt-6">
          Explore Our Award-winning Products Used by Millions Around the World.
        </p>
        <div className="flex justify-center mt-4 md:mt-0">
          <Image
            src={PortfolioImg}
            alt=""
            className="w-[600px] md:w-[500px] lg:w-[600px] text-center"
          />
        </div>
      </div>

      <div className="w-full lg:w-[50%]">
        <p className="text-[#ffffff] text-xl  md:text-4xl lg:text-4xl font-semibold pt-8 ">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green to-lightgreen">
          Crypto Exchange
          </span>
        </p>

        <p className="text-[#ffffff] text-sm md:text-md lg:text-lg lg:text-md xl:text-lg font-normal pt-4 md:pt-8 leading-snug">
         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure reprehenderit neque amet adipisci ullam doloribus soluta maiores sed distinctio temporibus quos, consectetur ipsam est officiis laboriosam, nisi omnis explicabo? Molestias, dolore. Rem aliquid adipisci, sint voluptatum soluta illum ratione maiores?
        </p>

        <div className="flex justify-start mt-4 md:mt-10">
          <Button buttonText="Get Demo" />
        </div>
      </div>
    </div>
  );
};

export default ExchangePage;
