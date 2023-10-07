import Banner from "../../Components/Banner/Banner";
import { useLoaderData } from "react-router-dom";
import Service from "../Service/Service";

const Home = () => {
  const services = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <h1 className="text-3xl font-bold text-center mt-20">Our Services</h1>
      <div className="my-10 w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center justify-center">
        {services.map((service) => (
          <Service service={service} key={service.id}></Service>
        ))}
      </div>
    </div>
  );
};

export default Home;
