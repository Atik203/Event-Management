import React from "react";
import { AiOutlineDollar } from "react-icons/ai";

const Card = ({ card }) => {
  const { id, image, name, type, price, size, material, features } = card;

  return (
    <div className="card shadow-xl">
      <figure>
        <img className="w-full h-72" src={image} alt={name} />
      </figure>
      <div className="card-body px-5 text-center">
        <h2 className="card-title ">{name}</h2>
        <div>
          <h1 className="text-left font-bold text-xl text-red-400">
            Key Features
          </h1>
          {features && Array.isArray(features) && features.length > 0 && (
            <ul className="text-left px-3 font-medium text-base">
              {features.map((feature, index) => (
                <li key={index}>
                  {" "}
                  {index + 1} {feature}
                </li>
              ))}
            </ul>
          )}
        </div>
        <p className="text-justify mt-2">Type: {type} Card</p>
        <p className="text-justify">Size: {size}</p>
        <p className="text-justify">Material: {material}</p>

        <div className="flex gap-2 items-center text-base">
          <div>
            <AiOutlineDollar />
          </div>
          <div className="">
            <p>Price: {price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
