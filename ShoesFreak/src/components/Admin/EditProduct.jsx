import React, { useState, useEffect } from "react";
import { GiCrossedBones } from "react-icons/gi";
import axios from "axios";

function EditProduct({ product, closeEdit }) {
  console.log(product);

  const [productDetails, setProductDetails] = useState({
    name: "",
    description: "",
    quantity_limit: "",
    color: "",
  });

  const [image, setImage] = useState(null);

  const [errorMsg, setErrorMsg] = useState("");

  // Initialize form fields with product data when component mounts
  useEffect(() => {
    if (product) {
      setProductDetails({
        name: product.name || "",
        description: product.description || "",
        quantity_limit: product.quantity_limit || "",
        color: product.color || "",
      });
    }
    setImage(product.productImage);
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductDetails({ ...productDetails, [name]: value });
  };

  const handleFileChange = (e) => {
    setLogo(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: productDetails.name,
      description: productDetails.description,
      quantity_limit: productDetails.quantity_limit,
      color: productDetails.color,
      productImage: image,
    };

    try {
      const response = await axios.put(
        `http://localhost:5000/api/product/updateproduct/${product._id}`,
        data,
        {
          headers: {
            Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZiMGE3ZTJkY2RkODYyOTVlOTY2ZWM0In0sImlhdCI6MTcyMjg1NTAxNH0.vtAmibJS7KNCGsVjLRINsJkjEJg2T6u4Bxp-WjBpIls`,
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
            <p className=" font-semibold text-white  text-3xl">Edit Product</p>
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
                <label>Product Name</label>
                <input
                  type="text"
                  name="name"
                  value={productDetails.name}
                  onChange={handleChange}
                  className=" flex-1 border-solid border-2 border-[#9ec0af] focus:border-[#458D69] h-8 focus:outline-none pl-2  "
                  required
                />
              </div>

              <div className=" flex flex-1 flex-col mx-2 h-16">
                <label> Description</label>
                <input
                  type="description"
                  name="description"
                  value={productDetails.description}
                  onChange={handleChange}
                  className=" flex-1 border-solid border-2 border-[#9ec0af] focus:border-[#458D69] h-8 focus:outline-none pl-2  "
                  required
                />
              </div>
            </div>

            <div className=" flex">
              <div className=" flex flex-1 flex-col mx-2 h-16">
                <label> Quantity Limit</label>
                <input
                  name="quantity_limit"
                  type="number"
                  value={productDetails.quantity_limit}
                  onChange={handleChange}
                  className="flex-1 border-solid border-2 border-[#9ec0af] focus:border-[#458D69] h-8 focus:outline-none pl-2  "
                />
              </div>

              <div className=" flex flex-1 flex-col mx-2 h-16">
                <label> Color</label>
                <input
                  type="text"
                  name="color"
                  value={productDetails.color}
                  onChange={handleChange}
                  className=" flex-1 border-solid border-2 border-[#9ec0af] focus:border-[#458D69] h-8 focus:outline-none pl-2  "
                  required
                />
              </div>
            </div>

            <div className=" pl-3">
              <label>Product Image:</label>
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

export default EditProduct;
