import React from "react";
import bghero from "@/assets/img/bg-hero.jpg";
import bghero1 from "@/assets/img/destination-1.jpg";
import bghero2 from "@/assets/img/destination-2.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../style";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
//Import required modules
import { EffectFade, Autoplay } from "swiper";

const sliderArray = [
  {
    bg: bghero,
  },
  {
    bg: bghero1,
  },
  {
    bg: bghero2,
  },
];

export default function Hero() {
  return (
    <section id="Home" className=" relative">
      {/* ---overlay */}
      <div className="absolute w-full h-full bg-black/70 z-10" />
      <Swiper
        modules={[EffectFade, Autoplay]}
        effect={"fade"}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="hero h-[600px] lg:h-[860px]  "
      >
        {sliderArray.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item.bg} alt="" className="h-full w-full" />
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className={` ${styles.paddingX} absolute z-20 text-white top-[30%] left-[3%] lg:left-[10%] flex flex-col justify-center items-center gap-y-3  `}
      >
        <h3 className="font-bold  text-[30px] md:text-[40px] lg:text-[60px] text-white text-center tracking-wider">
          Enjoy your <span className="text-main bg-transparent">vacation</span>{" "}
          <br className="lg:hidden" /> with us
        </h3>
        <h3 className="text-center font-bold text-[20px]">
          Tempor erat elitr rebum at clita diam amet diam et eos erat ipsum
          lorem sit
        </h3>

        <form action="" className=" flex">
          <div className="md:w-[400px] max-w-[230px] h-[50px] bg-red-500 flex justify-center items-center ">
            <input
              type="text"
              placeholder="E.g: Canada"
              className="h-full w-full  p-3 outline-none text-black"
            />
          </div>
          <button className="bg-main px-3 w-[100px] text-[20px]  ">
            Search
          </button>
        </form>
      </div>
    </section>
  );
}
