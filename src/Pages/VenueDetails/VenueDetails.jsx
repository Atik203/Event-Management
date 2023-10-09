// VenueDetails.jsx
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const VenueDetails = () => {
  const { id } = useParams();
  const venues = useLoaderData();
  const [venue, setVenue] = useState({});

  useEffect(() => {
    const findVenue = venues.find((data) => data.id == id);
    setVenue(findVenue);
  }, [id, venues]);

  const { name, image, description, price, capacity, features } = venue;

  return (
    <div className="w-10/12 mx-auto mt-20 mb-20">
      <img src={image} className="md:h-[400px] lg:h-[800px] w-full" alt="" />
      <div className="p-4">
        <h1 className="text-red-500 font-bold text-2xl my-3">{name}</h1>
        <p className="text-base text-justify">{description}</p>
        <p className="text-base mt-2 text-justify">Capacity: {capacity}</p>
        <p className="text-base mt-2 text-justify">Price: {price}</p>

        <h1 className="text-left font-bold text-xl my-2 text-red-400">
          Key Features
        </h1>
        {features && Array.isArray(features) && features.length > 0 && (
          <ul className="text-left font-medium text-base">
            {features.map((feature, index) => (
              <li key={index}>
                {index + 1}. {feature}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default VenueDetails;
