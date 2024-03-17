import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import StoreItems from "./StoreItems";
import { Link } from "react-router-dom";
import AddItem from "./AddItem";

function Body(props) {
  let API = "https://fakestoreapi.com/products";

  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);

  const fetchApiData = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      console.log(data);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApiData(API);
  }, []);

  const slides = [
    {
      url: "https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg?cs=srgb&dl=pexels-willo-m-3768005.jpg&fm=jpg",
    },
    {
      url: "https://blog.bozemancvb.com/hubfs/DSC_6505.jpeg",
    },
    {
      url: "https://media.timeout.com/images/100909731/image.jpg",
    },
    {
      url: "https://media.istockphoto.com/id/1338894509/photo/woman-choosing-a-new-style-for-herself.jpg?s=612x612&w=0&k=20&c=Ew11SGoTR-W4hO719So27fWOn9M8oRyFVQerofbBdr4=",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(3);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const dotClick = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <>
      <div className=" max-w-[1400px] h-[480px] w-full m-auto py-16 px-4 relative group">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className=" w-full h-full rounded-2xl bg-cover duration-500"
        ></div>
        <div className=" hidden group-hover:block  absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer ">
          <BsChevronCompactLeft onClick={prevSlide} />
        </div>
        <div className=" hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer ">
          <BsChevronCompactRight onClick={nextSlide} />
        </div>
        <div className="flex top-4 justify-center py-2">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => dotClick(slideIndex)}
              className=" text-2xl cursor-pointer"
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>

      <div className=" flex flex-wrap relative justify-center">
        {products &&
          products.map((element) => {
            return (
              <Link key={element.id} to={`/products/${element.id}`}>
                <StoreItems
                  key={element.id}
                  id={element.id}
                  image={element.image}
                  title={element.title ? element.title.slice(0, 36) : ""}
                  description={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  rating={element.rating.rate}
                  price={element.price}
                  url={element.url}
                />
              </Link>
            );
          })}
        <button
          onClick={() => setShowModal(true)}
          className="  right-10 border-2 bg-blue-600 rounded-xl h-10"
        >
          Add Item
        </button>
        {showModal && <AddItem closeModal={closeModal} />}
      </div>
    </>
  );
}

export default Body;
