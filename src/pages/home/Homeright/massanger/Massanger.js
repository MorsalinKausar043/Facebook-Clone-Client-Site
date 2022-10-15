import React from "react";
import massageData from "./massageData";
import { BiVideoPlus } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import Message from "../massageBox/Message";
import { useState } from "react";

const Massanger = () => {
  const [activeMassageBar, setActiveMassageBar] = useState(false);
  return (
    <>
      <section className="flex justify-center items-center flex-col">
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
              className="flex cursor-pointer flex-row items-center my-1 hover:bg-gray-200 transition-all rounded-lg p-2 md:py-2 md:px-4"
              onClick={(_) => setActiveMassageBar(true)}
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
            </div>
          ))}
        </div>
        {/* each man massage box */}
        {activeMassageBar && (
          <div className="bg-white rounded-lg shadow-lg fixed bottom-28 right-80">
            <Message StatusBarData={setActiveMassageBar} />
          </div>
        )}
      </section>
    </>
  );
};

export default Massanger;
