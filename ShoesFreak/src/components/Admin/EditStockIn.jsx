import React, { useState, useEffect } from "react";
import { GiCrossedBones } from "react-icons/gi";
import axios from "axios";
import Combobox from "react-widgets/Combobox";
import "react-widgets/styles.css";
import DefaultImg from "../../assets/default_shoes.png";

function EditStockIn({ stockIn, closeEdit }) {
  console.log(stockIn);

  const [productDetails, setProductDetails] = useState([]);
  const [supplierName, setSupplierName] = useState([]);
  const [stockInDetails, setStockInDetails] = useState({
    productId: "",
    productName: "",
    productImage: "",
    supplier: "",
    quantity_in: "",
    price: "",
  });

  const [errorMsg, setErrorMsg] = useState("");

  const getProductDetails = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/product/getallnames"
      );
      const products = Array.isArray(response.data) ? response.data : [];
      setProductDetails(products);
      console.log(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getProductDetails();
    getallnames();
  }, [closeEdit]);

  const getallnames = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/supplier/getallnames"
      );
      setSupplierName(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  // Initialize form fields with product data when component mounts
  useEffect(() => {
    if (stockIn) {
      setStockInDetails({
        productId: stockIn.productId || "",
        productName: stockIn.productName || "",
        productImage: stockIn.productImage || "",
        supplier: stockIn.supplier || "",
        quantity_in: stockIn.quantity_in || "",
        price: stockIn.price || "",
      });
    }
  }, [stockIn]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStockInDetails({ ...stockInDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      productId: stockInDetails.productId,
      productName: stockInDetails.productName,
      productImage: stockInDetails.productImage,
      supplier: stockInDetails.supplier,
      quantity_in: stockInDetails.quantity_in,
      price: stockInDetails.price,
    };

    try {
      const response = await axios.put(
        `http://localhost:5000/api/stock/updatestockin/${stockIn._id}`,
        data,
        {
          headers: {
            Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZiMGE3ZTJkY2RkODYyOTVlOTY2ZWM0In0sImlhdCI6MTcyMjg1NTAxNH0.vtAmibJS7KNCGsVjLRINsJkjEJg2T6u4Bxp-WjBpIls`,
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
            <p className=" font-semibold text-white  text-3xl">Edit Stock</p>
            <GiCrossedBones
              className=" absolute right-4 top-2  text-white cursor-pointer"
              onClick={closeEdit}
            />
          </div>
          <form
            className=" flex flex-col flex-1 m-2 space-y-4 mt-10"
            onSubmit={handleSubmit}
          >
            <div className=" flex">
              <div className=" flex flex-col">
                <span>Product Name</span>
                <Combobox
                  className="w-[250px] mx-2"
                  data={Array.isArray(productDetails) ? productDetails : []}
                  textField="name"
                  renderListItem={({ item }) => (
                    <div className=" flex items-center border-b-2">
                      <img
                        src={item.productImage ? item.productImage : DefaultImg}
                        className=" w-6 h-6 m-3"
                      />
                      {" " + item.name}
                    </div>
                  )}
                  filter="contains"
                  defaultValue={stockIn.productName}
                  onChange={(value) =>
                    setStockInDetails({
                      ...stockInDetails,
                      productId: value._id,
                      productName: value.name,
                      productImage: value.productImage,
                    })
                  }
                />
              </div>

              <div className=" flex flex-col">
                <span>Supplier Name</span>
                <Combobox
                  className="w-[250px] mx-2"
                  data={Array.isArray(supplierName) ? supplierName : []}
                  textField="name"
                  renderListItem={({ item }) => (
                    <div className=" flex items-center border-b-2">
                      <img src={item.companylogo} className=" w-6 h-6 m-3" />
                      {" " + item.name}
                    </div>
                  )}
                  filter="contains"
                  onChange={(value) =>
                    setStockInDetails({
                      ...stockInDetails,
                      supplier: value._id,
                    })
                  }
                />
              </div>
            </div>

            <div className=" flex">
              <div className=" flex flex-1 flex-col mx-2 h-16">
                <label> Quantity In</label>
                <input
                  name="quantity_in"
                  type="number"
                  value={stockInDetails.quantity_in}
                  onChange={handleChange}
                  className="flex-1 border-solid border-2 rounded-md border-gray-200 focus:border-gray-400 h-8 focus:outline-none pl-2  "
                />
              </div>

              <div className=" flex flex-1 flex-col mx-2 h-16">
                <label> Price</label>
                <input
                  type="number"
                  name="price"
                  value={stockInDetails.price}
                  onChange={handleChange}
                  className=" flex-1 border-solid border-2 rounded-md border-gray-200 focus:border-gray-400 h-8 focus:outline-none pl-2  "
                  required
                />
              </div>
            </div>

            <div className=" flex justify-center ">
              <button className=" border-2 px-4 py-1 w-fit self-center  rounded-full hover:text-white hover:bg-[#5FBF8F]">
                {" "}
                Edit
              </button>
            </div>
            {errorMsg && <div className=" text-red-500 mt-2">{errorMsg}</div>}
          </form>
        </div>
      </div>
    </>
  );
}

export default EditStockIn;
