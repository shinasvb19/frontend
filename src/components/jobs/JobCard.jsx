import React from "react";
import { FcBriefcase } from "react-icons/fc";
import { ImLocation2 } from "react-icons/im";
const JobCard = ({ jobResults, setApplyJob }) => {
  // console.log(jobResults);
  const submitJob = (e) => {
    setApplyJob(jobResults._id);
    console.log(jobResults._id);
  };
  return (
    <div>
      <div className="bg-[#FFFFFF] hidden md:flex flex-col   h-auto min-h-[100px] mb-10 w-[700px] mx-auto shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]   px-4  rounded-xl  md:sticky  md:top-32">
        <div className="px-2">
          <h1 className="font-bold pt-4 text-xl text-blue-900">
            {jobResults.jobTitle.toUpperCase()}
          </h1>
          <div className="flex items-center">
            <ImLocation2 className="text-red-700 text-lg" />
            <h1 className="font-medium text-lg">{jobResults.jobLocation}</h1>
          </div>
        </div>
        <div className="w-700px h-[230px]  bg-white border-b-2 mt-4 py-2 px-2 overflow-y-scroll no-scrollbar">
          <h1 className="text-xl font-bold">
            {jobResults.company.toUpperCase()}
          </h1>
          <div className="flex items-center">
            <FcBriefcase className="text-lg" />
            <h1>{jobResults.jobType}</h1>
          </div>
          <h1 className="text-blue-900 font-medium mt-2">
            Skills: {jobResults.skills}
          </h1>

          <h1 className=" font-medium">Job type: {jobResults.workType}</h1>
          <h1 className="text-black font-bold mt-2">
            Description:{" "}
            <p className="font-normal">{jobResults.jobDescription}</p>
          </h1>
        </div>
        <div className="w-700px h-auto min-h-[100px] border-b-2">
          <button
            className="mt-8 bg-black text-white w-40 h-10 rounded-lg hover:bg-[#43c68b]"
            onClick={(e) => {
              submitJob(e);
            }}
          >
            Apply now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
