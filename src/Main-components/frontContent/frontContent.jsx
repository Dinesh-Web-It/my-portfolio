import React from "react";
import "./frontContent.css";
import Front_img from "../../assets/profile3d.png";
import { FlipWordsDemo } from "../../Ui-Components/Demos/FlipWordsDemo";


const FrontContent = () => {
  
  
  return (
    <div>
      <div className="content">
        <div className="front-content">
          <FlipWordsDemo />
          <span className="blur"></span>
          <span className="blur"></span> 
        </div>
        <div className="front-img">
          <img src={Front_img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FrontContent;
