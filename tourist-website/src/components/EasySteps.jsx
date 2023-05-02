import React from "react";
import { FaPlane } from "react-icons/fa";
import { BsCurrencyDollar } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
import styles from "../style";

export default function EasySteps() {
  return (
    <section className={`${styles.paddingX} ${styles.paddingY} `}>
      <h1 className="text-[20px] font-bold text-center mb-16">
        <span>Process</span>
      </h1>
      <h3 className="font-bold text-center text-[40px] my-3">In Easy steps</h3>
      {/* center the items-container */}
      <div className="grid place-items-center">
        {/* grid-items container */}
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-16">
          {/* item 1 */}
          <div className="border border-main w-[300px] p-3 slideInBottom">
            <div className="p-1 bg-main w-[100px] h-[100px] mx-auto flex items-center justify-center rounded-full -mt-[70px]">
              {" "}
              <TbWorld className="text-[80px] text-white" />
            </div>

            <h3 className="mt-[50px] text-center font-bold text-[20px] mb-2">
              Choose A Destination
            </h3>
            <p className="text-center mb-2">
              Tempor erat elitr rebum clita dolor diam ipsum sit diam amet diam
              eos erat ipsum et lorem et sit sed stet lorem sit
            </p>
          </div>
          {/* item2 */}
          <div className="border border-main w-[300px] p-3">
            <div className="p-1 bg-main w-[100px] h-[100px] mx-auto flex items-center justify-center rounded-full -mt-[70px]">
              {" "}
              <BsCurrencyDollar className="text-[80px] text-white" />
            </div>

            <h3 className="mt-[50px] text-center font-bold text-[20px] mb-2">
              Pay Online
            </h3>
            <p className="text-center mb-2">
              Tempor erat elitr rebum clita dolor diam ipsum sit diam amet diam
              eos erat ipsum et lorem et sit sed stet lorem sit
            </p>
          </div>
          {/* item 3 */}
          <div className="border border-main w-[300px] p-3">
            <div className="p-1 bg-main w-[100px] h-[100px] mx-auto flex items-center justify-center rounded-full -mt-[70px]">
              {" "}
              <FaPlane className="text-[80px] text-white" />
            </div>

            <h3 className="mt-[50px] text-center font-bold text-[20px] mb-2">
              Fly Today
            </h3>
            <p className="text-center mb-2">
              Tempor erat elitr rebum clita dolor diam ipsum sit diam amet diam
              eos erat ipsum et lorem et sit sed stet lorem sit
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
