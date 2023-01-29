import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../features/auth/authSlice";
import Users from "../posts/Users";

const FindFreinds = ({
  searchResult,
  setSearchResult,
  userResult,
  followUpdater,
}) => {
  console.log(searchResult);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  // console.log("this is ", setSearchResult);
  const user = useSelector(selectCurrentUser);
  const handleSearchChange = (e) => {
    if (!e.target.value) return setSearchResult(userResult);
    const resultArray = userResult.filter(
      (userResult) => userResult.name.toLowerCase().includes(e.target.value)
   
    );
    setSearchResult(resultArray);
    console.log("result", resultArray);
  };

  return (
    <div className="bg-[#FFFFFF] flex flex-col items-center  h-[350px] mb-10 w-[300px] mx-auto shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]   px-4  rounded-lg  md:top-32">
      <div className="pt-8">
        <h1 className="text-lg font-bold flex justify-center">Find freinds</h1>
      </div>

      <form onSubmit={handleSubmit} className="mt-2 ml-4 flex">
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
            onChange={(e) => {
              handleSearchChange(e);
            }}
            id="default-search"
            class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search jobs ..."
          />
          <button
            type="submit"
            class="text-white absolute right-2.5 bottom-2.5 bg-red-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>
      <div className="overflow-y-scroll h-[300px] w-[200px] no-scrollbar">
        {searchResult.map((result) => (
          <Users result={result} followUpdater={followUpdater} />
        ))}
      </div>
    </div>
  );
};

export default FindFreinds;
