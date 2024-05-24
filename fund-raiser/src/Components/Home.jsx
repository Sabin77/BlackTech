import React, { useState, useEffect } from "react";
import bg from "../assets/background.jpg";
import AddPostModal from "./AddPostModal";
import Posts from "./Posts";
import axios from "axios";

const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  const closeModal = () => setOpenModal(false);
  const [posts, setPosts] = useState([]);

  const handlePosts = async () => {
    try {
      const response = await axios.get(
        "http://192.168.1.105:8000/api/post/getposts/66388a6f98e85c17b8d128ffg"
      );
      setPosts(response.data.posts);
    } catch (error) {
      console.log("Error while getting data");
    }
  };

  useEffect(() => {
    handlePosts();
  }, []);

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

      <div className=" flex flex-wrap justify-center  px-10  gap-x-10 bg-black ">
        {posts.map((post) => (
          <Posts
            key={post._id}
            id={post._id}
            title={post.title}
            description={post.description}
            category={post.category}
            amount={post.amount}
            likes={post.likes}
            comments={post.comment.length}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
