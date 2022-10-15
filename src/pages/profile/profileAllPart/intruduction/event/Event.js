import React from "react";
import { NavLink } from "react-router-dom";

const Event = () => {
  return (
    <>
      <div className="bg-white shadow-md rounded-lg py-4 px-4 md:px-6">
        {/* title   */}
        <div className="flex justify-between items-center">
          <h1 className="font-sans text-xl font-bold">Life events</h1>
          <NavLink to="/" className="text-blue-500 text-md">
            See Event
          </NavLink>
        </div>
        {/* photo section */}
        <section className=" text-gray-700 mt-3 pb-5">
          <div className="flex flex-wrap -m-1 md:-m-2">
            <h1>Life is big Event!</h1>
          </div>
        </section>
      </div>
    </>
  );
};

export default Event;
