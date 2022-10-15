import React from 'react';
import Homeleft from '../../pages/home/Homeleft/Homeleft';
import Homemiddle from '../../pages/home/Homemiddle/Homemiddle';
import Homeright from '../../pages/home/Homeright/Homeright';
import Title from "../title/Title";
import Navbar from "../../pages/Navigation/Navbar";

const Home = () => {
  Title(0,"Facebook");
    return (
      <>
        <main>
          <Navbar/>
          <section className="grid grid-cols-3 md:grid-cols-4 gap-4 mt-20 px-0 md:px-4 h-screen overflow-hidden">
            {/* home page left side part  */}
            <div className="hidden md:block">
              <Homeleft />
            </div>
            {/* home page middle side part  */}
            <div className="col-span-4 md:col-span-2 px-2 md:px-0">
              <Homemiddle />
            </div>
            {/* home page right side part  */}
            <div className="hidden md:block">
              <Homeright />
            </div>
          </section>
        </main>
      </>
    );
};

export default Home;