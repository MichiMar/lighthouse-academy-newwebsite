import React from "react";

import imgGalery1 from "../img/class-time.jpg";
import imgGalery2 from "../img/class-time2.jpg";
import imgGalery3 from "../img/class-time3.jpg";
import imgGalery4 from "../img/class-time4.jpg";
import imgGalery5 from "../img/class-time5.jpg";
import imgGalery6 from "../img/spanish-class.jpg";
import imgGalery7 from "../img/chilhood-age.jpg";
import imgGalery8 from "../img/elementary-age.jpg";
import imgGalery9 from "../img/flowers.png";
import imgGalery10 from "../img/mathclass1.jpg";
import imgGalery11 from "../img/mathclass2.jpg";
import imgGalery12 from "../img/mathclass3.jpg";
import imgGalery13 from "../img/spanish-class.jpg";

import Youtube from "react-youtube";

export default class Galery extends React.Component {
  _onReady(event) {
    event.target.pauseVideo();
  }

  render() {
    const opts = {
      height: "390",
      width: "640",
      playerVar: {
        autoplay: 1
      }
    };
    return (
      <div className="galery-container">
        <div className="text-wrapper">
          <h3>Galery</h3>
        </div>
        <div className="video-YT">
          <Youtube videoId="eS7vKbLIDSc" opts={opts} onReady={this._onReady} />
        </div>
        <div className="img-wrapper">
          <img src={imgGalery1} className="class-img" />
          <img src={imgGalery2} className="class-img" />
          <img src={imgGalery3} className="class-img" />
          <img src={imgGalery4} className="class-img" />
          <img src={imgGalery5} className="class-img" />
          <img src={imgGalery7} className="class-img" />
          <img src={imgGalery8} className="class-img" />
          <img src={imgGalery9} className="class-img" />
          <img src={imgGalery10} className="class-img" />
          <img src={imgGalery11} className="class-img" />
          <img src={imgGalery12} className="class-img" />
          <img src={imgGalery13} className="class-img" />
        </div>
      </div>
    );
  }
}
