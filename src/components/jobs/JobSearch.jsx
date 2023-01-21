import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
const JobSearch = ({ jobResult, setSearchResult }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  // console.log("this is ", setSearchResult);
  const handleSearchChange = (e) => {
    if (!e.target.value) return setSearchResult(jobResult);
    const resultArray = jobResult.filter(
      (jobResult) =>
        jobResult.jobTitle.toLowerCase().includes(e.target.value) ||
        jobResult.company.toLowerCase().includes(e.target.value) ||
        jobResult.jobType.toLowerCase().includes(e.target.value) ||
        jobResult.workType.toLowerCase().includes(e.target.value) ||
        jobResult.jobLocation.toLowerCase().includes(e.target.value) ||
        jobResult.skills.toLowerCase().includes(e.target.value)
    );
    setSearchResult(resultArray);
  };
  return (
    <div className="bg-[#FFFFFF] sticky top-32 flex flex-col h-[300px] w-[300px]  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]  rounded-xl  md:sticky  ">
      <div className="pt-8">
        <h1 className="text-2xl font-bold flex justify-center">Job search</h1>
      </div>
      <div className="pt-8">
        <h1 className=" font-bold flex justify-center">
          Search jobs by categories
        </h1>
      </div>
      <form className="mt-20 ml-4 flex" onSubmit={handleSubmit}>
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search jobs ..."
            onChange={handleSearchChange}
          />
          <button
            type="submit"
            class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobSearch;
