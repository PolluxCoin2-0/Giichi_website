"use client";
import Image from "next/image";
import PortfolioImg from "../../../../public/assests/nft_img.png";
import Button from "../Button";

const LaunchpadPage = () => {
  return (
    <div className="text-[#ffffff] bg-[#000000] px-2  md:px-0 pt-6 lg:pt-10  flex flex-col lg:flex-row items-center space-x-0 lg:space-x-24 justify-between ">
      <div className="w-full lg:w-[50%]">
        <p className="text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-bold md:leading-tight">
          We Create Products That Users Love
        </p>
        <p className="text-sm lg:text-lg font-normal pt-4 lg:pt-6">
          Get a Glimpse of our Dynamic Portfolio, illustrating our
          Record-breaking Products.
        </p>
        <div className="flex justify-center">
          <Image
            src={PortfolioImg}
            alt=""
            className="w-[600px] md:w-[500px] lg:w-[600px] text-center"
          />
        </div>
      </div>

      <div className="w-full lg:w-[50%]">
        <p className="text-[#ffffff] text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold pt-8">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green to-lightgreen">
          Launchpad
          </span>
        </p>

        <p className="text-[#ffffff] text-sm lg:text-lg font-normal pt-4 lg:pt-8 leading-snug">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem officiis excepturi reiciendis? Culpa nemo reiciendis quisquam possimus accusamus obcaecati sint expedita? Sint, nulla fugit nisi illo possimus libero dolores nam odio saepe impedit maiores quos vero alias veritatis? Id, quis.
        </p>

        <div className="flex justify-start mt-4 md:mt-6 lg:mt-10">
          <Button buttonText="Get Demo" />
        </div>
      </div>
    </div>
  );
};

export default LaunchpadPage;
