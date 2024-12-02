"use client";
import { useRef } from "react";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dynamic from "next/dynamic";
import Image from "next/image";
import img1 from "../../../public/assests/download (1).png";
import img2 from "../../../public/assests/download (2).png";
import img3 from "../../../public/assests/download.png";
import img4 from "../../../public/assests/images.png";



// Dynamically import React Slick with SSR disabled
const Slider = dynamic(() => import("react-slick"), { ssr: false });
// Define the type for the slick slider ref
interface SliderRef {
  slickPrev: () => void;
  slickNext: () => void;
}
const Partner = () => {
  const sliderRef = useRef<SliderRef | null>(null);
  
  const settings = {
    dots: true,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 1000, // Set autoplay speed (3000ms = 3 seconds)
    infinite: true,
    speed: 800,
    slidesToShow: 7, // 7 images by default (for larger screens)
    slidesToScroll: 1,
    pauseOnHover: false, // Prevent autoplay from pausing on hover
    responsive: [
      {
        breakpoint: 1024, // For tablet devices
        settings: {
          slidesToShow: 4, // Show 4 slides on tablet and smaller screens
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // For mobile devices
        settings: {
          slidesToShow: 4, // Show 4 slides on mobile
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Custom function to go to the previous slide
  const goToPrevious = () => {
    sliderRef.current?.slickPrev();
  };

  // Custom function to go to the next slide
  const goToNext = () => {
    sliderRef.current?.slickNext();
  };

  return (
    <div className="mt-20 pb-12 overflow-hidden ">
      <p className="text-2xl md:text-6xl font-bold text-white md:leading-tight px-4 md:px-64">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green to-lightgreen">
          Partnerships
        </span>{" "}
        - Collaborating <br /> for Collective Progress
      </p>
      <div className="carousel-container mt-12 md:mt-20 ">
        <div className="slider-container">
          <Slider ref={sliderRef} {...settings}>
            {[img1, img2, img3, img4, img1, img2, img3].map((img, index) => (
              <div key={index} className="flip-container md:px-0 px-2">
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

    
    </div>
  );
};

export default Partner;
