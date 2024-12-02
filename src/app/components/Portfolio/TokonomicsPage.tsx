"use client";
import Image from "next/image";
import PortfolioImg from "../../../../public/assests/nft_img.png";
import Button from "../Button";

const TokonomicsPage = () => {
  return (
    <div className="text-[#ffffff] bg-[#000000] px-2  md:px-0 pt-6 md:pt-10  flex flex-col lg:flex-row items-center space-x-0 lg:space-x-24 justify-between ">
      <div className="w-full lg:w-[50%]">
        <p className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold md:leading-tight">
          We Create Products That Users Love
        </p>
        <p className="text-sm md:text-lg font-normal pt-6">
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
        <p className="text-[#ffffff] text-xl md:text-4xl lg:text-5xl font-semibold pt-8">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green to-lightgreen">
          Tokonomics
          </span>
        </p>

        <p className="text-[#ffffff] text-sm md:text-lg font-normal pt-4 md:pt-8 leading-snug">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptas beatae quos, harum nemo minima aut iusto quo aliquid ipsa eos rem saepe ratione tempore obcaecati expedita error natus facilis ex. Et fugit odit repellat corporis molestiae praesentium minus sed.
        </p>

        <div className="flex justify-start mt-4 md:mt-10">
          <Button buttonText="Get Demo" />
        </div>
      </div>
    </div>
  );
};

export default TokonomicsPage;
