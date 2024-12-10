import React from "react";

interface ButtonProps {
  buttonText: string; // buttonText is a string
}

const Button: React.FC<ButtonProps> = ({ buttonText }) => {
  return (
    <div className="flex justify-center items-center">
      <a
        href="#_"
        className="relative px-6 py-2 md:px-8 md:py-3 font-normal text-white group text-center"
      >
        {/* Outer animated layers */}
        <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-lightgreen group-hover:bg-green group-hover:skew-x-12"></span>
        <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-green group-hover:bg-lightgreen group-hover:-skew-x-12"></span>

        {/* Decorative corner elements */}
        <span className="absolute bottom-0 left-0 hidden w-6 h-6 md:w-10 md:h-10 transition-all duration-100 ease-out transform -translate-x-4 translate-y-6 md:translate-y-10 bg-lightgreen -rotate-12"></span>
        <span className="absolute bottom-0 right-0 hidden w-6 h-6 md:w-10 md:h-10 transition-all duration-100 ease-out transform translate-x-4 translate-y-6 md:translate-x-10 md:translate-y-8 bg-green -rotate-12"></span>

        {/* Button text */}
        <span className="relative text-xs md:text-sm lg:text-lg font-semibold text-nowrap">
          {buttonText}
        </span>
      </a>
    </div>
  );
};

export default Button;
