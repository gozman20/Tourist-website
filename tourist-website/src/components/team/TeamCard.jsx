import React from "react";

const TeamCard = ({ item }) => {
  return (
    <div className="shadow">
      <div className="">
        <img src={item.image} alt="" className="w-full h-full" />
      </div>
      <div className="flex flex-row justify-center items-center text-main -mt-4">
        <div className="p-2  bg-white rounded-full border-b border-main">
          <div className="text-[25px]">{item.icon1}</div>
        </div>
        <div className="p-2  bg-white rounded-full border-b border-main">
          {" "}
          <div className="text-[25px]">{item.icon2}</div>
        </div>
        <div className="p-2  bg-white rounded-full border-b border-main">
          {" "}
          <div className="text-[25px]">{item.icon3}</div>
        </div>
      </div>
      <div className="text-center mt-8">
        <h3 className="text-[20px]">Fullname</h3>
        <h3 className="text-gray-500 mb-5"> Designation</h3>
      </div>
    </div>
  );
};

export default TeamCard;
