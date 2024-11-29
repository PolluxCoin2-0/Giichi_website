"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dynamic from "next/dynamic";
import { useRef } from "react";
import Image from "next/image";
import img from "../../../public/assests/BlogImg.png";

import img1 from "../../../public/assests/download (1).png";
import img2 from "../../../public/assests/download (2).png";
import img3 from "../../../public/assests/download.png";
import img4 from "../../../public/assests/images.png";
import { MdOutlineArrowForward } from "react-icons/md";

// Dynamically import React Slick with SSR disabled
const Slider = dynamic(() => import("react-slick"), { ssr: false });
const Partner = () => {
  // Create a reference for the Slider
  const sliderRef = useRef(null);
  const settings = {
    dots: true,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 1000, // Set autoplay speed (3000ms = 3 seconds)
    infinite: true,
    speed: 800,
    slidesToShow: 7,
    slidesToScroll: 1,
    pauseOnHover: false, // Prevent autoplay from pausing on hover
  };

  // Custom function to go to the previous slide
  const goToPrevious = () => {
    sliderRef.current.slickPrev();
  };

  // Custom function to go to the next slide
  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div className="pb-12 overflow-hidden ">
      <p className="text-5xl font-bold text-white leading-snug px-64">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green to-lightgreen">
          Partnerships
        </span>{" "}
        - Collaborating <br /> for Collective Progress
      </p>
      <div className="carousel-container mt-20 ">
        <div className="slider-container">
          <Slider ref={sliderRef} {...settings}>
            {[img1, img2, img3, img4, img1, img2, img3].map((img, index) => (
              <div key={index} className="flip-container">
                <Image
                  src={img}
                  alt={`Image ${index + 1}`}
                  className="rounded-2xl flip-image"
                />
              </div>
            ))}
          </Slider>
          <button className="slick-prev" onClick={goToPrevious}>
            Prev
          </button>
          <button className="slick-next" onClick={goToNext}>
            Next
          </button>
        </div>
      </div>

      {/* insights */}
      <div className="px-64 mt-32">
        <div className="flex flex-row justify-between items-center">
          <div>
            <p className="text-5xl font-bold text-white leading-snug ">
              Insights from
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green to-lightgreen">
                {" "}
                our experts & <br />
                news{" "}
              </span>
              from the industry
            </p>
          </div>

          <div
            className="flex flex-row items-center space-x-6 border-[1px] rounded-full p-3 pl-6 pr-4 "
            style={{
              boxShadow:
                "0 2px 20px rgba(0, 0, 0, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.4) ",
            }}
          >
            <p className="text-md font-medium text-white ">View All</p>
            <p className="bg-green rounded-full p-1">
              <MdOutlineArrowForward size={24} />
            </p>
          </div>
        </div>

        <div className="flex flex-row space-x-6 justify-start mt-8 w-full">
          <div className="w-[25%]">  <Image
            src={img}
            alt="banner-image"
            width={0}
            height={0}
            style={{ width: "100%" }} // Set default width to 100% for mobile
            className="rounded-2xl w-full md:w-[100%] lg:w-[20%] border-[1px] border-[#ffffff]" // Use Tailwind's responsive width utilities
          /></div>

           <div className="w-[25%]">  <Image
            src={img}
            alt="banner-image"
            width={0}
            height={0}
            style={{ width: "100%" }} // Set default width to 100% for mobile
            className="rounded-2xl w-full md:w-[100%] lg:w-[20%] border-[1px] border-[#ffffff] " // Use Tailwind's responsive width utilities
          /></div>

<div className="w-[25%]">  <Image
            src={img}
            alt="banner-image"
            width={0}
            height={0}
            style={{ width: "100%" }} // Set default width to 100% for mobile
            className="rounded-2xl w-full md:w-[100%] lg:w-[20%] border-[1px] border-[#ffffff] " // Use Tailwind's responsive width utilities
          /></div>

<div className="w-[25%]">  <Image
            src={img}
            alt="banner-image"
            width={0}
            height={0}
            style={{ width: "100%" }} // Set default width to 100% for mobile
            className="rounded-2xl w-full md:w-[100%] lg:w-[20%] border-[1px] border-[#ffffff] " // Use Tailwind's responsive width utilities
          /></div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
