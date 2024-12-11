"use client"
import React, { useState, useEffect } from "react";

interface CounterProps {
  target: number; // Define the type for the target prop
}


const Counter: React.FC<CounterProps> = ({ target }) => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < target) {
          return prevCount + 1;
        } else {
          clearInterval(interval);
          return prevCount;
        }
      });
    }, 100); // Speed of counting (100ms per increment)
    
    return () => clearInterval(interval); // Clean up the interval on unmount
  }, [target]);

  return <p className="text-center text-4xl lg:text-6xl font-bold">
         <span className="text-transparent bg-clip-text bg-gradient-to-r from-green to-lightgreen">{count}+</span>
         </p>;
};

export default Counter;
