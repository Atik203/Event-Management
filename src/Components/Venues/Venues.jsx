import { useLoaderData } from "react-router-dom";
import Venue from "../Venue/Venue";

const Venues = () => {
  const venues = useLoaderData();
  console.log(venues);

  return (
    <div className="mb-20">
      <h1 className="text-3xl mb-20 font-bold text-center mt-20">
        {" "}
        Our Venues
      </h1>
      <div className="my-10 w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center justify-center">
        {venues.map((venue) => (
          <Venue venue={venue} key={venue.id}></Venue>
        ))}
      </div>
    </div>
  );
};

export default Venues;
