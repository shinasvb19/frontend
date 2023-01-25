import React from "react";

const FollowButton = ({ clicked, clickedUpdate, follow, unFollow }) => {
  return (
    <div>
      {!clicked ? (
        <button
          onClick={(e) => {
            clickedUpdate();
            follow();
          }}
          className="h-8 bg-red-700 text-white w-20 rounded-xl"
        >
          follow
        </button>
      ) : (
        <button
          onClick={(e) => {
            clickedUpdate();
            unFollow();
          }}
          className="h-8 bg-red-700 text-white w-20 rounded-xl"
        >
          unfollow
        </button>
      )}
    </div>
  );
};

export default FollowButton;
