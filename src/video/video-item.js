import React, { Component } from "react";
import YouTube from "react-youtube";

export default class VideoItem extends Component {
  constructor(props) {
    super(props);
  }

  onYouTubeIframeAPIReady() {
    player = new YouTube.Player("player", {
      height: "360",
      width: "640",
      videoId: this.props.videoId,
      events: {
        onReady: onPlayerReady,
        onStateChange: onPLayerStatechange
      }
    });
  }

  render() {
    return (
      <div className="">
        <YouTube id="player"></YouTube>
      </div>
    );
  }
}
