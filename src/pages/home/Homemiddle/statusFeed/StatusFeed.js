import React, { useState } from "react";
import { BsThreeDots, BsEmojiSmile, BsStickies } from "react-icons/bs";
import { GoComment } from "react-icons/go";
import { VscLiveShare } from "react-icons/vsc";
import { RiUserSmileLine } from "react-icons/ri";
import { MdPhotoCamera } from "react-icons/md";
import {
  AiOutlineSetting,
  AiFillLike,
  AiOutlineLike,
  AiOutlineFileGif,
} from "react-icons/ai";
import "./statusfeed.css";
import Picker from "emoji-picker-react";
import { NavLink } from "react-router-dom";

const StatusFeed = () => {
  const [showFeed, setShowFeed] = useState(false);
  const [commentData, setCommentData] = useState("");
  const [like, setLike] = useState(false);
  const [activeEmoji, setActiveEmoji] = useState(false);
  const [image, setImage] = useState(null);
  console.log(image);
  const feeData =
    "ক্লান্তিকর সফর শেষে আমার একটি মাথা গোঁজার ঠাঁই দরকার। আমার অসম্পূর্ণ সত্ত্বাকে পূর্ণ করার জন্য আরেকটি পূত পবিত্র আত্মা দরকার। আমার অর্ধেক দীন পূর্ণ করার জন্য আপনার নাড়িছেঁড়া ধনের মতো একজন মহীয়সী দরকার!";

  return (
    <>
      <section className="py-4 px-4 md:px-6 bg-white my-4 drop-shadow-lg rounded-md">
        {/* first part  */}
        <div className="flex flex-row justify-between items-center">
          {/* profile image part  */}
          <NavLink to="/profile">
            <div className="flex flex-row justify-around items-center">
              {/* profile pic input part  */}
              <div className="w-10 h-10 rounded-full">
                <input
                  type="image"
                  src="https://i.ibb.co/JkswJc3/01768078195.jpg"
                  alt="profile picture"
                  className="w-full h-full rounded-full"
                />
              </div>
              {/* profile name part  */}
              <div className="ml-2">
                <h6 className="font-semibold text-gray-900 select-none cursor-pointer">
                  Morsalin Kausar
                </h6>
                <div className="flex items-center flex-row">
                  <span className="inline-block mr-2 text-xs select-none">
                    20m
                  </span>
                  <AiOutlineSetting />
                </div>
              </div>
            </div>
          </NavLink>
          {/* post three dot / menu setup */}
          <div className="rounded-full aspect-square hover:bg-gray-200 p-2 transition-all flex justify-center items-center">
            <BsThreeDots className="text-2xl text-gray-500" />
          </div>
        </div>

        {/* show image and pic  */}
        <section className="w-full py-4">
          {/* show status  */}
          <div>
            <div>
              {feeData.slice(0, `${showFeed ? feeData.length : 150}`)}
              {!showFeed && (
                <span className="inline-block">
                  <button onClick={() => setShowFeed(true)}>
                    ...{" "}
                    <span className="inline-block ml-1 font-semibold font-sans text-md">
                      See More
                    </span>
                  </button>
                </span>
              )}
            </div>
          </div>
          {/* show image  */}
          <div>
            <input
              type="image"
              src="https://i.ibb.co/djynfrx/280600596-10158597157581891-4839986950427977431-n.jpg"
              alt="post_feed_image"
              className="w-full h-full rounded-sm mt-2"
            />
          </div>
        </section>

        {/* horigentel border */}
        <div className="my-2">
          <hr />
        </div>

        {/* second part image/reaction/live button  */}
        <div className="w-full flex justify-around items-center box-border">
          {/* live video part  */}
          <div
            className="flex items-center cursor-pointer hover:bg-gray-100 px-5 py-1 rounded-md transition-all select-none"
            onClick={() => setLike(!like)}
          >
            {like ? (
              <AiFillLike className="text-blue-500 text-2xl mr-2 like_animation" />
            ) : (
              <AiOutlineLike className="text-gray-500 text-2xl mr-2 " />
            )}
            <button
              className={`font-semibold ${
                like ? "text-blue-500 " : "text-gray-500"
              }`}
            >
              Like
            </button>
          </div>

          {/* upload photo part */}
          <div className="flex items-center cursor-pointer hover:bg-gray-100 px-5 py-1 rounded-md transition-all select-none">
            <GoComment className="text-gray-500 text-xl mr-2" />
            <button className="font-semibold text-gray-500">Comment</button>
          </div>

          {/* update feeling and activity part */}
          <div className="flex items-center cursor-pointer hover:bg-gray-100 px-5 py-1 rounded-md transition-all select-none">
            <VscLiveShare className="text-gray-500 text-2xl mr-2" />
            <button className="font-semibold text-gray-500">Share</button>
          </div>
        </div>

        {/* horigentel border */}
        <div className="my-2">
          <hr />
        </div>

        {/* comment input section  */}
        <div className="flex flex-row items-center pt-2 relative">
          {/* user profile pic */}
          <div className="w-10 h-10 rounded-full">
            <input
              type="image"
              src="https://i.ibb.co/vhL3ZjY/143218413-2955428034783608-1232370029292067357-n.jpg"
              alt="profile picture"
              className="w-full h-full rounded-full"
            />
          </div>
          {/* comment data input box */}
          <div className="rounded-full w-full px-4 h-8 relative">
            <input
              type="text"
              name="status data"
              className="w-full h-full rounded-full bg-gray-100 px-4 text-md placeholder:text-gray-600 outline-none"
              placeholder="Write a comment..."
              onChange={(e) => setCommentData(e.target.value)}
              value={commentData}
            />
            {/* input div emoji icon part setup  */}
            <div
              title="Comment with an avater sticker"
              className="absolute right-10 top-0 flex flex-row items-center"
            >
              <div className="hover:bg-gray-200 rounded-full p-2 transition-all ">
                <RiUserSmileLine className="text-xl text-gray-500" />
              </div>
              <div
                title="insert an emoji"
                className="hover:bg-gray-200 rounded-full p-2 focus-within:text-blue-400 transition-all"
                onClick={(_) => setActiveEmoji(!activeEmoji)}
              >
                <BsEmojiSmile className="text-lg text-gray-500" />
                {/* setup emoji  */}
                {activeEmoji && (
                  <div className="absolute bottom-10">
                    <Picker
                      onEmojiClick={(event, emojiObject) =>
                        setCommentData(commentData + emojiObject.emoji)
                      }
                    />
                  </div>
                )}
              </div>
              {/* upload photo and video comment part  */}
              <div
                title="atach a photo or video"
                className="hover:bg-gray-200 rounded-full p-2 transition-all "
              >
                <label htmlFor="upload_image">
                  <MdPhotoCamera
                    attributeType="file"
                    className="text-xl text-gray-500"
                  />
                  <input
                    type="file"
                    onInput={(e) => setImage(e.target.files[0])}
                    name="upload_image"
                    className="hidden"
                    id="upload_image"
                  />
                </label>
              </div>
              {/* file GIF part  */}
              <div
                title="Comment with a GIF"
                className="hover:bg-gray-200 rounded-full p-2 transition-all "
              >
                <AiOutlineFileGif className="text-xl text-gray-500" />
              </div>
              {/* sticker part  */}
              <div
                title="Comment with a Sticker"
                className="hover:bg-gray-200 rounded-full p-2 transition-all "
              >
                <BsStickies className="text-lg text-gray-500" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StatusFeed;
