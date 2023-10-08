import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const GalleryDetails = () => {
  const { id } = useParams();
  const photos = useLoaderData();
  const [data, setData] = useState([]);

  useEffect(() => {
    const findData = photos.find((data) => data.id == id);
    setData(findData);
  }, []);

  const { title, img, description } = data;

  return (
    <div className="w-10/12 mx-auto mt-20 mb-20">
      <img src={img} className="md:h-[400px] lg:h-[650px] w-full" alt="" />
      <div className="p-4">
        <h1 className="text-red-500 font-bold text-2xl my-3">{title}</h1>
        <p className="text-base text-justify">{description}</p>
      </div>
    </div>
  );
};

export default GalleryDetails;
