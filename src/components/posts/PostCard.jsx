import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  selectCurrentToken,
  selectCurrentUser,
} from "../../features/auth/authSlice";

import Like from "./Like";
const PostCard = ({ post }) => {
  const [open, setOpen] = useState(false);
  const openModal = () => {
    setOpen(true);
  };
  const userId = useSelector(selectCurrentUser);
  const id = post._id;
  // console.log(post.likes.includes(userId));
  const token = useSelector(selectCurrentToken);

  const [liked, SetLiked] = useState(
    post ? post.likes.includes(userId) : false
  );
  const [likesCount, SetLikesCount] = useState(post.likes.length);
  // console.log("this clg", post.likes);
  const updateLike = () => {
    SetLiked(!liked);
    const instance = axios.create({
      baseURL: "http://localhost:5000",
      headers: { "X-Custom-Header": `${token}` },
    });
    instance.post("/post/like", { userId, id }).then((response) => {
      // console.log(response.data);
      // response.data;
      SetLiked(response.data.updatedPost.likes.includes(userId));
      SetLikesCount(response.data.updatedPost.likes.length);
    });
  };

  return (
    <>
      <div className="bg-[#FFFFFF] flex flex-col shrink px-8  h-auto mb-10 min-w-[300px] py-8 max-w-[450px] mx-auto shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]  mt-12    rounded-lg ">
        <div className="flex">
          <div
            className={`mr-8 w-[50px] h-[50px] bg-[url(${post.url})] rounded-md bg-cover`}
          ></div>

          <div>
            <h1 className="font-bold text-lg">{post.details[0].name}</h1>
            <h1 className="font-normal text-xs">
              {post.details[0].followers.length} followers
            </h1>
            <h1 className="font-normal text-xs">3 day ago</h1>
          </div>
        </div>

        <h1 className="break-all font-medium text-sm pt-3 pb-4">{post.desc}</h1>
        <div className=" w-full   rounded-md bg-contain bg-no-repeat  mb-6">
          <img src={`${post.url}`} alt="" />
        </div>
        <Like
          liked={{
            liked,
            updateLike,
            SetLiked,
            likesCount,
            open,
            openModal,
            post,
          }}
          onClose={() => setOpen(false)}
        />
      </div>
    </>
  );
};

export default PostCard;
