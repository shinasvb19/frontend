import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineHeart, AiOutlineComment, AiFillEdit } from "react-icons/ai";
import { RiDeleteRow } from "react-icons/ri";
import { BsSave2, BsSaveFill, BsThreeDotsVertical } from "react-icons/bs";
import { FaShareAlt } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { useSelector } from "react-redux";

import {
  selectCurrentToken,
  selectCurrentUser,
} from "../../features/auth/authSlice";
import Modal from "../modals/Modal";

const Like = ({ liked, onClose, saveHandler, setSavedPost }) => {
  const [opening, setOpening] = useState(false);
  return (
    <div>
      <Modal
        open={liked.open}
        onClose={onClose}
        onComment={liked.onComment}
        allComments={liked.allComments}
        handleSubmit={liked.handleSubmit}
      />
      <div
        className={`w-full h-[50px] font-extrabold text-2xl flex ${
          opening ? "relative" : ""
        }`}
      >
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
        <button
          className="flex mx-auto justify-between"
          onClick={(e) => {
            saveHandler();
          }}
        >
          <BsSave2 className="text-lg mt-1" />
          <div className="font-medium ml-1 text-lg">save</div>
        </button>
        <button
          className="flex mx-auto justify-between"
          onClick={(e) => {
            setOpening(!opening);
          }}
        >
          <BsThreeDotsVertical />
        </button>
        {opening && (
          <div className="  absolute right-2 p-6 rounded-2xl drop-shadow-2xl   bg-white top-6">
            <div className="flex flex-col items-end ">
              <button className=" text-sm">delete</button>
              <hr />
              <button className="pt-2 text-sm">report</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Like;
