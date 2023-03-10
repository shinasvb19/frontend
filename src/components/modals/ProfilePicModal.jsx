import React, { useRef, useState } from "react";
import { AiFillCloseSquare } from "react-icons/ai";
import { BsImages } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import { FcGallery } from "react-icons/fc";
import { IoLocation } from "react-icons/io5";
import { useSelector } from "react-redux";
import instance from "../../app/api/instance";
import { selectCurrentUser } from "../../features/auth/authSlice";

const overlay_style = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgb( 0, 0, 0, .7 )",
  zIndex: 1000,
};
const Register_style = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  backgroundColor: "#FFF",
  padding: "50px",
  zIndex: 1000,
};

const ProfilePicModal = ({ onOpen, onClose, updateProfile }) => {
  const [image, SetImage] = useState("");

  const imageInput = useRef(null);
  const id = useSelector(selectCurrentUser);
  const imageHalndler = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "z46xgfxs");
    data.append("cloud_name", "dlabwmroq");

    fetch(" https://api.cloudinary.com/v1_1/dlabwmroq/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.url);profilePicModal
        // // const id = userDetails._id;
        // console.log(id);
        const profilePicture = data.url;

        // fetch(`http://localhost:5000/profile/${id}`, {
        //   method: "PUT",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({ profilePicture }),
        // })
        instance.put(`/profile/${id}`, { profilePicture }).then((response) => {
          onClose();
          resetShare();
          updateProfile();
        });
      })
      .catch((err) => console.log(err));
  };
  const resetShare = () => {
    SetImage(null);
  };

  if (!onOpen) return null;
  return (
    <>
      <div style={overlay_style}>
        <div
          className="flex flex-col w-[500px] h-[600px] rounded-3xl "
          style={Register_style}
        >
          <div className="font-extrabold flex justify-between   w-[100%] mb-12">
            <h1 className="font-extrabold text-lg">
              Update your profile photo
            </h1>
            <AiFillCloseSquare
              className="font-extrabold text-xl "
              onClick={onClose}
            />
          </div>

          <div className="w-[400px] h-[350px] flex  border-zinc-300 border-2 rounded-2xl items-center justify-center">
            {image ? (
              <div
                className="previewImage w-[370px] h-[320px] bg-contain bg-center bg-no-repeat "
                style={{
                  backgroundImage: `url(${URL.createObjectURL(image)})`,
                }}
              >
                <FaTimes onClick={resetShare} />
              </div>
            ) : (
              <div
                className="w-[370px] h-[320px] flex flex-col bg-[#f6f6f6]  rounded-2xl items-center justify-center"
                onClick={() => imageInput.current.click()}
              >
                <BsImages className="text-[30px]" />
                <h1>Add your photo</h1>
              </div>
            )}
          </div>
          <input
            onChange={(e) => {
              SetImage(e.target.files[0]);
              // console.log(image);
            }}
            type="file"
            id="file"
            ref={imageInput}
            style={{ display: "none" }}
            accept="image/x-png,image/gif,image/jpeg"
          />

          <div className="w-[400px] h-[40px] items-center justify-around flex  mt-6 border-zinc-300 border-2 rounded-xl">
            <div className="flex ">
              <FcGallery
                className="w-[25px] h-[25px] mr-3"
                onClick={() => imageInput.current.click()}
              />
              <IoLocation className="text-red-700 w-[25px] h-[25px]" />
            </div>
            <div></div>
            <button className="text-sm font-semibold" onClick={imageHalndler}>
              Add your photo
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePicModal;
