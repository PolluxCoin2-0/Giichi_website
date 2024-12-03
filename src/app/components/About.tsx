import React from "react";
import Counter from "./reusableComp/Counter";
const About = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-48 2xl:px-64  ">
      <div className="flex flex-col md:flex-row w-full">
        <div className="flex flex-col pt-20 lg:pt-20 xl:pt-28 2xl:pt-40 w-full md:w-[60%]">
          <p className="text-md md:text-lg lg:text-2xl font-bold text-white">KNOW US </p>
          <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white mt-4 md:leading-tight">
            Reliable{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green to-lightgreen">
              Blockchain{" "}
            </span>
            <br />
            Developement Company{" "}
          </p>
          <p className="block md:hidden lg:block text-sm lg:text-lg font-medium text-white mt-4 md:mt-6 w-full xl:w-[70%]">
            Our Mission is to empower individuals and businesses through innovative web3 and blockchain solutions that drive progress and create
            positive change.
          </p>

          <p className="hidden md:block lg:hidden text-sm lg:text-lg font-medium text-white mt-4 md:mt-6">
            Our Mission is to empower individuals and businesses through
            innovative
           
            web3 and blockchain solutions that drive progress and create
            positive
          
            change.
          </p>
          <div className="flex flex-row space-x-3 items-center mt-6">
            <div className="flex justify-start items-center">
              <p className="bg-white rounded-full p-6 md:p-7 lg:p-10"></p>
            </div>

            <div className="">
              <p className="text-white text-sm lg:text-lg">Giichi IT Solution</p>
              <p className="text-white text-sm lg:text-lg">CEO</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[40%]">{/* image */}</div>
      </div>
      
      {/* for tablet and above */}
      <div className="hidden md:flex flex-row justify-around bg-green p-4 w-full rounded-br-full md:mt-10 2xl:mt-20 ">
        {/* First Stat */}
        <div className="border-r-[1px] md:p-2 lg:p-3 xl:p-4 w-[25%] ">
          <Counter target={15} />
          <p className="text-center md:text-sm lg:text-lg font-medium leading-6 text-white">
            Successful <br />
            Projects
          </p>
        </div>

        {/* Second Stat */}
        <div className="border-r-[1px] md:p-2 lg:p-3 xl:p-4 w-[25%]">
          <Counter target={15} />
          <p className="text-center md:text-sm lg:text-lg font-medium leading-6 text-white">
            Members in <br /> the team
          </p>
        </div>

        {/* Third Stat */}
        <div className="border-r-[1px] md:p-2 lg:p-3 xl:p-4 w-[25%]">
          <Counter target={10} />
          <p className="text-center md:text-sm lg:text-lg font-medium leading-6 text-white">
            Years of <br /> Experience
          </p>
        </div>

        {/* Fourth Stat */}
        <div className="md:p-2 lg:p-3 xl:p-4 w-[25%]">
          <Counter target={80} />
          <p className="text-center md:text-sm lg:text-lg font-medium leading-6 text-white">
            Client <br /> Retentions
          </p>
        </div>
      </div>

      {/* for mobile */}
      <div className="md:hidden flex flex-col items-center space-y-8 mt-12">
         {/* First Stat */}
         <div className="border-b-[1px] border-lightgreen p-4 ">
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-green to-lightgreen"><Counter target={15} /></p>
          <p className="text-center text-md font-medium leading-6 text-white">
            Successful
            Projects
          </p>
        </div>

        {/* Second Stat */}
        <div className="border-b-[1px] border-lightgreen p-4">
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-green to-lightgreen"><Counter target={15} /></p>
          <p className="text-center text-md font-medium leading-6 text-white">
            Members in  the team
          </p>
        </div>

        {/* Third Stat */}
        <div className="border-b-[1px] border-lightgreen p-4">
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-green to-lightgreen"><Counter target={10} /></p>
          <p className="text-center text-md font-medium leading-6 text-white">
            Years of  Experience
          </p>
        </div>

        {/* Fourth Stat */}
        <div className="border-b-[1px] border-lightgreen p-4">
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-green to-lightgreen"><Counter target={80} /></p>
          <p className="text-center text-md font-medium leading-6 text-white">
            Client  Retentions
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
