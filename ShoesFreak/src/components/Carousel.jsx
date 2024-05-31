import React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function CarouselOrientation() {
  return (
    <div className="  flex justify-center">
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
                <CardContent className=" border-2  flex items-center justify-center p-6">
                  <span className="text-3xl font-semibold">Hello</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="pt-1 -my-1 sm:basis-1/2 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className=" border-2  flex items-center justify-center p-6">
                  <span className="text-3xl font-semibold">Hello</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="pt-1 -my-1 sm:basis-1/2 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className=" border-2  flex items-center justify-center p-6">
                  <span className="text-3xl font-semibold">Hello</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="pt-1 -my-1 sm:basis-1/2 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className=" border-2  flex items-center justify-center p-6">
                  <span className="text-3xl font-semibold">Hello</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
