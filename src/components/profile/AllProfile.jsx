import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import instance from "../../app/api/instance";
import {
  selectCurrentToken,
  selectCurrentUser,
} from "../../features/auth/authSlice";
import { selectCurrentProfile } from "../../features/profile/profileSlice";
import AddProfileModal from "../modals/AddProfileModal";
import ProfileCover from "../modals/ProfileCover";
import ProfilePicModal from "../modals/ProfilePicModal";

const AllProfile = () => {
  const { id } = useParams();
  const token = useSelector(selectCurrentToken);
  const [profile, setProfile] = useState({});
  const [clicked, setClicked] = useState(true);
  const user = useSelector(selectCurrentUser);
  useEffect(() => {
    instance.get(`/profile/${id}`).then((response) => {
      console.log(response.data);
      setProfile(response.data);
    });
  }, [clicked]);
  const follow = () => {
    // console.log("submitte");
    instance.post(`/follow/${id}`, { user }).then((response) => {
      setClicked(!clicked);
    });
  };
  const unFollow = () => {
    // console.log("submitte");
    instance.post(`/unfollow/${id}`, { user }).then((response) => {
      setClicked(!clicked);
    });
  };
  return (
    <div>
      <div className="bg-[#FFFFFF] flex flex-col   h-[500px] mb-10 max-w-[700px] md:w-[750px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] rounded-3xl lg:sticky  md:top-32">
        {profile?.coverPicture ? (
          <img
            src={profile.coverPicture}
            className=" h-[150px]  w-full rounded-3xl bg-cover"
          ></img>
        ) : (
          <div className=" h-[150px]  w-full rounded-3xl bg-contain bg-black"></div>
        )}
        {profile?.profilePicture ? (
          <img
            className="absolute w-[170px] h-[170px] border-4 border-[#ffff] ml-10 mt-10  rounded-full  "
            src={profile.profilePicture}
            alt=""
          />
        ) : (
          <div className="absolute w-[170px] h-[170px] border-4 border-[#ffff] ml-10 mt-10 bg-[#00b3ef] rounded-full p-10 "></div>
        )}
        <div className="flex justify-between pr-20">
          <div>
            <h1 className="relative mt-20 font-bold text-xl tracking-wider ml-8">
              {profile.name}
            </h1>
            <h1 className="relative  font-medium text-l tracking-wider ml-8">
              {profile.desc}
            </h1>

            <ul className="flex text-sm ml-8">
              <l1 className="mr-2">followers </l1>
              <l1 className="mr-2">
                {profile.followers?.length ? profile.followers.length : 0}
              </l1>
              <l1 className="mr-2">following</l1>
              <l1 className="mr-2">{profile.followins?.length}</l1>
            </ul>
          </div>
          <div className="mt-20 flex flex-col ">
            <h1 className="text-lg font-bold">Education</h1>
            {/* <h1>{profile?.institutions[profile.institutions.length - 1]}</h1> */}
            <button className="bg-black rounded-lg mt-4 text-white">
              Add Skills
            </button>
          </div>
        </div>
        <l1 className="ml-8 font-bold text-[#00b3ef]">Contact us</l1>
        {!profile.followers?.includes(user) ? (
          <button
            onClick={follow}
            className="w-[200px] flex h-[40px] bg-black rounded-lg ml-6 text-white mt-4 justify-center items-center"
          >
            <h1>Follow</h1>
          </button>
        ) : (
          <button
            onClick={unFollow}
            className="w-[200px] flex h-[40px] bg-black rounded-lg ml-6 text-white mt-4 justify-center items-center"
          >
            <h1>unfollow</h1>
          </button>
        )}
      </div>
    </div>
  );
};

export default AllProfile;
