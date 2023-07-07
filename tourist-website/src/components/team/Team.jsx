import React from "react";
import styles from "../../style";
import team1 from "@/assets/img/team-1.jpg";
import team2 from "@/assets/img/team-2.jpg";
import team3 from "@/assets/img/team-3.jpg";
import team4 from "@/assets/img/team-4.jpg";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";
import TeamCard from "./TeamCard";

const team = [
  {
    image: team1,
    icon1: <AiFillFacebook />,
    icon2: <AiOutlineInstagram />,
    icon3: <AiOutlineTwitter />,
  },
  {
    image: team2,
    icon1: <AiFillFacebook />,
    icon2: <AiOutlineInstagram />,
    icon3: <AiOutlineTwitter />,
  },
  {
    image: team3,
    icon1: <AiFillFacebook />,
    icon2: <AiOutlineInstagram />,
    icon3: <AiOutlineTwitter />,
  },
  {
    image: team4,
    icon1: <AiFillFacebook />,
    icon2: <AiOutlineInstagram />,
    icon3: <AiOutlineTwitter />,
  },
];
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
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {team.map((item, index) => (
          <TeamCard item={item} key={index} />
        ))}
      </div>
    </section>
  );
}
