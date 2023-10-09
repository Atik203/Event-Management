import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineDollar } from "react-icons/ai";

const Venue = ({ venue }) => {
  const { id, name, image, price } = venue;
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`card h-[420px] shadow-xl ${isHovered ? "bg-red-300" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <figure>
        <img className="w-full h-52" src={image} alt={name} />
      </figure>
      <div className="card-body p-5 text-center">
        <h2 className="card-title">{name}</h2>

        <div className="flex gap-2 items-center text-base">
          <div>
            <AiOutlineDollar></AiOutlineDollar>
          </div>
          <div className="">
            <p>Price: {price}</p>
          </div>
        </div>
      </div>
      <div>
        <Link
          to={`/venue-details/${id}`}
          className={`btn ${
            isHovered ? "bg-red-400 text-black" : "bg-red-400"
          } w-full`}
        >
          More Details
        </Link>
      </div>
    </div>
  );
};

export default Venue;
