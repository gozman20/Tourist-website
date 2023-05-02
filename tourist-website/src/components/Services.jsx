import React from "react";
import { ServicesArray } from "../data";
import styles from "../style";

export default function Services() {
  return (
    <section id="Services" className={`${styles.paddingX}  `}>
      {" "}
      <h1 className="text-main text-center my-3 text-[20px] font-bold">
        <span> Services</span>
      </h1>
      <h3 className="font-bold text-center text-[40px] my-3">Our Services</h3>
      <div className="grid services md:grid-cols-2  lg:grid-cols-4 gap-10 ">
        {ServicesArray.map((item, index) => (
          <div
            key={index}
            className="w-[250px] flex flex-col gap-y-3 shadow-lg p-5 "
          >
            <div className="text-main text-[80px] ">{item.icon}</div>
            <div className="font-bold text-[20px] ">{item.title}</div>
            <div className="text-gray-500">{item.text}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
