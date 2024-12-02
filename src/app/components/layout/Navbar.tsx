import React from 'react'
import Image from "next/image";
import GiichiLogo from "../../../../public/assests/logo-light.png";
import { MdOutlineArrowForward } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center h-auto px-64 p-6 bg-black">
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

      <div className="flex flex-row items-center space-x-16 rounded-full p-4 pl-20 pr-20 "
       style={{
        boxShadow:"0 2px 20px rgba(0, 0, 0, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.4) "}}>
        <p className="text-md font-medium text-white">Home</p>
        <p className="text-md font-medium text-white">About</p>
        <p className="text-md font-medium text-white">Services</p>
        <p className="text-md font-medium text-white">Web3 Solutions</p>
       
       </div>
     <div className="flex flex-row items-center space-x-6 border-[1px] rounded-full p-3 pl-6 pr-4 "
         style={{
          boxShadow:"0 2px 20px rgba(0, 0, 0, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.4) "}}>
        <p className="text-md font-medium text-white ">Work With Us</p>
        <p className="bg-green-gradient rounded-full p-1"><MdOutlineArrowForward size={24}/></p>
       </div>

     {/* <div className="flex flex-row space-x-4 items-center">
      <div className="text-md font-medium text-white p-4 pl-8 pr-8 rounded-tl-full rounded-bl-full"
       style={{
        boxShadow:"0 2px 20px rgba(0, 0, 0, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.4) "}}>Work With Us</div>
       
       <div className="p-3 rounded-tr-full rounded-br-full"
        style={{
          boxShadow:"0 2px 20px rgba(0, 0, 0, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.4) "}}>
      <p className="bg-green rounded-full p-1"
      ><MdOutlineArrowForward size={24}/></p>
      </div>
     </div> */}


      
       
      
    </div>
  )
}

export default Navbar;
