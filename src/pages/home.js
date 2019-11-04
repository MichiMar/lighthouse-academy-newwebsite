import React from "react";
import { Slider, Slide, Caption } from "react-materialize";

import ActivitiesIndex from "./home-sections/activities";
import Image1 from "../img/img-ex.jpg";
import Image2 from "../img/class-time.jpg";
import Image3 from "../img/class-time3.jpg";
import Ages from "./home-sections/ages";

export default class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      indicators: false,
      interval: "",
      duration: ""
    };

    this.OptionsSlider = this.OptionsSlider.bind(this);
  }

  OptionsSlider() {
    this.setState({
      indicators: true,
      interval: 6000,
      duration: 2000
    });
  }

  render() {
    return (
      <div className="home-container">
        <div className="home-image">
          <Slider fullcscreen={false} options={() => this.OptionsSlider}>
            <Slide image={Image1}>
              <Caption>
                <h3>this is the big Tagline!</h3>
                <h5>Small Slogan!</h5>
              </Caption>
            </Slide>
            <Slide image={Image2}>
              <Caption>
                <h3>this is the big Tagline!</h3>
                <h5>Small Slogan!</h5>
              </Caption>
            </Slide>
            <Slide image={Image3}>
              <Caption>
                <h3>this is the big Tagline!</h3>
                <h5>Small Slogan!</h5>
              </Caption>
            </Slide>
          </Slider>
        </div>

        <ActivitiesIndex />
        <Ages />
        <h2>languages, video del arbol</h2>
        <h2>map</h2>
      </div>
    );
  }
}
