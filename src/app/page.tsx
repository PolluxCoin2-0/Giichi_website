"use client"
import React from "react";
import HomePage from "./components/HomePage";
import Partner from "./components/Partner";
import Solution from "./components/Solution";
import Consultation from "./components/Consultation";
import Projects from "./components/Projects";
import Work from "./components/Work";
// import About from "./components/About";
// import Services from "./components/Services";
// import Portfolio from "./components/Portfolio/page";
// import Blog from "./components/Blog";
// import Testimonials from "./components/Testimonials";

export default function Home() {
 

  // Render the actual content once `loading` is false
  return (
    <div className="home-container">
      
      <HomePage />
      <Partner />
      <Solution />
      <Projects />
      <Work />
      <Consultation />
      {/* <About /> */}
      {/* <Services /> */}
      {/* <Portfolio /> */}
      {/* <Blog /> */}
      {/* <Testimonials /> */}
    </div>
  );
}
