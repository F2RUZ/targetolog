import React from "react";
import Navbar from "../Navbar/Navbar";
import Intro from "../UI/Intro/Intro";
import Router from "../../Routes/Routes";

const layout = () => {
  return (
    <div>
     <div className="intro-wrapper">
     <div className="wrapper">
        <Navbar />
        <Intro />
      </div>
     </div>
      {/* <Router/> */}
    </div>
  );
};

export default layout;
