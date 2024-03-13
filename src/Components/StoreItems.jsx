import React from "react";
import SingleDetails from "./SingleDetails";
import { Link } from "react-router-dom";

function StoreItems(props) {
  const { title, description, id, image, rating, price } = props;
  const handleClick = () => {
    <SingleDetails id={id} />;
  };

  return (
    <div className="itemContainer flex ">
      <div className="item border-2 rounded-lg h-72 w-52 shadow-lg border-gray-200 mx-4 my-4">
        <img
          onClick={SingleDetails}
          src={
            image
              ? image
              : "https://media.timeout.com/images/100909731/image.jpg"
          }
          className=" h-44 w-36 ml-7 rounded-t-lg bg-slate-400 cursor-pointer"
        />

        <h5 className=" text-lg">{title ? title : "Np Title"}</h5>
        <h4 className=" font-bold"> ${price ? price : "N/A"}</h4>
        <p>Rating:{rating}/5</p>
      </div>
    </div>
  );
}

export default StoreItems;
