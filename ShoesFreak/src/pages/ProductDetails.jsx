import React, { useState } from "react";
import formal from "../assets/formal.jpg";
import casual from "../assets/casual.jpg";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useDispatch } from "react-redux";
import { Item } from "@radix-ui/react-accordion";

function ProductDetails() {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleAddToCart = () => {};
  return (
    <div className=" flex text-gray-600 my-20">
      <div className="Photo Section flex flex-1 flex-row-reverse ">
        <div className="flex w-2/3 order-last ">
          <div>
            <Carousel
              opts={{
                align: "start",
              }}
              orientation="vertical"
              className="w-24 max-w-xs top-14"
            >
              <CarouselContent className="-mt-1 h-[400px]">
                <CarouselItem className="pt-1 -my-1 sm:basis-1/2 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card>
                      <CardContent className="   flex items-center justify-center p-6">
                        <img src={formal} alt="" />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                <CarouselItem className="pt-1 -my-1 sm:basis-1/2 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card>
                      <CardContent className="  flex items-center justify-center p-6">
                        <img src={casual} alt="" />{" "}
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                <CarouselItem className="pt-1 -my-1 sm:basis-1/2 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card>
                      <CardContent className="   flex items-center justify-center p-6">
                        <img src={casual} alt="" />{" "}
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                <CarouselItem className="pt-1 -my-1 sm:basis-1/2 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card>
                      <CardContent className="   flex items-center justify-center p-6">
                        <img src={formal} alt="" />{" "}
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
          <div className=" flex justify-center items-center w-full border-yellow-400">
            <img src={casual} alt="" className="" />
          </div>
        </div>
      </div>
      <div className="Description flex-1 ">
        <div className=" w-2/3">
          <div className=" flex">
            <h1 className=" text-3xl font-semibold mb-4 ">
              Title of the Product
            </h1>
          </div>
          <div className=" flex items-center my-2">
            <h3 className=" font-semibold text-lg">Category:</h3>
            <p className=" mx-2"> Men , Formal</p>
          </div>
          <div className=" flex items-center my-2 mb-4">
            <h3 className=" font-semibold text-lg">Brand:</h3>
            <p className=" mx-2">Adidas</p>
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quae
            amet deserunt sed a officia laborum quidem architecto magni rem
            asperiores, non eius atque blanditiis commodi, eos assumenda id
            illum? Ea voluptatibus placeat voluptates nesciunt reiciendis optio
            aperiam
          </div>
          <div className=" text-2xl font-medium my-3">Rs: 19999</div>
          <div>
            <span className=" font-semibold text-lg">Size:</span>
            <button className=" border-2 m-2 px-2 hover:bg-gray-400">5</button>
            <button className=" border-2 m-2 px-2 hover:bg-gray-400">6</button>
            <button className=" border-2 m-2 px-2 hover:bg-gray-400">7</button>
            <button className=" border-2 m-2 px-2 hover:bg-gray-400">8</button>
          </div>
          <div className=" mt-4 mb-2">
            <span className=" font-semibold text-lg">Quantity:</span>
            <input
              type="number"
              className=" border-2 outline-none w-10 mx-2"
              value={quantity}
            />
          </div>
          <div className=" flex items-center">
            <span className=" font-semibold text-lg mr-3 my-3">Stock:</span>
            <p> In stock</p>
          </div>
          <div>
            <button className=" border-2 mr-3 px-3 py-2 bg-slate-800 text-white hover:bg-slate-600">
              Buy now
            </button>
            <button
              className=" border-2 mx-3 px-3 py-2 bg-slate-800 text-white hover:bg-slate-600"
              onClick={handleAddToCart}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
