import React, { Component } from "react";
import NavigationContainer from "../navigation/navigation-container";

import confidentImg from "../img/Confident.jpg";
import creative from "../img/Creative.jpg";
import emotionalInteligent from "../img/emotionally-intelligent.jpg";
import comunication from "../img/good-comunicator.jpg";
import world from "../img/Kid-World.jpg";
import solverProblem from "../img/problem-solver.jpg";

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
            <h1>Nurturing each child to be:</h1>
            <div className="summary-images">
              <div className="upper-block">
                <div style={{ backgroundImage: `url(${confidentImg})` }}>
                  <h3>A problem solver</h3>
                </div>
                <div style={{ backgroundImage: `url(${world})` }}>
                  <h3>A problem solver</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
