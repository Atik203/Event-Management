import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..

const Banner = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="relative">
        <img
          src={"https://i.ibb.co/HhPdhJ8/banner.jpg"}
          className="h-[300px] md:h-[400px] lg:h-[650px] w-full transition-opacity opacity-70"
        />
      </div>
      <div
        className="w-2/3 mx-auto absolute top-40 md:top-60 lg:top-72 -mt-10 md:-mt-20 ml-12 md:ml-24 lg:-mt-10 lg:ml-44"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <h1 className="text-2xl md:text-3xl my-5 lg:text-5xl text-center text-red-500 font-bold">
          Elevate Your Wedding <br /> Experience
        </h1>
        <h3 className="text-center font-medium text-base md:text-xl">
          Discover a world of exquisite services to make your wedding day <br />
          truly unforgettable. we bring your dreams to life.
        </h3>
      </div>
    </div>
  );
};

export default Banner;
AOS.init();
