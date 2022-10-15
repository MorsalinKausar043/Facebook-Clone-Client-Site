import React from "react";
import { RiVideoAddFill } from "react-icons/ri";
import { BsFileImage } from "react-icons/bs";
import { MdOutlineAddReaction } from "react-icons/md";

const PostStatus = () => {
  return (
    <>
      <section className="py-4 px-4 md:px-8 bg-white my-4 drop-shadow-lg rounded-md">
        {/* first part  */}
        <div className="flex flex-row items-center">
          {/* profile image part  */}
          <div className="w-12 h-12 rounded-full">
            <input
              type="image"
              src="https://i.ibb.co/r35x4ws/143218413-2955428034783608-1232370029292067357-n.jpg"
              alt="profile picture"
              className="w-full h-full rounded-full"
            />
          </div>
          {/* post data input box */}
          <div className="rounded-full w-full px-4 h-10">
            <input
              type="text"
              name="status data"
              className="w-full h-full rounded-full bg-gray-100 px-4 text-md placeholder:text-gray-600 outline-none"
              placeholder="What's on your mind, Morsalin?"
            />
          </div>
        </div>

        {/* horigentel border */}
        <div className="mt-2 mb-4">
          <hr />
        </div>

        {/* second part image/reaction/live button  */}
        <div className="flex justify-around items-center">
          {/* live video part  */}
          <div className="flex items-center cursor-pointer">
            <RiVideoAddFill className="text-red-500 text-2xl mr-2" />
            <button className="font-semibold text-gray-500">Live Video</button>
          </div>

          {/* upload photo part */}
          <div className="flex items-center cursor-pointer">
            <BsFileImage className="text-green-700 text-2xl mr-2" />
            <button className="font-semibold text-gray-500">Photo/Video</button>
          </div>

          {/* update feeling and activity part */}
          <div className="hidden md:flex items-center cursor-pointer">
            <MdOutlineAddReaction className="text-yellow-500 text-2xl mr-2" />
            <button className="font-semibold text-gray-500">
              Feeling/Activity
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default PostStatus;
