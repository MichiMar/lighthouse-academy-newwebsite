import React, { Component } from "react";

import confidentImg from "../img/Confident.jpg";
import creative from "../img/Creative.jpg";
import emotionalInteligent from "../img/emotionally-intelligent.jpg";
import comunication from "../img/good-comunicator.jpg";
import world from "../img/Kid-World.jpg";
import solverProblem from "../img/problem-solver.jpg";

import Logo from "../img/Light-House-transpatern.png";

export default class Home extends Component {
  render() {
    return (
      <div className="page-container">
        <div className="container">
          <div className="home-container">
            <div className="media-header">
              <div className="title-wrapper">
                <div className="logo">
                  <img src={Logo} />
                </div>

                <div className="academy-name">
                  <h1>Lighthouse Montessori Academy</h1>
                  <h5>Inspiring. Individualized. Hands-on.</h5>
                </div>
              </div>
            </div>
            <div className="heading">
              <h1>Nurturing each child to be:</h1>
            </div>

            <div className="summary-images">
              <div className="images-wrapper-upper-block">
                <div className="topic-block">
                  <div>
                    <div className="topic-introduction">
                      <h3>Confident</h3>

                      <div className="p1">
                        <h5>
                          Practical life activities develop organization and
                          focus skills. When the child is able to take care of
                          himself and the environment, he feels genuine
                          confidence.
                        </h5>
                      </div>
                      <div className="p2">
                        <h6>
                          “The greatest development is achieved during the first
                          years of life, and therefore it is then that the
                          greatest care should be taken. If this is done, then
                          the child does not become a burden; he will reveal
                          himself as the greatest marvel of nature.” – Maria
                          Montessori
                        </h6>
                      </div>
                    </div>
                    <div className="image">
                      <img src={confidentImg} />
                    </div>
                  </div>
                </div>

                <div className="topic-big-block">
                  <div>
                    <div className="topic-introduction">
                      <h3>Enthusiastic life-long learner</h3>
                      <div className="p1">
                        <h4>
                          Cultural experiences in geography, history, zoology,
                          botany, dance, music and art. We put the world at the
                          child’s fingertips.
                        </h4>
                      </div>
                      <div className="p2">
                        <h4>
                          "It is through appropriate work and activities that
                          the character of the child is transformed. Work
                          influences his development in the same way that food
                          revives the vigor of a starving man. We observe that a
                          child occupied with matters that awaken his interest
                          seems to blossom, to expand, evincing undreamed of
                          character traits; his abilities give him great
                          satisfaction, and he smiles with a sweet and joyous
                          smile." (San Remo Lectures, p. 28)
                        </h4>
                      </div>
                    </div>
                    <div className="big-image">
                      <img src={world} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="images-wrapper-lower-block">
                <div className="topic-block">
                  <div>
                    <div className="topic-introduction">
                      <h3>Emotionally Intelligent</h3>
                      <div className="p1">
                        <h5>
                          Peace education helps children learn to contribute,
                          set boundaries or respect, handle conflict wisely,
                          understand others, collaborate, and seek after peace.
                        </h5>
                      </div>
                      <div className="p2">
                        <h6>
                          "A child who has become master of his acts through
                          long and repeated exercises, and who has been
                          encouraged by the pleasant and interesting activities
                          in which he has been engaged, is a child filled with
                          health and joy and remarkable for his calmness and
                          discipline." (Dr. Maria Montessori, 'The Discovery of
                          the Child', Clio Press Ltd, 92)
                        </h6>
                      </div>
                    </div>
                    <div className="image">
                      <img src={emotionalInteligent} />
                    </div>
                  </div>
                </div>

                <div className="topic-block">
                  <div>
                    <div className="topic-introduction">
                      <h3>A Good Comunicator</h3>
                      <div className="p1">
                        <h5>
                          Language used to connect and belong through listening,
                          speaking, reading and writing in Spanish and English.
                          We are a real Spanish immersion program.
                        </h5>
                      </div>
                      <div className="p2">
                        <h6>
                          “We await the successive births in the soul of the
                          child. We give all possible material, that nothing may
                          lack to the growing soul, and then we watch for the
                          perfect faculty to come, safeguarding the child from
                          interruption so that it may carry its efforts
                          through.” – Maria Montessori
                        </h6>
                      </div>
                    </div>
                    <div className="image">
                      <img src={comunication} />
                    </div>
                  </div>
                </div>

                <div className="topic-block">
                  <div>
                    <div className="topic-introduction">
                      <h3>A Problem Solver</h3>
                      <div className="p1">
                        <h4>
                          Math exercises that are challenging, understandable
                          and enjoyable.
                        </h4>
                      </div>
                      <div className="p2">
                        <h4>
                          “If education is always to be conceived along the same
                          antiquated lines of a mere transmission of knowledge,
                          there is little to be hoped from it in the bettering
                          of man's future.”
                        </h4>
                      </div>
                    </div>
                    <div className="image">
                      <img src={solverProblem} />
                    </div>
                  </div>
                </div>

                <div className="topic-block">
                  <div>
                    <div className="topic-introduction">
                      <h3>Creative</h3>
                      <div className="p1">
                        <h5>
                          Cultural experiences in geography, history, zoology,
                          botany, dance, music and art. We put the world at the
                          child’s fingertips.
                        </h5>
                      </div>
                      <div className="p2">
                        <h6>
                          "It is through appropriate work and activities that
                          the character of the child is transformed. Work
                          influences his development in the same way that food
                          revives the vigor of a starving man. We observe that a
                          child occupied with matters that awaken his interest
                          seems to blossom, to expand, evincing undreamed of
                          character traits; his abilities give him great
                          satisfaction, and he smiles with a sweet and joyous
                          smile." (San Remo Lectures, p. 28)
                        </h6>
                      </div>
                    </div>
                    <div className="image">
                      <img src={creative} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer">
          <footer className="footer-wrapper">
            <div className="footer-copyright">
              <p>&copy;LightHouse Montessori Academy</p>
              <p>Phone: (385) 237-5437</p>
              <p>E-mail: LighthouseMontessoriAcademy@gmail.com</p>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}
