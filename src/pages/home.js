import React from "react";

import ActivitiesIndex from "./home-sections/activities";
import Ages from "./home-sections/ages";
import LanguagesSection from "./home-sections/languages";
import SimpleMap from "./home-sections/map";
// import { Slide } from "../slider/carrosel";

export default class Home extends React.Component {
  render() {
    return (
      <div className="home-container">
        {/* <div className="home-image">
          <Slide />
        </div> */}

        <ActivitiesIndex />
        <Ages />
        <LanguagesSection />
        <SimpleMap />
      </div>
    );
  }
}
