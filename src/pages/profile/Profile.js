import React from "react";
import "./profile.css";
import ProfileMain from "./profileAllPart/profleMainPart/ProfileMain";
import PostStatus from "../home/Homemiddle/postStatus/PostStatus";
import StatusFeed from "../home/Homemiddle/statusFeed/StatusFeed";
import Intruduction from "./profileAllPart/intruduction/Intruduction";

const Profile = () => {
  return (
    <>
      <section className="bg-slate-100">
        {/* profile top part  */}
        <div>
          <ProfileMain />
        </div>
        {/* profile post data  */}
        <div className="flex justify-center items-center">
          <div className="w-full h-auto md:w-4/6 grid grid-cols-1 md:grid-cols-5 md:gap-4">
            {/* intruduction part  */}
            <div className="col-span-1 md:col-span-2 my-4 mx-2 md:mx-0">
              <Intruduction/>
            </div>
            {/* status bar part  */}
            <div className="col-span-1 md:col-span-3 px-2 md:px-0">
              <PostStatus />
              <StatusFeed/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
