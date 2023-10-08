import React, { useState } from "react";
import { Link } from "react-router-dom";

const SingleSlider = ({ photo }) => {
  const { title, img, id } = photo;
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="rounded-xl hover:transition-opacity cursor-pointer relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={img} className="w-full" alt="" />
      {isHovered && (
        <div className="absolute inset-0 rounded-xl flex items-center justify-center">
          <div className="bg-black opacity-50 w-full h-full absolute rounded-xl"></div>

          <Link
            to={`/gallery-details/${id}`}
            className="btn border-none hover:text-black absolute bg-red-500 text-white px-4 py-2 rounded"
          >
            More Details
          </Link>
        </div>
      )}
    </div>
  );
};

export default SingleSlider;
