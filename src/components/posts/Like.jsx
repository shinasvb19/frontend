import axios from "axios";
import React, { useState } from "react";
import { AiOutlineHeart, AiOutlineComment, AiFillEdit } from "react-icons/ai";
import { FaShareAlt } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { useSelector } from "react-redux";

import {
  selectCurrentToken,
  selectCurrentUser,
} from "../../features/auth/authSlice";
import Modal from "../modals/Modal";
const Like = ({ liked, onClose }) => {
  const [comment, SetComment] = useState();
  const onComment = (e) => {
    SetComment(e.target.value);
  };
  // console.log(liked.post);
  const token = useSelector(selectCurrentToken);
  const userId = useSelector(selectCurrentUser);
  const id = liked.post._id;
  // console.log(liked.post._id);
  const handleSubmit = () => {
    // console.log("submitted");
    const instance = axios.create({
      baseURL: "http://localhost:5000",
      headers: { "X-Custom-Header": `${token}` },
    });
    instance.post("/post/comment", { comment, userId, id }).then((response) => {
      console.log(response.data);
    });
  };

  // console.log(onClose);
  return (
    <div>
      <Modal
        open={liked.open}
        onClose={onClose}
        onComment={onComment}
        comment={comment}
        handleSubmit={handleSubmit}
      />
      <div className=" w-full h-[50px] font-extrabold text-2xl flex">
        <button
          className="flex mx-auto justify-between"
          onClick={(e) => {
            liked.updateLike();
          }}
        >
          {liked.liked ? <FcLike /> : <AiOutlineHeart />}

          <div className="font-medium ml-1 text-lg">
            {liked.likesCount} likes
          </div>
        </button>
        <button
          className="flex mx-auto justify-between"
          onClick={(e) => {
            liked.openModal();
          }}
        >
          <AiOutlineComment />

          <div className="font-medium ml-1 text-lg">comment</div>
        </button>
        <div className="flex mx-auto justify-between">
          <AiFillEdit />
          <div className="font-medium ml-1 text-lg">edit</div>
        </div>
        <div className="flex mx-auto justify-between">
          <FaShareAlt className="text-lg mt-1" />
          <div className="font-medium ml-1 text-lg">share</div>
        </div>
      </div>
    </div>
  );
};

export default Like;
