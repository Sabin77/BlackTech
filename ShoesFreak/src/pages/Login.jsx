import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="flex justify-center ">
      <div className="flex  w-[1000px] h-[500px] my-10 border-2 rounded-3xl">
        <div className="flex justify-center w-[600px] ">
          <div className=" w-2/3  ">
            <h1 className=" text-4xl font-poetsen text-center my-4"> LOGIN</h1>
            <div className=" flex flex-col flex-1 m-2 space-y-4 mt-10">
              <label> First Name</label>

              <input
                type="text"
                name="first-name"
                className="border-solid border-2 border-[#9ec0af] focus:border-[#458D69] h-8 focus:outline-none pl-2  "
                required
              />

              <label> Email</label>
              <input
                type="email"
                name="Email"
                className="border-solid border-2 border-[#9ec0af] focus:border-[#458D69] h-8 focus:outline-none pl-2  "
                required
              />
              <label>Phone</label>
              <input
                name="phone"
                type="number"
                className="border-solid border-2 border-[#9ec0af] focus:border-[#458D69] h-8 focus:outline-none pl-2  "
              />
              <label> Password</label>
              <input
                type="password"
                className="border-solid border-2 border-[#9ec0af] focus:border-[#458D69] h-8 focus:outline-none pl-2  "
              />

              <button className=" border-2 px-4 py-1 w-fit self-center  rounded-full hover:text-white hover:bg-[#5FBF8F]">
                {" "}
                LOG IN
              </button>
            </div>
          </div>
        </div>
        <div className=" w-[400px]  rounded-r-3xl text-white bg-[#5FBF8F]">
          <div className="  w-full h-20 text-3xl font-dancing">
            <h1 className=" px-6 py-3">ShoesFreak</h1>
          </div>
          <div className=" flex flex-col items-center  mt-10 h-fit text-center">
            <h1 className=" text-4xl font-poetsen">Welcome Back !</h1>
            <p className=" w-60 py-6 text-xl font-josefin ">
              To keep connected with us please login with your personal info
            </p>
            <Link to="/register">
              <button className=" border-2 px-4 py-1 rounded-full hover:bg-white hover:text-[#5FBF8F]">
                {" "}
                SIGN UP
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
