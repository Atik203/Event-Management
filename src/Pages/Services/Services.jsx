import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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

  const handleCart = () => {
    toast.success("Added in the Cart Successfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <div className="w-10/12 mx-auto mt-20 mb-24">
      <figure className=" rounded-lg">
        <img className="w-full h-[650px]" src={img} />
      </figure>
      <div className="card-body mt-5 p-0 text-center">
        <h2 className="card-title text-3xl font-bold text-red-500">{name}</h2>
        <p className="text-justify text-base mt-1">{detailed_description} </p>

        <div>
          <h1 className="text-left font-bold text-xl my-2 text-red-400">
            Key Features
          </h1>
          {features && Array.isArray(features) && features.length > 0 && (
            <ol className="text-left font-medium text-base">
              {features.map((feature, index) => (
                <li key={index}>
                  {index + 1}. {feature}
                </li>
              ))}
            </ol>
          )}
        </div>

        <div className="text-lg font-bold text-left">
          <p>Price range: {price}$</p>
        </div>
      </div>
      <button onClick={handleCart} className="btn bg-red-400 mt-5 text-black">
        Add to Cart
      </button>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Services;
