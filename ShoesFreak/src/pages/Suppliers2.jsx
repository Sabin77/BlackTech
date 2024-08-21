import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import Addsupplier from "@/components/Admin/Addsupplier";
import axios from "axios";
import EditSupplier from "@/components/Admin/EditSupplier";
import DeleteSupplier from "@/components/Admin/DeleteSupplier";

function Suppliers() {
  const [suppliers, setSuppliers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [selectedSupplier, setSelectedSupplier] = useState(null);

  const closeModal = () => setShowModal(false);
  const closeEdit = () => setShowEdit(false);
  const closeDelete = () => setShowDelete(false);

  const getallsuppliers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/supplier/getallsuppliers",
        {
          headers: {
            Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZiMGE3ZTJkY2RkODYyOTVlOTY2ZWM0In0sImlhdCI6MTcyMjg1NTAxNH0.vtAmibJS7KNCGsVjLRINsJkjEJg2T6u4Bxp-WjBpIls`,
          },
        }
      );
      setSuppliers(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getallsuppliers();
  }, [showModal, showEdit, showDelete]);

  const handleEditClick = (supplier) => {
    setSelectedSupplier(supplier);
    setShowEdit(true);
  };

  const handleDeleteClick = (supplier) => {
    setSelectedSupplier(supplier);
    setShowDelete(true);
  };

  return (
    <div className="flex justify-center text-black items-center">
      <div className=" border-2 w-1/2 ">
        {suppliers &&
          suppliers.map((supplier) => (
            <div
              className=" flex mx-3 my-3 border-2 border-gray-400 h-60"
              key={supplier._id}
            >
              <div className=" border-2 w-60 h-full">
                <img src={logo} alt="logo" />
              </div>
              <div className=" flex flex-col w-2/3  text-gray-600 border-red-300 mx-3 p-3 h-full">
                <p className=" text-xl my-1">
                  {" "}
                  <span className=" font-semibold">Name: </span> {supplier.name}
                </p>
                <p className=" text-xl my-1">
                  <span className=" font-semibold">Email: </span>
                  {supplier.email}
                </p>
                <p className=" text-xl my-1">
                  {" "}
                  <span className=" font-semibold">Phone: </span>
                  {supplier.phone}
                </p>
                <p className=" text-xl my-1">
                  {" "}
                  <span className=" font-semibold">Address: </span>
                  {supplier.address}
                </p>
                <p className=" text-xl my-1">
                  {" "}
                  <span className=" font-semibold">Company Name: </span>
                  {supplier.companyname}
                </p>
                <div className="flex flex-row-reverse">
                  <button
                    className=" mx-2 px-3 py-1 bg-red-400 hover:bg-red-500"
                    onClick={() => handleDeleteClick(supplier)}
                  >
                    Delete
                  </button>
                  {showDelete && (
                    <DeleteSupplier
                      closeDelete={closeDelete}
                      supplier={selectedSupplier}
                    />
                  )}
                  <button
                    className=" mx-2 px-3 py-1 bg-blue-400 hover:bg-blue-500"
                    onClick={() => handleEditClick(supplier)}
                  >
                    Edit
                  </button>
                  {showEdit && (
                    <EditSupplier
                      closeEdit={closeEdit}
                      supplier={selectedSupplier}
                    />
                  )}
                </div>
              </div>
            </div>
          ))}

        <div className=" flex justify-center">
          <button
            className=" border-2 py-2 px-3 text-white  font-semibold bg-[#4e9a74] rounded-md hover:bg-[#458D69] "
            onClick={() => setShowModal(true)}
          >
            {" "}
            Add a supplier
          </button>
          {showModal && <Addsupplier closeModal={closeModal} />}
        </div>
      </div>
    </div>
  );
}

export default Suppliers;
