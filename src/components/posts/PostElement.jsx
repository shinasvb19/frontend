import React, { useEffect, useState } from "react";
import { FcStackOfPhotos, FcVideoFile, FcKindle } from "react-icons/fc";
import { useSelector } from "react-redux";
import instance from "../../app/api/instance";
import { selectCurrentUser } from "../../features/auth/authSlice";

import FileUploadModal from "../modals/FileUploadModal";
import JobModal from "../modals/JobModal";
import JobModalTwo from "../modals/JobModalTwo";
const PostElement = ({ updateEvent }) => {
  const [jobOpen, setJobOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [openJobTwo, setOpenJobTwo] = useState(false);
  const [formOne, setFormOne] = useState({});
  const [formTwo, setFormTwo] = useState({});
  const [submit, setSubmit] = useState(false);
  const userId = useSelector(selectCurrentUser);
  // console.log("this is form one", formOne);
  // console.log("this is form two", formTwo);
  const handleFormSubmit = () => {
    if (!formTwo.skills) return null;
    instance.post("/job", {
      formOne,
      formTwo,
      userId,
    });
  };
  useEffect(() => {
    handleFormSubmit();
  }, [submit]);
  const onJobOpen = () => {
    setJobOpen(true);
  };
  const onJobClose = () => {
    setJobOpen(false);
  };
  const onJobOpenTwo = () => {
    setOpenJobTwo(true);
  };
  const onJobOpenTwoClose = () => {
    setOpenJobTwo(false);
  };
  return (
    <div className="bg-[#FFFFFF] hidden md:flex flex-col  h-[100px] mb-14 w-[450px] mx-auto shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]   px-4  rounded-lg  md:fixed  md:top-24">
      <h1 className="mt-4 ml-4 font-bold">Add a post</h1>
      <div className="mt-4 flex justify-between">
        <div className="flex ">
          <button className="text-2xl ml-2">
            <FcStackOfPhotos onClick={() => setOpen(true)} />
          </button>
          <button onClick={() => setOpen(true)}>photos</button>
          <FileUploadModal
            open={{ open, updateEvent }}
            onClose={() => setOpen(false)}
          />
          <JobModal
            setFormOne={setFormOne}
            jobOpen={jobOpen}
            onJobClose={onJobClose}
            onJobOpen={onJobOpen}
            onJobOpenTwo={onJobOpenTwo}
          />
          <JobModalTwo
            handleFormSubmit={handleFormSubmit}
            setFormTwo={setFormTwo}
            openJobTwo={openJobTwo}
            onJobOpenTwoClose={onJobOpenTwoClose}
            setSubmit={setSubmit}
            submit={submit}
          />
        </div>
        <div className="flex">
          <button className="text-2xl ml-2">
            <FcVideoFile />
          </button>
          <button>Videos</button>
        </div>
        <div className="flex">
          <button onClick={onJobOpen} className="text-2xl ml-2">
            <FcKindle />
          </button>
          <button onClick={onJobOpen}>Job posts</button>
        </div>
      </div>
    </div>
  );
};

export default PostElement;
