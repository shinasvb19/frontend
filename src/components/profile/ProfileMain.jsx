import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentProfile } from "../../features/profile/profileSlice";
import ProfilePicModal from "../modals/ProfilePicModal";

const ProfileMain = () => {
  const profile = useSelector(selectCurrentProfile);
  console.log(profile);
  const [onOpen, setOpen] = useState(false);
  const onClose = (e) => {
    setOpen(false);
  };

  return (
    <div>
      <ProfilePicModal onOpen={onOpen} onClose={onClose} />
      <div className="bg-[#FFFFFF] flex flex-col   h-[500px] mb-10 max-w-[700px] md:w-[750px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] rounded-3xl lg:sticky  md:top-32">
        <div className="bg-[#000000] h-[150px]  w-full rounded-3xl"></div>
        {
          <div
            onClick={(e) => {
              setOpen(true);
            }}
            className="absolute w-[170px] h-[170px] border-4 border-[#ffff] ml-10 mt-10 bg-[#00b3ef] rounded-full p-10 "
          ></div>
        }
        <h1 className="relative mt-14 font-bold tracking-wider ml-6">
          {profile.name}
        </h1>
        <h1 className="text-xs mt-1 text-opacity-0 ml-6">{profile.desc}</h1>
        <ul className="flex text-sm ml-6">
          <l1 className="mr-2">followers </l1>
          <l1 className="mr-2">{profile?.followers ? profile.followers : 0}</l1>
          <l1 className="mr-2">following</l1>
          <l1 className="mr-2">{profile.followins}</l1>
        </ul>
        <l1 className="ml-6 font-bold text-[#00b3ef]">Contact us</l1>
        <div className="w-[200px] flex h-[40px] bg-black rounded-lg ml-4 text-white mt-4 justify-center items-center">
          <h1>Add to profile</h1>
        </div>
      </div>
    </div>
  );
};

export default ProfileMain;
