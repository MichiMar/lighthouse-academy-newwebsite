import React, { Component } from "react";
import NavigationContainer from "../navigation/navigation-container";

export default class Home extends Component {
  render() {
    return (
      <div className="page-container">
        <div className="navbar">
          <div className="b">
            <NavigationContainer />
          </div>
        </div>
        <div className="container">
          <div className="home-container">
            <h1>Home</h1>
          </div>
        </div>
      </div>
    );
  }
}
