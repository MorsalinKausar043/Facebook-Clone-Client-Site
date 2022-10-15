import React from "react";
import GroupLeft from "../../pages/group/GroupLeft";
import GroupMain from "../../pages/group/GroupMain";
import Title from "../../components/title/Title";
import Navbar from "../../pages/Navigation/Navbar";

const Group = () => {
  Title(1, "Groups | Facebook");
  return (
    <>
      <main>
        <Navbar/>
        <section className="grid grid-cols-3 md:grid-cols-4 gap-4 mt-20 px-0 md:px-4 h-screen overflow-hidden">
          {/* home page left side part  */}
          <div className="hidden md:block">
            <GroupLeft/>
          </div>
          {/* home page middle side part  */}
          <div className="col-span-4 md:col-span-2 px-2 md:px-0  w-auto h-screen overflow-y-auto scrollBar2 pb-2">
            <GroupMain />
          </div>
          {/* home page right side part  */}
          <div className="hidden md:block">
            <h1>group right part</h1>
          </div>
        </section>
      </main>
    </>
  );
};

export default Group;
