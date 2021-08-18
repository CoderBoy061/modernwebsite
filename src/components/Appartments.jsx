import React from "react";
import "../styles/appartment.css";
import slide1 from "../assests/slide1.jpg";
import slide2 from "../assests/slide2.jpg";
import slide3 from "../assests/slide3.jpg";
import slide4 from "../assests/slide4.jpg";
import slide5 from "../assests/slide5.jpg";
import SimpleCarousel from "simple-react-carousel";

// import {NavLink} from 'react-router-dom';
function Appartments() {
  return (
    <div className="appartment">
      <p>BEDEVELOPER</p>
     <h1>Our <span className="heading_para">apartments</span></h1>
      <div className="slider">
    
        <SimpleCarousel >
          <div>
            <img src={slide1} alt="image" />
            <p className="slider_p">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Temporibus, consequatur?
            </p>
          </div>
          <div>
            <img src={slide2} alt="image" />
            <p className="slider_p">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Temporibus, consequatur?
            </p>
          </div>
          <div>
            <img src={slide3} alt="image" />
            <p className="slider_p">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Temporibus, consequatur?
            </p>
          </div>
          <div>
            <img src={slide4} alt="image" />
            <p className="slider_p">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Temporibus, consequatur?
            </p>
          </div>
          <div>
            <div>
              <img src={slide5} alt="image" />
              <p className="slider_p">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Temporibus, consequatur?
              </p>
            </div>
          </div>
        </SimpleCarousel>
        
      </div>
      <button className="show">Show all</button>
    </div>
  );
}

export default Appartments;
