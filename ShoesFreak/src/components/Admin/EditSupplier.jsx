import React, { useState, useEffect } from "react";
import { GiCrossedBones } from "react-icons/gi";
import axios from "../../config/axiosConfig";

function EditSupplier({ supplier, closeEdit }) {
  console.log(supplier);

  const [supplierDetails, setSupplierDetails] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    companyname: "",
  });

  const [logo, setLogo] = useState(null);

  const [errorMsg, setErrorMsg] = useState("");

  // Initialize form fields with supplier data when component mounts
  useEffect(() => {
    if (supplier) {
      setSupplierDetails({
        name: supplier.name || "",
        email: supplier.email || "",
        phone: supplier.phone || "",
        address: supplier.address || "",
        companyname: supplier.companyname || "",
      });
    }
    setLogo(supplier.companylogo);
  }, [supplier]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSupplierDetails({ ...supplierDetails, [name]: value });
  };

  const handleFileChange = (e) => {
    setLogo(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: supplierDetails.name,
      email: supplierDetails.email,
      phone: supplierDetails.phone,
      address: supplierDetails.address,
      companyname: supplierDetails.companyname,
      companylogo: logo,
    };

    try {
      const response = await axios.put(
        `http://localhost:5000/api/supplier/updatesupplier/${supplier._id}`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Form submitted successfully:", response.data);
      closeEdit(); // Close the modal after successful submission
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
            <p className=" font-semibold text-white  text-3xl">Edit Supplier</p>
            <GiCrossedBones
              className=" absolute right-4 top-2 text-xl text-white cursor-pointer"
              onClick={closeEdit}
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
                  type="text"
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
                  type="text"
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
                  type="text"
                  name="companyname"
                  value={supplierDetails.companyname}
                  onChange={handleChange}
                  className=" flex-1 border-solid border-2 border-[#9ec0af] focus:border-[#458D69] h-8 focus:outline-none pl-2  "
                  required
                />
              </div>
            </div>

            <div className=" pl-3">
              <label>Company Logo:</label>
              <input type="file" onChange={handleFileChange} accept="image/*" />
            </div>

            <button className=" border-2 px-4 py-1 w-fit self-center  rounded-full hover:text-white hover:bg-[#5FBF8F]">
              {" "}
              Edit
            </button>
            {errorMsg && <div className=" text-red-500 mt-2">{errorMsg}</div>}
          </form>
        </div>
      </div>
    </>
  );
}

export default EditSupplier;
