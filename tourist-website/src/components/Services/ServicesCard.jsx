import React from "react";

const ServicesCard = ({ item }) => {
  return (
    <div className="">
      <div className="text-main text-[80px] ">{item.icon}</div>
      <div className="font-bold text-[20px] ">{item.title}</div>
      <div className="text-gray-500">{item.text}</div>
    </div>
  );
};

export default ServicesCard;
