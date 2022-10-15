import React from "react";
import { NavLink } from "react-router-dom";

const Friends = () => {
  const ImageData = [
    {
      image: "https://i.ibb.co/6sW7CyX/01768078195.jpg",
      name:"morsalin Kausar"
    },

    {
      image: "https://i.ibb.co/vmRTwmF/istockphoto-1186746146-612x612.jpg",
      name:"jihad islam"
    },

    {
      image: "https://i.ibb.co/n1m3dSX/98-1.jpg",
      name:"abu hasnat"
    },
    {
      image: "https://i.ibb.co/mC3vFtm/photo-1541746972996-4e0b0f43e02a.jpg",
      name:"abu robin"
    },
    {
      image:
        "https://i.ibb.co/Sy1LdZc/christopher-gower-m-HRf-Lhg-ABo-unsplash.jpg",
        name:"based badhon"
    },
    {
      image: "https://i.ibb.co/JR1r1Z4/whentovisitmekkah2.jpg",
      name:"Md Kamal"
    },
    {
      image: "https://i.ibb.co/26vLdb4/toonmecom-06a867.jpg",
      name:"farjana Ethi"
    },
    {
      image: "https://i.ibb.co/qjHdYKD/background-03-1920x800.jpg",
      name:"abu dujana"
    },
    {
      image:
        "https://i.ibb.co/cywkxCg/green-bicycle-with-brown-black-details-23-2148907996.jpg",
        name:"Yousuf al Ayub"
    },
  ];
  return (
    <>
      <div className="bg-white shadow-md rounded-lg py-4 px-4 md:px-6">
        {/* title   */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="font-sans text-xl font-bold">Friends</h1>
            <p className="text-gray-400">3,070 friends</p>
          </div>
          <NavLink to="/" className="text-blue-500 text-md">
            See All Friends
          </NavLink>
        </div>
        {/* photo section */}
        <section className=" text-gray-700 mt-3 pb-5">
          <div className="flex flex-wrap -m-1 md:-m-2">
            {ImageData.map((val, id) => (
              <div key={id} className="flex flex-wrap w-1/3 mt-5">
                <div className="w-full p-1">
                  <img
                    alt="gallery"
                    className="block object-cover object-center w-full h-full rounded-lg hover:opacity-90 transition-all"
                    src={val.image}
                  />
                  <span className="text-sm font-sans font-semibold">{val.name}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Friends;
