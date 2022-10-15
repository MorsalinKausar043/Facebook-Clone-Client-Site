import React from "react";
import massageData from "./massageData";
import { BiVideoPlus } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";

const Massanger2 = () => {
  return (
    <>
      <section className="flex justify-center items-center flex-col select-none">
        {/* title  */}
        <div className="w-full flex justify-around items-center my-3">
          {/* title name  */}
          <div>
            <h1 className="text-lg text-gray-500 font-semibold">Contacts</h1>
          </div>
          {/* icons  */}
          <div className="flex justify-around items-center w-1/4 text-xl text-gray-500 cursor-pointer">
            <BiVideoPlus title="Create Room" />
            <AiOutlineSearch title="Search by name of group" />
            <BsThreeDots title="Options" />
          </div>
        </div>
        {/* user name and data  */}
        <div>
          {massageData.slice(0, 20).map((val) => (
            <div
              key={val.id}
              className="flex cursor-pointer flex-row hover:relative items-center my-1 hover:bg-gray-200 transition-all rounded-lg p-2 md:py-2 md:px-4"
            >
              <input
                type="image"
                src={val.image}
                alt="group_profile_picture"
                className={`w-10 aspect-square rounded-full shadow-md drop-shadow-md border-2 ${val.borderColor}`}
              />
              <span className="ml-3 inline-block text-md font-semibold text-gray-700 font-sans">
                {val.Name}
              </span>
              {/* hover massage menu  */}
              <div onClick={_=> alert("hello world")} className="absolute top-4 right-1 bg-white hover:bg-slate-50 transition p-2 rounded-full ">
                <BsThreeDots />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Massanger2;
