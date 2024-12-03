"use client";
import { useState } from "react";
import { IoPerson } from "react-icons/io5";
import { IoStarSharp } from "react-icons/io5";

const TestimonialsSection = () => {
  const [bgPosition, setBgPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { left, top } = e.currentTarget.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;
    setBgPosition({ x, y });
  };

  return (
    <div className="mt-8 md:mt-16 lg:mt-20 xl:mt-24 px-4 md:px-8 lg:px-16 xl:px-48 2xl:px-64">
      <div>
        <p className="text-md md:text-lg lg:text-2xl font-bold text-white">TESTIMONIALS</p>
        <p className="block md:hidden lg:block text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white mt-4 md:leading-tight">
          Tales of Triumph from <br />{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green to-lightgreen">
            Our Happy Clients
          </span>
        </p>

        <p className="hidden md:block lg:hidden text-[#ffffff] text-3xl md:text-4xl lg:text-6xl font-bold pt-8 leading-tight">
          Tales of Triumph from  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green to-lightgreen">Our Happy Clients</span>
        </p>
        <p className="text-[#ffffff] text-sm lg:text-lg font-medium lg:font-semibold pt-5">
          Discover the journey of our valued clients from vision to victory and
          join the success parade.
        </p>

        <div
          className="bg-[#121212] mt-5 w-full lg:w-[800px] xl:w-[1000px] flex flex-col justify-center items-center text-center pb-10 border-[1px] 
          border-[#868585] relative overflow-hidden"
          style={{
            boxShadow:
              "0 2px 20px rgba(0, 0, 0, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.6)", // White shadow with moderate opacity
            background: `radial-gradient(circle at ${bgPosition.x}px ${bgPosition.y}px, rgba(235, 191, 14, 0.7), transparent)`, // Moving background effect
          }}
          onMouseMove={handleMouseMove}
        >
          <p className="text-[#ffffff] w-full text-sm lg:text-lg leading-8 xl:leading-10 pt-16 px-4 md:px-12 lg:px-20 xl:px-32 2xl:px-44 text-justify md:text-center">
            The services you offer are a broad range of services. All of your
            services complement each other really well and the 
            team has been brilliant. You know they get back to us very quickly
            with our issues and have a lot of knowledge and 
            expertise around react and usability. Its nice to come to an
            organization like Maticz. Good opportunity for the 
            businesses to start your project with Maticz.
          </p>

        

          <p className="mt-2 md:mt-0 lg:mt-5 bg-[#EBBF0E] rounded-full px-3 py-3 md:px-6 md:py-6">
            <IoPerson size={52} />
          </p>
          <p className="mt-2 md:mt-5 text-[#ffffff] text-lg md:text-xl font-semibold">
            Durgesh Yadav
          </p>
          <div className="mt-2 md:mt-5 flex flex-row space-x-2 text-[#EBBF0E]">
            <IoStarSharp size={24} />
            <IoStarSharp size={24} />
            <IoStarSharp size={24} />
            <IoStarSharp size={24} />
            <IoStarSharp size={24} />
          </div>
          {/* Add an overlay for the blur effect */}
          <div
            className="absolute inset-0 blur-[100px] -z-10"
            style={{ pointerEvents: "none" }}
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
