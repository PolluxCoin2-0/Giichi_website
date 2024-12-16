"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import type { Settings } from "react-slick";
import dynamic from "next/dynamic";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface ArrowProps {
  onClick?: () => void;
}

// Dynamically import React Slick with SSR disabled
const Slider = dynamic(() => import("react-slick"), { ssr: false });

// Data Array
const sliderData = [
  {
    id: 1,
    step: "01",
    title: "Initial Consultation",
    description:
      "Following a thorough understanding of your requirements, we embark on project architecture and planning. This phase involves the meticulous establishment of tokenomics and business models, laying the groundwork for long-term project sustainability. We strategize the project's technical aspects, defining functionalities and outlining technical requirements to guide the development process effectively.",
  },
  {
    id: 2,
    step: "02",
    title: "Project Architecture",
    description:
      "Following a thorough understanding of your requirements, we embark on project architecture and planning. This phase involves the meticulous establishment of tokenomics and business models, laying the groundwork for long-term project sustainability. We strategize the project's technical aspects, defining functionalities and outlining technical requirements to guide the development process effectively.",
  },
  {
    id: 3,
    step: "03",
    title: "Development Phase",
    description:
      "Following a thorough understanding of your requirements, we embark on project architecture and planning. This phase involves the meticulous establishment of tokenomics and business models, laying the groundwork for long-term project sustainability. We strategize the project's technical aspects, defining functionalities and outlining technical requirements to guide the development process effectively.",
  },
  {
    id: 4,
    step: "04",
    title: "Quality Assurance",
    description:
      "Following a thorough understanding of your requirements, we embark on project architecture and planning. This phase involves the meticulous establishment of tokenomics and business models, laying the groundwork for long-term project sustainability. We strategize the project's technical aspects, defining functionalities and outlining technical requirements to guide the development process effectively.",
  },
  {
    id: 5,
    step: "05",
    title: "Deployment",
    description:
      "Following a thorough understanding of your requirements, we embark on project architecture and planning. This phase involves the meticulous establishment of tokenomics and business models, laying the groundwork for long-term project sustainability. We strategize the project's technical aspects, defining functionalities and outlining technical requirements to guide the development process effectively.",
  },
  {
    id: 6,
    step: "06",
    title: "Ongoing Support",
    description:
      "Following a thorough understanding of your requirements, we embark on project architecture and planning. This phase involves the meticulous establishment of tokenomics and business models, laying the groundwork for long-term project sustainability. We strategize the project's technical aspects, defining functionalities and outlining technical requirements to guide the development process effectively.",
  },
];

const Work: React.FC = () => {
  // Custom Arrow Components
  const PreviousArrow: React.FC<ArrowProps> = ({ onClick }) => {
    return (
      <div
        className="slider-arrow slider-arrow-left absolute -top-4 md:-top-16 right-16 flex items-center justify-center space-x-2 hover:bg-green-gradient p-2 rounded-full"
        onClick={onClick}
      >
        <FaArrowLeft className="slider-arrow-icon text-white" size={20}/>
      </div>
    );
  };
  
  const NextArrow: React.FC<ArrowProps> = ({ onClick }) => {
    return (
      <div
        className="slider-arrow slider-arrow-right absolute  -top-4 md:-top-16 right-4 flex items-center justify-center hover:bg-green-gradient p-2 rounded-full"
        onClick={onClick}
      >
        <FaArrowRight className="slider-arrow-icon text-white" size={20}/>
      </div>
    );
  };

  const settings: Settings = {
    dots: true,
    autoplay: false,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: <PreviousArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 414, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div  className="mt-12 lg:mt-16 px-4 md:px-8 lg:px-16 xl:px-48">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="hidden md:block">
          <span className="text-md md:text-lg lg:text-2xl font-bold text-white">How We Work:</span>
          <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white md:leading-snug mt-4">
          Transforming Ideas into 
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green to-lightgreen">
              {" "}
              Reality with Blockchain
            </span>
          </p>
        </div>
        <div className="block md:hidden">
          <span className="text-md md:text-lg lg:text-2xl font-bold text-white">How We Work:</span>
          <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white md:leading-snug mt-4">
             Transforming Ideas into 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green to-lightgreen">
              {" "}
              Reality with Blockchain
            </span>
          </p>
        </div>
      </div>

      <div className="mt-0 relative">
        <div className="bg-black mt-4 md:mt-8 flex flex-row justify-center items-center relative pt-0">
          <div className="w-full">
            <Slider {...settings}>
              {sliderData.map((item) => (
                <div key={item.id} className="p-3">
                  <div className="w-full mt-4 md:mt-0 bg-lightestGreen hover:bg-lightblack text-white h-auto rounded-2xl shadow-inner shadow-gray-400 flex flex-col lg:flex-row space-x-0 lg:space-x-6 px-4 py-4 lg:py-8">
                    <div className="text-6xl font-bold text-green w-full lg:w-[15%] text-start lg:text-center">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-green to-lightgreen">
                        {item.step}
                      </span>
                    </div>
                    <div className="w-full lg:w-[85%]">
                      <p className="text-2xl font-medium">{item.title}</p>
                      <p className="text-sm lg:text-[15px] mt-4">
                        {item.description}
                      </p>
                    </div>
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

export default Work;
