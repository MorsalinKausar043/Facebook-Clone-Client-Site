import React from "react";
import { BiMenuAltLeft, BiDownArrow } from "react-icons/bi";
import { FaFacebookMessenger } from "react-icons/fa";
import { BsBell } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import Massanger2 from "../../../home/Homeright/massanger/Massenger2";
import { useState } from "react";
import Notification from "../../notification/Notification";

const Navthird = () => {
  const [onMassage, setOnMassage] = useState(false);
  const [onNotification, setOnNotification] = useState(false);
  return (
    <>
      <div className="flex justify-end items-center relative">
        <div className="flex justify-around items-center w-full md:w-3/5">
          <NavLink to="/profile">
            <div className="hidden md:flex cursor-pointer justify-center items-center hover:bg-gray-200 transition-all py-1 px-2 rounded-full focus-within:bg-blue-100 focus-within:text-blue-400">
              <input
                type="image"
                className="inline object-cover w-8 h-8 rounded-full"
                src="https://i.ibb.co/RbH8XdY/IMG-3624-01.jpg"
                alt="Profile image"
              />
              <span className="inline-block font-semibold ml-2 cursor-pointer">
                Morsalin
              </span>
            </div>
          </NavLink>
          {/* navbar right side navlink and icon  */}
          <div className="p-2 rounded-full bg-gray-200 focus-within:bg-blue-100 focus-within:text-blue-400 transition-all">
            <BiMenuAltLeft data-tip="menu" className="text-2xl outline-none" />
          </div>
          {/* massage part  */}
          <div className="p-2 rounded-full bg-gray-200 focus-within:bg-blue-100 focus-within:text-blue-400 transition-all">
            <FaFacebookMessenger
              data-tip="massenger"
              className="text-2xl outline-none"
              onClick={(_) => setOnMassage(!onMassage)}
            />
          </div>
          {/* notification part  */}
          <div
            className="p-2 rounded-full bg-gray-200 focus-within:bg-blue-100 focus-within:text-blue-400 transition-all"
            onClick={() => setOnNotification(!onNotification)}
          >
            <BsBell
              data-tip="notifications"
              className="text-2xl outline-none"
            />
          </div>
          {onNotification && <Notification />}
          {/* menu part  */}
          <div className="p-2 rounded-full bg-gray-200 focus-within:bg-blue-100 focus-within:text-blue-400 transition-all">
            <BiDownArrow data-tip="profile" className="text-2xl outline-none" />
          </div>
        </div>
        {/* onclick all data  */}
        {onMassage && (
          <div className="x absolute top-16 right-20 bg-white py-2 px-6 h-screen overflow-y-scroll rounded-md shadow-md scrollBar2">
            <Massanger2 />
          </div>
        )}
      </div>
    </>
  );
};

export default Navthird;
