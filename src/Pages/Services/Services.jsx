import { useLoaderData, useParams } from "react-router-dom";

import { useEffect, useState } from "react";

const Services = () => {
  const services = useLoaderData();
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    const findData = services.find((data) => data.id == id);
    setData(findData);
  }, []);

  const { img, name, detailed_description, price, features } = data;

  return (
    <div className="w-11/12 mx-auto shadow-xl bg-[#d45a5e38] ">
      <figure>
        <img className="w-full bg-cover" src={img} />
      </figure>
      <div className="card-body p-5 text-center">
        <h2 className="card-title">{name}</h2>
        <p className="text-justify mt-1">{detailed_description} </p>

        <div
          className="
        flex gap-2 items-center text-base"
        >
          <div className="">
            <p>price range: {price}$</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
