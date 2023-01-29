import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectCurrentToken } from "../../features/auth/authSlice";
import {
  getProfile,
  selectCurrentProfile,
} from "../../features/profile/profileSlice";
import ProfilePage from "../../pages/ProfilePage";

const ProfileCard = ({ followUpdate }) => {
  const token = useSelector(selectCurrentToken);
  const profile = useSelector(selectCurrentProfile);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfile(token));
  }, [dispatch, followUpdate]);
  return (
    <>
      <div className="overflow-hidden bg-[#FFFFFF] flex flex-col items-center  h-[350px] mb-10 w-[300px] mx-auto shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]   px-4  rounded-lg lg:sticky  md:top-32">
        {profile?.coverPicture ? (
          <img
            src={profile.coverPicture}
            className="bg-[#000] h-[80px]  w-[300px]"
          ></img>
        ) : (
          <div className="bg-[#000] h-[80px]  w-[300px]"></div>
        )}
        {profile?.profilePicture ? (
          <img
            src={profile.profilePicture}
            className="absolute w-[120px] h-[120px] border-4 border-[#ffff]  mt-10 bg-[#00b3ef] rounded-full "
          ></img>
        ) : (
          <div className="absolute w-[120px] h-[120px] border-4 border-[#ffff]  mt-10 bg-[#00b3ef] rounded-full "></div>
        )}
        <Link to="/profile" className="relative mt-20 font-bold tracking-wider">
          {profile.name}
        </Link>
        <h1 className="text-xs mt-1 text-opacity-0">{profile.desc}</h1>
        <div className="bg-[#F9F9F9] w-[250px] mt-4 first-letter h-[100px]">
          <div className="flex justify-between font-medium mx-8 my-4">
            <h1 className="pr-2">followers</h1>
            <h1>{profile.followers?.length}</h1>
          </div>
          <div className="flex justify-between font-medium mx-8 my-4">
            <h1 className="pr-2">following</h1>
            <h1>{profile?.followins?.length}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
