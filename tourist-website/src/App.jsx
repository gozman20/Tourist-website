import { useState } from "react";
import { BsFillChatDotsFill } from "react-icons/bs";
import About from "./components/About";
import Services from "./components/Services/Services";
import Destination from "./components/Destination";
import Packages from "./components/Packages";
import Booking from "./components/Booking";
import EasySteps from "./components/EasySteps";
import Team from "./components/Team";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className=" overflow-x-hidden relative">
      <Navbar />
      <Hero className="absolute z-2" />
      <About />
      <Services />
      <Destination />
      <Packages />
      <Booking />
      <EasySteps />
      <Team />
      <Testimonial />
      <Footer />
      <div className="chat-icon  relative flex  ">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75">
          {" "}
        </span>
        <span class="relative inline-flex rounded-full lg:h-8 lg:w-8 h-6 w-6  bg-emerald-800">
          {" "}
          <BsFillChatDotsFill className="text-[30px] absolute w-full h-full" />
        </span>
      </div>
    </div>
  );
}

export default App;
