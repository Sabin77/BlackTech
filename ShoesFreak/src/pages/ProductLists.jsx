import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import ProductList from "../productslist.json";
import SingleProduct from "@/components/SingleProduct";

function ProductLists() {
  //   const [rating, setRating] = useState(0);

  return (
    <div className=" flex ">
      {/* <div className=" w-1/6 h-lvh border-2"> Shoes Lists </div> */}
      <Sidebar className=" hidden text-gray-500 lg:flex ">
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
        <div className="  flex justify-center  flex-wrap h-full  ">
          {ProductList.map((item) => (
            <SingleProduct item={item} />
          ))}
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
