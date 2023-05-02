import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";

import "swiper/css";

import "swiper/css/scrollbar";
import "swiper/css/pagination";
import { slider } from "../data";
import styles from "../style";

export default function Testimonial() {
  return (
    <div id="Testimonial" className={`${styles.padding} testimonial `}>
      <h1 className="text-center font-bold text-[20px]">
        <span>Testimonial</span>
      </h1>
      <h3 className="font-bold text-[20px] md:text-[40px] mb-5 text-center">
        Our Client Says
      </h3>

      <Swiper
        modules={[Pagination, Autoplay]}
        loop={false}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 30 },
          768: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
          1440: { slidesPerView: 4, spaceBetween: 30 },
        }}
      >
        {slider.map((item, index) => (
          <SwiperSlide key={index} className="grid place-items-center">
            <div className="max-w-[320px]  flex flex-col items-center gap-y-4 border border-main">
              {" "}
              <div className=" w-[100px] mt-3 ">
                {" "}
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-full rounded-full"
                />
              </div>
              <div>
                <h3 className="text-[25px] font-bold ">{item.name}</h3>
                <div className="font-bold">{item.city}</div>
              </div>
              <div className=" grid place-items-center m-3 gap-y-2">
                <p className="text-[18px] text-center">{item.text}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
