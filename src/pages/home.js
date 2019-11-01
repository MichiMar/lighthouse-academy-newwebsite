import React from "react";
import { Slider, Slide, Caption } from "react-materialize";

import ActivitiesIndex from "../activities/activities";
import Image1 from "../img/img-ex.jpg";

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
            <Slide image={Image1}>
              <Caption>
                <h3>this is the big Tagline!</h3>
                <h5>Small Slogan!</h5>
              </Caption>
            </Slide>
            <Slide image={Image1}>
              <Caption>
                <h3>this is the big Tagline!</h3>
                <h5>Small Slogan!</h5>
              </Caption>
            </Slide>
          </Slider>
        </div>

        <ActivitiesIndex />
        <h2>Ages</h2>
        <h2>languages, video del arbol</h2>
        <h2>map</h2>
      </div>
    );
  }
}
