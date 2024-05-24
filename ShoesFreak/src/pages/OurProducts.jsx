import React from "react";
import athletic from "../assets/AthleticShoes.jpg";
import boots from "../assets/Boots.jpg";
import casual from "../assets/casual.jpg";
import formal from "../assets/formal.jpg";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";

const data = [
  {
    name: "Athletic",
    img: athletic,
    key: 1,
  },
  {
    name: "Casual",
    img: casual,
    key: 2,
  },
  {
    name: "Formal",
    img: formal,
    key: 3,
  },
  {
    name: "Boots",
    img: boots,
    key: 4,
  },
];

function OurProducts() {
  return (
    <div className="flex flex-col items-center h-full mb-10" id="our-products">
      <h1 className="text-4xl py-6 font-lilita">Our Products</h1>
      <div className="flex justify-center  md:flex  lg:w-[1000px]">
        <Carousel
          plugins={[Autoplay({ delay: 3000 })]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="max-w-80 sm:max-w-lg lg:max-w-3xl "
        >
          <CarouselContent className="ml-6  sm:-ml-4 lg:-ml-2  ">
            {data.map((data) => (
              <CarouselItem
                key={data.key}
                size={20}
                className="sm:basis-1/2 md:basis-1/2 lg:basis-1/3"
              >
                <Card className=" h-72 w-56 ml-3 shadow-lg ">
                  <img className=" bg-cover h-56 w-52 " src={data.img} alt="" />{" "}
                  <p className=" font-dancing text-2xl text-center text-[#5FBF8F] hover:text-[#458D69]">
                    {data.name}
                  </p>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div>
        <Link to="/productlists">
          <button className=" flex text-2xl font-josefin shadow-lg my-10 px-4 py-1 bg-[#458D69] text-white hover:bg-[#356e52] ">
            See More
            <MdOutlineKeyboardDoubleArrowRight className=" self-center text-2xl" />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default OurProducts;
