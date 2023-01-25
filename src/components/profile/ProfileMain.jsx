import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentProfile } from "../../features/profile/profileSlice";
import AddProfileModal from "../modals/AddProfileModal";
import CvUpload from "../modals/CvUpload";
import ProfileCover from "../modals/ProfileCover";
import ProfilePicModal from "../modals/ProfilePicModal";

const ProfileMain = ({ updateProfile }) => {
  const profile = useSelector(selectCurrentProfile);

  const [onOpen, setOpen] = useState(false);
  const [onCoverOpen, setCoverOpen] = useState(false);
  const [onProfileOpen, setProfileOpen] = useState(false);
  const [onCvOpen, setCvOpen] = useState(false);
  const onClose = (e) => {
    setOpen(false);
  };
  const onCoverClose = (e) => {
    setCoverOpen(false);
  };
  const onProfileClose = (e) => {
    setProfileOpen(false);
  };
  const onCvClose = (e) => {
    setCvOpen(false);
  };
  const onCv = (e) => {
    setCvOpen(true);
  };

  return (
    <div>
      <CvUpload onCvClose={onCvClose} onCvOpen={onCvOpen} />
      {/* <AddProfileModal
        onProfileOpen={onProfileOpen}
        onProfileClose={onProfileClose}
        updateProfile={updateProfile}
      /> */}
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
    </div>
  );
};

export default ProfileMain;
