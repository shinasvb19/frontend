import React, { useEffect, useState } from "react";
import JobCard from "../components/jobs/JobCard";
import Navbar from "../components/Navbar";
import instance from "../app/api/instance";
import JobSearch from "../components/jobs/JobSearch";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../features/auth/authSlice";
const Jobs = () => {
  const [jobResult, setJobResult] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [applyJob, setApplyJob] = useState();
  const userId = useSelector(selectCurrentUser);
  // console.log(applyJob);
  useEffect(() => {
    instance
      .get("/job")
      .then((response) => {
        setJobResult(response.data.job);
        return response;
      })
      .then((response) => {
        setSearchResult(response.data.job);
      });
  }, []);
  const submitJobPost = () => {
    console.log("done");
    instance.post("/job/apply", { applyJob, userId }).then((response) => {
      console.log(response.data);
    });
  };
  useEffect(() => {
    if (applyJob === undefined) return undefined;
    submitJobPost();
  }, [applyJob]);

  return (
    <div>
      <Navbar />
      <div className="flex my-32  mx-auto   max-w-[1200px]">
        <JobSearch
          jobResult={jobResult}
          setSearchResult={setSearchResult}
          searchResult={searchResult}
        />
        <div className="flex items-center justify-center ml-12 flex-col">
          {searchResult.map((jobResults) => {
            return (
              <JobCard
                jobResults={jobResults}
                submitJobPost={submitJobPost}
                setApplyJob={setApplyJob}
                key={jobResults.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
