import React, { useState } from "react";
import './Like.css'

const Likes = () => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div onClick={toggleLike} className="cursor-pointer">
      <i
        className={
          liked
            ? "fa-solid fa-heart text-gray-200 glow-effect"
            : "fa-regular fa-heart text-gray-200"
        }
      ></i>
    </div>
  );
};

export default Likes;
