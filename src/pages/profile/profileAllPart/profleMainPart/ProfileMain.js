import React from "react";
import { IoCameraSharp, IoCamera, IoAddCircleSharp } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";

const ProfileMain = () => {
  const imageData = [
    {
      index: 1,
      image: "https://i.ibb.co/vmRTwmF/istockphoto-1186746146-612x612.jpg",
    },
    {
      index: 3,
      image: "https://i.ibb.co/6sW7CyX/01768078195.jpg",
    },
    {
      index: 4,
      image: "https://i.ibb.co/v3Vb3C7/1642326888748.jpg",
    },
    {
      index: 5,
      image: "https://i.ibb.co/vmRTwmF/istockphoto-1186746146-612x612.jpg",
    },
    {
      index: 6,
      image: "https://i.ibb.co/6sW7CyX/01768078195.jpg",
    },
    {
      index: 7,
      image: "https://i.ibb.co/v3Vb3C7/1642326888748.jpg",
    },
    {
      index: 8,
      image: "https://i.ibb.co/6sW7CyX/01768078195.jpg",
    },
  ];
  return (
    <>
      <section className="w-full h-auto flex flex-col justify-center items-center -mt-5 bg-white rounded-b-md shadow-md">
        {/* top part  */}
        <div className=" w-full h-auto md:w-4/6 relative">
          <input
            type="image"
            src="https://i.ibb.co/Km11Wg1/kuanish-reymbaev-o-l-Lsd-VTxak-unsplash.jpg"
            alt="cover photo part"
            className="w-full h-1/5 md:h-80 lg:h-96 shadow-2xl rounded-b-md"
          />
          {/* edit top cover part  */}
          <div className="absolute right-5 bottom-5 select-none bg-white hover:bg-slate-100 transition flex items-center py-2 px-3 cursor-pointer rounded-md shadow-xl">
            <IoCameraSharp className="text-xl mr-1" />
            <span className="font-semibold hidden md:block">
              Edit cover photo
            </span>
          </div>
        </div>
        {/* user profile and name part */}
        <div className="w-full md:w-4/6 flex flex-col md:flex-row justify-center items-center md:justify-between pb-8 -mt-10">
          <div className="flex flex-col md:flex-row justify-center items-center z-10">
            {/* main profile pic section  */}
            <div className="w-40 h-40 md:w-44 md:h-44 rounded-full shadow-lg border-2 border-slate-50 relative">
              <div className="w-full h-full rounded-full shadow-lg border-4 border-blue-500">
                <input
                  type="image"
                  src="https://i.ibb.co/r35x4ws/143218413-2955428034783608-1232370029292067357-n.jpg"
                  alt="profile main pic"
                  className="w-full h-full rounded-full shadow-lg border-2 border-white"
                />
              </div>
              <div
                onClick={(_) => alert("Hello World")}
                className="absolute bottom-0 right-0 w-10 aspect-square bg-slate-200 hover:bg-slate-300 transition flex justify-center items-center rounded-full z-20"
              >
                <IoCamera className="text-2xl" />
              </div>
            </div>
            {/* profile name and data  */}
            <div className="md:ml-3 md:-mb-14 flex justify-center md:justify-start items-center md:items-start flex-col">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                Morsalin Kausar{" "}
                <span className=" font-normal text-xl lg:text-2xl">
                  (Pølîtē Dëvîl)
                </span>
              </h1>
              <div>
                <button className="text-lg text-gray-500 font-semibold my-1">
                  3k friends
                </button>
                <div className="flex flex-row">
                  {imageData.map((val) => (
                    <div key={val.index} className="-ml-2" title="morsalin">
                      <input
                        type="image"
                        src={val.image}
                        alt="friend pic"
                        className="w-9 h-9 border-2 border-white rounded-full"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* profile button part  */}
          <div className="flex flex-row md:-mb-28">
            <button className="bg-blue-600 hover:bg-blue-700 transition px-3 mr-2 py-2 text-white font-sans font-semibold flex flex-row items-center justify-center rounded-md shadow-md">
              <IoAddCircleSharp className="mr-1 text-xl" /> add to story
            </button>

            <button className="bg-gray-200 hover:bg-gray-300 transition px-3 py-2 text-black font-sans font-semibold flex flex-row items-center justify-center rounded-md shadow-md">
              <FiEdit className="mr-1 text-lg" /> Edit Profile
            </button>
          </div>
        </div>
        {/* horaigental bar  */}
        <div className="w-full md:w-4/6">
          <hr />
        </div>
        {/* menu bar  */}
      </section>
    </>
  );
};

export default ProfileMain;
