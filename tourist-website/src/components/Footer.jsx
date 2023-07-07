import React from "react";
import styles from "../style";
import { footer } from "../data";
import { ImLocation2 } from "react-icons/im";
import { AiOutlineMail, AiTwotonePhone } from "react-icons/ai";

export default function Footer() {
  return (
    <section className={`${styles.padding} bg-black/90 text-white grid `}>
      <div className="flex flex-wrap justify-between gap-x-5  gap-y-3 ">
        {/* Company */}
        <div>
          {" "}
          <h1 className="font-bold text-[25px] mb-3">Company</h1>
          <div className="">
            {footer.map((item, index) => (
              <div
                className="flex flex-row justify-start items-center gap-x-1"
                key={index}
              >
                <div className="text-[20px]">{item.icon}</div>
                <div className="text-[20px]">{item.title}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Contacts */}
        <div className=" ">
          <h1 className="text-[25px] mb-3">Contacts</h1>
          <div className=" flex items-center gap-x-2 text-[20px] mb-2">
            <ImLocation2 className="text-[20px]" />
            123 Street, New York, USA
          </div>
          <div className=" flex items-center gap-x-2 mb-2 text-[20px]">
            <AiTwotonePhone className="text-[20px] " />
            +012 345 67890
          </div>
          <div className=" flex items-center gap-x-2 mb-2 text-[20px]">
            <AiOutlineMail className="text-[20px]" />
            mail@domain.com
          </div>
          {/* Social media */}
          <div className="div"></div>
        </div>
        {/* NewSletter */}
        <div className="">
          <h1 className="text-[25px] mb-3">Newsletter</h1>
          <p className="text-[20px] max-w-[350px] mb-3">
            Dolor amet sit justo amet elitr clita ipsum elitr est.
          </p>
          <div className="relative h-[35px] ">
            <input type="text" className="h-full w-[78%] outline-none" />
            <button className="absolute p-2 h-[35px] bg-main w-[80px]">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
