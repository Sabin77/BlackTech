import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className=" sticky w-full z-50 top-0 text-white border-b-2 border-gray-500 shadow-md  shadow-gray-400">
        <nav className="bg-black border-gray-200  px-4 lg:px-6 py-2.5">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link to="/">
              {" "}
              <h1 className=" text-2xl">FundRaiser</h1>
            </Link>
            <div className="flex items-center lg:order-2">
              <Link to="/login">
                <button className=" px-2 border-2 rounded-md mx-2 hover:bg-blue-300 ">
                  Login
                </button>
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
