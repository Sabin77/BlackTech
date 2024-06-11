import SingleLatestCard from "@/components/SingleLatestCard";
import React from "react";
import bgimage from "../assets/Image.png";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import card4 from "../assets/card4.png";
import card5 from "../assets/card5.png";
import profile from "../assets/profile2.png";

function Home() {
  return (
    <div className=" flex justify-center w-screen">
      <div className=" border-2 w-4/6 ">
        <div className="flex flex-col  items-center mb-44 ">
          <div className="relative border-2 mt-6 w-9/12 h-3/6 rounded-lg ">
            <img src={bgimage} alt="bg-image" />
            <div className=" absolute left-10 -bottom-16 rounded-lg shadow-md w-96 h-52 border-2 bg-white">
              <div className="flex items-center text-xs h-6 border-2 w-fit px-2 rounded-xl ml-2 my-1 text-white bg-[#4B6BFB] mt-2">
                {" "}
                Technology
              </div>
              <div className=" text-xl font-sedan font-semibold mx-4 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                unde qui quisquam doloremque aliquid at mollitia, nisi, quasi
              </div>
              <div className=" flex items-center h-10 mt-3 mx-4">
                <div className=" h-9 w-9 rounded-full border-2">
                  <img src={profile} alt="" />
                </div>
                <p className=" text-sm px-1 text-gray-500">
                  Sandeep Lamichhane
                </p>
                <p className=" text-xs px-1 ml-3">30th Aug, 2024</p>
              </div>
            </div>
          </div>
        </div>

        <p className=" ml-10 font-bold text-xl text-center"> Latest Posts</p>
        <div className="flex flex-wrap justify-center">
          <SingleLatestCard img={card1} />
          <SingleLatestCard img={card2} />
          <SingleLatestCard img={card3} />
          <SingleLatestCard img={card4} />
          <SingleLatestCard img={card5} />
        </div>
        <div className="flex justify-center">
          <button className=" px-4 border-2 py-2 my-2 hover:bg-[#4B6BFB]">
            See More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
