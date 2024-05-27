import React from "react";
import imgurl from "../img/bg2.jpg";
import "./components.css";

const Card = ({ title, description, edited }) => {
  return (
    <div className="postCard">
      <div className="first_half">
        <img src={imgurl} alt="Image" />
      </div>
      <div className="second_half">
        <div className="titleAndEditTag">
          <h2>{title}</h2>
          {edited ? <span>EDITED</span> : null}
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
