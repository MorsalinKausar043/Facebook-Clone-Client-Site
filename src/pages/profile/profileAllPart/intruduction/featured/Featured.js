import React from "react";

const Featured = () => {
  const ImageData = [
    {
      image: "https://i.ibb.co/v3Vb3C7/1642326888748.jpg",
    },
    {
      image:
        "https://i.ibb.co/r35x4ws/143218413-2955428034783608-1232370029292067357-n.jpg",
    },
    {
      image:
        "https://i.ibb.co/sK6mKgF/Web-development-programmer-engineering-and-coding-website-on-augmented-reality-interface-screens-dev.jpg",
    },
    {
      image: "https://i.ibb.co/RbH8XdY/IMG-3624-01.jpg",
    },
    {
      image: "https://i.ibb.co/jJsKtSZ/photo-1624915438420-c6808f95f357.jpg",
    },
    {
      image: "https://i.ibb.co/wBsZxbp/download-3.jpg",
    },
    {
      image: "https://i.ibb.co/dQs0bBz/download-6.jpg",
    },
    {
      image: "https://i.ibb.co/9Yv7mTp/download-9.jpg",
    },
    {
      image: "https://i.ibb.co/9cStgXd/images-9.jpg",
    },
  ];

  return (
    <>
      <section className="overflow-hidden text-gray-700 ">
        <div className="flex flex-wrap -m-1 md:-m-2">
          {ImageData.map((val, id) => (
            <div key={id} className="flex flex-wrap w-1/3">
              <div className="w-full p-1">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg hover:opacity-90 transition-all"
                  src={val.image}
                />
              </div>
            </div>
          ))}
        </div>
        {/* edit featured  */}
        <div className="mt-5">
          <button
            onClick={(_) => alert("hello world")}
            className="cursor-pointer select-none bg-gray-200 hover:bg-gray-300 w-full h-auto rounded-md shadow-sm py-2 font-semibold"
          >
            Edit Featured
          </button>
        </div>
      </section>
    </>
  );
};

export default Featured;
