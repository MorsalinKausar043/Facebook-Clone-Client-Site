import React from "react";
import Navbar from "../../pages/Navigation/Navbar";
import Profile from "../../pages/profile/Profile";
import Title from "../title/Title";

const UserProfile = () => {
  Title(9,"Morsalin Kausar | Facebook");
  return (
    <>
      <main className="mt-20">
        <Navbar/>
        <Profile />
      </main>
    </>
  );
};

export default UserProfile;
