import React from "react";
import { Link } from "react-router-dom";

function SingleDetails(props) {
  const { title, description, image, rating, price } = props;

  return (
    <div className=" flex justify-center">
      <img className=" h-1/2 w-1/2 " src={image} alt="A photo" />
      <div>
        <h1 className=" text-pretty text-3xl">{title}</h1>
        <p className=" font-bold">{price}</p>
        <p>Description: {description}</p>
        <p>Rating: {rating}/5</p>
      </div>
    </div>
  );
}

export default SingleDetails;
