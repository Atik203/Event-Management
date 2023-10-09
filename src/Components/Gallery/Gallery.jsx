import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";
import { Pagination, Navigation } from "swiper/modules";
import SingleSlider from "./SingleSlider";
export default function Gallery() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch("/gallery.json")
      .then((res) => res.json())
      .then((data) => setPhotos(data));
  }, []);

  return (
    <div className="mt-16 w-5/6 lg:w-3/6 mx-auto">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        // navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {photos.map((photo) => (
          <SwiperSlide key={photo.id}>
            <SingleSlider photo={photo}></SingleSlider>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
