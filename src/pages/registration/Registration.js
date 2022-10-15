import React from "react";
import Form from "./form/Form";

const linkData = [
  "SignUp",
  "LogIn",
  "Messenger",
  "Facebook",
  "Lite",
  "Watch",
  "Places",
  "Games",
  "Marketplace",
  "Facebook",
  "Pay",
  "Oculus",
  "Portal",
  "Instagram",
  "Bulletin",
  "Local",
  "Fundraisers",
  "Services",
  "Voting",
  "Information",
  "Centre",
  "Groups",
  "About",
  "Create",
  "adCreate",
  "Page",
  "Developers",
  "Careers",
  "Privacy",
  "Cookies",
  "AdChoices",
  "TermsHelp",
  "Contact",
  "uploading and non-users ",
  "Settings",
  "Activity",
  "log",
];

const Registation = () => {
  return (
    <>
      <section className="w-screen h-screen lg:px-32">
        {/* login part  */}
        <div className="w-full md:h-5/6 flex justify-around items-center flex-col md:flex-row">
          {/* login title part  */}
          <div className="w-full flex justify-end items-end my-6">
            <div className="px-6 flex items-center md:items-start justify-center flex-col">
              <h1 className="text-3xl md:text-4xl lg:text-5xl text-blue-500 font-bold">
                Facebook
              </h1>
              <p className="text-xl md:text-2xl mt-1">
                Facebook helps you connect and share with the people in your
                life.
              </p>
            </div>
          </div>
          {/* login form part  */}
          <div className="w-full flex justify-center items-center flex-col mb-20">
            <Form />
            <div className="mt-6">
              <p>
                <span className="font-bold">Create a Page</span> for a
                celebrity, brand or business.
              </p>
            </div>
          </div>
        </div>

        {/* link part  */}
        <div className="w-full md:h-1/6 flex justify-center items-center flex-col px-4">
          <div>
            <p className="text-gray-500">
              English (UK) বাংলা অসমীয়া हिन्दी नेपाली Bahasa Indonesia العربية
              中文(简体) Bahasa Melayu Español Português (Brasil)
            </p>
          </div>
          {/* horigental linek  */}
          <div className="w-full h-2 my-3">
            <hr />
          </div>

          {/* link  */}
          <div>
            <p className="text-gray-500 text-xs">
              {linkData.map((val, id) => (
                <span
                  className="inline-block ml-2 cursor-pointer hover:underline transition-all"
                  key={id}
                >
                  {val}
                </span>
              ))}
            </p>
          </div>
          {/* meta des  */}
          <div className="text-gray-500 text-xs font-bold text-left">
            <h4>meta &copy; {new Date().getFullYear()}</h4>
          </div>
        </div>
      </section>
    </>
  );
};

export default Registation;
