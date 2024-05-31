import React, { useState } from "react";
import { storage, db } from "@/config/Config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { addDoc, collection, onSnapshot } from "firebase/firestore";

function AddProducts() {
  const [products, setProducts] = useState({
    title: "",
    description: "",
    original_price: "",
    discounted_price: "",
  });

  const [image, setImage] = useState(null);

  const [imageError, setImageError] = useState();
  const [successMsg, setSuccessMsg] = useState("");
  const [uploadError, setUploadError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducts({ ...products, [name]: value });
  };

  const types = ["image/jpg", "image/jpeg", "image/png", "image/PNG"];
  const handleProductImg = (e) => {
    let selectedFile = e.target.files[0];

    if (selectedFile) {
      if (selectedFile && types.includes(selectedFile.type)) {
        setImage(selectedFile);
        setImageError("");
      } else {
        setImage(null);
        setImageError("Please select a valid image file type (png or jpg) ");
      }
    } else {
      console.log("Please select your file");
    }
  };

  const handleAddProducts = async (e) => {
    e.preventDefault();
    if (!image) {
      setImageError("Please select an image");
      return;
    }

    const imageRef = ref(storage, `product-images/${image.name}`);
    const uploadTask = uploadBytesResumable(imageRef, image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(progress);
      },
      (error) => setUploadError(error.message),
      async () => {
        try {
          const url = await getDownloadURL(uploadTask.snapshot.ref);
          await addDoc(collection(db, "Products"), {
            title: products.title,
            description: products.description,
            original_price: Number(products.original_price),
            discounted_price: Number(products.discounted_price),
            url,
          });
          setSuccessMsg("Product added successfully");
          setProducts({
            title: "",
            description: "",
            original_price: "",
            discounted_price: "",
          });
          document.getElementById("file").value = "";
          setImageError("");
          setUploadError("");
          setTimeout(() => {
            setSuccessMsg("");
          }, 2000);
        } catch (error) {
          setUploadError(error.message);
        }
      }
    );
  };

  return (
    <div className="flex flex-col items-center justify-center text-gray-500">
      <h1 className=" text-2xl ">Add Products </h1>
      {successMsg && (
        <>
          <div className="">{successMsg}</div>
        </>
      )}
      <form className=" w-96 border-2" onSubmit={handleAddProducts}>
        <div className=" flex flex-col mt-5">
          <span>Shoes name</span>
          <input
            className=" outline-none border-2 h-10 rounded-md"
            type="text"
            onChange={handleChange}
            name="title"
            value={products.title}
            required
          />
        </div>
        <div className=" flex flex-col mt-5">
          <span>Shoes description</span>
          <input
            className=" outline-none border-2 h-10 rounded-md"
            type="text"
            onChange={handleChange}
            name="description"
            value={products.description}
            required
          />
        </div>
        <div className=" flex flex-col mt-5">
          <span>Original Price</span>
          <input
            className=" outline-none border-2 h-10 rounded-md"
            type="number"
            onChange={handleChange}
            name="original_price"
            value={products.original_price}
            required
          />
        </div>
        <div className=" flex flex-col mt-5">
          <span>Discouted Price</span>
          <input
            className=" outline-none border-2 h-10 rounded-md"
            type="number"
            onChange={handleChange}
            name="discounted_price"
            value={products.discounted_price}
            required
          />
        </div>
        <div className=" flex flex-col mt-5">
          <span>Upload Product Image</span>
          <input
            id="file"
            className=" outline-none border-2 h-10 rounded-md"
            type="file"
            onChange={handleProductImg}
            name="image"
            required
          />
        </div>
        {imageError && (
          <>
            <div className=" text-red-500 bg-red-50 h-10">{imageError}</div>
          </>
        )}

        <div className=" flex justify-center my-4">
          <button className=" border-2 px-3 hover:bg-slate-100 ">Submit</button>
        </div>
      </form>
      {uploadError && (
        <>
          <br />
          <div className="">{uploadError}</div>
        </>
      )}
    </div>
  );
}

export default AddProducts;
