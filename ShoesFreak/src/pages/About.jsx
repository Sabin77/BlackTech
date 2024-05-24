import React from "react";

function About() {
  return (
    <div
      id="about"
      className="flex flex-col items-center justify-center space-y-10 h-[500px] bg-[#458D69] text-center text-white"
    >
      <h1 className=" font-lilita text-3xl ">About</h1>
      <p className="px-5 sm:w-1/2 md:w-1/2 font-sedan">
        Welcome to ShoesFreak, Nepal's leading destination for genuine and
        imported products. We offer a diverse range of high-quality items, from
        electronics and fashion to beauty and home goods, sourced directly from
        reputable international suppliers
      </p>
    </div>
  );
}

export default About;
