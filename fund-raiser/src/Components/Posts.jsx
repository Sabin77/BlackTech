import React, { useEffect, useState } from "react";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import poor from "../assets/poor.jpg";
import { Link } from "react-router-dom";
import { AiFillLike } from "react-icons/ai";

function Posts(props) {
  const { id, title, description, category, amount, likes, comments } = props;
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(999);
  localStorage.setItem("likeCount", likeCount);

  // const [title, setTitle] = useState("Title");
  // const [description, setDescription] = useState("Description");
  // const [likes, setLikes] = useState("999");
  // const [comments, setComments] = useState("999");

  const handleLike = () => {
    setIsLiked(!isLiked);
    if (!isLiked) {
      setLikeCount(likeCount + 1);
    } else {
      setLikeCount(likeCount - 1);
    }
  };

  return (
    <div className=" mb-8">
      <div
        key={id}
        className=" w-96  h-[500px] shadow-md shadow-white my-4 mx-2 bg-white"
      >
        <Link to={`/posts/${id}`}>
          <div className=" h-1/2 border-2 ">
            <img src={poor} alt="" />
          </div>
        </Link>
        <div className="  h-14 text-2xl mx-3 mt-2">
          <p> {title ? title : "Title"} </p>
        </div>
        <div className="  h-36 mx-3 ">
          <p className=" break-words">
            {description ? description.slice(0, 150) : "No description"}
          </p>
        </div>
        <div className=" flex px-2">
          <div
            onClick={handleLike}
            className={` flex  rounded-2xl border-2  w-auto pl-2  ${
              isLiked ? "bg-slate-400" : " "
            } `}
          >
            <p className=" py-1 px-2 text-2xl">
              {isLiked ? <AiFillLike /> : <AiOutlineLike />}
            </p>

            <p className=" py-1 px-2">{likeCount}</p>
          </div>
          <div className=" flex  rounded-2xl border-2 w-auto pl-2 mx-3">
            <p className=" pt-1 px-2">
              <FaRegComment className=" text-2xl" />
            </p>
            <p className=" pt-1 px-2">999</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
