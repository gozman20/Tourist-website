import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import styles from "../style";
import destination1 from "@/assets/img/destination-1.jpg";
import destination2 from "@/assets/img/destination-2.jpg";
import destination3 from "@/assets/img/destination-3.jpg";
import destination4 from "@/assets/img/destination-4.jpg";
import { useInView } from "react-intersection-observer";

export default function Destination() {
  //Animation
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const animation = useAnimation();
  useEffect(() => {
    // console.log(inView);
    //if in view,the below code runs
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1,
          // bounce: 2,
        },
      });
    }
    //When not in view, the below code applies
    if (!inView) {
      animation.start({
        y: 200,
        opacity: 0,
        transition: { duration: 0 },
        once: true,
      });
    }
  }, [inView]);
  return (
    <section className={`${styles.paddingX} ${styles.paddingY}  `}>
      {" "}
      <div>
        <h1 className="text-main text-center my-3 text-[20px] font-bold">
          <span> Destination</span>
        </h1>
        <h3 className="font-bold text-center text-[40px] my-3">
          Popular Destination
        </h3>
      </div>
      <div ref={ref} className="destination-container">
        <motion.div className="destination" animate={animation}>
          <div className="one">
            <img src={destination1} alt="" className="w-full h-full" />
          </div>
          <div className="two">
            <img src={destination2} alt="" className="w-full h-full" />
          </div>
          <div className="three">
            <img src={destination3} alt="" className="w-full h-full" />
          </div>
          <div className="four">
            <img src={destination4} alt="" className="w-full h-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
