import React from "react";
import profile from "../assets/profile2.png";

function SinglePost() {
  return (
    <div className=" flex justify-center w-screen">
      <div className=" border-2 w-4/6 ">
        <div className="flex items-center text-xs h-6 border-2 w-fit px-2 rounded-xl ml-2 my-1 text-white bg-[#4B6BFB] mt-2">
          {" "}
          Technology
        </div>
        <h1 className=" text-5xl font-sedan font-semibold">
          The Impact of Technology on the Workplace: How Technology is Changing
        </h1>
        <div className=" flex items-center h-10 mt-3 mx-4">
          <div className=" h-9 w-9 rounded-full border-2">
            <img src={profile} alt="" />
          </div>
          <p className=" text-sm px-1 text-gray-500 font-semibold">
            Sandeep Lamichhane
          </p>
          <p className=" text-xs px-1 ml-3 text-gray-500 font-semibold">
            30th Aug, 2024
          </p>
        </div>
        <div className="h-[460px] border-2 my-6"> Photo Section</div>
        <div>
          <p className=" text-xl font-serif font-medium">
            Traveling is an enriching experience that opens up new horizons,
            exposes us to different cultures, and creates memories that last a
            lifetime. However, traveling can also be stressful and overwhelming,
            especially if you don't plan and prepare adequately. In this blog
            article, we'll explore tips and tricks for a memorable journey and
            how to make the most of your travels.
            <br />
            <br />
            One of the most rewarding aspects of traveling is immersing yourself
            in the local culture and customs. This includes trying local
            cuisine, attending cultural events and festivals, and interacting
            with locals. Learning a few phrases in the local language can also
            go a long way in making connections and showing respect.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SinglePost;
