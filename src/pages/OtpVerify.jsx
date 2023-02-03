import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import instance from "../app/api/instance";
import { selectCurrentToken } from "../features/auth/authSlice";

const OtpVerify = () => {
  const navigate = useNavigate();
  const token = useSelector(selectCurrentToken);
  const [otp, setOtp] = useState();
  const { mobile } = useParams();
  const handleSubmit = (e) => {
    instance
      .post("/otp/verify", {
        otp,
        mobile,
      })
      .then((response) => {
        console.log(response.data);
        navigate("/signin");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="flex mx-auto align-middle">
        <div className="flex flex-col w-[300px] h-[300px] items-center pt-48 mx-80 my-48  ">
          <h1 className="text-[30px] font-bold mb-10">VERIFY OTP</h1>
          <div className=" flex items-center w-[400px] h-[30px] border-b-2 mb-20 border-gray-500 rounded">
            <input
              type="number"
              className="w-[100%] h-[100%] focus:outline-0 text-clip"
              placeholder="enter otp"
              value={otp}
              onChange={(e) => {
                setOtp(e.target.value);
              }}
            />
          </div>

          <button
            onClick={handleSubmit}
            className="py-4  h-[100px] bg-[#212A2D] text-white rounded-2xl w-[200px] my-6"
          >
            Verify
          </button>
        </div>

        <div className="mr-8 w-[1200px] h-[600px] bg-[url('../../public/image_processing20201125-26929-gywlop.gif')] rounded-md bg-cover pt-10  my-32"></div>
      </div>
    </div>
  );
};

export default OtpVerify;
