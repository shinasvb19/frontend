import React, { useEffect, useState } from "react";
import JobCard from "../components/jobs/JobCard";
import Navbar from "../components/Navbar";
import instance from "../app/api/instance";
const Jobs = () => {
  const [jobResult, setJobResult] = useState([]);
  const job = async () => {
    const response = await instance.get("/job");
    setJobResult(response.data.job);
    console.log(response.data);
  };
  useEffect(() => {
    job();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="my-32 flex mx-auto items-center justify-center max-w-[1250px]">
        {jobResult.map((jobResults) => {
          return <JobCard jobResults={jobResults} key={jobResults.id} />;
        })}
      </div>
    </div>
  );
};

export default Jobs;
