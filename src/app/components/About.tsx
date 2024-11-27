import React from 'react'

const About = () => {
  return (
    <div className="flex flex-col space-y-6 pb-32">
      <p className="text-4xl font-bold">About </p>
      <p className="text-lg font-medium">Our Mission is to empower individuals and businesses through innovative<br/>
         web3 and blockchain solutions that drive progress and create positive<br/>
         change.</p>

         <div className="flex flex-row space-x-3 items-center">
            <div className="flex justify-start items-center">
            <p className="bg-black rounded-full p-8"></p>
            </div>

             <div className="">
                <p>Giichi IT Solution</p>
                <p>CEO</p>
             </div>
           
         </div>

         <div className="flex flex-row justify-around bg-green p-4 mt-12 w-full">

            <div className="border-r-[1px] p-8 w-[25%]">
                <p>40+</p>
                <p>Successful Projects</p>
            </div>

            <div className="border-r-[1px] p-8 w-[25%]">
                <p>40+</p>
                <p>Successful Projects</p>
            </div>

            <div className="border-r-[1px] p-8 w-[25%]">
                <p>40+</p>
                <p>Successful Projects</p>
            </div>

            <div className=" p-8 w-[25%]">
                <p>40+</p>
                <p>Successful Projects</p>
            </div>
         </div>
    </div>
  )
}

export default About
