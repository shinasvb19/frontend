import React from "react";
import { AiFillCloseSquare, AiOutlineSend } from "react-icons/ai";
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
const Modal = ({ open, onClose, onComment, comment, handleSubmit }) => {
  // console.log("aaaa", onClose);
  // console.log(open);
  // console.log(comment);
  if (!open) return null;
  return (
    <div style={overlay_style}>
      <div
        className="flex flex-col w-[700px] h-[700px] rounded-3xl backdrop-blur-sm bg-opacity-50 "
        style={Register_style}
      >
        <div className="font-extrabold flex justify-between   w-[100%] mb-12">
          <h1 className="font-extrabold text-lg">Comments </h1>
          <AiFillCloseSquare
            className="font-extrabold text-xl "
            onClick={onClose}
          />
        </div>
        <div className="w-[600px] h-[620px] flex  rounded-2xl  pl-4 mb-8 overflow-y-scroll no-scrollbar">
          <div className="mt-4 mr-4">
            <div className="bg-[#fefefe] w-[500px] p-5 min-h-[70px] rounded-3xl flex flex-col align-center justify-center shadow-xl font-normal hover:scale-105">
              <h1 className="font-semibold">SHINAS V B</h1>
              <h1 className="mr-4 mt-2 text-[#585858]">adadadadada</h1>
            </div>
          </div>
        </div>
        <div className="flex w-[600px] rounded-3xl  border-black border-2 pr-5">
          <input
            type="text"
            value={comment}
            className="focus:outline-0 w-[600px] h-10 bg-transparent text-black text-center"
            placeholder="comments"
            onChange={onComment}
          />
          <AiOutlineSend className="mt-2 text-[25px]" onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
