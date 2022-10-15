import React from "react";
import { useState } from "react";
import { BiShow, BiHide } from "react-icons/bi";

const Modal = () => {
  const aTag = "https://www.facebook.com/help/637205020878504";
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    date: "",
    gender: "",
  });
  const [show, setShow] = useState(false);

  // inputData function
  const inputData = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  // regiter function
  const onSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password, date } = user;
    if (firstName.length < 3) {
      alert("write minimum 3 cherecter");
    } else if (lastName.length < 3) {
      alert("write minimum 3 cherecter");
    } else if (!email) {
      alert("write email");
    } else if (!password) {
      alert("write password");
    } else if (!date) {
      alert("write date");
    } else {
      alert("submit");
      console.log("🚀 ~ file: Modal.js ~ line 24 ~ onSubmit ~ user", user);
      setUser({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        date: "",
        gender: "",
      });
    }
  };
  return (
    <>
      {/*body*/}
      {/* <!-- Content --> */}
      <div className="w-full bg-grey-lightest">
        <div className="container mx-auto">
          <div className=" mx-auto bg-white rounded shadow">
            <div className="py-4 px-8">
              <div className="flex mb-2">
                {/* first name part  */}
                <div className="w-1/2 mr-1">
                  <input
                    className="form-control block w-full px-4 py-2 text-md font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    name="firstName"
                    type="text"
                    placeholder="Your first name"
                    onChange={inputData}
                    value={user.firstName}
                  />
                </div>
                {/* second name part  */}
                <div className="w-1/2 ml-1">
                  <input
                    className="form-control block w-full px-4 py-2 text-md font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    name="lastName"
                    type="text"
                    placeholder="Your last name"
                    onChange={inputData}
                    value={user.lastName}
                  />
                </div>
              </div>
              {/* email part  */}
              <div className="mb-2">
                <input
                  className="aform-control block w-full px-4 py-2 text-md font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  name="email"
                  type="email"
                  placeholder="Your email address"
                  onChange={inputData}
                  value={user.email}
                />
              </div>
              {/* password part  */}
              <div className="mb-2 relative">
                <input
                  className="form-control block w-full px-4 py-2 text-md font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  name="password"
                  type={`${show ? "text" : "password"}`}
                  placeholder="New password"
                  onChange={inputData}
                  value={user.password}
                />
                {/* hide and show button  */}
                <div className="absolute right-5 top-2">
                  <button
                    onClick={() => setShow(!show)}
                    className="cursor-pointer"
                  >
                    {show ? (
                      <BiShow className="text-xl hover:text-blue-500 transition-all" />
                    ) : (
                      <BiHide className="text-xl hover:text-blue-500 transition-all" />
                    )}
                  </button>
                </div>
                <p className="text-grey text-xs mt-1">At least 6 characters</p>
              </div>
              {/* death of birth part  */}
              <div className="mb-2">
                <input
                  className="form-control block w-full px-4 py-2 text-md font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  type="date"
                  name="date"
                  onChange={inputData}
                  value={user.date}
                />
                <p className="text-grey text-xs mt-1">Minimum 18 Years</p>
              </div>
              {/* gender select part  */}
              <div className="mb-2">
                <select
                  className="form-control block w-full px-4 py-2 text-md font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  name="gender"
                  onChange={inputData}
                  value={user.gender}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                <p className="text-grey text-xs mt-1">Gender &#63;</p>
              </div>
              {/* igrement part  */}
              <div className="mb-2 w-full md:w-96">
                <p className="text-gray-500" style={{ fontSize: "12px" }}>
                  People who use our service may have uploaded your contact
                  information to Facebook.{" "}
                  <a
                    className="text-blue-500 hover:underline transition-all"
                    href={aTag}
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    Learn more.
                  </a>
                </p>
                {/* second text  */}
                <p className="text-gray-500 mt-2" style={{ fontSize: "12px" }}>
                  By clicking Sign Up, you agree to our Terms, Privacy Policy
                  and Cookies Policy. You may receive SMS notifications from us
                  and can opt out at any time.
                </p>
              </div>
              {/* submit button  */}
              <div className="flex justify-center items-center mt-4">
                <div className="w-3/5" onClick={onSubmit}>
                  <button
                    className="px-7 py-3 cursor-pointer text-white font-semibold font-sans bg-green-600 text-sm md:text-md leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
                    type="button"
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
