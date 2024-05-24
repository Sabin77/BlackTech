import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import { FaUser, FaPhone } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import axios from "axios";

function Register() {
  const formdata = new FormData();
  const [formvalue, setFormvalue] = useState({
    email: "",
    password: "",
    fullName: "",
    address: "",
    contactNumber: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormvalue({ ...formvalue, [name]: value });
    console.log(formvalue);
  };

  const handleRegister = async () => {
    const navigate = useNavigate();
    try {
      formdata.append("email", formvalue.email);
      formdata.append("password", formvalue.password);
      formdata.append("fullName", formvalue.fullName);
      formdata.append("address", formvalue.address);
      formdata.append("contactNumber", formvalue.contactNumber);
      const errors = validate(formvalue);

      console.log(formvalue.email, formvalue.password);
      setFormErrors(errors);
      if (Object.keys(errors).length === 0) {
        const response = await axios.post(
          "http://192.168.1.105:8000/api/auth/signup",
          formdata
        );
        console.log(response);
        const token = response.data.token;
        if (token) {
          localStorage.setItem("token", token);
          setShowAlert(true);
          navigate("/login");
          setTimeout(() => {
            setShowAlert(false);
          }, [3000]);
        }
      }
    } catch (error) {
      console.log("Register error", error);
      alert("Register Failed !");
    }
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!values.email) {
      errors.email = "Email should not be empty !";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid email format!";
    }

    if (!values.password) {
      errors.password = "Password must not be empty !";
    } else if (values.password.length < 4) {
      errors.password = "Password should be more than 4 characters.";
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/.test(
        values.password
      )
    ) {
      errors.password =
        "Password must include at least one uppercase letter, one lowercase letter, one digit, and one special character!";
    }

    if (!values.fullName) {
      errors.fullName = "Full Name is required!";
    } else if (values.fullName.length < 4) {
      errors.fullName = " Full Name should be more than 4 characters !";
    }

    if (!values.address) {
      errors.address = "Please write address !";
    } else if (values.address.length < 3) {
      errors.address = "Address should be more than 3 characters.";
    }

    if (!values.contactNumber) {
      errors.contactNumber = "Contact number is required";
    } else if (values.contactNumber.length < 10) {
      errors.contactNumber = "Contact number should be at least 10 characters.";
    }
    return errors;
  };

  const handleBackClick = () => {
    navigate("/login");
  };

  return (
    <div className=" flex justify-center h-screen">
      <div className="   flex justify-center h-full  ">
        {showAlert && (
          <div className="  top-0 h-10 border-2 px-3 pb-2 rounded-b-lg bg-green-400 z-20">
            <p className=" text-black">Registered Successfully</p>
          </div>
        )}

        <form className=" absolute w-96 z-20 bg-white " name="register-form">
          <div className=" h-auto w-full py-2 mt-10 shadow-xl border-2  rounded-lg ">
            <IoMdArrowRoundBack
              onClick={handleBackClick}
              className=" text-2xl m-2 cursor-pointer"
            />
            <h1 className=" font-bold text-3xl -my-3 text-center ">Register</h1>

            <div className=" relative h-14 mt-6">
              <input
                className=" absolute bottom-1 right-12 border-2 h-10 w-3/4 rounded-3xl mt-10 "
                type="text"
                name="email"
                value={formvalue.email}
                onChange={handleInput}
                placeholder="Your email"
                style={{ paddingLeft: "20px" }}
              />
              <MdEmail className=" absolute top-6 right-16 " />
            </div>
            <p className=" text-red-500 text-center">{formErrors.email}</p>
            <div className=" relative h-14 mt-6">
              <input
                className=" absolute bottom-1 right-12 border-2 h-10 w-3/4 rounded-3xl mt-10 "
                type="password"
                name="password"
                value={formvalue.password}
                onChange={handleInput}
                placeholder="Password"
                style={{ paddingLeft: "20px" }}
              />
              <RiLockPasswordFill className=" absolute top-6 right-16 " />
            </div>
            <p className=" text-red-500 text-center">{formErrors.password}</p>

            <div className=" relative h-14 mt-8">
              <input
                className=" absolute bottom-1 right-12 border-2 h-10 w-3/4 rounded-3xl mt-10  "
                type="text"
                name="fullName"
                value={formvalue.fullName}
                placeholder="Full Name"
                onChange={handleInput}
                style={{ paddingLeft: "20px" }}
              />
              <FaUser className=" absolute top-6 right-16 " />
            </div>
            <p className=" text-red-500 text-center">{formErrors.fullName}</p>

            <div className=" relative h-14 mt-6">
              <input
                className=" absolute bottom-1 right-12 border-2 h-10 w-3/4 rounded-3xl mt-10"
                type="text"
                name="address"
                value={formvalue.address}
                onChange={handleInput}
                placeholder="Address"
                style={{ paddingLeft: "20px" }}
              />
              <FaLocationDot className=" absolute top-6 right-16 " />
            </div>
            <p className=" text-red-500 text-center">{formErrors.address}</p>

            <div className=" relative h-14 mt-6">
              <input
                className=" absolute bottom-1 right-12 border-2 h-10 w-3/4 rounded-3xl mt-10"
                type="text"
                name="contactNumber"
                country={"us"}
                value={formvalue.contactNumber}
                onChange={handleInput}
                placeholder="Contact Number"
                style={{ paddingLeft: "20px" }}
              />
              <FaPhone className=" absolute top-6 right-16 " />
            </div>
            <p className=" text-red-500 text-center">
              {formErrors.contactNumber}
            </p>

            <div className=" flex justify-center">
              <button
                type="button"
                className=" px-5 py-1 my-6 border-2 backdrop-blur-lg rounded-xl  hover:bg-blue-700"
                onClick={handleRegister}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
