import React from "react";
import styles from "../style";
import aboutjpg from "@/assets/img/about.jpg";
import { aboutLeft, aboutRight } from "../data";

export default function About() {
  return (
    <section id="About" className={`${styles.paddingX} ${styles.paddingY}  `}>
      <div className=" about">
        {/* -----img */}
        <div className="about-img ">
          <img src={aboutjpg} alt="" className="h-full w-full" />
        </div>
        {/* ----test */}
        <div className="">
          <div className="flex flex-col gap-y-8">
            <h6 className="text-[22px] font-bold">
              <span>About Us</span>
            </h6>
            <h2 className="md:text-[40px] text-[25px] font-bold ">
              Welcome to <span className="text-main">Tourist</span>{" "}
            </h2>
            <p className="text-[18px] text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              beatae iste voluptatem expedita, dicta ipsa ex nihil. Nulla, dolor
              eum.
            </p>
            <p className="text-[18px] text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
              provident suscipit consectetur numquam, rerum laudantium est
              beatae quisquam natus alias, error voluptates aut odio placeat?
              Consequuntur quidem fugit nisi vitae.
            </p>
            <div className="flex flex-row gap-x-2 md:gap-x-8">
              {" "}
              <ul className="">
                {aboutLeft.map((item, index) => (
                  <div key={index} className="flex flex-row gap-x-4 mb-1 ">
                    <h3 className="text-main text-[16px]">{item.icon}</h3>
                    <h3 className="text-[18px] text-gray-500">{item.title}</h3>
                  </div>
                ))}
              </ul>
              <ul>
                {aboutRight.map((item, index) => (
                  <div key={index} className="flex flex-row gap-x-4 mb-1">
                    <h3 className="text-main text-[16px]">{item.icon}</h3>
                    <h3 className="text-[18px] text-gray-500">{item.title}</h3>
                  </div>
                ))}
              </ul>
            </div>
          </div>
          <button className="bg-main px-5 py-2 mt-3 text-[20px] btn text-white">
            Read more
          </button>
        </div>

        {/* ---text end */}
      </div>
    </section>
  );
}
