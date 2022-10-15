import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import "../../navbar.css";

const Navfirst = () => {
  const [focusValue, setFocusValue] = useState(false);

  return (
    <>
      <section className="">
        <div className="flex flex-row items-center">
          <div>
            <NavLink className="shadow-lg rounded-full " to="/">
              <BsFacebook className="text-blue-600 text-4xl" />
            </NavLink>
          </div>
          <div className="ml-2 relative ">
            <input
              className={`bg-gray-100 w-16 ${
                focusValue && "focus:w-full focus:shadow-sm"
              } hover:z-40 md:shadow-none md:w-full transition-all placeholder:text-gray-500 inline-block px-4 py-2 border-none checked:border-none outline-none rounded-full`}
              type="text"
              onFocus={() => setFocusValue(true)}
              onBlur={() => setFocusValue(false)}
              placeholder="&#x1F50E;&#xFE0F; Search Facebook"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Navfirst;
