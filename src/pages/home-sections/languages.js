import React from "react";
import Youtube from "react-youtube";

export default class LanguagesSection extends React.Component {
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
      <div className="languages-wrapper">
        <h3 className="subtitle">~ Spanish, English and Chinneese ~</h3>
        <div className="video-YT">
          <Youtube videoId="T-JwglDyzc0" opts={opts} onReady={this._onReady} />
        </div>

        {/* <img src={spanishClass} /> */}
        <p className="introduction">
          Children enjoy learning useful phrases as they learn to communicate
          their needs and desires through interactive games and activities. Two
          of our staff members are fluent Spanish speakers, so the possibilities
          for learning Spanish are endless!
        </p>
      </div>
    );
  }
}
