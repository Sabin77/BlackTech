import React from "react";
import profile from "../assets/profile.png";

function SingleLatestCard({ img }) {
  return (
    <div className="w-64 m-3 shadow-md">
      <div className=" h-44 ">
        <img src={img} alt=" " />
      </div>
      <div className=" text-xs border-2 w-fit px-2 rounded-xl ml-2 my-1 bg-slate-100">
        {" "}
        Technology
      </div>
      <div className=" px-2 font-sedan font-semibold">
        {" "}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus adipisci
        unde nam
      </div>
      <div className=" flex items-center h-10 mt-3">
        <div className=" h-9 w-9 rounded-full border-2">
          <img src={profile} alt="" />
        </div>
        <p className=" text-xs px-1">Sandeep Lamichhane</p>
        <p className=" text-xs px-1">30th Aug, 2024</p>
      </div>
    </div>
  );
}

export default SingleLatestCard;
