import React, { useState } from "react";
import { MdKeyboardArrowDown, MdAddCircle } from "react-icons/md";
import { IoMdClose, IoMdRemove } from "react-icons/io";
import { IoCallSharp, IoVideocam } from "react-icons/io5";
import { BsImages, BsStickies, BsEmojiSmile } from "react-icons/bs";
import { AiOutlineFileGif, AiFillLike } from "react-icons/ai";
import Picker from "emoji-picker-react";

const Message = ({ StatusBarData }) => {
  const [commentData, setCommentData] = useState("");
  const [activeEmoji, setActiveEmoji] = useState(false);
  const [sentMessage, setSentMessage] = useState([]);
  const activeTime = "Now";
  const messageSent = (e) => {
    if (e.key === "Enter") {
      if (commentData.length > 0) {
        setSentMessage([...sentMessage, commentData]);
        setCommentData("");
      }
    }
  };
  return (
    <>
      <section className=" w-80 md:w-96 h-96 box-border">
        {/* upper site  */}
        <div className="shadow-md mb-1 py-2 px-2 flex flex-row justify-between items-center">
          {/* profile pic & name & icon  */}
          <div className="flex flex-row items-center hover:bg-slate-100 rounded-3xl transition cursor-pointer">
            <figure className="w-10 aspect-square rounded-full">
              <img
                src="https://i.ibb.co/6sW7CyX/01768078195.jpg"
                alt="profile pic"
                className="w-full aspect-square rounded-full"
              />
            </figure>
            <div className="flex flex-col justify-center items-start ml-2">
              <span className="text-md font-semibold">Morsalin kausar</span>
              <span className="text-sm text-gray-400 -mt-1">
                Active {activeTime}
              </span>
            </div>
            {/* arrow icon  */}
            <div className="ml-1 text-xl text-blue-400">
              <MdKeyboardArrowDown />
            </div>
          </div>
          {/* icon part  */}
          <div className="flex flex-row justify-center items-center text-blue-500">
            {/* audio call icon  */}
            <button className="mr-1 text-lg md:text-xl p-1 rounded-full hover:bg-slate-100 transition">
              <IoCallSharp />
            </button>
            {/* video call icon  */}
            <button className="mr-1 text-lg md:text-xl rounded-full hover:bg-slate-100 transition">
              <IoVideocam />
            </button>
            {/* minimize icon  */}
            <button className="mr-1 text-lg md:text-xl rounded-full hover:bg-slate-100 transition">
              <IoMdRemove />
            </button>
            {/* cancel icon  */}
            <button onClick={(_) => StatusBarData(false)}>
              <IoMdClose className="text-xl md:text-2xl rounded-full hover:bg-slate-100 transition" />
            </button>
          </div>
        </div>

        {/* middle site site  */}
        <div className="h-full bg-white overflow-y-scroll scrollBar px-2 text-md">
          {sentMessage.map((val, index) => (
            <p
              className="break-words w-auto inline-block bg-blue-500 text-white my-2 p-2 rounded-bl-lg rounded-3xl"
              key={index}
            >
              <span>{val}</span>
            </p>
          ))}
        </div>

        {/* bottom site  */}
        <div className="bg-white rounded-b-lg shadow-lg p-2 flex flex-row justify-between items-center">
          {/* message icon part  */}
          <div className="flex flex-row justify-center items-center text-blue-500">
            {/* sent voice massage  */}
            <button className="text-lg md:text-xl p-1 rounded-full hover:bg-slate-100 transition">
              <MdAddCircle />
            </button>
            {/* upload photo and video part  */}
            <button
              title="atach a photo or video"
              className="hover:bg-slate-100 rounded-full p-1 transition-all "
            >
              <label htmlFor="upload_image">
                <BsImages attributeType="file" className="text-xl" />
                <input
                  type="file"
                  onInput={(e) => console.log(e.target.files[0])}
                  name="upload_image"
                  className="hidden"
                  id="upload_image"
                />
              </label>
            </button>
            {/* sticker part  */}
            <button
              title="Comment with a Sticker"
              className="hover:bg-slate-100 rounded-full p-1 transition-all "
            >
              <BsStickies className="text-lg ml-1" />
            </button>
            {/* file GIF part  */}
            <button
              title="Comment with a GIF"
              className="hover:bg-slate-100 rounded-full p-1 transition-all "
            >
              <AiOutlineFileGif className="text-xl" />
            </button>
          </div>
          {/* massage section  */}
          <div className="flex flex-row justify-center items-center">
            {/* massage box  */}
            <div className="rounded-full w-full px-4 h-8 relative">
              <input
                type="text"
                name="status data"
                className="w-full h-full rounded-full bg-gray-100 px-4 text-md placeholder:text-gray-600 outline-none"
                placeholder="Aa..."
                onChange={(e) => setCommentData(e.target.value)}
                onKeyPress={(e) => messageSent(e)}
                value={commentData}
              />
              {/* input div emoji icon part setup  */}
              <div
                title="Comment with an avater sticker"
                className="absolute right-10 top-0 flex flex-row items-center"
              >
                <div
                  title="insert an emoji"
                  className="hover:bg-gray-200 rounded-full p-2 focus-within:text-blue-400 transition-all"
                  onClick={(_) => setActiveEmoji(!activeEmoji)}
                >
                  <BsEmojiSmile className="text-lg text-blue-500" />
                  {/* setup emoji  */}
                  {activeEmoji && (
                    <div className="absolute bottom-12 right-0">
                      <Picker
                        onEmojiClick={(event, emojiObject) =>
                          setCommentData(commentData + emojiObject.emoji)
                        }
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
            {/* like button   */}
            <div className="hover:bg-blue-100 transition rounded-full">
              {/* like icon  */}
              <button>
                <AiFillLike className="text-2xl text-blue-500 " />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Message;
