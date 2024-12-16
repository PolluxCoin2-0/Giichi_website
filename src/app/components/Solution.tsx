'use client'
import React, { useState } from 'react'
import { FiMinusCircle, FiPlusCircle } from 'react-icons/fi';
import { MdArrowOutward } from "react-icons/md";
const data = [
    {
      title: 'DeFi',
      subtitle: 'DeFi Development Services',
      description:
        'At Giichi IT Solutions, we are at the forefront of the DeFi revolution, offering cutting-edge decentralized finance solutions that drive innovation for businesses worldwide. Our DeFi development services are designed to enable seamless and secure financial transactions, fostering greater financial inclusivity and empowering businesses to thrive in the decentralized ecosystem.',
    },
    {
      title: 'NFT',
      subtitle: 'NFT Marketplace Development',
      description:
        'At Giichi IT Solutions, we specialize in creating customized NFT marketplace platforms that enable businesses to tap into the growing digital asset market. Our solutions are designed to facilitate secure, transparent, and scalable NFT transactions, opening up new opportunities for creators, collectors, and entrepreneurs.',
    },
        {
      title: 'Web3',
      subtitle: 'Web3 Integration Services',
      description:
        'With Giichi IT Solutions, businesses can seamlessly integrate Web3 technologies into their existing platforms. Our Web3 integration services help unlock the potential of decentralized applications, smart contracts, and blockchain networks, enabling businesses to thrive in the decentralized web.',
    },
    {
      title: 'DAO',
      subtitle: 'DAO Development Services',
      description:
        'At Giichi IT Solutions, we build decentralized autonomous organizations (DAOs) that empower communities to govern and manage resources in a transparent and secure manner. Our DAO development services help businesses transition to decentralized decision-making models, ensuring a democratic approach to governance.',
    },
    {
      title: 'DApp',
      subtitle: 'Custom Blockchain Solutions',
      description:
        'Giichi IT Solutions offers custom blockchain development services tailored to your business needs. We create secure, scalable, and efficient blockchain solutions that enhance your operations, improve transparency, and drive innovation across various industries.',
    },
    {
      title: 'P2E',
      subtitle: 'P2E (Play-to-Earn) Development',
      description:
        'At Giichi IT Solutions, we bring the power of gaming and blockchain together with our Play-to-Earn (P2E) development services. We create immersive, rewarding, and profitable gaming ecosystems that enable players to earn cryptocurrency while enjoying exciting gameplay.',
    },
    {
        title: 'Gamify',
        subtitle: 'Game developnmnet',
        description:
          'At Giichi IT Solutions, we specialize in transforming user experiences with our gamification development services. By integrating game-like mechanics into business processes, applications, and platforms, we help enhance engagement, drive user retention, and unlock new revenue streams. Whether its loyalty programs, education platforms, or business applications, our gamification solutions are tailored to captivate and inspire your audience.',
      },
      {
        title: 'AI Solutions',
        subtitle: 'AI Solutions for Blockchain',
        description:
          'At Giichi IT Solutions, we leverage the power of artificial intelligence to enhance blockchain applications. Our AI solutions help optimize performance, predict trends, and improve decision-making processes, enabling businesses to drive innovation and stay ahead of the curve in the world of blockchain and decentralized technologies.',
      },
  ];
  
  type CardProps = {
    title: string;
    subtitle: string;
    description: string;
  };
  

  const Card: React.FC<CardProps> = ({ title, subtitle, description }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    
      const toggleDescription = () => {
        setIsExpanded(!isExpanded);
      };
        return (
    
    <div className="w-full md:w-[50%] rounded-2xl py-5 px-2 md:px-4 bg-lightestGreen hover:bg-lightblack font-medium">
    {/* Wrapper for Title, Subtitle, and Arrow */}
    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
      {/* Title and Subtitle */}
      <div className="flex flex-col items-start lg:flex-row lg:items-center space-y-2 md:space-y-0 lg:space-x-2 w-full">
        <p className="bg-green-gradient hover:bg-yellow-gradient px-4 py-2 lg:py-4 rounded-2xl text-lg md:text-xl font-medium text-nowrap">
          {title}
        </p>
        <p className="text-white text-lg md:text-xl font-medium text-nowrap">{subtitle}</p>
      </div>
      {/* Arrow */}
      <div className="flex md:justify-end w-full md:w-auto">
        <p className="text-black bg-green-gradient hover:bg-yellow-gradient rounded-full p-1 flex items-center justify-center mt-2 md:mt-0 cursor-pointer">
          <MdArrowOutward size={24} />
        </p>
      </div>
    </div>
  
    {/* Description */}
    <p className="text-lightGray text-[15px] md:text-[17px] font-medium leading-snug py-4 alegreya-font"
      style={{
        maxHeight: isExpanded ? "none" : "3.6em", // Adjust height for 2 lines (line-height × 2)
        overflow: "hidden",
      }}>
      {description}
    </p>
     {/* Toggle "View More" / "View Less" */}
          <div className="flex justify-between items-center">
            <button
              onClick={toggleDescription}
              className="text-orange font-medium leading-snug py-4 text-justify"
            >
              {isExpanded ? (
                <FiMinusCircle size={24} />
              ) : (
                <FiPlusCircle size={24} />
              )}
            </button>
          </div>
  </div>
  
    );
  };

const Solution = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-48 -mt-6 md:mt-0 lg:mt-4 animate-blurToVisible " >
        <p className="hidden md:block text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white md:leading-tight ">
            Empower Your Business with <br/>Expert 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green to-lightgreen"> Blockchain Solutions</span>
        </p>
        <p className="block md:hidden text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white md:leading-tight ">
            Empower Your Business with Expert 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green to-lightgreen"> Blockchain Solutions</span>
        </p>

        <div className="flex flex-col space-y-5 mt-6 ">
        {Array.from({ length: 5 }).map((_, rowIndex) => (
          <div key={rowIndex} className="flex flex-col md:flex-row w-full space-x-0 md:space-x-5 space-y-5 md:space-y-0">
            {data.slice(rowIndex * 2, rowIndex * 2 + 2).map((item, index) => (
              <Card
                key={index}
                title={item.title}
                subtitle={item.subtitle}
                description={item.description}
              />
            ))}
          </div>
        ))}
      </div>

     
    </div>
  )
}

export default Solution
