import React, { useEffect, useState } from "react";
import img from "../assets/default.png";
import { useRef } from "react";
import axios from "axios";
import { GiCrossMark } from "react-icons/gi";

function AddPostModal({ closeModal }) {
  const imageRef = useRef(0);
  const [image, setImage] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    amount: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageClick = () => {
    imageRef.current.click();
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    console.log(file);
    setImage(file);
    setFormData({ ...formData, image: file });
  };

  const handlePost = async () => {
    try {
      const token = localStorage.getItem("token");

      const formdata = new FormData();
      formdata.append("title", formData.title);
      formdata.append("description", formData.description);
      formdata.append("category", formData.category);
      formdata.append("amount", formData.amount);
      formdata.append("image", image);

      console.log(token);
      const response = await axios.post(
        "http://192.168.1.105:8000/api/post/addPost",

        formdata,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log("Error while posting");
    }
  };

  console.log(formData.category);

  return (
    <div className="flex absolute justify-center text-black">
      <div className="flex flex-col rounded-md items-center w-96 bg-[#404442] ">
        <div className=" SecondContainer flex justify-center">
          <form className=" relative w-96 z-10 ">
            <div className="  h-auto w-full   shadow-xl  bg-transparent backdrop-blur-sm rounded-lg ">
              <div className=" flex relative bg-black border-2 border-gray-500  rounded-t-md h-12 w-full shadow shadow-gray-500  ">
                <h1 className=" flex-1 font-bold text-3xl text-white  pt-2 text-center">
                  Add Post
                </h1>
                <div
                  className=" flex-3 relative  text-white top-4 mr-3 cursor-pointer"
                  onClick={closeModal}
                >
                  <GiCrossMark />
                </div>
              </div>

              {/* <div className=" mt-4 ml-20 cursor-pointer  w-56 text-center ">
                {image ? (
                  <img src={URL.createObjectURL(image)} className=" w-full" />
                ) : (
                  <img src={img} className=" w-full" />
                )}

                <input
                  className="hidden"
                  name="image"
                  onChange={handleImageUpload}
                  // value={formData.image}
                  type="file"
                  ref={imageRef}
                />
              </div>
              <div className=" flex justify-center mt-2">
                <span
                  className="  border-2  rounded-md px-2 cursor-pointer text-white hover:bg-black"
                  onClick={handleImageClick}
                >
                  {" "}
                  Upload an image
                </span>
              </div> */}

              <div className=" relative h-14 mt-8">
                <input
                  className=" absolute bottom-1 right-12 border-2 h-10 w-3/4 rounded-3xl mt-10 "
                  style={{ paddingLeft: "20px" }}
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Title"
                />
              </div>
              <div className=" relative h-14 mt-14">
                <textarea
                  className=" absolute bottom-1 right-12 border-2 h-20 w-3/4 rounded-3xl mt-10"
                  style={{ paddingLeft: "20px" }}
                  name="description"
                  placeholder="Description"
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>
              <div className=" relative h-14 mt-6">
                <select
                  className=" absolute bottom-1 right-12 border-2 h-10 w-3/4 rounded-3xl mt-10"
                  style={{ paddingLeft: "20px" }}
                  name="category"
                  placeholder="Category"
                  type="dropdown"
                  value={formData.category}
                  onChange={handleChange}
                >
                  <option value="" className=" text-gray-300">
                    Select Category
                  </option>
                  <option value="Medical">Medical</option>
                  <option value="Tech">Tech</option>
                  <option value="Education">Education</option>
                  <option value="General">General</option>
                </select>
              </div>

              <div className=" relative h-14 mt-6">
                <input
                  className=" absolute bottom-1 right-12 border-2 h-10 w-3/4 rounded-3xl mt-10"
                  style={{ paddingLeft: "20px" }}
                  name="amount"
                  placeholder="Amount"
                  type="number"
                  value={formData.amount}
                  onChange={handleChange}
                />
              </div>

              <div className=" flex justify-center">
                <button
                  type="button"
                  className=" px-5 py-1 my-4 border-2 backdrop-blur-lg rounded-xl  text-white hover:bg-black hover:text-white"
                  onClick={handlePost}
                >
                  Post
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddPostModal;
