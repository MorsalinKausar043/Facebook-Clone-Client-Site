import React from "react";
import CreateRoom from "./createRoom/CreateRoom";
import PostStatus from "./postStatus/PostStatus";
import Slider from "./slider/Slider";
import StatusFeed from "./statusFeed/StatusFeed";

const Homemiddle = () => {
  return (
    <>
      <main className="px-0 md:px-10 lg:px-16 h-screen overflow-y-scroll scrollBar2 flex flex-col">
        <div className="w-full lg:w-5/6 mx-auto">
          {/* slider part create  */}
          <Slider />
          {/* post status part create  */}
          <PostStatus />
          {/* createRoom part create  */}
          <CreateRoom />
          {/* StatusFeed data part create  */}
          <StatusFeed />
        </div>
      </main>
    </>
  );
};

export default Homemiddle;
