import React, { useState } from "react";
import { BiShow, BiHide } from "react-icons/bi";
import { MdOutlineCancel } from "react-icons/md";
import Modal from "./modal/Modal";

const Form = () => {
  const [show, setShow] = useState(false);
  const [modal, setModal] = useState(false);
  const [inputData, setInputData] = useState({ emailNumber: "", password: "" });
  // inputBox data
  const inputBox = (e) => {
    let { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  // submit Box
  const submitData = (e) => {
    e.preventDefault();
    const { emailNumber, password } = inputData;
    if (!emailNumber) {
      alert("fill the Email and Phone Number Box");
    } else if (!password) {
      alert("write password");
    } else {
      console.log(emailNumber, password);
      alert("sumit done");
      setInputData({ emailNumber: "", password: "" });
    }
  };

  return (
    <>
      <section className="bg-white py-5 px-4 rounded-lg w-5/6 md:w-4/5 lg:w-3/5 shadow-2xl">
        <div className="">
          {/* make form  */}
          <div>
            {/* <!-- Email input --> */}
            <div className="mb-6">
              <input
                type="text"
                className="form-control block w-full px-4 py-2 text-md font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="email address and phone number"
                name="emailNumber"
                onInput={inputBox}
                value={inputData.emailNumber}
              />
            </div>

            {/* <!-- Password input --> */}
            <div className="mb-4 relative">
              <input
                type={`${show ? "text" : "password"}`}
                className="form-control block w-full px-4 py-2 text-md font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Password"
                name="password"
                onInput={inputBox}
                value={inputData.password}
              />
              {/* hide and show button  */}
              <div className="absolute right-5 top-2">
                <button onClick={() => setShow(!show)} className="cursor-pointer">
                  {show ? (
                    <BiShow className="text-xl hover:text-blue-500 transition-all" />
                  ) : (
                    <BiHide className="text-xl hover:text-blue-500 transition-all" />
                  )}
                </button>
              </div>
            </div>
            {/* <!-- Submit button --> */}
            <button
              onClick={submitData}
              className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              Sign in
            </button>
            {/* forgot pass  */}
            <div className="flex justify-center items-center mt-4">
              <a
                href="#!"
                className=" text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
              >
                Forgotten password?
              </a>
            </div>
            {/* horizental break */}
            <div className="my-5">
              <hr className="" />
            </div>

            {/* create account part  */}
            <div
              className="flex justify-center items-center"
              onClick={() => setModal(true)}
            >
              <div className="w-4/6">
                <button className="px-7 py-3 cursor-pointer text-white font-semibold font-sans bg-green-500 text-sm md:text-md leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3">
                  {/* <!-- Facebook --> */} Create Account
                </button>
              </div>
            </div>
            {modal && (
              <>
                <div className="px-2 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      {/*header*/}
                      <div className="flex items-start justify-between p-3 border-b border-solid border-slate-200 rounded-t">
                        {/* modal title  */}
                        <div>
                          <h3 className="text-2xl font-semibold">Sign Up</h3>
                          <span className="font-xs">It's quick and easy.</span>
                        </div>
                        {/* modal cancel */}
                        <div className="p-1" onClick={(_) => setModal(false)}>
                          <MdOutlineCancel className="text-3xl text-gray-500 cursor-pointer" />
                        </div>
                      </div>
                      {/*body*/}
                      <Modal />
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Form;
