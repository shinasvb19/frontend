import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProfilePicModal from "../components/modals/ProfilePicModal";
import Navbar from "../components/Navbar";
import NotificationCard from "../components/posts/NotificationCard";
import ProfileMain from "../components/profile/ProfileMain";
import {
  selectCurrentToken,
  selectCurrentUser,
} from "../features/auth/authSlice";

import {
  getProfile,
  selectCurrentProfile,
} from "../features/profile/profileSlice";

const ProfilePage = () => {
  const [updated, setUpdate] = useState();
  const token = useSelector(selectCurrentToken);
  // const id = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfile(token));
  }, [dispatch]);
  const profile = useSelector(selectCurrentProfile);
  // console.log(profile);
  return (
    <div>
      <Navbar />

      <div className="mt-32 flex  mx-auto max-w-[1400px]">
        <ProfileMain />
        <NotificationCard />
      </div>
    </div>
  );
};

export default ProfilePage;
