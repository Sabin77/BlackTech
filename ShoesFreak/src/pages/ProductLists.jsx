import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import casual1 from "../assets/cas1.jpeg";
import casual2 from "../assets/cas2.jpg";
import casual3 from "../assets/cas3.jpg";
import casual4 from "../assets/cas4.jpg";
import casual5 from "../assets/cas5.jpg";
import casual from "../assets/casual.jpg";
import { useState } from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

function ProductLists() {
  //   const [rating, setRating] = useState(0);
  return (
    <div className=" flex">
      {/* <div className=" w-1/6 h-lvh border-2"> Shoes Lists </div> */}
      <Sidebar>
        <Menu>
          <SubMenu label="Formal" className=" text-lg ">
            <MenuItem> Oxford Shoes </MenuItem>
            <MenuItem> Derby Shoes </MenuItem>
            <MenuItem> Brogue Shoes </MenuItem>
            <MenuItem> Monk Strap Shoes</MenuItem>
            <MenuItem> Loafers</MenuItem>
          </SubMenu>
          <SubMenu label="Casual" className=" text-lg">
            <MenuItem> Sneakers </MenuItem>
            <MenuItem>Loafers </MenuItem>
            <MenuItem> Boat Shoes</MenuItem>
            <MenuItem> Espadrilles</MenuItem>
            <MenuItem> Slip-Ons </MenuItem>
            <MenuItem> Sandals</MenuItem>
            <MenuItem> Moccasins</MenuItem>
          </SubMenu>
          <SubMenu label="Sports" className="text-lg">
            <MenuItem> Running Shoes </MenuItem>
            <MenuItem>Basketball Shoes </MenuItem>
            <MenuItem>Soccer (Football) Cleats </MenuItem>
            <MenuItem> Tennis Shoes</MenuItem>
            <MenuItem> Golf Shoes</MenuItem>
            <MenuItem> Cycling Shoes</MenuItem>
            <MenuItem> Baseball Cleats</MenuItem>
            <MenuItem>Cricket Shoes </MenuItem>
            <MenuItem> Volleyball Shoes</MenuItem>
          </SubMenu>
          <SubMenu label="Boots" className="text-lg">
            <MenuItem> Chelsea Boots </MenuItem>
            <MenuItem>Chukka Boots </MenuItem>
            <MenuItem> Desert Boots</MenuItem>
            <MenuItem> Combat Boots</MenuItem>
            <MenuItem> Hiking Boots</MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>

      <div className=" w-full h-full border-2 bg-[#e3f2eb]">
        <div className=" text-center m-3">
          <h1 className=" text-4xl font-lilita"> Formal Shoes</h1>
        </div>
        <div className="  flex justify-center flex-wrap h-full   mx-20">
          <div className=" h-96 w-60 m-5 bg-white hover:-translate-y-1 hover:scale-110 hover:shadow-xl duration-300">
            <div className=" h-2/3 px-2 py-8">
              <img className=" bg-contain h-fit" src={casual} alt="photo" />
            </div>
            <div className=" px-2">
              <h1 className=" font-semibold text-gray-500">
                THis is the title of the product It can be longer.
              </h1>
              <p className=" my-1">Rs. 9999</p>
              <p className=" my-1 text-xs text-gray-400 line-through">
                Rs. 11999
              </p>
              <div className=" flex text-xs">
                {[1, 2, 3, 4, 5].map((star) => {
                  return (
                    <span
                      className="start"
                      style={{
                        cursor: "pointer",
                        color: 4 >= star ? "gold" : "gray",
                        fontSize: `20px`,
                      }}
                    >
                      {" "}
                      ★{" "}
                    </span>
                  );
                })}
                <span>
                  <p className="text-gray-400">-(56)</p>
                </span>
              </div>
            </div>
          </div>
          <div className=" h-96 w-60 m-5  bg-white hover:-translate-y-1 hover:scale-110 hover:shadow-xl duration-300">
            <div className="h-2/3 px-2 py-8 ">
              <img className=" bg-contain h-fit" src={casual1} alt="photo" />
            </div>
            <div className=" px-2">
              <h1 className=" font-semibold text-gray-500">
                THis is the title of the product It can be longer.
              </h1>
              <p className=" my-1">Rs. 9999</p>
              <p className=" my-1 text-xs text-gray-400 line-through">
                Rs. 11999
              </p>
              <div className=" flex text-xs">
                {[1, 2, 3, 4, 5].map((star) => {
                  return (
                    <span
                      className="start"
                      style={{
                        cursor: "pointer",
                        color: 4 >= star ? "gold" : "gray",
                        fontSize: `20px`,
                      }}
                    >
                      {" "}
                      ★{" "}
                    </span>
                  );
                })}
                <span>
                  <p className="text-gray-400">-(56)</p>
                </span>
              </div>
            </div>
          </div>{" "}
          <div className=" h-96 w-60 m-5  bg-white hover:-translate-y-1 hover:scale-110 hover:shadow-xl duration-300">
            <div className=" h-2/3 px-2 py-8 mb-2">
              <img className=" bg-contain h-fit" src={casual2} alt="photo" />
            </div>
            <div className=" px-2">
              <h1 className=" font-semibold text-gray-500">
                THis is the title of the product It can be longer.
              </h1>
              <p className=" my-1">Rs. 9999</p>
              <p className=" my-1 text-xs text-gray-400 line-through">
                Rs. 11999
              </p>
              <div className=" flex text-xs">
                {[1, 2, 3, 4, 5].map((star) => {
                  return (
                    <span
                      className="start"
                      style={{
                        cursor: "pointer",
                        color: 4 >= star ? "gold" : "gray",
                        fontSize: `20px`,
                      }}
                    >
                      {" "}
                      ★{" "}
                    </span>
                  );
                })}
                <span>
                  <p className="text-gray-400">-(56)</p>
                </span>
              </div>
            </div>
          </div>
          <div className=" h-96 w-60 m-5  bg-white hover:-translate-y-1 hover:scale-110 hover:shadow-xl duration-300">
            <div className=" h-2/3 px-2 py-8">
              <img className=" bg-contain h-fit" src={casual3} alt="photo" />
            </div>
            <div className=" px-2">
              <h1 className=" font-semibold text-gray-500">
                THis is the title of the product It can be longer.
              </h1>
              <p className=" my-1">Rs. 9999</p>
              <p className=" my-1 text-xs text-gray-400 line-through">
                Rs. 11999
              </p>
              <div className=" flex text-xs">
                {[1, 2, 3, 4, 5].map((star) => {
                  return (
                    <span
                      className="start"
                      style={{
                        cursor: "pointer",
                        color: 4 >= star ? "gold" : "gray",
                        fontSize: `20px`,
                      }}
                    >
                      {" "}
                      ★{" "}
                    </span>
                  );
                })}
                <span>
                  <p className="text-gray-400">-(56)</p>
                </span>
              </div>
            </div>
          </div>
          <div className=" h-96 w-60 m-5  bg-white hover:-translate-y-1 hover:scale-110 hover:shadow-xl duration-300">
            <div className=" h-2/3 px-2 py-8">
              <img className=" bg-contain h-fit" src={casual4} alt="photo" />
            </div>
            <div className=" px-2">
              <h1 className=" font-semibold text-gray-500">
                THis is the title of the product It can be longer.
              </h1>
              <p className=" my-1">Rs. 9999</p>
              <p className=" my-1 text-xs text-gray-400 line-through">
                Rs. 11999
              </p>
              <div className=" flex text-xs">
                {[1, 2, 3, 4, 5].map((star) => {
                  return (
                    <span
                      className="start"
                      style={{
                        cursor: "pointer",
                        color: 4 >= star ? "gold" : "gray",
                        fontSize: `20px`,
                      }}
                    >
                      {" "}
                      ★{" "}
                    </span>
                  );
                })}
                <span>
                  <p className="text-gray-400">-(56)</p>
                </span>
              </div>
            </div>
          </div>
          <div className=" h-96 w-60 m-5  bg-white hover:-translate-y-1 hover:scale-110 hover:shadow-xl duration-300">
            <div className=" h-2/3 px-2 py-8">
              <img className=" bg-contain h-fit" src={casual5} alt="photo" />
            </div>
            <div className=" px-2">
              <h1 className=" font-semibold text-gray-500">
                THis is the title of the product It can be longer.
              </h1>
              <p className=" my-1">Rs. 9999</p>
              <p className=" my-1 text-xs text-gray-400 line-through">
                Rs. 11999
              </p>
              <div className=" flex text-xs">
                {[1, 2, 3, 4, 5].map((star) => {
                  return (
                    <span
                      className="start"
                      style={{
                        cursor: "pointer",
                        color: 4 >= star ? "gold" : "gray",
                        fontSize: `20px`,
                      }}
                    >
                      {" "}
                      ★{" "}
                    </span>
                  );
                })}
                <span>
                  <p className="text-gray-400">-(56)</p>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex justify-center">
          <button className=" flex text-2xl font-josefin shadow-lg my-10 px-4 py-1 bg-[#458D69] text-white hover:bg-[#356e52] hover:-translate-y-1 hover:scale-110 duration-200 ">
            See More
            <MdOutlineKeyboardDoubleArrowRight className=" self-center text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductLists;
