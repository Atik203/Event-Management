import { Link } from "react-router-dom";
import { AiOutlineDollar } from "react-icons/ai";
import React, { useState } from "react";

const Work = ({ work }) => {
  const { id, name, image, description, priceRange, features } = work;
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="card h-[420px] shadow-xl relative"
      data-aos="zoom-in-up"
      data-aos-duration="2000"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <figure>
        <img className="w-full h-52" src={image} alt={name} />
      </figure>
      <div className="card-body p-5 text-center">
        <h2 className="card-title">{name}</h2>
        <p className="text-justify mt-1">{description}</p>
        {isHovered && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-black opacity-50 w-full h-full absolute rounded-xl"></div>
            <Link
              to={`/work-details/${id}`}
              className="btn bg-red-500 text-white px-4 py-2 rounded absolute border-none"
            >
              More Details
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Work;
