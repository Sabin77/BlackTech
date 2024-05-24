import React from "react";
import videobg from "../assets/shoe.mp4";
import { TypeAnimation } from "react-type-animation";

function Home() {
  return (
    <div className=" flex justify-center mx-2">
      <div className="flex relative items-center justify-center h-[500px] w-[1200px] border-2 mt-10 mx-3 text-center">
        <TypeAnimation
          className="flex absolute text-5xl sm:text-7xl font-poetsen"
          style={{ whiteSpace: "pre-line", height: "195px", display: "block" }}
          sequence={[
            "Walk with more Confidence", // actual line-break inside string literal also gets animated in new line, but ensure there are no leading spaces
            1000,
            "Feel the genuine product",
            1000,
            "",
          ]}
          repeat={Infinity}
        />
        <video
          className=" object-cover w-full h-full"
          src={videobg}
          autoPlay
          loop
          muted
        />
      </div>
    </div>
  );
}

export default Home;
