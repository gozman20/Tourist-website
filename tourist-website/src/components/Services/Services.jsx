import React from "react";
import { ServicesArray } from "../../data";
import styles from "../../style";
import ServicesCard from "./ServicesCard";

export default function Services() {
  return (
    <section id="Services" className={`${styles.paddingX}  `}>
      {" "}
      <h1 className="text-main text-center my-3 text-[20px] font-bold">
        <span> Services</span>
      </h1>
      <h3 className="font-bold text-center text-[40px] my-3">Our Services</h3>
      <div
        className="
      grid 
      services
    
      grid-cols-1
      sm:grid-cols-2 
      md:grid-cols-3 
      lg:grid-cols-4
      
      gap-6 "
      >
        {ServicesArray.map((item, index) => (
          <div
            key={index}
            className="col-span-1 flex flex-col gap-y-3 shadow-lg p-10 "
          >
            <ServicesCard item={item} />
          </div>
        ))}
      </div>
    </section>
  );
}
