import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "@/config/Config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

function Register() {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    full_name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [error, setError] = useState();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { full_name, email, phone, password } = userDetails;
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log(userCredential);

      //store additonal user information in firestore
      await setDoc(doc(db, "users", user.uid), {
        full_name,
        email,
        phone,
      });

      setUserDetails({
        full_name: "",
        email: "",
        phone: "",
        password: "",
      });
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="flex  w-[1000px] h-[500px] my-10 border-2 rounded-3xl">
        <div className=" w-[400px]  rounded-l-3xl text-white bg-[#5FBF8F]">
          <div className="  w-full h-20 text-3xl font-dancing">
            <h1 className=" px-6 py-3">ShoesFreak</h1>
          </div>
          <div className=" flex flex-col items-center  mt-10 h-fit text-center">
            <h1 className=" text-4xl font-poetsen">Welcome Back !</h1>
            <p className=" w-60 py-6 text-xl font-josefin ">
              To keep connected with us please login with your personal info
            </p>
            <Link to="/login">
              <button className=" border-2 px-4 py-1 rounded-full hover:bg-white hover:text-[#5FBF8F]">
                {" "}
                SIGN IN
              </button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center w-[600px] ">
          <div className=" w-2/3  ">
            <h1 className=" text-4xl font-poetsen text-center my-4">
              {" "}
              SIGN UP
            </h1>
            <form
              className=" flex flex-col flex-1 m-2 space-y-4 mt-10"
              onSubmit={handleSubmit}
            >
              <label> Full Name</label>

              <input
                type="text"
                name="full_name"
                value={userDetails.full_name}
                onChange={handleChange}
                className="border-solid border-2 border-[#9ec0af] focus:border-[#458D69] h-8 focus:outline-none pl-2  "
                required
              />

              <label> Email</label>
              <input
                type="email"
                name="email"
                value={userDetails.email}
                onChange={handleChange}
                className="border-solid border-2 border-[#9ec0af] focus:border-[#458D69] h-8 focus:outline-none pl-2  "
                required
              />
              <label>Phone</label>
              <input
                name="phone"
                type="number"
                value={userDetails.phone}
                onChange={handleChange}
                className="border-solid border-2 border-[#9ec0af] focus:border-[#458D69] h-8 focus:outline-none pl-2  "
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
                SIGN UP
              </button>
            </form>
            {error && (
              <>
                <div className=" text-red-500 mt-2">{error}</div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
