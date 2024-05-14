import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Register from "./Register";
import axios from "axios";

function Login() {
  const [formvalue, setFormvalue] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const [usernamePlaceholder, setUsernamePlaceholder] = useState("Username");
  const [passwordPlaceholder, setPasswordPlaceholder] = useState("Password");
  const [formErrors, setFormErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormvalue({ ...formvalue, [name]: value });
    console.log(formvalue);
  };

  const handleLogin = async () => {
    try {
      const { email, password } = formvalue;

      console.log(`Email and password are:`, email, password);

      const errors = validate(formvalue);
      setFormErrors(errors);

      if (Object.keys(errors).length === 0) {
        const response = await axios.post(
          "http://192.168.1.105:8000/api/auth/login",
          {
            email,
            password,
          }
        );
        console.log(response);

        const token = response.data.token;

        if (token) {
          localStorage.setItem("token", token);
          setShowAlert(true);
          setTimeout(() => {
            setShowAlert(false);
          }, [3000]);
          return navigate("/");
        }
      }
    } catch (error) {
      console.log("Login error", error);
      alert("Login Failed!");
    }
  };

  const validate = (values) => {
    const errors = {};
    setFormErrors(errors);
    if (!values.email) {
      errors.username = "UserName must not be empty !";
    }
    if (!values.password) {
      errors.password = " Password must not be empty !";
    }
    setFormErrors(errors);
    return errors;
  };

  const handleUsernameFocus = () => {
    setUsernamePlaceholder("");
  };
  const handlePasswordFocus = () => {
    setPasswordPlaceholder("");
  };

  return (
    <div className="  flex justify-center h-[80vh] ">
      {showAlert && (
        <div className=" fixed top-0 h-auto border-2 px-3 pb-2 rounded-b-lg bg-green-400 z-20">
          <p className="">Logged In Successfully</p>
        </div>
      )}
      <form className=" absolute w-96 z-10 ">
        <div className=" h-auto w-full py-2 mt-10 shadow-xl border-2 bg-transparent backdrop-blur-sm rounded-lg ">
          <h1 className=" font-bold text-3xl text-center ">LogIn</h1>
          <div className=" relative h-14 mt-8">
            <input
              className=" absolute bottom-1 right-12 border-2 h-10 w-3/4 rounded-3xl mt-10  "
              type="text"
              name="email"
              value={formvalue.email}
              onChange={handleInput}
              placeholder={usernamePlaceholder}
              onFocus={handleUsernameFocus}
              style={{ paddingLeft: "20px" }}
            />
            <FaUser className=" absolute top-6 right-16 " />
          </div>
          <div className=" relative h-14 mt-6">
            <input
              className=" absolute bottom-1 right-12 border-2 h-10 w-3/4 rounded-3xl mt-10"
              type="password"
              name="password"
              value={formvalue.password}
              onChange={handleInput}
              onFocus={handlePasswordFocus}
              placeholder={passwordPlaceholder}
              style={{ paddingLeft: "20px" }}
            />
            <RiLockPasswordFill className=" absolute top-6 right-16 " />
          </div>
          <div className=" flex justify-center">
            <button
              type="button"
              className=" px-5 py-1 mt-2 border-2 backdrop-blur-lg rounded-xl hover:bg-[#4A3BB5]"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
          <div className=" mt-2 text-center">
            Don't have an account ?{" "}
            <Link to="/register">
              <p onClick={Register} className=" text-blue-400 hover:underline">
                Register here
              </p>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
