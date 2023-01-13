import { data } from "autoprefixer";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import NotificationCard from "../components/posts/NotificationCard";
import PostCard from "../components/posts/PostCard";
import PostElement from "../components/posts/PostElement";
import ProfileCard from "../components/posts/ProfileCard";
import { selectCurrentToken } from "../features/auth/authSlice";

const PostsPage = () => {
  const [skip, setSkip] = useState(0);
  const [isEnd, setIsEnd] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loader, setLoader] = useState(false);
  const [posts, setPosts] = useState([]);
  const [clicked, SetClicked] = useState(false);

  const updateEvent = () => {
    SetClicked(!clicked);
    console.log("call");
  };
  const fetchPost = async () => {
    try {
      const { data, error } = await read(skip);
      if (error) {
        console.log(error);
        return;
      }

      if (data?.length === 0) {
        setIsEnd(true);
        return;
      }

      setPosts([...posts, ...data]);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleScroll = (e) => {
    const { offsetHeight, scrollTop, scrollHeight } = e.target;
    if (offsetHeight + scrollTop >= scrollHeight) {
      if (isEnd) {
        setLoading(false);
      } else {
        setLoading(true);
      }
      setTimeout(() => {
        setSkip(skip + 8);
        setLoading(false);
      }, 1800);
    }
  };
  const read = async (skip) => {
    const res = await fetch(`http://localhost:5000/post?skip=${skip}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    // console.log(res.json());
    return await res.json();
  };

  const token = useSelector(selectCurrentToken);
  // useEffect(() => {

  // }, [clicked]);
  useEffect(() => {
    fetchPost();
    console.log("effected");
  }, [skip, clicked]);

  return (
    <div className="mt-32 md:mt-0">
      <Navbar />
      <div className="grid  grid-cols-1 lg:grid-cols-3 mt-8 max-w-[1300px] mx-auto">
        <ProfileCard />
        <div
          className="mt-32 max-h-[800px] overflow-scroll no-scrollbar "
          onScroll={handleScroll}
        >
          <PostElement updateEvent={updateEvent} />
          {posts.map((post) => {
            return <PostCard post={post} key={post.id} />;
          })}
          {loading && <Loader />}
          {isEnd && (
            <h1 className="text-center py-4 text-[#16a34a]">
              You have reached the end ...
            </h1>
          )}
        </div>

        <NotificationCard />
      </div>
      <Footer />
    </div>
  );
};

export default PostsPage;
