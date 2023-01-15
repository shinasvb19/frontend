import React from "react";
import Navbar from "../components/Navbar";
import NotificationCard from "../components/posts/NotificationCard";
import AllProfile from "../components/profile/AllProfile";
import ProfileMain from "../components/profile/ProfileMain";

const AllProfilePage = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-32 flex  mx-auto max-w-[1400px]">
        <AllProfile />
        <NotificationCard />
      </div>
    </div>
  );
};

export default AllProfilePage;
