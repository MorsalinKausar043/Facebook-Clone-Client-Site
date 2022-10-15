import React from "react";
import { AiFillCamera } from "react-icons/ai";
import { GiWorld } from "react-icons/gi";
import { BiFootball } from "react-icons/bi";

const Hobbies = () => {
  const hobbiesData = [
    {
      icon: AiFillCamera,
      data: "Portrait Photography",
    },
    {
      icon: GiWorld,
      data: "Larning English",
    },
    {
      icon: AiFillCamera,
      data: "Black & White Photography",
    },
    {
      icon: BiFootball,
      data: "Football",
    },
  ];
  return (
    <>
      <div className="flex flex-wrap mt-2 select-none cursor-pointer">
        {hobbiesData.map((val, id) => (
          <div
            key={id}
            className={`flex items-center m-1 py-1 px-2 border-2 border-gray-400 rounded-3xl`}
          >
            {" "}
            <val.icon className={`mr-1 text-lg`} />
            <span className="font-semibold">{val.data}</span>
          </div>
        ))}
        {/* seel all button  */}
        <div
          onClick={(_) => alert("hello world")}
          className="flex items-center m-1 py-1 px-2 border-2 border-gray-400 rounded-3xl text-blue-500 bg-blue-100"
        >
          <span className="font-semibold">See All</span>
        </div>
      </div>
      {/* edit hobbeis  */}
      <div className="mt-3">
        <button
          onClick={(_) => alert("hello world")}
          className="cursor-pointer select-none bg-gray-200 hover:bg-gray-300 w-full h-auto rounded-md shadow-sm py-2 font-semibold"
        >
          Edit Hobbies
        </button>
      </div>
    </>
  );
};

export default Hobbies;
