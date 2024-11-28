import React from "react";
import Counter from "./reusableComp/Counter";
const About = () => {
  return (
    <div className="flex flex-col pt-40">
      <p className="text-2xl font-bold text-white">KNOW US </p>
      <p className="text-6xl font-bold text-white mt-4 leading-snug">Reliable <span className="text-transparent bg-clip-text bg-gradient-to-r from-green to-lightgreen">Blockchain </span><br/>Developement Company </p>
      <p className="text-lg font-medium text-white mt-6">
        Our Mission is to empower individuals and businesses through innovative
        <br />
        web3 and blockchain solutions that drive progress and create positive
        <br />
        change.
      </p>

      <div className="flex flex-row space-x-3 items-center mt-6">
        <div className="flex justify-start items-center">
          <p className="bg-white rounded-full p-10"></p>
        </div>

        <div className="">
          <p className="text-white">Giichi IT Solution</p>
          <p className="text-white">CEO</p>
        </div>
      </div>

      <div className="flex flex-row justify-around bg-green p-4 w-full rounded-br-full mt-20">
        {/* First Stat */}
        <div className="border-r-[1px] p-4 w-[25%] ">
          <Counter target={15} />
          <p className="text-center text-lg font-medium leading-6 text-white">
            Successful <br />
            Projects
          </p>
        </div>

        {/* Second Stat */}
        <div className="border-r-[1px] p-4 w-[25%]">
          <Counter target={15} />
          <p className="text-center text-lg font-medium leading-6 text-white">
            Members in <br /> the team
          </p>
        </div>

        {/* Third Stat */}
        <div className="border-r-[1px] p-4 w-[25%]">
          <Counter target={10} />
          <p className="text-center text-lg font-medium leading-6 text-white">
            Years of <br /> Experience
          </p>
        </div>

        {/* Fourth Stat */}
        <div className="p-4 w-[25%]">
          <Counter target={80} />
          <p className="text-center text-lg font-medium leading-6 text-white">
            Client <br /> Retentions
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
