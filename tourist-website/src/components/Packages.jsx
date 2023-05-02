import React, { useEffect } from "react";
import styles from "../style";
import { BiCalendar } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import package1 from "@/assets/img/package-1.jpg";
import package2 from "@/assets/img/package-2.jpg";
import package3 from "@/assets/img/package-3.jpg";
import { AiTwotoneStar } from "react-icons/ai";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

export default function Packages() {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const animation = useAnimation();
  useEffect(() => {
    console.log(inView);
    //if in view,the below code runs
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 5,
          // bounce: 2,
        },
      });
    }
    //When not in view, the below code applies
    if (!inView) {
      animation.start({ y: 300, opacity: 0, transition: { duration: 0 } });
    }
  }, [inView]);
  return (
    <section
      id="Packages"
      className={`${styles.paddingX} ${styles.paddingY} grid place-items-center`}
      ref={ref}
    >
      <h1 className="font-bold text-[20px] text-main">
        <span>Packages</span>
      </h1>
      <h3 className="text-[25px] md:text-[40px] mb-3">Awesome Packages</h3>
      <motion.div
        animate={animation}
        className="grid lg:grid-cols-3 md:grid-cols-2 gap-10"
      >
        {/* card starts */}
        <div className="max-w-[350px] shadow-lg">
          <div>
            <img src={package1} alt="" />
          </div>
          <div className="flex flex-row justify-center items-center">
            <div className="flex flex-row gap-x-3 items-center border-r border-main px-3 px-3">
              <MdLocationOn className="text-main" />
              Thailand
            </div>
            <div className="flex flex-row gap-x-3 items-center border-r border-main px-3">
              <BiCalendar className="text-main" />3 days
            </div>
            <div className="flex flex-row gap-x-3 items-center px-3">
              <BsFillPersonFill className="text-main" />2 person
            </div>
          </div>
          <div>
            <h3 className="text-center font-bold my-4 text-[30px]">$144.00</h3>
            <div className="flex flex-row justify-center items-center text-main text-[20px]">
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiTwotoneStar />
            </div>
            <p className="text-center my-2 text-[18px] text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              voluptas dicta eos expedita ad est!
            </p>
          </div>
        </div>
        {/* card ends */}
        {/* card starts */}
        <div className="max-w-[350px] shadow-lg">
          <div>
            <img src={package2} alt="" />
          </div>
          <div className="flex flex-row justify-center items-center">
            <div className="flex flex-row gap-x-3 items-center border-r border-main px-3 px-3">
              <MdLocationOn className="text-main" />
              Thailand
            </div>
            <div className="flex flex-row gap-x-3 items-center border-r border-main px-3">
              <BiCalendar className="text-main" />3 days
            </div>
            <div className="flex flex-row gap-x-3 items-center px-3">
              <BsFillPersonFill className="text-main" />2 person
            </div>
          </div>
          <div>
            <h3 className="text-center font-bold my-4 text-[30px]">$144.00</h3>
            <div className="flex flex-row justify-center items-center text-main text-[20px]">
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiTwotoneStar />
            </div>
            <p className="text-center my-2 text-[18px] text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              voluptas dicta eos expedita ad est!
            </p>
          </div>
        </div>
        {/* card ends */}
        {/* card starts */}
        <div className="max-w-[350px] shadow-lg">
          <div>
            <img src={package3} alt="" />
          </div>
          <div className="flex flex-row justify-center items-center">
            <div className="flex flex-row gap-x-3 items-center border-r border-main px-3 px-3">
              <MdLocationOn className="text-main" />
              Thailand
            </div>
            <div className="flex flex-row gap-x-3 items-center border-r border-main px-3">
              <BiCalendar className="text-main" />3 days
            </div>
            <div className="flex flex-row gap-x-3 items-center px-3">
              <BsFillPersonFill className="text-main" />2 person
            </div>
          </div>
          <div>
            <h3 className="text-center font-bold my-4 text-[30px]">$144.00</h3>
            <div className="flex flex-row justify-center items-center text-main text-[20px]">
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiTwotoneStar />
            </div>
            <p className="text-center my-2 text-[18px] text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              voluptas dicta eos expedita ad est!
            </p>
          </div>
        </div>
        {/* card ends */}
      </motion.div>
    </section>
  );
}
