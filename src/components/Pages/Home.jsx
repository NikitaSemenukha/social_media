import React from "react";
import LeftSidebar from "../Sidebars/LeftSidebar";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <div className="w-full">
      <div className="fixed top-0 z-10 w-full bg-white">
        <Navbar></Navbar>
      </div>
      <div className="flex bg-gray-100">
        <div className="flex-auto w-[20%] fixed top-12">
          <LeftSidebar></LeftSidebar>
        </div>
      </div>
    </div>
  );
};

export default Home;
