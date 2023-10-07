import { AiOutlineDollar } from "react-icons/Ai";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = ({ service }) => {
  const { img, name, description, id, price } = service;

  return (
    <div
      className="card h-[420px] shadow-xl bg-[#d45a5e38] "
      data-aos="zoom-in-up"
      data-aos-duration="2000"
    >
      <figure>
        <img className="w-full h-52" src={img} />
      </figure>
      <div className="card-body p-5 text-center">
        <h2 className="card-title">{name}</h2>
        <p className="text-justify mt-1">{description} </p>

        <div
          className="
        flex gap-2 items-center text-base"
        >
          <div>
            <AiOutlineDollar></AiOutlineDollar>
          </div>
          <div className="">
            <p>Price range: {price}$</p>
          </div>
        </div>
      </div>
      <div>
        <Link
          to={`/services/${id}`}
          className="btn bg-red-400 text-base font-medium w-full "
        >
          More Details
        </Link>
      </div>
    </div>
  );
};

export default Services;
AOS.init();
