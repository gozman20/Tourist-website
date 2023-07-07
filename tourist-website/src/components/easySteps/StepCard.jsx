import React from "react";

const StepCard = ({ item }) => {
  return (
    <div className="border border-main  p-3 slideInBottom">
      <div className="p-1 bg-main w-[60px] h-[60px] mx-auto flex items-center justify-center rounded-full -mt-[50px]">
        {" "}
        {/* <TbWorld className="text-[80px] text-white" /> */}
        <div className="text-[40px] text-white">{item.icon}</div>
      </div>

      <h3 className="mt-[50px] text-center font-bold text-[20px] mb-2">
        {item.title}
      </h3>
      <p className="text-center mb-2">{item.text}</p>
    </div>
  );
};

export default StepCard;
