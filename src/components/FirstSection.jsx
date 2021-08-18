import React from "react";
import appartments from "../assests/appartments.png";
import "../styles/first_section.css";


function FirstSection() {
  return (
    <div className="first_section">
      <div className="first_desc">
        <p>For Life . For Family . For You</p>
        <h1>
          Find your peaceful space <span className="heart">in the heart</span> of the city
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
          distinctio nostrum eligendi neque, quis pariatur quasi ullam.
        </p>
        <div className="buttons">
          <button id="button">FIND AND APPARTMENT</button>
          <button id="button2">ABOUT INVESTMENT</button>
        </div>
        <div className="description">
          <div className="desc_div">
            <p>AREA</p>
            <p>35-140 m2</p>
          </div>
          <div className="desc_div">
            <p>ROOMS</p>
            <p>2-5</p>
          </div>
          <div className="desc_div">
            <p>PRICE</p>
            <p>$1999/m2</p>
          </div>
        </div>
      </div>

      <div className="first_image">
        <img src={appartments} alt="Image" />
      </div>
    </div>
  );
}

export default FirstSection;
