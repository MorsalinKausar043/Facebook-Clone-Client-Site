import React from 'react';
import { BsLink45Deg } from "react-icons/bs";
import { NavLink, useNavigate } from 'react-router-dom';

const Error = () => {
      const navigate = useNavigate();
    return (
      <>
        <div className="flex justify-center items-center w-screen h-screen">
          <div className="w-full px-4 md:px-0 md:w-96 flex flex-col justify-center items-center">
            {/* icon part  */}
            <div className="text-7xl lg:text-8xl text-gray-500 text-center">
              <BsLink45Deg />
            </div>
            {/* content  */}
            <div className="flex justify-center items-center flex-col">
              <h2 className="text-xl font-bold text-gray-500 text-center">
                This Page Isn't Available
              </h2>
              <p className="text-gray-500 text-center">
                The link may be broken, or the page may have been removed. Check
                to see if the link you're trying to open is correct.
              </p>
            </div>
            {/* button part  */}
            <div className="w-full flex justify-center items-center flex-col">
              <NavLink
                to="/"
                className="py-2 px-6 md:px-8 bg-blue-600 text-white my-3 rounded-md shadow-md font-semibold text-lg hover:bg-blue-700 transition-all"
              >
                Go To News Feed
              </NavLink>
              <button
                onClick={() => navigate(-1)}
                className="font-semibold text-lg text-blue-500 hover:underline transition-all"
              >
                Go Back
              </button>
              <a
                href='https://www.facebook.com/help'
                target="_blanks"
                className="font-semibold text-lg mt-1 text-blue-500 hover:underline transition-all"
              >
                Visit Help Center
              </a>
            </div>
          </div>
        </div>
      </>
    );
};

export default Error;