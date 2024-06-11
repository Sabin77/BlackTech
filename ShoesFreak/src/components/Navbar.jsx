import React, { useEffect, useState } from "react";
import data from "../templatedata.json";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";
import { TiThMenu } from "react-icons/ti";
import { Link, useNavigate } from "react-router-dom";
import { HashLink as Link1 } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import { auth } from "@/config/Config";
import { FaAngleDown } from "react-icons/fa";
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
import SearchBar from "./SearchBar";
import { open } from "./State/Slice/CheckOutSlice";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";

function Navbar({ user, cartAmount }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { amount } = useSelector((state) => state.cart);
  const [searchTerm, setSearchTerm] = useState("");
  console.log(searchTerm);

  const location = useLocation();

  const isHomePage = location.pathname === "/";

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Error logging out: ", error);
    }
  };

  return (
    <div className=" flex sticky top-0 border-2 shadow-md bg-white h-16 z-10">
      <div className="flex w-2/3  lg:flex-1 items-center pl-5  place-content-between ">
        <Link to="/">
          <span className="flex-1 text-2xl font-poetsen cursor-pointer">
            ShoesFreak
          </span>
        </Link>
        <div className="hidden relative justify-center  mt-1 flex-1  sm:flex mx-5 text-gray-500 ">
          <SearchBar data={data} />
        </div>
      </div>

      {isHomePage && (
        <div className="hidden  xl:flex items-center flex-1  justify-center">
          <ul className=" flex text-lg font-playfair space-x-16 ">
            <li className="hover:text-[#458D69] cursor-pointer">
              <Link1 smooth to="#">
                Home
              </Link1>
            </li>
            <li className="hover:text-[#458D69] cursor-pointer">
              <Link1 smooth to="#our-products">
                Shop
              </Link1>
            </li>
            <li className="hover:text-[#458D69] cursor-pointer">
              <Link1 smooth to="#about">
                About
              </Link1>
            </li>
            <li className="hover:text-[#458D69] cursor-pointer">
              <Link1 smooth to="#contact-us">
                Contact
              </Link1>
            </li>
          </ul>
        </div>
      )}
      {/* {isHomePage && (
        <div className="flex items-center px-5 text-2xl lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <TiThMenu />
            </SheetTrigger>
            <SheetContent className=" text-[#5FBF8F] h-[500px] mt-16">
              <div className=" text-2xl font-poetsen cursor-pointer text-center ">
                ShoesFreak
              </div>
              <div className=" flex flex-col h-[400px] mt-4 justify-center items-center text-2xl ">
                <SheetClose asChild>
                  <ul className=" space-y-14">
                    <li>
                      <Link1 smooth to="#">
                        HOME
                      </Link1>
                    </li>
                    <li>
                      <Link1 smooth to="#our-products">
                        SHOP
                      </Link1>
                    </li>
                    <li>
                      <Link1 smooth to="#about">
                        ABOUT
                      </Link1>
                    </li>
                    <li>
                      <Link1 smooth to="#contact-us">
                        CONTACT
                      </Link1>
                    </li>
                  </ul>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      )} */}

      <div className="flex flex-1 ">
        <div className="  flex items-center flex-1 justify-center ">
          <div className=" hidden sm:flex flex-1 ">
            <IoMdHeart className=" text-xl mx-4 mt-2 text-red-500 cursor-pointer" />

            <Link to="/cart">
              <div
                className=" flex justify-center items-center w-10 h-10  text-xl cursor-pointer"
                // onClick={() => dispatch(open())}
              >
                <FiShoppingCart />
                <div className="flex self-start justify-center items-center rounded-full bg-red-400 w-5 h-5 ">
                  <p className=" text-white text-sm">{cartAmount}</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="flex  items-center justify-center flex-1 lg:hidden">
            {isHomePage ? (
              <Sheet>
                <SheetTrigger asChild>
                  <TiThMenu className=" text-2xl" />
                </SheetTrigger>
                <SheetContent className=" text-[#5FBF8F] h-[500px] mt-16">
                  <div className=" text-2xl font-poetsen cursor-pointer text-center ">
                    ShoesFreak
                  </div>
                  <div className=" flex flex-col h-[400px] mt-4 justify-center items-center text-2xl ">
                    <SheetClose asChild>
                      <ul className=" space-y-14">
                        <li>
                          <Link1 smooth to="#">
                            HOME
                          </Link1>
                        </li>
                        <li>
                          <Link1 smooth to="#our-products">
                            SHOP
                          </Link1>
                        </li>
                        <li>
                          <Link1 smooth to="#about">
                            ABOUT
                          </Link1>
                        </li>
                        <li>
                          <Link1 smooth to="#contact-us">
                            CONTACT
                          </Link1>
                        </li>
                      </ul>
                    </SheetClose>
                  </div>
                </SheetContent>
              </Sheet>
            ) : (
              <Sheet>
                <SheetTrigger asChild>
                  <TiThMenu className=" text-2xl" />
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
            )}
          </div>
        </div>
        <div className="hidden  lg:flex items-center flex-1 justify-center font-playfair ">
          <FaRegUserCircle className=" text-xl mx-2" />

          {user ? (
            <>
              {user}
              <button
                className="  mx-4 px-3 rounded-md bg-[#5FBF8F] text-white py-1 hover:bg-[#458D69]"
                onClick={handleLogout}
              >
                Log Out
              </button>
            </>
          ) : (
            <Link to="/login">
              <button className=" mx-4 px-3 rounded-md bg-[#5FBF8F] text-white py-1 hover:bg-[#458D69]">
                Log In
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
