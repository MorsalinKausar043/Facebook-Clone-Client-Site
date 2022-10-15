import React, { useEffect, useState } from "react";
import { RiVideoAddFill } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


    const blankImage = "https://i.ibb.co/C1phVKw/download.png";

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

const CreateRoom = () => {

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
      <section className="py-4 px-4 md:px-8 bg-white my-4 drop-shadow-lg rounded-md">
        <div className="flex flex-row items-center">
          {/* create room button  */}
          <div className="flex select-none items-center flex-row border-2 rounded-full py-2 px-3 border-indigo-400 hover:bg-slate-100 transition-all cursor-pointer">
            <RiVideoAddFill className="text-purple-500 text-xl mr-1" />
            <h1 className="text-purple-700 font-semibold text-xs md:text-sm">
              Create Room
            </h1>
          </div>

          {/* show user  */}
          <Swiper
            slidesPerView={`${widths < 580 ? 3 : 10}`}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            className="w-9/12 flex flex-row box-border"
          >
            {imageData.map((val, key) => (
              <SwiperSlide className="flex items-center justify-center" key={key}>
                <input
                  className="w-10 h-10 ml-4 rounded-full shadow-md"
                  type="image"
                  src={val.image ? val.image : blankImage}
                  alt="profile_pic"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default CreateRoom;
