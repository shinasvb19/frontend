import React, { useEffect, useState } from "react";
import { getUser } from "../../app/api/ChatRequest";

const Conversation = ({ data, currentUserId, online }) => {
  console.log("this is from data", data);
  const [userData, setUSerData] = useState(null);
  useEffect(() => {
    const userId = data.members.find((id) => id !== currentUserId);
    // console.log("userId", userId);
    // console.log(data,'ith tha');
    const getUserData = async () => {
      try {
      
        const { data } = await getUser(userId);
       
        setUSerData(data);
        console.log('this is data', data);
        // dispatch({ type: "SAVE_USER", data: data });
      } catch (error) {
        console.log(error);
      }
    };

    getUserData();
  }, []);
   console.log(userData);
  return (
    <div className="mt-6">
      <div className="flex items-center ">
        <div
          className="rounded-full w-16 h-16 bg-cover "
          style={{ backgroundImage: `url(${userData?.profilePicture})` }}
        ></div>
        <div className="flex flex-col ml-4">
          <div className="">{userData?.name}</div>
          {online ? (
            <div className="text-sm font-thin">online</div>
          ) : (
            <div className="text-sm font-thin">ofline</div>
          )}
        </div>
      </div>
      <hr className="mt-4 bg-[#ececec]" />
    </div>
  );
};

export default Conversation;
