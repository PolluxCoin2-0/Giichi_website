import React from "react";
import Button from "../../../src/app/components/Button";
import mainMobileImg from "../../../public/assests/heroImg.svg";
// import ColourSplash from "../components/reusableComp/ColourSplash";
// import ColorTrail from "../components/reusableComp/ColorTrail";
import FloatingAir from "../components/reusableComp/FloatingAir";
// import SmokeEffect from "../components/reusableComp/SmokeEffect";

import Image from "next/image";
const HomePage = () => {
  // const customColors = [
  //   "rgba(153, 204, 0, 0.5)",  // Green with 50% opacity
  //   "rgba(83, 157, 67, 0.5)"   // Another shade of green with 50% opacity
  // ];

  return (
    <div className="pt-12 2xl:pt-28 px-4 md:px-8 lg:px-16 xl:px-48 relative w-full ">
      <div
        className="hidden md:block absolute -top-[20%] left-0 w-[0px] lg:w-[2500px] h-[0px] lg:h-[150px] bg-yellow-gradient blur-3xl rounded-[50%] opacity-60 animate-spotlight-left "
        style={{
          transform: "translate(-50%, -50%) rotate(-130deg)",
        }}
      ></div>
       {/* Color Splash component */}
       <div className="absolute top-0 left-0 w-full h-full z-0">
        <FloatingAir />
      </div>
      

      {/* intro */}
      <div className="relative z-10 flex flex-col md:flex-row w-full items-center justify-between animate-blurToVisible ">
      <div className="w-full md:w-[60%] flex flex-col space-y-4 md:space-y-6 lg:space-y-10  animate-slideInLeft">
        <p className="block md:hidden lg:block text-2xl md:text-xl lg:text-4xl 2xl:text-6xl font-bold md:leading-tight text-white">
          Unlock the potential of <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green to-lightgreen"> WEB3 Industry</span>  with <br />
          expert professional
        </p>

        <p className="hidden md:block lg:hidden text-2xl md:text-3xl lg:text-7xl font-bold md:leading-tight text-white">
        Unlock the potential of <br/> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green to-lightgreen"> WEB3 Industry</span>  with <br />
          expert professional
        </p>
        
        <p className="text-sm lg:text-lg font-medium text-white w-full md:w-[70%] alegreya-font ">
        Step into the future with Giichi IT Solutions – <br/>your trusted hub for cutting-edge blockchain <br/>expertise and innovation.

        </p>

        <div className="flex flex-row">
          <div>
            <Button buttonText="Let's Talk About Your Project" />
          </div>
           </div>
      </div>

       <div className="w-full md:w-[40%] mt-5 animate-slideInRight">
        <div className="flex justify-center items-center md:justify-normal "> 
      <Image
              src={mainMobileImg}
              alt="banner-image"
              width={0}
              height={0}
              style={{ width: "90%" }} // Set default width to 100% for mobile
              className="animate-bounceVertically" // Use Tailwind's responsive width utilities
            />
            </div>
            
      </div>
      </div>
    </div>
  );
};

export default HomePage;
