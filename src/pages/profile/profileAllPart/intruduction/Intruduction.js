import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import { HiAcademicCap } from "react-icons/hi";
import { GiNetworkBars } from "react-icons/gi";
import { BsFillHeartFill, BsFillClockFill } from "react-icons/bs";
import Hobbies from "./Hobbies/Hobbies";
import Featured from "./featured/Featured";
import Photos from "./photos/Photos";
import Friends from "./friends/Friends";
import Event from "./event/Event";

const Intruduction = () => {
  const batch4 = "Programming Hero";
  const introData = [
    {
      icon: HiAcademicCap,
      introData: "Studied at",
      data: "Mymensingh Polytechnic Institute - ময়মনসিংহ পলিটেকনিক ইনস্টিটিউট।",
      iconClass: "text-2xl",
    },
    {
      icon: HiAcademicCap,
      introData: "Studied at",
      data: batch4,
      iconClass: "text-2xl",
    },
    {
      icon: BsFillHeartFill,
      introData: "",
      data: "Single",
      iconClass: "text-xl",
    },
    {
      icon: BsFillClockFill,
      introData: "Joined at",
      data: 2015,
      iconClass: "text-xl",
    },
    {
      icon: GiNetworkBars,
      introData: "Followed by",
      data: "626 people",
      iconClass: "text-xl",
    },
    {
      icon: AiFillGithub,
      introData: "",
      data: "https://github.com/MorsalinKausar043",
      iconClass: "text-2xl",
    },
    {
      icon: AiFillLinkedin,
      introData: "",
      data: "https://www.linkedin.com/in/morsalin-kausar",
      iconClass: "text-2xl",
    },
    {
      icon: BiWorld,
      introData: "",
      data: "developer-morsalin.netlify.app",
      iconClass: "text-2xl",
    },
  ];
  return (
    <>
      <main>
        <div className="bg-white shadow-md rounded-lg py-4 px-4 md:px-6">
          {/* title and bio part  */}
          <div>
            <h1 className="font-sans text-xl font-bold">Intro</h1>
            <p className="">
              🥰❣️Wêlłćømè🥀💥 🎉😎Tø🎁🥀 💯♥️My Prøfíłè😊💝 **এত বড় জীবন ১০১
              বাক্যে লিখে কী শেষ করা যায়!!
            </p>
            <button
              onClick={(_) => alert("hello world")}
              className="cursor-pointer select-none bg-gray-200 hover:bg-gray-300 w-full h-auto rounded-md shadow-sm py-2 my-4 font-semibold"
            >
              Edit Bio
            </button>
          </div>
          {/* set intro  -------------------------------->*/}
          {introData.map((val, id) => (
            <div
              key={id}
              className="flex flex-row items-stretch my-4 select-none"
            >
              {/* icon  */}
              <div>
                <val.icon className={` mr-2 text-gray-500 ${val.iconClass}`} />
              </div>
              {/* data  */}
              <div className="cursor-pointer">
                <p>
                  {val.introData}
                  <span className="font-semibold ml-1 hover:underline transition">
                    {val.data}
                  </span>
                </p>
              </div>
            </div>
          ))}
          {/* edit details  */}
          <div>
            <button
              onClick={(_) => alert("hello world")}
              className="cursor-pointer select-none bg-gray-200 hover:bg-gray-300 w-full h-auto rounded-md shadow-sm py-2 font-semibold"
            >
              Edit Details
            </button>
          </div>
          {/* set hobbies  */}
          <div className="py-3">
            <Hobbies />
          </div>
          {/* set featured  */}
          <div className="py-3">
            <Featured />
          </div>
        </div>
        {/* set photos part  */}
        <div className="py-3">
          <Photos />
        </div>
        {/* set friends part  */}
        <div className="py-3">
          <Friends />
        </div>
        {/* set event part  */}
        <div className="py-3">
          <Event />
        </div>
      </main>
    </>
  );
};

export default Intruduction;
