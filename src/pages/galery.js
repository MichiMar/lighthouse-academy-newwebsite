import React from "react";

import imgGalery1 from "../img/class-time.jpg";
import imgGalery2 from "../img/class-time2.jpg";
import imgGalery3 from "../img/class-time3.jpg";
import imgGalery4 from "../img/class-time4.jpg";
import imgGalery5 from "../img/class-time5.jpg";
import imgGalery6 from "../img/spanish-class.jpg";

const Galery = () => {
  return (
    <div className="galery-container s12 m4 l3">
      <div className="text-wrapper">
        <h3>Galery</h3>
      </div>
      <div className="img-wrapper">
        <img src={imgGalery1} className="class-img" />
        <img src={imgGalery2} className="class-img" />
        <img src={imgGalery3} className="class-img" />
        <img src={imgGalery4} className="class-img" />
        <img src={imgGalery5} className="class-img" />
        <img src={imgGalery6} className="class-img" />
      </div>
    </div>
  );
};

export default Galery;
