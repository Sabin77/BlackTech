import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";

import { FaAngleDown } from "react-icons/fa";

export default function SideMenu() {
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <Button>Open Menu</Button>
        </SheetTrigger>
        <SheetContent className=" text-[#5FBF8F]   w-64  ">
          <div className=" text-2xl font-poetsen cursor-pointer text-center ">
            ShoesFreak
          </div>
          <div className=" flex  w-64 -ml-6 flex-col mt-4 justify-center items-center text-2xl font-sedan text-gray-500 ">
            <ul className=" w-full ">
              <li className=" ">
                <Accordion type="single" collapsible className=" py-4">
                  <AccordionItem value="item-1" className="">
                    <div className=" flex pl-4 hover:bg-gray-100 cursor-pointer">
                      Formal Shoes
                      <AccordionTrigger>
                        <FaAngleDown className=" mx-2  h-4 w-4 shrink-0 transition-transform duration-200" />
                      </AccordionTrigger>
                    </div>
                    <div className=" pl-6">
                      <AccordionContent className="mt-2 pl-3 text-xl hover:bg-gray-100">
                        Oxford Shoes
                      </AccordionContent>
                      <AccordionContent className=" pl-3  text-xl hover:bg-gray-100">
                        Derby Shoes
                      </AccordionContent>
                      <AccordionContent className=" pl-3 text-xl hover:bg-gray-100">
                        Brogue Shoes
                      </AccordionContent>
                      <AccordionContent className=" pl-3 text-xl hover:bg-gray-100">
                        {" "}
                        Monk Strap Shoes
                      </AccordionContent>
                    </div>
                  </AccordionItem>
                </Accordion>
              </li>
              <li className=" ">
                <Accordion type="single" collapsible className=" py-4">
                  <AccordionItem value="item-1" className="">
                    <div className=" flex pl-4 hover:bg-gray-100 cursor-pointer">
                      Casual Shoes
                      <AccordionTrigger>
                        <FaAngleDown className=" mx-2  h-4 w-4 shrink-0 transition-transform duration-200" />
                      </AccordionTrigger>
                    </div>
                    <div className=" pl-6">
                      <AccordionContent className="mt-2 pl-3 text-xl hover:bg-gray-100">
                        Sneakers
                      </AccordionContent>
                      <AccordionContent className=" pl-3  text-xl hover:bg-gray-100">
                        Loafers
                      </AccordionContent>
                      <AccordionContent className=" pl-3 text-xl hover:bg-gray-100">
                        Boat Shoes
                      </AccordionContent>
                      <AccordionContent className=" pl-3 text-xl hover:bg-gray-100">
                        {" "}
                        Espadrilles
                      </AccordionContent>
                      <AccordionContent className=" pl-3 text-xl hover:bg-gray-100">
                        Moccasins
                      </AccordionContent>
                      <AccordionContent className=" pl-3 text-xl hover:bg-gray-100">
                        Sandals
                      </AccordionContent>
                    </div>
                  </AccordionItem>
                </Accordion>
              </li>
              <li className=" ">
                <Accordion type="single" collapsible className=" py-4">
                  <AccordionItem value="item-1" className="">
                    <div className=" flex pl-4 hover:bg-gray-100 cursor-pointer">
                      Sports Shoes
                      <AccordionTrigger>
                        <FaAngleDown className=" mx-2  h-4 w-4 shrink-0 transition-transform duration-200" />
                      </AccordionTrigger>
                    </div>
                    <div className=" pl-6">
                      <AccordionContent className="mt-2 pl-3 text-xl hover:bg-gray-100">
                        Running Shoes
                      </AccordionContent>
                      <AccordionContent className=" pl-3  text-xl hover:bg-gray-100">
                        Basketball Shoes
                      </AccordionContent>
                      <AccordionContent className=" pl-3 text-xl hover:bg-gray-100">
                        Soccer (Football) Cleats
                      </AccordionContent>
                      <AccordionContent className=" pl-3 text-xl hover:bg-gray-100">
                        {" "}
                        Tennis Shoes
                      </AccordionContent>
                      <AccordionContent className=" pl-3  text-xl hover:bg-gray-100">
                        Golf Shoes
                      </AccordionContent>
                      <AccordionContent className=" pl-3  text-xl hover:bg-gray-100">
                        Cycling Shoes
                      </AccordionContent>
                      <AccordionContent className=" pl-3  text-xl hover:bg-gray-100">
                        Baseball Cleats
                      </AccordionContent>
                      <AccordionContent className=" pl-3  text-xl hover:bg-gray-100">
                        Cricket Shoes
                      </AccordionContent>
                      <AccordionContent className=" pl-3  text-xl hover:bg-gray-100">
                        Volleyball Shoes
                      </AccordionContent>
                    </div>
                  </AccordionItem>
                </Accordion>
              </li>
              <li className=" ">
                <Accordion type="single" collapsible className=" py-4">
                  <AccordionItem value="item-1" className="">
                    <div className=" flex pl-4 hover:bg-gray-100 cursor-pointer">
                      Boots
                      <AccordionTrigger>
                        <FaAngleDown className=" mx-2  h-4 w-4 shrink-0 transition-transform duration-200" />
                      </AccordionTrigger>
                    </div>
                    <div className=" pl-6">
                      <AccordionContent className="mt-2 pl-3 text-xl hover:bg-gray-100">
                        Chelsea Boots
                      </AccordionContent>
                      <AccordionContent className=" pl-3  text-xl hover:bg-gray-100">
                        Chukka Boots
                      </AccordionContent>
                      <AccordionContent className=" pl-3 text-xl hover:bg-gray-100">
                        Desert Boots
                      </AccordionContent>
                      <AccordionContent className=" pl-3 text-xl hover:bg-gray-100">
                        Combat Boots
                      </AccordionContent>
                      <AccordionContent className=" pl-3 text-xl hover:bg-gray-100">
                        Hiking Boots
                      </AccordionContent>
                    </div>
                  </AccordionItem>
                </Accordion>
              </li>
            </ul>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
