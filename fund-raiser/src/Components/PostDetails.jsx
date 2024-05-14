import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import poor from "../assets/poor.jpg";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";

function PostDetails() {
  const [item, setItem] = useState(null);
  const { id } = useParams();
  const [openComment, setOpenComment] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const respose = await axios.get(
        "http://192.168.1.105:8000/api/post/getpostby-id",
        {
          id,
        }
      );
    };
  }, [id]);

  return (
    <div className=" flex flex-col items-center  border-2 ">
      <div className=" h-full w-2/3 border-2">
        <img className=" w-full " src={poor} alt="Post picture" />

        <div className=" h-28 border-2 text-3xl font-poetsen py-4 px-5">
          This is a title of the post. The title might be long.
        </div>

        <div className="min-h-60 font-serif px-6">
          {" "}
          This is the description. Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Quasi perspiciatis nisi, debitis deleniti, nesciunt
          sapiente vero adipisci distinctio reprehenderit omnis beatae similique
          quia possimus alias amet sit esse aut aliquid! Amet earum non
          reiciendis! Eveniet eius doloremque in dolorem minus facilis provident
          amet, quos accusamus ea repellendus animi totam error perferendis vel
          facere molestiae. Doloremque suscipit quasi aliquid consequatur amet?
          Ad, incidunt reiciendis illo facilis, inventore nihil, magni
          exercitationem tempore fugiat similique eveniet ipsa illum nulla quis.
          Veniam delectus tempora sed, deserunt laudantium, quis alias pariatur
          ad molestiae a dolores!
        </div>
        <div className="likes_and_comments_div  flex h-20 border-2">
          <div className=" flex  rounded-2xl border-2 h-10  w-auto pl-2 cursor-pointer">
            <p className=" py-1 px-2">
              <AiOutlineLike className=" text-2xl" />
            </p>
            <p className=" py-1 px-2">999</p>
          </div>
          <div className=" flex  rounded-2xl border-2 h-10 w-auto pl-2 mx-3 cursor-pointer">
            <p className=" pt-1 px-2">
              <FaRegComment
                className=" text-2xl"
                onClick={() => setOpenComment(true)}
              />
            </p>
            <p className=" pt-1 px-2">999</p>
          </div>
        </div>
      </div>

      {openComment && (
        <div className="comment-box flex flex-col border-2 border-lime-300 h-auto w-2/3">
          <textarea
            className=" border-2 h-28 w-2/3 rounded-lg"
            name="comment"
            placeholder="Add a comment"
          />
          <div className="buttons flex w-2/3 border-2 my-5">
            <button className=" border-2 h-10 px-7 rounded-md mx-2 hover:bg-blue-500 ">
              Post
            </button>
            <button
              className=" border-2 h-10 px-7 rounded-md mx-2 hover:bg-red-500"
              onClick={() => setOpenComment(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PostDetails;
