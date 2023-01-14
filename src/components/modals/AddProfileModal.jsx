import React, { useState } from "react";
import { AiFillCloseSquare } from "react-icons/ai";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../features/auth/authSlice";
import { selectCurrentProfile } from "../../features/profile/profileSlice";
const Register_style = {
  position: "fixed",
  top: "50%",
  left: "50%",

  transform: "translate(-50%,-50%)",
  backgroundColor: "#FFF",
  padding: "50px",
  zIndex: 1000,
};

const overlay_style = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgb( 0, 0, 0, .7 )",
  zIndex: 1000,
};
const AddProfileModal = ({ onProfileOpen, onProfileClose }) => {
  const profile = useSelector(selectCurrentProfile);
  const [name, setName] = useState(profile.name);
  const [desc, setDesc] = useState(profile?.desc ? profile.desc : "");
  const [mobile, setMobile] = useState(profile.mobile);
  const [education, setEducation] = useState(profile.education);
  const [institution, setInstitution] = useState(profile.institution);
  const id = useSelector(selectCurrentUser);
  const onReset = () => {
    setName(profile.name);
    setDesc(profile.desc);
    setMobile(profile.mobile);
    setEducation(profile.education);
    setInstitution(profile.institution);
  };
  console.log(profile.desc);

  console.log(profile);
  const handleSubmit = (e) => {
    console.log(mobile);
    // e.preventDefault();
    fetch(`http://localhost:5000/profile/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        desc,
        mobile,
        education,
        institution,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        open.updateEvent();
        setDesc("");
      });
  };

  if (!onProfileOpen) return null;
  return (
    <>
      <div style={overlay_style}>
        <div
          className="flex flex-col w-[500px] h-[700px] rounded-3xl "
          style={Register_style}
        >
          <div className="font-extrabold flex justify-between   w-[100%] mb-12">
            <h1 className="font-extrabold text-lg">Update your profile</h1>
            <AiFillCloseSquare
              className="font-extrabold text-xl "
              onClick={(e) => {
                onProfileClose(), onReset();
              }}
            />
          </div>
          <div className="pb-10">
            <h1 className="my-2">Name</h1>
            <input
              type="text"
              className="focus:outline-0 border-gray-700 border-2 text-center h-10 w-[378px]  rounded-xl"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your Name"
            />
            <h1 className="my-2">Headline</h1>
            <input
              type="text"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              className="focus:outline-0 mt h-10 w-[378px] text-center border-gray-700 border-2 rounded-xl"
              placeholder="Enter your Headline"
            />
            <h1 className="my-2">Mobile</h1>
            <input
              type="text"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="focus:outline-0 mt-2   h-10 w-[378px] text-center border-gray-700 border-2 rounded-xl"
              placeholder="mobile"
            />
            <h1 className="my-2">Education</h1>
            <input
              type="text"
              value={education}
              onChange={(e) => setEducation(e.target.value)}
              className="focus:outline-0 mt-2   h-10 w-[378px] text-center border-gray-700 border-2 rounded-xl"
              placeholder="Education"
            />
            <h1 className="my-2">Institution</h1>
            <input
              value={institution}
              onChange={(e) => setInstitution(e.target.value)}
              type="text"
              className="focus:outline-0 mt-2   h-10 w-[378px] text-center border-gray-700 border-2 rounded-xl"
              placeholder="institution"
            />
            <button
              onClick={handleSubmit}
              className="w-96 mt-10 h-10 bg-black rounded-3xl text-white"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProfileModal;
