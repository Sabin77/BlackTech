import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function SingleDetails(props) {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setItem(data);
      } catch (error) {
        console.error("Error fetching item details:", error);
      }
    };

    fetchItem();
  }, [id]);

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-center">
      <img className="h-1/2 w-1/2" src={item.image} alt="Item" />
      <div>
        <h1 className="text-pretty text-3xl">{item.title}</h1>
        <p className="font-bold">${item.price}</p>
        <p>Description: {item.description}</p>
        <p>Rating: {item.rating.rate}/5</p>
      </div>
    </div>
  );
}

export default SingleDetails;
