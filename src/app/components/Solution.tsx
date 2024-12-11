import React from 'react'
import { MdArrowOutward } from "react-icons/md";

const data = [
    {
      title: 'DeFi',
      subtitle: 'DeFi Development Services',
      description:
        'Our mission at Rock\'n\'Block is to pioneer the frontier of DeFi development, creating innovative DeFi solutions that empower businesses worldwide. We are dedicated to driving the evolution of decentralized finance with our DeFi development services, fostering financial inclusivity.',
    },
    {
      title: 'NFT',
      subtitle: 'NFT Marketplace Development',
      description:
        'Our mission at Rock\'n\'Block is to pioneer the frontier of DeFi development, creating innovative DeFi solutions that empower businesses worldwide. We are dedicated to driving the evolution of decentralized finance with our DeFi development services, fostering financial inclusivity.',
    },
        {
      title: 'Web3',
      subtitle: 'Web3 Integration Services',
      description:
        'Our mission at Rock\'n\'Block is to pioneer the frontier of DeFi development, creating innovative DeFi solutions that empower businesses worldwide. We are dedicated to driving the evolution of decentralized finance with our DeFi development services, fostering financial inclusivity.',
    },
    {
      title: 'DAO',
      subtitle: 'DAO Development Services',
      description:
        'Our mission at Rock\'n\'Block is to pioneer the frontier of DeFi development, creating innovative DeFi solutions that empower businesses worldwide. We are dedicated to driving the evolution of decentralized finance with our DeFi development services, fostering financial inclusivity.',
    },
    {
      title: 'DApp',
      subtitle: 'Custom Blockchain Solutions',
      description:
        'Our mission at Rock\'n\'Block is to pioneer the frontier of DeFi development, creating innovative DeFi solutions that empower businesses worldwide. We are dedicated to driving the evolution of decentralized finance with our DeFi development services, fostering financial inclusivity.',
    },
    {
      title: 'P2E',
      subtitle: 'Cryptocurrency Development',
      description:
        'Our mission at Rock\'n\'Block is to pioneer the frontier of DeFi development, creating innovative DeFi solutions that empower businesses worldwide. We are dedicated to driving the evolution of decentralized finance with our DeFi development services, fostering financial inclusivity.',
    },
    {
        title: 'Gamify',
        subtitle: 'Cryptocurrency Development',
        description:
          'Our mission at Rock\'n\'Block is to pioneer the frontier of DeFi development, creating innovative DeFi solutions that empower businesses worldwide. We are dedicated to driving the evolution of decentralized finance with our DeFi development services, fostering financial inclusivity.',
      },
      {
        title: 'NFT Solutions',
        subtitle: 'Cryptocurrency Development',
        description:
          'Our mission at Rock\'n\'Block is to pioneer the frontier of DeFi development, creating innovative DeFi solutions that empower businesses worldwide. We are dedicated to driving the evolution of decentralized finance with our DeFi development services, fostering financial inclusivity.',
      },
  ];
  
  type CardProps = {
    title: string;
    subtitle: string;
    description: string;
  };
  

  const Card: React.FC<CardProps> = ({ title, subtitle, description }) => {    return (
    <div className="w-full md:w-[50%] rounded-2xl py-5 px-2 md:px-4 bg-lightestGreen font-medium">
    {/* Wrapper for Title, Subtitle, and Arrow */}
    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
      {/* Title and Subtitle */}
      <div className="flex flex-col items-start lg:flex-row lg:items-center space-y-2 md:space-y-0 lg:space-x-2 w-full">
        <p className="bg-green-gradient px-4 py-2 lg:py-4 lg:py-5 rounded-2xl text-lg md:text-xl font-medium">
          {title}
        </p>
        <p className="text-white text-lg md:text-xl font-medium text-nowrap">{subtitle}</p>
      </div>
      {/* Arrow */}
      <div className="flex md:justify-end w-full md:w-auto">
        <p className="text-black bg-green-gradient rounded-full p-1 flex items-center justify-center mt-2 md:mt-0">
          <MdArrowOutward size={24} />
        </p>
      </div>
    </div>
  
    {/* Description */}
    <p className="text-lightGray text-[17px] font-medium leading-snug py-4 text-justify">
      {description}
    </p>
  </div>
  
    );
  };

const Solution = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-48 2xl:px-64 -mt-6 md:mt-0 lg:mt-4">
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
