import React from "react";
import { FaPlane } from "react-icons/fa";
import { BsCurrencyDollar } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
import styles from "../../style";
import StepCard from "./StepCard";

const steps = [
  {
    title: "Choose a destination",
    icon: <TbWorld />,
    text: "Tempor erat elitr rebum clita dolor diam ipsum sit diam amet diam lorem ipsum dor",
  },
  {
    title: "Choose a destination",
    icon: <BsCurrencyDollar />,
    text: "Tempor erat elitr rebum clita dolor diam ipsum sit diam amet diam lorem ipsum doror",
  },
  {
    title: "Choose a destination",
    icon: <FaPlane />,
    text: "Tempor erat elitr rebum clita dolor diam ipsum sit diam amet diam lorem ipsum dor",
  },
];

export default function EasySteps() {
  return (
    <section className={`${styles.paddingX} ${styles.paddingY} `}>
      <h1 className="text-[20px] font-bold text-center mb-3">
        <span>Process</span>
      </h1>
      <h3 className="font-bold text-center text-[40px] mb-16">
        In 3 Easy steps
      </h3>
      {/* center the items-container */}
      <div className="grid place-items-center">
        <div className="grid grid-col-1  md:grid-cols-2 lg:grid-cols-3 gap-10 ">
          {steps.map((item, index) => (
            <StepCard item={item} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
