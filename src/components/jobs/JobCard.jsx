import React from "react";

const JobCard = (jobResults) => {
  console.log(jobResults);
  return (
    <div>
      <div className="bg-[#FFFFFF] hidden md:flex flex-col   h-auto min-h-[100px] mb-10 w-[700px] mx-auto shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]   px-4  rounded-xl  md:sticky  md:top-32">
        <div className="px-2">
          <h1 className="font-bold pt-4 text-xl text-blue-900">
            {jobResults.jobResults.jobTitle.toUpperCase()}
          </h1>
          <h1 className="font-medium text-lg">
            {jobResults.jobResults.jobLocation}
          </h1>
        </div>
        <div className="w-700px h-auto min-h-[100px] bg-white border-b-2 mt-4 py-2 px-2">
          <h1 className="text-xl font-bold">
            {jobResults.jobResults.company.toUpperCase()}
          </h1>
          <h1>{jobResults.jobResults.jobType}</h1>
          <h1 className="text-blue-900 font-medium">
            Skills: {jobResults.jobResults.skills}
          </h1>
          <h1 className=" font-medium">
            Job type: {jobResults.jobResults.workType}
          </h1>
        </div>
        <div className="w-700px h-auto min-h-[100px] border-b-2"></div>
      </div>
    </div>
  );
};

export default JobCard;
