import React from "react";
import { useState } from "react";
import { IoMdSettings } from "react-icons/io";
import { IoAddOutline } from "react-icons/io5";
import { FaDiscourse } from "react-icons/fa";
import { MdOutlineFeed } from "react-icons/md";
import { NavLink } from "react-router-dom";
import UsersGroupMenu from "../home/Homeleft/LeftMenuData/UsersGroupMenu";

const GroupLeft = () => {
  const [focusValue, setFocusValue] = useState(false);
  const [groupSetting, setGroupSetting] = useState(false);

  return (
    <>
      <section className=" w-4/5 shadow-md rounded-md px-4 py-2">
        {/* title section  */}
        <div className="w-full h-auto flex flex-row justify-between items-center">
          {/* titile */}
          <div>
            <h1 className="text-2xl font-bold">Groups</h1>
          </div>
          {/* icon  */}
          <div
            className={`p-2 ${
              groupSetting ? "bg-blue-200" : "bg-blue-100"
            } rounded-full transition-all`}
            onClick={(_) => setGroupSetting(!groupSetting)}
          >
            <IoMdSettings
              className={`${
                groupSetting && "text-blue-600"
              } text-xl transition-all`}
            />
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
        {/* menu list */}
        <div className="overflow-y-scroll h-screen scroll-smooth scrollBar">
          <NavLink to="/" className=" py-2 cursor-pointer">
            <div className="flex flex-row justify-start items-center p-2 bg-gray-200 rounded-md">
              {/* logo  */}
              <div className="p-2 bg-blue-500 rounded-full">
                <MdOutlineFeed className="text-xl text-gray-100" />
              </div>
              {/* title  */}
              <div className="ml-2 font-semibold">
                <span>Your Feed</span>
              </div>
            </div>
          </NavLink>

          {/* discover button  */}
          <NavLink to="/" className=" py-2 mt-1 cursor-pointer">
            <div className="flex flex-row justify-start items-center p-2 hover:bg-gray-200 rounded-md">
              {/* logo  */}
              <div className="p-2 bg-gray-500 rounded-full">
                <FaDiscourse className="text-xl text-gray-100" />
              </div>
              {/* title  */}
              <div className="ml-2 font-semibold">
                <span>Discover</span>
              </div>
            </div>
          </NavLink>

          {/* add group button  */}
          <button className=" py-2 mt-1 cursor-pointer w-full">
            <div className="flex flex-row justify-center items-center p-2 bg-blue-100 hover:bg-blue-200 transition rounded-md">
              {/* logo  */}
              <div className="p-1">
                <IoAddOutline className="text-xl text-blue-500" />
              </div>
              {/* title  */}
              <div className="ml-2 font-semibold">
                <span className="text-blue-500">Create new group</span>
              </div>
            </div>
          </button>
          {/* horaizental bar  */}
          <div>
            <hr />
          </div>
          {/* usergroup menu  */}
          <section className="h-screen overflow-y-scroll scrollBar">
            <UsersGroupMenu />
          </section>
        </div>
      </section>
    </>
  );
};

export default GroupLeft;
