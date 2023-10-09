import Banner from "../../Components/Banner/Banner";
import { useLoaderData } from "react-router-dom";
import Service from "../Service/Service";
import Gallery from "../../Components/Gallery/Gallery";

import Works from "../Works/Works";

const Home = () => {
  const services = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <h1 className="text-3xl font-bold text-center mt-28 md:mt-20">
        Our Services
      </h1>
      <p className="text-center text-base p-4 md:text-xl text-gray-600 mt-4">
        Explore the range of services we offer to make your special moments even
        more memorable.
      </p>
      <div className="my-10 w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center justify-center">
        {services.map((service) => (
          <Service service={service} key={service.id}></Service>
        ))}
      </div>
      <h1 className="text-3xl font-bold text-center mt-20">Gallery</h1>
      <p className="text-center text-base p-4 md:text-xl text-gray-600 mt-4">
        Browse through our gallery and witness the beauty of moments captured
        during various events.
      </p>
      <div className="mb-20">
        <Gallery></Gallery>
      </div>
      <h1 className="text-3xl mb-20 font-bold text-center mt-20">
        Some of Our Previous Works
      </h1>
      <div className="mb-40">
        <Works></Works>
      </div>
    </div>
  );
};

export default Home;
