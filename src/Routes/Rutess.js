import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Error from "../components/Error/Error";
import Home from "../components/Home/Home";
import UserProfile from "../components/Profile/Profile";
import Videos from "../components/videos/Videos";
import Group from "../components/group/Group";
import Signup from "../components/Singup/Signup";

const Rutess = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/group" element={<Group />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
};

export default Rutess;
