import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  selectCurrentToken,
  selectCurrentUser,
} from "../../features/auth/authSlice";
import Like from "./Like";
import { format } from "timeago.js";
const   PostCard = ({ post }) => {
  const [open, setOpen] = useState(false);
  const openModal = () => {
    setOpen(true);
  };
  const [trigger, setTrigger] = useState(false);
  const [comment, SetComment] = useState();
  const userId = useSelector(selectCurrentUser);
  const id = post._id;
  // console.log(post.likes.includes(userId));
  const token = useSelector(selectCurrentToken);
  const [allComments, setAllComments] = useState([]);
  const [liked, SetLiked] = useState(
    post ? post.likes.includes(userId) : false
  );
  const [likesCount, SetLikesCount] = useState(post.likes.length);
  // console.log("this clg", post.likes);
  const instance = axios.create({
    baseURL: "http://localhost:5000",
    headers: { "X-Custom-Header": `${token}` },
  });
  const onComment = (e) => {
    SetComment(e.target.value);
  };
  const updateLike = () => {
    SetLiked(!liked);

    instance.post("/post/like", { userId, id }).then((response) => {
      // console.log(response.data);
      // response.data;
      SetLiked(response.data.updatedPost.likes.includes(userId));
      SetLikesCount(response.data.updatedPost.likes.length);
    });
  };
  useEffect(() => {
    getComments();
  }, [trigger]);
  const handleSubmit = () => {
    // console.log("submitted");
    comment?.length
      ? instance
          .post("/post/comment", { comment, userId, id })
          .then((response) => {
            setTrigger(!trigger);
          })
      : console.log("comment cant be empty");
  };
  const getComments = () => {
    instance.get(`/post/comment?id=${id}&userId=${userId}`).then((response) => {
      // console.log("ith thanda ", response.data._id);
      setAllComments(response.data);
    });
  };
  // console.log(post);
  // console.log("initial", allComments.comments);
  return (
    <>
      <div className="bg-[#FFFFFF] flex flex-col shrink px-8  h-auto mb-10 min-w-[300px] py-8 max-w-[450px] mx-auto shadow-[0_35px_60px_-14px_rgba(0,0,0,0.2)]  mt-12    rounded-lg ">
        <div className="flex">
          <img
            className="mr-8 w-[50px] h-[50px]  rounded-md bg-cover mt-2"
            src={post.details[0].profilePicture}
          ></img>

          <div>
            <Link
              to={`/allprofile/${post.userId}`}
              className="font-bold text-lg"
            >
              {post.details[0].name}
            </Link>
            <h1 className="font-normal text-xs">
              {post.details[0].followers.length} followers
            </h1>
            <h1 className="font-normal text-xs">
              {format(post.details[0].createdAt)}
            </h1>
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
            handleSubmit,
            getComments,
            allComments,
            SetComment,
            onComment,
          }}
          onClose={() => setOpen(false)}
        />
      </div>
    </>
  );
};

export default PostCard;
