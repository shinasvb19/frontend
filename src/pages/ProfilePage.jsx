import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import instance from "../app/api/instance";
import AppliedJobs from "../components/AppliedJobs";

import JobApplicants from "../components/JobApplicants";
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
  const [savedPost, setSavedPost] = useState(true)
  const [updated, setUpdate] = useState(false);
  const [jobApplicants, setJobApplicants] = useState([]);
  const [appliedJobs,setAppliedJobs] = useState(false);
  const [aplication, setAplication] = useState([])
  const token = useSelector(selectCurrentToken);
  console.log(jobApplicants);
  const dispatch = useDispatch();
  const updateProfile = () => {
    setUpdate(!updated);
  };
  const id = useSelector(selectCurrentUser);
  useEffect(() => {
    instance.get(`/job/application/${id}`).then((response) => {
      setJobApplicants(response.data);
    });
  }, []);
  useEffect(() => {
    // console.log("adadadadadad");
    dispatch(getProfile(token));
  }, [dispatch, updated]);
  const profile = useSelector(selectCurrentProfile);
  // console.log(profile);
  console.log(jobApplicants);
 const handleApplied=()=>{
  instance.get("/job/applied").then((response) => {
    setAplication(response.data);
  })
 }
 
  return (
    <div>
      <Navbar />

      <div className="mt-32 flex  mx-auto max-w-[1400px]">
        <ProfileMain updateProfile={updateProfile} />
        <NotificationCard />
      </div>
      <div className="flex flex-col mx-auto max-w-[1200px] p-3 rounded-3xl mt-8 bg-blue-100 h-auto ">
        <div className="flex justify-around pb-3">
          <button className="text-lg font-bold" onClick={(e)=>{
            setAppliedJobs(false),setSavedPost(true)
          }}>saved post</button>
          <button className="text-lg font-bold">Job applicants</button> 
          <button className="text-lg font-bold" onClick={(e)=>{handleApplied(),setAppliedJobs(true),setSavedPost(false)}}>Applied jobs</button>
        </div>

        <div className="bg-white h-[800px] rounded-3xl grid grid-cols-2 overflow-scroll no-scrollbar" onClick={(e)=>{
          
        }}>
          {savedPost ? jobApplicants.map((data) => (
            <JobApplicants data={data} />
          )):null}
          { appliedJobs ? aplication.map((data) => (
             <AppliedJobs data={data} />
          )
          )
  : null}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
