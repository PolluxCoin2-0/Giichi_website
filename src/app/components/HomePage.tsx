import React from "react";
import Button from "../../../src/app/components/Button";
import mainImg1 from "../../../public/assests/mainImg1.png";
import mainImg2 from "../../../public/assests/mainImg2.png";
import mainImg3 from "../../../public/assests/mainImg3.png";
import mainImg4 from "../../../public/assests/mainImg4.png";
import mainImg5 from "../../../public/assests/mainImg5.png";

import Image from "next/image";
const HomePage = () => {
  return (
    <div className="pt-12 lg:pt-28 px-4 md:px-8 lg:px-16 xl:px-48 2xl:px-64 relative w-full ">
      <div
        className="hidden md:block absolute -top-[20%] left-0 w-[0px] md:w-[2500px] h-[0px] md:h-[150px] bg-yellow-gradient blur-3xl rounded-[50%] opacity-60 animate-spotlight-left "
        style={{
          transform: "translate(-50%, -50%) rotate(-130deg)",
        }}
      ></div>

      {/* intro */}
      <div className="flex flex-col md:flex-row w-full items-center animate-blurToVisible">
      <div className="flex flex-col space-y-4 md:space-y-6 lg:space-y-10  ">
        <p className="blocck md:hidden lg:block text-2xl md:text-xl lg:text-5xl xl:text-6xl font-bold md:leading-tight text-white">
          Unlock the potential of <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green to-lightgreen"> WEB3 Industry</span>  with <br />
          expert professional
        </p>

        <p className="hidden md:block lg:hidden text-2xl md:text-3xl lg:text-7xl font-bold md:leading-tight text-white">
          Unleash the power of 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green to-lightgreen"> WEB3 <br /> Industry</span>  with 
          professionals
        </p>
        <p className="text-sm lg:text-lg font-medium text-white w-full md:w-[50%] xl:w-[50%]">
        Step into the future with Giichi IT Solutions – your trusted hub for cutting-edge blockchain expertise and innovation.

        </p>

        <div className="flex flex-row">
          <div>
            <Button buttonText="Let's Talk About Your Project" />
          </div>
           </div>
      </div>

      {/* image */}
      <div className="w-[50%] ">
        <div className="relative z-40"> 
      <Image
              src={mainImg1}
              alt="banner-image"
              width={0}
              height={0}
              style={{ width: "90%" }} // Set default width to 100% for mobile
              className="animate-scaleUp" // Use Tailwind's responsive width utilities
            />
            </div>
            <div className="absolute z-50 top-28 w-[650px]">
               <Image
              src={mainImg2}
              alt="banner-image"
              width={0}
              height={0}
              style={{ width: "90%" }} // Set default width to 100% for mobile
              className="animate-scaleDown" // Use Tailwind's responsive width utilities
            />
            </div>
            <div className="absolute z-50 top-36">
               <Image
              src={mainImg3}
              alt="banner-image"
              width={0}
              height={0}
              style={{ width: "90%" }} // Set default width to 100% for mobile
              className="animate-wave delay-200" // Use Tailwind's responsive width utilities
            />
            </div>
            <div className="absolute z-50 top-60 right-96">
               <Image
              src={mainImg4}
              alt="banner-image"
              width={0}
              height={0}
              style={{ width: "90%" }} // Set default width to 100% for mobile
              className="animate-wave delay-300" // Use Tailwind's responsive width utilities
            />
            </div>
            <div className="absolute z-50 top-72 right-[670px] ">
               <Image
              src={mainImg5}
              alt="banner-image"
              width={0}
              height={0}
              style={{ width: "90%" }} // Set default width to 100% for mobile
              className="animate-wave delay-400" // Use Tailwind's responsive width utilities
            />
            </div>
      </div>
      </div>
    </div>
  );
};

export default HomePage;
