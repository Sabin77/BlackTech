import React, { useState } from "react";
import bg from "../assets/background.jpg";
import AddPostModal from "./AddPostModal";
import Posts from "./Posts";

const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  const closeModal = () => setOpenModal(false);
  const [posts, setPosts] = useState([]);

  const fetchApiData = async () => {
    try {
      const response = await axios.get(
        "http://192.168.1.105:8000/api/auth/login"
      );
      setPosts(response.data);
      console.log(posts);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <div className="flex flex-col ">
      <div className="flex relative justify-center h-[600px] ">
        <img src={bg} className=" w-full" />
        <div className="flex flex-col absolute items-center justify-center  h-full  w-full px-5   top-2 text-white  ">
          {openModal && <AddPostModal closeModal={closeModal} />}
          <h2 className=" ">DONATE TO CONTRIBUTE</h2>
          <h1 className=" text-6xl font-poetsen">
            Let's Build The Better World Together
          </h1>
          <p className=" font-light pt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            inventore pariatur facere enim quasi perferendis excepturi hic nam
            rerum similique ipsa deserunt necessitatibus officiis ad, commodi,
            recusandae impedit id ipsum. Explicabo possimus deserunt
            repudiandae! Neque quibusdam rem aspernatur impedit sapiente
            dolorem, rerum deserunt nisi dolor, itaque, incidunt modi quos! Aut
            harum voluptatem rerum delectus ducimus ut quibusdam repudiandae
            laborum mollitia.
          </p>
          <div className=" mt-6">
            <button className=" border-2 px-3 py-1 rounded-lg mx-4 bg-green-500">
              {" "}
              Donate
            </button>
            <button
              className=" border-2 px-3 py-1 rounded-lg mx-4 bg-yellow-500"
              onClick={() => setOpenModal(true)}
            >
              Create a post
            </button>
          </div>
        </div>
      </div>

      <div className=" grid grid-cols-1 border-2 md:grid-cols-2 lg:grid-cols-3 ">
        <Posts />
      </div>
    </div>
  );
};

export default Home;
