import React, { useState } from "react";
import { useSelector } from "react-redux";
import instance from "../../app/api/instance";
import { selectCurrentUser } from "../../features/auth/authSlice";
import FollowButton from "./FollowButton";

const Users = ({ result, followUpdater }) => {
  const currentUser = useSelector(selectCurrentUser);
  const [clicked, setClicked] = useState(
    result ? result.followers.includes(currentUser) : false
  );
  const id = result._id;
  const user = useSelector(selectCurrentUser);
  const follow = () => {
    // console.log("submitte");
    instance.post(`/follow/${id}`, { user }).then((response) => {
      setClicked(!clicked);
    });
    instance.post("/chat", { id, user });
  };
  const unFollow = () => {
    // console.log("submitte");
    instance.post(`/unfollow/${id}`, { user }).then((response) => {
      setClicked(!clicked);
    });
  };
  const clickedUpdate = () => {
    setClicked(!clicked);
    followUpdater();
  };

  return (
    <div>
      <div className="mt-4 over h-14">
        <div className="flex justify-between">
          <h1>{result.name}</h1>
          <FollowButton
            clicked={clicked}
            clickedUpdate={clickedUpdate}
            follow={follow}
            unFollow={unFollow}
          />
        </div>

        <hr className="mt-3" />
      </div>
    </div>
  );
};

export default Users;
