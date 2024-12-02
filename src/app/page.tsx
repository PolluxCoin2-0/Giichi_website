import HomePage from "./components/HomePage";
import About from "./components/About";
import Services from "./components/Services";
import Partner from "./components/Partner";
import Blog from "./components/Blog";
import Testimonials from "./components/Testimonials";
import Portfolio from "./components/Portfolio/page";
import Consultation from "./components/Consultation";
export default function Home() {
  return (
    <div className="">
      
   <HomePage/>
     <About/>
     <Services/>
     <Partner/>
     <Blog/>
     <Testimonials/>
     <Portfolio/>
     <Consultation/>
    </div>
  );
}
