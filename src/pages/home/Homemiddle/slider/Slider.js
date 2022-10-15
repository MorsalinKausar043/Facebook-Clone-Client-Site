import React, { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import "../slider/slider.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const imageData = [
  {
    image: "https://i.ibb.co/Db96Qq2/toonmecom-06a867.jpg",
  },
  {
    image:
      "https://i.ibb.co/QrQPyKd/404-error-page-concept-of-computer-error-3d-rendering.jpg",
  },
  {
    image: "https://i.ibb.co/v3Vb3C7/1642326888748.jpg",
  },
  {
    image:
      "https://i.ibb.co/Km11Wg1/kuanish-reymbaev-o-l-Lsd-VTxak-unsplash.jpg",
  },
  {
    image:
      "https://i.ibb.co/Km11Wg1/kuanish-reymbaev-o-l-Lsd-VTxak-unsplash.jpg",
  },
  {
    image:
      "https://i.ibb.co/Km11Wg1/kuanish-reymbaev-o-l-Lsd-VTxak-unsplash.jpg",
  },
  {
    image:
      "https://i.ibb.co/Km11Wg1/kuanish-reymbaev-o-l-Lsd-VTxak-unsplash.jpg",
  },
];

const Slider = () => {
  const [widths, setWidths] = useState(0);

  //  swipper data is responsive
  useEffect(() => {
    function handleResize() {
      setWidths(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    window.addEventListener("load", handleResize);
    window.addEventListener("mouseover", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", handleResize);
      window.removeEventListener("mouseover", handleResize);
    };
  }, []);
  return (
    <>
      <section className="w-full h-56">
        <Swiper
          slidesPerView={`${widths < 580 ? 3 : 5}`}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          className="mySwiper h-full px-2"
        >
          <SwiperSlide className="shadow-md rounded-lg cursor-pointer flex flex-col slider_div">
            <div>
              <input
                type="image"
                src="https://i.ibb.co/vhL3ZjY/143218413-2955428034783608-1232370029292067357-n.jpg"
                alt="User Day Image"
                className="w-full h-40 rounded-t-md"
              />
            </div>
            <div className="flex relative flex-col items-center justify-center">
              <div className="absolute rounded-full border-2 border-cyan-50 text-white bg-blue-500 text-2xl p-1">
                <AiOutlinePlus />
              </div>
              <span className="inline-block absolute top-4 text-sm font-semibold">
                create story
              </span>
            </div>
          </SwiperSlide>

          {imageData.map((val, id) => (
            <SwiperSlide
              key={id}
              className="overflow-hidden relative rounded-md"
            >
              <input
                type="image"
                src={val.image}
                alt="User Day Image"
                className="w-full h-full rounded-lg shadow-md image_style"
              />
              {/* profile picture in the day  */}
              <div className="absolute w-10 h-10 top-2 left-2 rounded-full shadow-lg border-4 border-blue-400">
                <input
                  type="image"
                  src={val.image}
                  alt="profile_image"
                  className="w-full h-full rounded-full"
                />
              </div>
              <span className="inline-block absolute bottom-2 left-2 text-sm md:text-md font-semibold text-white">
                Morsalin kausar
              </span>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default Slider;
