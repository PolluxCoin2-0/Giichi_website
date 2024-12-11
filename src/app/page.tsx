import HomePage from "./components/HomePage";
// import About from "./components/About";
// import Services from "./components/Services";
import Partner from "./components/Partner";
import Solution from "./components/Solution";
import Blog from "./components/Blog";
import Testimonials from "./components/Testimonials";
// import Portfolio from "./components/Portfolio/page";
import Consultation from "./components/Consultation";
import Projects from "./components/Projects";
import Work from "./components/Work";

export default function Home() {
  return (
    <div className="">
      <HomePage />
      <Partner />
      <Solution />
      <Projects />
      <Testimonials />
      {/* <About /> */}
      <Work />
      {/* <Services /> */}
      <Blog />
      {/* <Portfolio /> */}
      <Consultation />
    </div>
  );
}
