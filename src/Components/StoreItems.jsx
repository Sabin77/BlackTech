import React, { useEffect, useState } from "react";
import SingleDetails from "./SingleDetails";
import { Link } from "react-router-dom";

function StoreItems(props) {
  const { title, description, url, id, image, rating, price } = props;
  const handleDelete = async () => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    console.log(data);
  };
  return (
    <div className="item group border-2 rounded-lg h-80 w-52 shadow-lg border-gray-200 mx-4 my-4">
      <img
        src={
          image ? image : "https://media.timeout.com/images/100909731/image.jpg"
        }
        className=" h-44 w-36 ml-7 rounded-t-lg bg-slate-400 cursor-pointer"
      />

      <h5 className=" text-lg">{title ? title : "No Title"}</h5>
      <h4 className=" font-bold"> ${price ? price : "N/A"}</h4>
      <p>Rating:{rating}/5</p>
      <button
        onClick={handleDelete}
        className="bg-red-400 hidden group-hover:block  px-4 py-2 rounded-sm"
      >
        Delete
      </button>
    </div>
  );
}

export default StoreItems;
