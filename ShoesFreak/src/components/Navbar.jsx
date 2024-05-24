import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";
import { TiThMenu } from "react-icons/ti";
import ReactSearchBox from "react-search-box";
import { Link } from "react-router-dom";
import { HashLink as Link1 } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  const getUsername = (email) => {
    return email ? email.split("@")[0] : "";
  };

  return (
    <div className=" flex sticky top-0 border-2 shadow-md bg-white h-16 z-10">
      <div className="flex flex-1 items-center pl-5  place-content-between ">
        <Link to="/">
          <span className="flex-1 text-2xl font-poetsen cursor-pointer">
            ShoesFreak
          </span>
        </Link>
        <div className="hidden justify-center mt-1 flex-1  sm:flex mx-5 ">
          <ReactSearchBox
            className=" "
            placeholder="Search shoes"
            value="Doe"
          />
        </div>
      </div>
      {isHomePage && (
        <div className="hidden  lg:flex items-center flex-1  justify-center">
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
      {isHomePage && (
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
      )}

      <div className="hidden lg:flex flex-1 ">
        <div className=" flex items-center flex-1 justify-center ">
          <IoMdHeart className=" text-xl mx-4 text-red-500 cursor-pointer" />
          <Link to="/cart">
            <div className=" flex justify-center items-center w-10 h-10  text-xl cursor-pointer">
              <FiShoppingCart />
              <div className="flex self-start justify-center items-center rounded-full bg-red-400 w-5 h-5 ">
                <p className=" text-white text-sm">99</p>
              </div>
            </div>
          </Link>
        </div>
        <div className=" flex items-center flex-1 justify-center font-playfair ">
          {isAuthenticated ? (
            <>
              <FaRegUserCircle className=" text-xl mx-2" />
              <h2>{getUsername(user.name)}</h2>
              <button
                className="  mx-4 px-3 rounded-md bg-[#5FBF8F] text-white py-1 hover:bg-[#458D69]"
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Log Out
              </button>
            </>
          ) : (
            <button
              onClick={() => loginWithRedirect()}
              className=" mx-4 px-3 rounded-md bg-[#5FBF8F] text-white py-1 hover:bg-[#458D69]"
            >
              Log In
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
