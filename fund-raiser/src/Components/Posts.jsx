import React, { useEffect, useState } from "react";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import poor from "../assets/poor.jpg";
import axios from "axios";

function Posts() {
  const [posts, setPost] = useState([]);

  // const handlePosts = async () => {
  //   try {
  //     const response = await axios.get(
  //       "http://localhost:8000/api/post/getpost"
  //     );
  //     setPost(response.data);
  //   } catch (error) {
  //     console.log("Error while getting data");
  //   }
  // };

  // useEffect(() => {
  //   handlePosts();
  // }, []);

  return (
    <div>
      {/* {posts.map((post) => ( */}
      <div className=" w-96  h-[500px] shadow-md my-4 mx-2">
        <div className=" h-1/2 border-2 ">
          <img src={poor} alt="" />
        </div>
        <div className="  h-14 text-2xl">
          <p> Title </p>
        </div>
        <div className="  h-36 ">
          <p>Description</p>
        </div>
        <div className=" flex">
          <div className=" flex  rounded-2xl border-2  w-auto pl-2">
            <p className=" py-1 px-2">
              <AiOutlineLike className=" text-2xl" />
            </p>
            <p className=" py-1 px-2">999</p>
          </div>
          <div className=" flex  rounded-2xl border-2 w-auto pl-2 mx-3">
            <p className=" pt-1 px-2">
              <FaRegComment className=" text-2xl" />
            </p>
            <p className=" pt-1 px-2">999</p>
          </div>
        </div>
      </div>
      {/* ))} */}
    </div>
  );
}

export default Posts;
