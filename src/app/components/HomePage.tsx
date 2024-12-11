import React from "react";
import Button from "../../../src/app/components/Button";
const HomePage = () => {
  return (
    <div className="pt-12 lg:pt-28 px-4 md:px-8 lg:px-16 xl:px-48 2xl:px-64 relative">
      <div
        className="absolute -top-[10%] left-0 w-[0px] md:w-[2000px] h-[0px] md:h-[120px] bg-yellow-gradient blur-3xl rounded-[50%] opacity-60 animate-spotlight-left"
        style={{
          transform: "translate(-50%, -50%) rotate(-130deg)",
        }}
      ></div>

      {/* intro */}
      <div className="flex flex-col md:flex-row">
      <div className="flex flex-col space-y-4 md:space-y-6 lg:space-y-10 ">
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
      <div></div>
      </div>
    </div>
  );
};

export default HomePage;
