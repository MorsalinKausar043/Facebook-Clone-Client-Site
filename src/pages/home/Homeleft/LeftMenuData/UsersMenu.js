import React, { useState } from 'react'
import userMenu from './userMenu';
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { NavLink } from 'react-router-dom';


const UsersMenu = () => {
    const [toggleLeftMenu, setToggleLeftMenu] = useState(false);
  return (
    <>
      <section>
        {/* profile option  */}
        <NavLink to="/profile">
          <div className="flex cursor-pointer flex-row items-center my-2 hover:bg-gray-200 transition-all rounded-lg p-2">
            <input
              type="image"
              src="https://i.ibb.co/r35x4ws/143218413-2955428034783608-1232370029292067357-n.jpg"
              alt="Profile_pic"
              className="w-10 aspect-square rounded-full"
            />
            <span className="ml-3 inline-block text-md font-semibold text-gray-900 font-sans drop-shadow-2xl">
              Morsalin Kausar
            </span>
          </div>
        </NavLink>
        {/* menu option  */}
        <div>
          {userMenu
            .slice(0, `${toggleLeftMenu ? userMenu.length : 5}`)
            .map((val) => (
              <div
                key={val.id}
                className="flex cursor-pointer flex-row items-center my-3 hover:bg-gray-200 transition-all rounded-lg p-2"
              >
                <val.icon className={`text-3xl inline-block ${val.color}`} />
                <span className="ml-3 inline-block text-md font-semibold text-gray-900 font-sans drop-shadow-2xl">
                  {val.Name}
                </span>
              </div>
            ))}
          <div
            className="flex cursor-pointer flex-row items-center my-3 hover:bg-gray-200 transition-all rounded-lg p-2"
            onClick={(_) => setToggleLeftMenu(!toggleLeftMenu)}
          >
            <div className="p-2 bg-slate-300 rounded-full flex justify-center items-center">
              {!toggleLeftMenu ? (
                <BsChevronDown className={`text-lg inline-block`} />
              ) : (
                <BsChevronUp className={`text-lg inline-block`} />
              )}
            </div>
            <span className="ml-3 inline-block text-md font-bold text-gray-700 font-sans">
              {!toggleLeftMenu ? "See More" : "See Less"}
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default UsersMenu;
