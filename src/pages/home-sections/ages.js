import React from "react";
import preeschool from "../../img/flowers.png";

const Ages = () => {
  return (
    <div className="ages-home-wrapper">
      <h2>~ Ages ~</h2>
      <img src={preeschool} className="age-img" />
      <div className="ages-links">
        <p>
          <a src="#">Early Childhood </a>
          and
          <a src="#"> elementary</a>
        </p>
      </div>
    </div>
  );
};

export default Ages;
