import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const WorkDetails = () => {
  const { id } = useParams();
  const works = useLoaderData();
  const [work, setWork] = useState([]);

  useEffect(() => {
    const findData = works.find((data) => data.id == id);
    setWork(findData);
  }, []);

  const { name, image, description, priceRange, features } = work;

  return (
    <div className="w-10/12 mx-auto mt-20 mb-20">
      <img src={image} className="md:h-[400px] lg:h-[800px] w-full" alt="" />
      <div className="p-4">
        <h1 className="text-red-500 font-bold text-2xl my-3">{name}</h1>
        <p className="text-base text-justify">{description}</p>
        <h2 className="text-left font-bold text-xl my-2 text-red-400">
          Key Features
        </h2>
        {features && Array.isArray(features) && features.length > 0 && (
          <ol className="text-left font-medium text-base">
            {features.map((feature, index) => (
              <li key={index}>
                {index + 1}. {feature}
              </li>
            ))}
          </ol>
        )}
        <p className="text-base mt-2 text-justify">Price Range: {priceRange}</p>
      </div>
    </div>
  );
};

export default WorkDetails;
