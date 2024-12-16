"use client";
import React from "react";
import Image from "next/image";
import { PiPhoneCallFill } from "react-icons/pi";
import img from "../../../public/assests/solution_img.png";
import CalendlyButton from "./reusableComp/Calendly";
// import GetExpertTalk from "./reusableComp/GetExpertTalk";

const Consultation = () => {
  // const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  // const handleButtonClick = () => {
  //   setIsQuoteOpen(true);
  // };
  // const handleClosePopup = () => {
  //   setIsQuoteOpen(false);
  // };

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-48 mt-12 pb-8">
      <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-12 border-[1px] border-lightblack rounded-2xl p-4 md:p-10 pt-10 w-full">
        <div className="w-full md:w-[60%]">
          <p className="text-2xl md:text-2xl lg:text-4xl xl:text-5xl font-bold text-white md:leading-snug">
            Schedule Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green to-lightgreen">
              Blockchain{" "}
            </span>
            Consultation
          </p>
          <p className="pt-5 text-gray text-sm lg:text-lg alegreya-font ">
          With Giichi, your blockchain ideas evolve into transformative solutions. <br/>
          We focus on precision, innovation, and collaboration to guide your project <br/>from concept to a successful launch.
          </p>

        <div
            style={{
              boxShadow:
                "0 2px 20px rgba(0, 0, 0, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.4) ",
            }}
            className={`inline-flex flex-row items-center space-x-3 md:space-x-6 border-[1px] rounded-full p-3 pl-4 md:pl-10 pr-2 md:pr-4 mt-6
           
             `}
             //  ${isQuoteOpen ? "z-0" : "z-10"}
            // onClick={handleButtonClick}
          ><CalendlyButton/>
            <p className="bg-green-gradient rounded-full p-2">
              <PiPhoneCallFill size={20} />
            </p>
          </div>
        </div>

        {/* {isQuoteOpen && (
          <GetExpertTalk onClose={handleClosePopup} className="z-50" />
        )} */}

        <div className="w-full md:w-[40%] mt-12 md:mt-0">
          <Image src={img} alt="" style={{ width: "100%" }} className="" />
        </div>
      </div>
    </div>
  );
};

export default Consultation;
