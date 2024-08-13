import React from "react";
import { useState } from "react";
import "../App.css";
import { GiCrossedBones } from "react-icons/gi";
import axios from "axios";

function Addsupplier({ closeModal }) {
  const [supplierDetails, setSupplierDetails] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    companyname: "",
  });

  const [logo, setLogo] = useState(null);

  const [errorMsg, setErrorMsg] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSupplierDetails({ ...supplierDetails, [name]: value });
  };

  const handleFileChange = (e) => {
    setLogo(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", supplierDetails.name);
    data.append("email", supplierDetails.email);
    data.append("address", supplierDetails.address);
    data.append("phone", supplierDetails.phone);
    data.append("companyname", supplierDetails.companyname);
    data.append("companylogo", logo);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/supplier/addsupplier",
        data,
        {
          headers: {
            Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZiMGE3ZTJkY2RkODYyOTVlOTY2ZWM0In0sImlhdCI6MTcyMjg1NTAxNH0.vtAmibJS7KNCGsVjLRINsJkjEJg2T6u4Bxp-WjBpIls`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Form submitted successfully:", response.data);
      setSupplierDetails({
        name: "",
        email: "",
        phone: "",
        address: "",
        companyname: "",
      });
    } catch (error) {
      setErrorMsg(error.message);
    }
  };
  return (
    <>
      <div className="modal-wrapper fixed inset-0  bg-blur"></div>
      <div className=" flex fixed  justify-center items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <div className="flex flex-col rounded-lg border-2 bg-white">
          <div className=" flex relative justify-center items-center border-2 bg-[#458D69] rounded-t-lg w-full h-20">
            <p className=" font-semibold text-white  text-3xl">
              Add a Supplier
            </p>
            <GiCrossedBones
              className=" absolute right-4 top-2 text-xl text-white cursor-pointer"
              onClick={closeModal}
            />
          </div>
          <form
            className=" flex flex-col flex-1 m-2 space-y-4 mt-10"
            onSubmit={handleSubmit}
          >
            <div className=" flex">
              <div className=" flex flex-1 flex-col mx-2 h-16">
                <label> Name</label>
                <input
                  type="name"
                  name="name"
                  value={supplierDetails.name}
                  onChange={handleChange}
                  className=" flex-1 border-solid border-2 border-[#9ec0af] focus:border-[#458D69] h-8 focus:outline-none pl-2  "
                  required
                />
              </div>

              <div className=" flex flex-1 flex-col mx-2 h-16">
                <label> Email</label>
                <input
                  type="email"
                  name="email"
                  value={supplierDetails.email}
                  onChange={handleChange}
                  className=" flex-1 border-solid border-2 border-[#9ec0af] focus:border-[#458D69] h-8 focus:outline-none pl-2  "
                  required
                />
              </div>
            </div>

            <div className=" flex">
              <div className=" flex flex-1 flex-col mx-2 h-16">
                <label> Phone</label>
                <input
                  name="phone"
                  type="number"
                  value={supplierDetails.phone}
                  onChange={handleChange}
                  className="flex-1 border-solid border-2 border-[#9ec0af] focus:border-[#458D69] h-8 focus:outline-none pl-2  "
                />
              </div>

              <div className=" flex flex-1 flex-col mx-2 h-16">
                <label> Address</label>
                <input
                  type="name"
                  name="address"
                  value={supplierDetails.address}
                  onChange={handleChange}
                  className=" flex-1 border-solid border-2 border-[#9ec0af] focus:border-[#458D69] h-8 focus:outline-none pl-2  "
                  required
                />
              </div>
            </div>

            <div className=" flex">
              <div className=" flex flex-1 flex-col mx-2 h-16">
                <label> Company Name</label>
                <input
                  type="name"
                  name="companyname"
                  value={supplierDetails.companyname}
                  onChange={handleChange}
                  className=" flex-1 border-solid border-2 border-[#9ec0af] focus:border-[#458D69] h-8 focus:outline-none pl-2  "
                  required
                />
              </div>
            </div>

            <div>
              <label>Logo:</label>
              <input type="file" onChange={handleFileChange} accept="image/*" />
            </div>

            <button className=" border-2 px-4 py-1 w-fit self-center  rounded-full hover:text-white hover:bg-[#5FBF8F]">
              {" "}
              Add
            </button>
            {errorMsg && (
              <>
                <div className=" text-red-500 mt-2">{errorMsg}</div>
              </>
            )}
          </form>
        </div>
      </div>
    </>
  );
}

export default Addsupplier;
