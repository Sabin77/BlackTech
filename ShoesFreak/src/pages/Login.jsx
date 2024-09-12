import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "@/config/Config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL_AUTH;

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
      const response = await axios.post("http://localhost:5000/api/auth/login", userDetails, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Login Successfull");
      const role = response.data.role;
      const token = response.data.authToken;
      console.log(response.data.authToken);
      
      localStorage.setItem("token", token);

      localStorage.setItem("role", role);

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
          <div className=" w-2/3">
            <h1 className=" text-4xl font-poetsen text-center my-4"> LOGIN</h1>
            <form
              className=" flex flex-col flex-1 m-2 space-y-4 mt-10"
              onSubmit={handleSubmit}
            >
              <label className=" text-gray-500"> Email</label>
              <input
                type="email"
                name="email"
                value={userDetails.email}
                onChange={handleChange}
                className="border-solid border-2 text-gray-500 border-gray-300 focus:border-gray-500 h-8 focus:outline-none pl-2  "
                required
              />

              <label className=" text-gray-500"> Password</label>
              <input
                type="password"
                name="password"
                value={userDetails.password}
                onChange={handleChange}
                className="border-solid border-2 text-gray-500 border-gray-300 focus:border-gray-500 h-8 focus:outline-none pl-2  "
              />

              <p className=" underline cursor-pointer"> Forgot password</p>

              <div className="flex">
                <p className="  text-gray-500"> Don't have an account?</p>
                <Link to="/register">
                  <p className=" underline cursor-pointer mx-2">
                    Register here
                  </p>
                </Link>
              </div>

              <button className=" border-2 px-4 py-1 w-fit self-center shadow-md  rounded-full hover:text-white hover:bg-[#5FBF8F]">
                {" "}
                LOG IN
              </button>
              {errorMsg && (
                <>
                  <div className=" text-red-500 mt-2">{errorMsg}</div>
                </>
              )}
            </form>

            {/* <p className=" flex justify-center my-4"> OR</p>
            <GoogleLogin
              className=" flex justify-center my-4"
              onSuccess={(credentialResponse) => {
                const credentialResponseDecoded = jwtDecode(
                  credentialResponse.credential
                );
                console.log(credentialResponseDecoded);
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            /> */}
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
