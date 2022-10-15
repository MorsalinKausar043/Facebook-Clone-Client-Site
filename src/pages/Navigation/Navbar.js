import React from "react";
import ReactTooltip from "react-tooltip";
import Navfirst from "./navPart/navFirst/Navfirst";
import Navsecond from "./navPart/navSecond/Navsecond";
import Navthird from "./navPart/navThird/Navthird";

const Navbar = () => {
  return (
    <>
      <main className="py-3 px-2 md:px-6 bg-white shadow-md w-full h-auto fixed top-0 z-20">
        <nav className="grid grid-cols-2 md:grid-cols-3 gap-4 ">
          {/* navbar left part  */}
          <Navfirst />
          {/* navbar middle side part  */}
          <Navsecond />
          {/* navbar right side part  */}
          <Navthird />
          {/* tolltip tag import  */}
          <ReactTooltip type="dark" effect="float" />
        </nav>
      </main>
    </>
  );
};

export default Navbar;
