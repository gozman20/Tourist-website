import React from "react";
import styles from "../style";
import team1 from "@/assets/img/team-1.jpg";
import team2 from "@/assets/img/team-2.jpg";
import team3 from "@/assets/img/team-3.jpg";
import team4 from "@/assets/img/team-4.jpg";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";
export default function Team() {
  return (
    <section
      className={`${styles.paddingX} ${styles.paddingY} grid place-items-center`}
    >
      <h1 className="text-[20px] font-bold mb-2">
        <span>Travel Guide</span>
      </h1>
      <h3 className="mb-6 text-[20px] md:text-[40px] font-bold">
        Meet Our Guide
      </h3>
      <div className=" grid lg:grid-cols-4 md:grid-cols-2 gap-10">
        {/* item 1 */}
        <div className="shadow-lg w-[250px]">
          <div className="w-[250px]">
            <img src={team1} alt="" className="w-full h-full" />
          </div>
          <div className="flex flex-row justify-center items-center text-main -mt-4">
            <div className="p-2  bg-white rounded-full border-b border-main">
              <AiFillFacebook className="text-[25px]" />
            </div>
            <div className="p-2  bg-white rounded-full border-b border-main">
              {" "}
              <AiOutlineTwitter className="text-[25px]" />
            </div>
            <div className="p-2  bg-white rounded-full border-b border-main">
              {" "}
              <AiOutlineInstagram className="text-[25px]" />{" "}
            </div>
          </div>
          <div className="text-center mt-8">
            <h3 className="text-[20px]">Fullname</h3>
            <h3 className="text-gray-500 mb-5"> Designation</h3>
          </div>
        </div>
        <div className="shadow-lg w-[250px]">
          <div className="w-[250px]">
            <img src={team2} alt="" className="w-full h-full" />
          </div>
          <div className="flex flex-row justify-center items-center text-main -mt-4">
            <div className="p-2  bg-white rounded-full border-b border-main">
              <AiFillFacebook className="text-[25px]" />
            </div>
            <div className="p-2  bg-white rounded-full border-b border-main">
              {" "}
              <AiOutlineTwitter className="text-[25px]" />
            </div>
            <div className="p-2  bg-white rounded-full border-b border-main">
              {" "}
              <AiOutlineInstagram className="text-[25px]" />{" "}
            </div>
          </div>
          <div className="text-center mt-8">
            <h3 className="text-[20px]">Fullname</h3>
            <h3 className="text-gray-500 mb-5"> Designation</h3>
          </div>
        </div>
        <div className="shadow-lg w-[250px]">
          <div className="w-[250px]">
            <img src={team3} alt="" className="w-full h-full" />
          </div>
          <div className="flex flex-row justify-center items-center text-main -mt-4">
            <div className="p-2  bg-white rounded-full border-b border-main">
              <AiFillFacebook className="text-[25px]" />
            </div>
            <div className="p-2  bg-white rounded-full border-b border-main">
              {" "}
              <AiOutlineTwitter className="text-[25px]" />
            </div>
            <div className="p-2  bg-white rounded-full border-b border-main">
              {" "}
              <AiOutlineInstagram className="text-[25px]" />{" "}
            </div>
          </div>
          <div className="text-center mt-8">
            <h3 className="text-[20px]">Fullname</h3>
            <h3 className="text-gray-500 mb-5"> Designation</h3>
          </div>
        </div>
        <div className="shadow-lg w-[250px]">
          <div className="w-[250px]">
            <img src={team4} alt="" className="w-full h-full" />
          </div>
          <div className="flex flex-row justify-center items-center text-main -mt-4">
            <div className="p-2  bg-white rounded-full border-b border-main">
              <AiFillFacebook className="text-[25px]" />
            </div>
            <div className="p-2  bg-white rounded-full border-b border-main">
              {" "}
              <AiOutlineTwitter className="text-[25px]" />
            </div>
            <div className="p-2  bg-white rounded-full border-b border-main">
              {" "}
              <AiOutlineInstagram className="text-[25px]" />{" "}
            </div>
          </div>
          <div className="text-center mt-8">
            <h3 className="text-[20px]">Fullname</h3>
            <h3 className="text-gray-500 mb-5"> Designation</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
