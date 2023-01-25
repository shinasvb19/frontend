import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAdmin, selectLoading } from "../../features/admin/adminMainSlice";

const AdminSignin = () => {
  const userRef = useRef();
  const errRef = useRef();
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  //   const [login, { isLoading }] = useLoginMutation();
  const [errMsg, setErrMsg] = useState("");
  useEffect(() => {
    userRef.current.focus();
  }, []);
  //   console.log(password);
  useEffect(() => {
    setErrMsg("");
  }, [email, password]);
  const loading = useSelector(selectLoading);
  console.log("loading...", loading);
  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(getAdmin({ email, password, Navigate }));
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex mx-auto align-middle">
          <div className="flex flex-col w-[300px] h-[300px] items-center pt-48 mx-80 my-48  ">
            <h1 className="text-[30px] font-bold mb-10">Sign In</h1>
            <div className=" flex items-center w-[400px] h-[30px] border-b-2 mb-20 border-gray-500 rounded">
              <input
                type="text"
                className="w-[100%] h-[100%] focus:outline-0 text-clip"
                placeholder="example@gmail.com"
                value={email}
                ref={userRef}
                onChange={(e) => {
                  SetEmail(e.target.value);
                }}
              />
            </div>
            <div className=" flex items-center w-[400px] h-[30px] border-b-2  border-gray-500 rounded">
              <input
                type="password"
                className="w-[100%] h-[100%] focus:outline-0 text-clip"
                placeholder="password"
                profile
                value={password}
                onChange={(e) => {
                  SetPassword(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col items-center">
              <h1 className="py-2">Don't have an account?</h1>
              <h1 className="text-[#00B1FF] font-bold">Sign Up</h1>
            </div>
            <button className="py-4  h-[100px] bg-[#212A2D] text-white rounded-2xl w-[200px] my-6">
              sign up
            </button>
          </div>

          <div className="mr-8 w-[1200px] h-[600px] bg-[url('../../public/image_processing20201125-26929-gywlop.gif')] rounded-md bg-cover pt-10  my-32"></div>
        </div>
      </form>
    </>
  );
};

export default AdminSignin;
