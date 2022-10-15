import React from "react";
import VideoLeft from "../../pages/video/videoLeft/VideoLeft";
import VideoMiddle from "../../pages/video/videosMiddle/VideoMiddle";
import Title from "../title/Title";
import "../../App.css";
import Navbar from "../../pages/Navigation/Navbar";

const Videos = () => {
  Title(8,"Watch | Facebook");
  return (
    <>
      <main className="w-screen h-screen overflow-hidden">
        <Navbar/>
        <section className="grid grid-cols-3 md:grid-cols-4 gap-4 mt-20 px-0 md:px-4">
          {/* home page left side part  */}
          <div className="hidden md:block">
            <VideoLeft />
          </div>
          {/* home page middle side part  */}
          <div className=" col-span-4 md:col-span-2 px-3 md:px-0 flex justify-center items-start overflow-x-scroll h-screen scrollBar2">
            <div className="w-full md:w-5/6 lg:w-4/6 ">
              <VideoMiddle />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Videos;
