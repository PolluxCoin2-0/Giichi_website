import React from 'react';

interface ButtonProps {
  buttonText: string; // buttonText is a string
}

const Button: React.FC<ButtonProps> = ({ buttonText }) => {
  return (
    <div>
      <a href="#_" className="relative px-8 py-4 font-medium text-white group">
    <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-lightgreen group-hover:bg-green group-hover:skew-x-12"></span>
    <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-green group-hover:bg-lightgreen group-hover:-skew-x-12"></span>

    <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-lightgreen -rotate-12"></span>
    <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-green -rotate-12"></span>
    <span className="relative text-lg font-semibold">{buttonText}</span>
</a>
    </div>
  )
}

export default Button;
