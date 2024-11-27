import React from 'react'
import Image from "next/image";
import GiichiLogo from "../../../../public/assests/Giichilogo.png";
import { MdOutlineArrowForward } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center h-auto px-64 p-4 ">
      <div>
      <Image
            src={GiichiLogo}
            alt="banner-image"
            width={0}
            height={0}
            style={{ width: "60%" }}
            className=""
          />
      </div>

      <div className="flex flex-row items-center space-x-16 rounded-full p-4 pl-20 pr-20 bg-gray ">
        <p className="text-md font-medium">Home</p>
        <p className="text-md font-medium">About</p>
        <p className="text-md font-medium">Services</p>
        <p className="text-md font-medium">Web3 Solutions</p>
       
       </div>

       <div className="flex flex-row items-center space-x-8 border-[1px] rounded-full p-3 pl-8 pr-8 bg-black">
        <p className="text-md font-medium text-white">Work With Us</p>
        <p className="bg-green rounded-full p-1"><MdOutlineArrowForward size={24}/></p>
       </div>
      
    </div>
  )
}

export default Navbar;
