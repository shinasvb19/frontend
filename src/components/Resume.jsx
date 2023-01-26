import React from "react";
import { Link } from "react-router-dom";

const Resume = ({ user }) => {
  return (
    <div>
      <button className="bg-black rounded-2xl w-48 text-white h-7 mt-4">
        {console.log(user.cv)}
        <a href={user?.cv} target="">
          Dowload Resume
        </a>
      </button>
    </div>
  );
};

export default Resume;
