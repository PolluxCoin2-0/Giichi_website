import React from "react";
import Button from "../../../src/app/components/Button";

const HomePage = () => {
  return (
    <div className="pt-28 relative">
      <div
        className="absolute top-[22%] left-0 w-[1400px] h-[120px] bg-yellow-gradient blur-3xl rounded-[50%] opacity-60 animate-spotlight-left"
        style={{
          transform: "translate(-50%, -50%) rotate(-130deg)",
        }}
      ></div>

      {/* intro */}
      <div className="flex flex-col space-y-10 ">
        <p className="text-7xl font-bold leading-tight text-white">
          Unleash the power of <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green to-lightgreen"> WEB3 Industry</span>  with <br />
          professionals
        </p>
        <p className="text-lg font-medium text-white">
          We are experienced professionals who understand that
          <br />
          technology is changing, and are true partners who care
          <br />
          about your success. Our team provides a consultative
          <br />
          approach on emerging technology.
        </p>

        <div className="flex flex-row space-x-16 pt-10">
          <div>
            <Button buttonText="Our Services" />
          </div>
          <div>
            <Button buttonText="Calendly" />
          </div>
        </div>
      </div>

      {/* image */}
      <div></div>
    </div>
  );
};

export default HomePage;
