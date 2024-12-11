"use client";
import { useState } from "react";
import { IoPerson } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";

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
    <div className="mt-12 lg:mt-20 px-4 md:px-8 lg:px-16 xl:px-48 2xl:px-64">
      <div>
        <p className="text-md md:text-lg lg:text-2xl font-bold text-white">
          TESTIMONIALS
        </p>
        <p className="block md:hidden lg:block text-2xl lg:text-4xl xl:text-5xl font-bold text-white mt-4 md:leading-tight">
          Tales of Triumph from <br />{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green to-lightgreen">
            Our Happy Clients
          </span>
        </p>

        <p className="hidden md:block lg:hidden text-[#ffffff] text-3xl md:text-4xl lg:text-6xl font-bold pt-4 lg:pt-8 leading-tight">
          Tales of Triumph from{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green to-lightgreen">
            Our Happy Clients
          </span>
        </p>
        <p className="text-[#ffffff] text-sm lg:text-lg font-medium lg:font-semibold pt-5">
          Discover the journey of our valued clients from vision to victory and
          join the success parade.
        </p>

        <div className="flex flex-col md:flex-row space-x-0 md:space-x-6 w-full">
          {/* first testimonial */}
          <div
            className="bg-[#121212] mt-5 w-full md:w-[50%] flex flex-col border-[1px] px-2 lg:px-6 py-4 lg:py-8 border-[#868585] relative overflow-hidden rounded-2xl"
            style={{
              boxShadow:
                "0 2px 20px rgba(0, 0, 0, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.6)", // White shadow with moderate opacity
              background: `radial-gradient(circle at ${bgPosition.x}px ${bgPosition.y}px, rgba(235, 191, 14, 0.7), transparent)`, // Moving background effect
            }}
            onMouseMove={handleMouseMove}
          >
            <div className="flex flex-row items-center space-x-2 lg:space-x-4 px-3">
              <p className=" bg-[#EBBF0E] rounded-full px-2 py-2 md:px-3 md:py-3">
                <IoPerson size={44} />
              </p>
              <p className="text-black text-lg md:text-2xl font-semibold">
                Ducatus
              </p>
              <p>
                <BsTwitterX size={24} />
              </p>
            </div>

            <p className="text-[#ffffff] w-full text-sm lg:text-[15px] px-4 py-5 leading-snug">
              When it comes to the development of our blockchain and smart
              contracts, we trust only those trusted by experts. Rock’N’Block,
              developers of the Ducatus wallet and the DucatusX blockchain,
              recognized by industry experts globally.
            </p>
            <div
              className="absolute inset-0 blur-[100px] -z-10"
              style={{ pointerEvents: "none" }}
            />
          </div>

          {/* second testimonials */}
          <div
            className="bg-[#121212] mt-5 w-full md:w-[50%] flex flex-col border-[1px] px-2 lg:px-6 py-4 lg:py-8 border-[#868585] relative overflow-hidden rounded-2xl"
            style={{
              boxShadow:
                "0 2px 20px rgba(0, 0, 0, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.6)", // White shadow with moderate opacity
              background: `radial-gradient(circle at ${bgPosition.x}px ${bgPosition.y}px, rgba(235, 191, 14, 0.7), transparent)`, // Moving background effect
            }}
            onMouseMove={handleMouseMove}
          >
            <div className="flex flex-row items-center space-x-2 lg:space-x-4 px-3">
              <p className=" bg-[#EBBF0E] rounded-full px-2 py-2 md:px-3 md:py-3">
                <IoPerson size={44} />
              </p>
              <p className="text-black text-lg md:text-2xl font-semibold">
                Ducatus
              </p>
              <p>
                <BsTwitterX size={24} />
              </p>
            </div>

            <p className="text-[#ffffff] w-full text-sm lg:text-[15px] px-4 py-5 leading-snug">
              When it comes to the development of our blockchain and smart
              contracts, we trust only those trusted by experts. Rock’N’Block,
              developers of the Ducatus wallet and the DucatusX blockchain,
              recognized by industry experts globally.
            </p>
            <div
              className="absolute inset-0 blur-[100px] -z-10"
              style={{ pointerEvents: "none" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
