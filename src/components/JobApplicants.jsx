import React from "react";
import Resume from "./Resume";

const JobApplicants = ({ data }) => {
  return (
    <div className="bg-[#FFFFFF] hidden md:flex flex-col     h-[350px]  w-[300px] mx-auto shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]   px-4  rounded-lg  mt-12">
      <h1 className="text-xl font-bold mt-4 text-red-600">{data.company}</h1>
      <h1 className="text-lg font-medium ">{data.jobTitle}</h1>
      <h1 className="text-lg mt-2 font-medium mb-2">Applicants</h1>
      {data.foundUser.map((user) => (
        <div>
          <p className="text-blue-900 text-xl font-bold">{user.name}</p>
          <Resume user={user} />
        </div>
      ))}
    </div>
  );
};

export default JobApplicants;
