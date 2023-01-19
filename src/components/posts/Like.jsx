import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineHeart, AiOutlineComment, AiFillEdit } from "react-icons/ai";
import { RiDeleteRow } from "react-icons/ri";
import { BsSave2, BsSaveFill } from "react-icons/bs";
import { FaShareAlt } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { useSelector } from "react-redux";

import {
  selectCurrentToken,
  selectCurrentUser,
} from "../../features/auth/authSlice";
import Modal from "../modals/Modal";
const Like = ({ liked, onClose }) => {
  // console.log(liked.post);

  // console.log(liked.post._id);

  // console.log("yea mate", liked.allComments);
  return (
    <div>
      <Modal
        open={liked.open}
        onClose={onClose}
        onComment={liked.onComment}
        allComments={liked.allComments}
        handleSubmit={liked.handleSubmit}
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
            liked.getComments();
          }}
        >
          <AiOutlineComment />

          <div className="font-medium ml-1 text-lg">comment</div>
        </button>
        <button className="flex mx-auto justify-between">
          <BsSave2 className="text-lg mt-1" />
          <div className="font-medium ml-1 text-lg">save</div>
        </button>
        <button className="flex mx-auto justify-between">
          <RiDeleteRow />

          <div className="font-medium ml-1 text-lg">delete</div>
        </button>
      </div>
    </div>
  );
};

export default Like;
