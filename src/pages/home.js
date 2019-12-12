import React, { Component } from "react";
import NavigationContainer from "../navigation/navigation-container";
import Styled from "styled-components";

import confidentImg from "../img/Confident.jpg";
import creative from "../img/Creative.jpg";
import emotionalInteligent from "../img/emotionally-intelligent.jpg";
import comunication from "../img/good-comunicator.jpg";
import world from "../img/Kid-World.jpg";
import solverProblem from "../img/problem-solver.jpg";

export default class Home extends Component {
  hoverImageChange(/**event for hover */) {
    console.log("hover effect");
  }

  handleLinkClick() {
    console.log("redirecting to information page");
  }

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
            <div className="heading">
              <h1>Nurturing each child to be:</h1>
            </div>

            <div className="summary-images">
              <div className="images-wrapper-upper-block">
                <div className="topic-block">
                  <h3>Confident</h3>
                  <div
                    // style={{ backgroundImage: `url(${confidentImg})` }}
                    onClick={this.handleLinkClick}
                  >
                    <img src={confidentImg} />
                    <p>
                      Practical life activities develop organization and focus
                      skills. When the child is able to take care of himself and
                      the environment, he feels genuine confidence.
                    </p>
                    <p>
                      “The greatest development is achieved during the first
                      years of life, and therefore it is then that the greatest
                      care should be taken. If this is done, then the child does
                      not become a burden; he will reveal himself as the
                      greatest marvel of nature.” – Maria Montessori
                    </p>
                  </div>
                </div>

                <div className="topic-block">
                  <h3>Enthusiastic life-long learner</h3>
                  <div
                    // style={{ backgroundImage: `url(${world})` }}
                    onClick={this.handleLinkClick}
                  >
                    <img src={world} />
                    <p>
                      Cultural experiences in geography, history, zoology,
                      botany, dance, music and art. We put the world at the
                      child’s fingertips.
                    </p>
                    <p>
                      "It is through appropriate work and activities that the
                      character of the child is transformed. Work influences his
                      development in the same way that food revives the vigor of
                      a starving man. We observe that a child occupied with
                      matters that awaken his interest seems to blossom, to
                      expand, evincing undreamed of character traits; his
                      abilities give him great satisfaction, and he smiles with
                      a sweet and joyous smile." (San Remo Lectures, p. 28)
                    </p>
                  </div>
                </div>
              </div>

              <div className="images-wrapper-lower-block">
                <div className="topic-block">
                  <h3>Emotionally Intelligent</h3>
                  <div
                    // style={{ backgroundImage: `url(${emotionalInteligent})` }}
                    onClick={this.handleLinkClick}
                  >
                    <img src={emotionalInteligent} />
                    <p>
                      Peace education helps children learn to contribute, set
                      boundaries or respect, handle conflict wisely, understand
                      others, collaborate, and seek after peace.
                    </p>
                    <p>
                      "A child who has become master of his acts through long
                      and repeated exercises, and who has been encouraged by the
                      pleasant and interesting activities in which he has been
                      engaged, is a child filled with health and joy and
                      remarkable for his calmness and discipline." (Dr. Maria
                      Montessori, 'The Discovery of the Child', Clio Press Ltd,
                      92)
                    </p>
                  </div>
                </div>

                <div className="topic-block">
                  <h3>A Good Comunicator</h3>
                  <div
                    // style={{ backgroundImage: `url(${comunication})` }}
                    onClick={this.handleLinkClick}
                  >
                    <img src={comunication} />
                    <p>
                      Language used to connect and belong through listening,
                      speaking, reading and writing in Spanish and English. We
                      are a real Spanish immersion program.
                    </p>
                    <p>
                      “We await the successive births in the soul of the child.
                      We give all possible material, that nothing may lack to
                      the growing soul, and then we watch for the perfect
                      faculty to come, safeguarding the child from interruption
                      so that it may carry its efforts through.” – Maria
                      Montessori
                    </p>
                  </div>
                </div>

                <div className="topic-block">
                  <h3>A Problem Solver</h3>
                  <div
                    // style={{ backgroundImage: `url(${solverProblem})` }}
                    onClick={this.handleLinkClick}
                  >
                    <img src={solverProblem} />
                    <p>
                      Math exercises that are challenging, understandable and
                      enjoyable.
                    </p>
                    <p>
                      “If education is always to be conceived along the same
                      antiquated lines of a mere transmission of knowledge,
                      there is little to be hoped from it in the bettering of
                      man's future.”
                    </p>
                  </div>
                </div>

                <div className="topic-block">
                  <h3>Creative</h3>
                  <div
                    // style={{ backgroundImage: `url(${creative})` }}
                    onClick={this.handleLinkClick}
                  >
                    <img src={creative} />
                    <p>
                      Cultural experiences in geography, history, zoology,
                      botany, dance, music and art. We put the world at the
                      child’s fingertips.
                    </p>
                    <p>
                      "It is through appropriate work and activities that the
                      character of the child is transformed. Work influences his
                      development in the same way that food revives the vigor of
                      a starving man. We observe that a child occupied with
                      matters that awaken his interest seems to blossom, to
                      expand, evincing undreamed of character traits; his
                      abilities give him great satisfaction, and he smiles with
                      a sweet and joyous smile." (San Remo Lectures, p. 28)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
