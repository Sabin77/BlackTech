import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "@/config/Config";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const [errorMsg, setErrorMsg] = useState();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = userDetails;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setUserDetails({
        email: "",
        password: "",
      });
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      setErrorMsg(error.message);
    }
  };
  return (
    <div className="flex justify-center ">
      <div className="flex  w-[1000px] h-[500px] my-10 border-2 rounded-3xl">
        <div className="flex justify-center w-[600px] ">
          <div className=" w-2/3  ">
            <h1 className=" text-4xl font-poetsen text-center my-4"> LOGIN</h1>
            <form
              className=" flex flex-col flex-1 m-2 space-y-4 mt-10"
              onSubmit={handleSubmit}
            >
              <label> Email</label>
              <input
                type="email"
                name="email"
                value={userDetails.email}
                onChange={handleChange}
                className="border-solid border-2 border-[#9ec0af] focus:border-[#458D69] h-8 focus:outline-none pl-2  "
                required
              />

              <label> Password</label>
              <input
                type="password"
                name="password"
                value={userDetails.password}
                onChange={handleChange}
                className="border-solid border-2 border-[#9ec0af] focus:border-[#458D69] h-8 focus:outline-none pl-2  "
              />

              <button className=" border-2 px-4 py-1 w-fit self-center  rounded-full hover:text-white hover:bg-[#5FBF8F]">
                {" "}
                LOG IN
              </button>
              {errorMsg && (
                <>
                  <div className=" text-red-500 mt-2">{errorMsg}</div>
                </>
              )}
            </form>
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
