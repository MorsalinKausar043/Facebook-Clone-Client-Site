import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BsDisplay } from "react-icons/bs";
import { GrGroup } from "react-icons/gr";
import { SiFacebookgaming } from "react-icons/si";
import { GiHouse } from "react-icons/gi";
import ReactTooltip from "react-tooltip";
import {NavLink} from "react-router-dom";

const Navsecond = () => {
  return (
    <>
      <section className="hidden md:flex justify-around items-center">
        {/* home path  */}
        <div>
          <NavLink to="/">
            <AiOutlineHome
              data-tip="home"
              className="text-3xl outline-none focus:text-blue-500"
            />
          </NavLink>
        </div>
        {/* videos path */}
        <div>
          <NavLink to="/videos">
            <BsDisplay
              data-tip="watch"
              className="text-3xl outline-none focus:text-blue-500"
            />
          </NavLink>
        </div>
        {/* marketplace path  */}
        <div>
          <GiHouse
            data-tip="marketplace"
            className="text-3xl outline-none focus:text-blue-500"
          />
        </div>
        {/* group path  */}
        <div>
          <NavLink to="/group">
            <GrGroup
              data-tip="group"
              className="text-3xl outline-none focus:text-blue-500"
            />
          </NavLink>
        </div>
        {/* gaming path  */}
        <div>
          <SiFacebookgaming
            data-tip="gaming"
            className="text-2xl outline-none focus:text-blue-500"
          />
        </div>
        <ReactTooltip />
      </section>
    </>
  );
};

export default Navsecond;
