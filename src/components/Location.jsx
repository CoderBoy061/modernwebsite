import React from "react";
import home5 from "../assests/hom5.png";
import "../styles/location.css";
import CheckIcon from "@material-ui/icons/Check";

function Location() {
  return (
    <div className="location">
      <img src={home5} alt="Home" />
      <div className="para_section">
        <p>LOCATION</p>
        <h1>
          Best location <span className="heading_h1">in London</span>
        </h1>
        <p className="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mauris dolor, gravida a varius blandit, auctor eget purus.
        </p>
        <div className="list">
          <ul className="list_item">
            <li>
              <CheckIcon style={{color:"rgb(159, 212, 78)"}}/> Duis ultricies
            </li>
            <li>
              <CheckIcon style={{color:"rgb(159, 212, 78)"}}/> Nulla rutrum
            </li>
            <li>
              <CheckIcon style={{color:"rgb(159, 212, 78)"}}/> Gravida eget
            </li>
            <li>
              <CheckIcon style={{color:"rgb(159, 212, 78)"}}/> Mauris eget
            </li>
          </ul>
          <ul className="list_item">
            <li>
              <CheckIcon style={{color:"rgb(159, 212, 78)"}}/> Nulla dolor
            </li>
            <li>
              <CheckIcon style={{color:"rgb(159, 212, 78)"}}/> Gravida blandit
            </li>
            <li>
              <CheckIcon style={{color:"rgb(159, 212, 78)"}}/> Blandit purus
            </li>
            <li>
              <CheckIcon style={{color:"rgb(159, 212, 78)"}}/> Mauris eget
            </li>
          </ul>
        </div>
        <button className="read_more">Read more</button>
      </div>
    </div>
  );
}

export default Location;
