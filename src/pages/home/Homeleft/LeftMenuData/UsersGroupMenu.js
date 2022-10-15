import React, { useState } from "react";
import userMenu from "./userMenu";
import leftMenuOptioon from "./leftMenuOptioon";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const UsersGroupMenu = () => {
  const [toggleLeftMenu, setToggleLeftMenu] = useState(false);
  const [menuHover, setMenuHover] = useState(false);
  return (
    <>
      <div
        onMouseOver={(_) => setMenuHover(true)}
        onMouseLeave={(_) => setMenuHover(false)}
      >
        {/* menu group list shortcut option  */}
        <div className="pt-4 flex justify-between items-center">
          <h1 className="text-lg font-bold text-gray-500">Your shortcuts</h1>
          {menuHover && (
            <button
              onClick={() => alert("hello world")}
              className="text-blue-500"
            >
              Edit
            </button>
          )}
        </div>
        {/* menu data list  */}
        <div>
          {leftMenuOptioon
            .slice(0, `${toggleLeftMenu ? userMenu.length : 5}`)
            .map((val) => (
              <div
                key={val.id}
                className="flex cursor-pointer flex-row items-center my-2 hover:bg-gray-200 transition-all rounded-lg p-2"
              >
                <input
                  type="image"
                  src={val.image}
                  alt="group_profile_picture"
                  className="w-12 aspect-square rounded-lg shadow-md"
                />
                <span className="ml-3 inline-block text-md font-semibold text-gray-700 font-sans">
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
      </div>
    </>
  );
};

export default UsersGroupMenu;
