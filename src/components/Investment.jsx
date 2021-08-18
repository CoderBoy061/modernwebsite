import React from "react";
import "../styles/investment.css";
import home1 from "../assests/home1.jpg";

import icon2 from "../assests/icon2.png";
import icon1 from "../assests/icon1.png";
import icon3 from "../assests/icon3.png";
import icon4 from "../assests/icon4.png";

function Investment() {
  return (
    <>
      <div className="investment">
        <div className="heading">
          <p>ABOUT INVESTMENT</p>
          <h1>
            Modern apartment
            <span className="heading_span"> building in the city center</span>
          </h1>
        </div>
        <div className="section_image">
          <div className="para">
            <p className="para1">
              ABOUT INVESTMENT Modern apartment building in the city center
              Aliquam ac dui vel dui vulputate consectetur. Mauris accumsan,
              massa non consectetur condimentum, diam arcu tristique Egestas
              diam elit at nulla. Suspendisse potenti. In non lacinia risus, ac
              tempor ipsum. Phasellus venenatis leo eu semper varius.
            </p>
            <p className="para2">
              Aliquam ac dui vel dui vulputate consectetur. Mauris accumsan,
              massa non consectetur condimentum, diam arcu tristique nibh, nec
              egestas diam elit at nulla. Suspendisse potenti. In non lacinia
              risus, ac tempor ipsum. Phasellus venenatis. Maecenas sit amet
              molestie leo. Morbi vitae urna mauris. Nulla nec tortor vitae eros
              iaculis hendrerit.
            </p>
            <button className="more">Read more</button>
          </div>
          <div className="data">
            <img src={home1} alt="Home" />
          </div>
        </div>
      </div>
      <div className="service">
        <div className="service_section">
          <img src={icon1} alt="Image" />
          <p>Electric vehicle charging station</p>
        </div>
        <div className="service_section">
          <img src={icon2} alt="Image" />
          <p>24/7
medical care</p>
        </div>
        <div className="service_section">
          <img src={icon3} alt="Image" />
          <p>Fitness area for each resident</p>
        </div>
        <div className="service_section">
          <img src={icon4} alt="Image" />
          <p>Recreation area with playground</p>
        </div>
      </div>
    </>
  );
}

export default Investment;
