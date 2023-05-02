import React from "react";
import styles from "../style";
import { useState, useEffect } from "react";
import { ImLocation2 } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  const [header, setheader] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setheader(true) : setheader(false);
    });
  });

  return (
    <header
      className={`${
        header ? "bg-white py-6" : "bg-none py-8 border-b border-main"
      } fixed z-50 w-full transition-all duration-500 ${styles.paddingX}`}
    >
      <div className="flex flex-row justify-between items-center ">
        <div className="text-main text-[25px] md:text-[40px] flex flex-row justify-center items-center gap-x-3 ">
          <ImLocation2 className=" " />
          Tourist
        </div>
        <nav
          className={`md:flex flex-row items-center  gap-x-3 text-[18px] hidden ${
            header ? "text-dark/70" : "text-white "
          }`}
        >
          <a href="#About" className="hover:border-b hover:border-main">
            About
          </a>

          <a href="#Home" className="hover:border-b hover:border-main">
            Home
          </a>

          <a href="#Services" className="hover:border-b hover:border-main">
            Services
          </a>

          <a href="#Packages" className="hover:border-b hover:border-main">
            Packages
          </a>
          <a href="#Testimonial" className="hover:border-b hover:border-main">
            Testimonial
          </a>
          <a href="#Contacts" className="hover:border-b hover:border-main">
            Contacts
          </a>
          <button className="bg-main rounded-lg px-3 py-1">Register</button>
        </nav>
        <div
          className={`md:hidden text-[25px] ${
            header ? "text-dark/70" : "text-white"
          }`}
        >
          <GiHamburgerMenu />
        </div>
      </div>
    </header>
  );
}
