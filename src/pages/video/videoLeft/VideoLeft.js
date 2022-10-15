import React, { useState } from "react";
import { AiTwotoneSetting } from "react-icons/ai";
import { MdOutlineOndemandVideo, MdVideoStable } from "react-icons/md";
import { RiLiveFill } from "react-icons/ri";
import { FaSave } from "react-icons/fa";
import "../../../App.css";
import { NavLink } from "react-router-dom";
import UsersGroupMenu from "../../home/Homeleft/LeftMenuData/UsersGroupMenu";

const VideoLeft = () => {
  const [focusValue, setFocusValue] = useState(false);
  const videoMenuData = [
    {
      name: "Live",
      icon: RiLiveFill,
      href: "/videos",
    },
    {
      name: "Shows",
      icon: MdVideoStable,
      href: "/videos",
    },
    {
      name: "Saved",
      icon: FaSave,
      href: "/videos",
    },
  ];
  return (
    <>
      <section className="bg-white px-4 py-2 shadow-lg rounded-r-lg rounded-b-lg w-5/6 ">
        {/* title and sitting button  */}
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">Watch</h1>
          <div className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition cursor-pointer">
            <AiTwotoneSetting className="text-xl" />
          </div>
        </div>
        {/* input box */}
        <div className=" relative py-4">
          <input
            className={`bg-gray-100 w-16 ${
              focusValue && "focus:w-full focus:shadow-sm"
            } hover:z-40 md:shadow-none md:w-full transition-all placeholder:text-gray-500 inline-block px-4 py-2 border-none checked:border-none outline-none rounded-full`}
            type="text"
            onFocus={() => setFocusValue(true)}
            onBlur={() => setFocusValue(false)}
            placeholder="&#x1F50E;&#xFE0F; Search Videos"
          />
        </div>

        {/* horaizental bar  */}
        <div>
          <hr />
        </div>

        {/* menu list */}
        <div className="overflow-y-scroll h-screen scroll-smooth scrollBar">
          <NavLink to="/" className=" py-2 cursor-pointer">
            <div className="flex flex-row justify-start items-center p-2 bg-gray-200 rounded-md">
              {/* logo  */}
              <div className="p-2 bg-blue-500 rounded-full">
                <MdOutlineOndemandVideo className="text-xl text-gray-100" />
              </div>
              {/* title  */}
              <div className="ml-2 font-semibold">
                <span>Home</span>
              </div>
            </div>
          </NavLink>
          {/* menu data map  */}
          {videoMenuData.map((val, index) => (
            <NavLink key={index} to={val.href}>
              <div className="flex flex-row justify-start items-center p-2 hover:bg-gray-200 rounded-md cursor-pointer transition">
                {/* logo  */}
                <div className="p-2 bg-gray-300 rounded-full">
                  <val.icon className="text-xl text-gray-800" />
                </div>
                {/* title  */}
                <div className="ml-2 font-semibold">
                  <span>{val.name}</span>
                </div>
              </div>
            </NavLink>
          ))}
          {/* horaizental bar  */}
          <div>
            <hr />
          </div>

          <section className="h-screen overflow-y-scroll scrollBar">
            <UsersGroupMenu />
          </section>
        </div>
      </section>
    </>
  );
};

export default VideoLeft;
