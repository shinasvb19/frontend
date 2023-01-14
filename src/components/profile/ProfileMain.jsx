import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentProfile } from "../../features/profile/profileSlice";
import AddProfileModal from "../modals/AddProfileModal";
import ProfileCover from "../modals/ProfileCover";
import ProfilePicModal from "../modals/ProfilePicModal";

const ProfileMain = ({ updateProfile }) => {
  const profile = useSelector(selectCurrentProfile);

  const [onOpen, setOpen] = useState(false);
  const [onCoverOpen, setCoverOpen] = useState(false);
  const [onProfileOpen, setProfileOpen] = useState(false);
  const onClose = (e) => {
    setOpen(false);
  };
  const onCoverClose = (e) => {
    setCoverOpen(false);
  };
  const onProfileClose = (e) => {
    setProfileOpen(false);
  };

  return (
    <div>
      <AddProfileModal
        onProfileOpen={onProfileOpen}
        onProfileClose={onProfileClose}
      />
      <ProfileCover
        onCoverOpen={onCoverOpen}
        onCoverClose={onCoverClose}
        updateProfile={updateProfile}
      />
      <ProfilePicModal
        onOpen={onOpen}
        onClose={onClose}
        updateProfile={updateProfile}
      />
      <div className="bg-[#FFFFFF] flex flex-col   h-[500px] mb-10 max-w-[700px] md:w-[750px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] rounded-3xl lg:sticky  md:top-32">
        {profile?.coverPicture ? (
          <img
            onClick={(e) => {
              setCoverOpen(true);
            }}
            src={profile.coverPicture}
            className=" h-[150px]  w-full rounded-3xl bg-cover"
          ></img>
        ) : (
          <div className="bg-[#000]"></div>
        )}
        {profile?.profilePicture ? (
          <img
            onClick={(e) => {
              setOpen(true);
            }}
            className="absolute w-[170px] h-[170px] border-4 border-[#ffff] ml-10 mt-10  rounded-full  "
            src={profile.profilePicture}
            alt=""
          />
        ) : (
          <div
            onClick={(e) => {
              setOpen(true);
            }}
            className="absolute w-[170px] h-[170px] border-4 border-[#ffff] ml-10 mt-10 bg-[#00b3ef] rounded-full p-10 "
          ></div>
        )}
        <h1 className="relative mt-20 font-bold text-xl tracking-wider ml-8">
          {profile.name}
        </h1>
        <h1 className="relative  font-medium text-l tracking-wider ml-8">
          {profile.desc}
        </h1>
        <h1 className="text-xs mt-1 text-opacity-0 ml-8">{profile.desc}</h1>
        <ul className="flex text-sm ml-8">
          <l1 className="mr-2">followers </l1>
          <l1 className="mr-2">{profile?.followers ? profile.followers : 0}</l1>
          <l1 className="mr-2">following</l1>
          <l1 className="mr-2">{profile.followins}</l1>
        </ul>
        <l1 className="ml-8 font-bold text-[#00b3ef]">Contact us</l1>
        <div
          className="w-[200px] flex h-[40px] bg-black rounded-lg ml-6 text-white mt-4 justify-center items-center"
          onClick={(e) => {
            setProfileOpen(true);
          }}
        >
          <h1>Add to profile</h1>
        </div>
      </div>
    </div>
  );
};

export default ProfileMain;
