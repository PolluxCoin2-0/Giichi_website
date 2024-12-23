"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import type { Settings } from "react-slick";
import Image from "next/image";
import dynamic from "next/dynamic";
import img from "../../../public/assests/BlogImg.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface ArrowProps {
  onClick?: () => void;
}

// Dynamically import React Slick with SSR disabled
const Slider = dynamic(() => import("react-slick"), { ssr: false });
const Blog: React.FC = () => {
  // Custom Arrow Components
  const PreviousArrow: React.FC<ArrowProps> = ({ onClick }) => {
    return (
      <div
        className="slider-arrow slider-arrow-left absolute -top-4 md:-top-20 right-16 flex items-center justify-center space-x-2 hover:bg-green-gradient p-2 rounded-full"
        onClick={onClick}
      >
        <FaArrowLeft className="slider-arrow-icon text-white" size={20}/>
      </div>
    );
  };
  
  const NextArrow: React.FC<ArrowProps> = ({ onClick }) => {
    return (
      <div
        className="slider-arrow slider-arrow-right absolute -top-4 md:-top-20 right-4 flex items-center justify-center hover:bg-green-gradient p-2 rounded-full"
        onClick={onClick}
      >
        <FaArrowRight className="slider-arrow-icon text-white" size={20}/>
      </div>
    );
  };
  

  const settings: Settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 1000,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Default to 4 slides on large screens
    slidesToScroll: 1,
    prevArrow: <PreviousArrow />,
    nextArrow: <NextArrow />,
    appendDots: (dots) => (
      <div style={{ paddingBottom: "0px", margin: "0px" }}>
        <ul style={{ margin: "0px", padding: "0px" }}>{dots}</ul>
      </div>
    ),
    // customPaging: (i: number) => <div className="dot"></div>, // Customize dots if needed
    responsive: [
      {
        breakpoint: 1024, // For tablet and smaller screens
        settings: {
          slidesToShow: 3, // Show 3 slides at this breakpoint
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // For tablet devices
        settings: {
          slidesToShow: 2, // Show only 1 slide on mobile
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 414, // For mobile devices
        settings: {
          slidesToShow: 1, // Show only 1 slide on mobile
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mt-8 md:mt-16 lg:mt-20 px-4 md:px-8 lg:px-16 xl:px-48 2xl:px-64 ">
      <div className="flex flex-col md:flex-row justify-between item-start md:items-center">
        {/* <div className="hidden md:block">
          <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white md:leading-snug ">
            Insights from
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green to-lightgreen">
              {" "}
              our experts & <br />
              news{" "}
            </span>
            from the industry
          </p>
        </div> */}
        
        {/* <div className="block md:hidden">
          <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white md:leading-snug ">
            Insights from
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-green to-lightgreen">
               {" "}our experts & 
              news{" "}
            </span>
            from the industry
          </p>
        </div> */}
        
        <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white md:leading-snug ">Our Latest Blog Updates</p>
      </div>
      
      <div className="mt-0 ">
        <div className="bg-black mt-4 md:mt-8 lg:mt-14 flex flex-row justify-center items-center relative pt-0">
          {/* Set a max-width for the slider to ensure only 3 items are shown */}
          <div className="w-full max-w-8xl ">
            <Slider {...settings}>
              {[...Array(6)].map((_, index) => (
                <div key={index} className="p-6">
                  {/* Add padding to create space */}
                  <div className="w-full bg-[#1B1B1B] text-white h-auto rounded-lg shadow-inner shadow-gray-400">
                    <Image
                      src={img}
                      alt="banner-image"
                      width={0}
                      height={0}
                      style={{ width: "100%" }} // Set default width to 100% for mobile
                      className="rounded-t-3xl p-4 w-full"
                    />
                    <p className="text-left pl-4 text-[#adaaaa] pt-2 text-lg font-medium">
                      18 September 2024
                    </p>
                    <p className="text-left pl-4 text-[#ffffff] pt-2 pb-8 leading-7 px-4 text-lg xl:text-2xl font-bold">
                      What is Web Development?
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
