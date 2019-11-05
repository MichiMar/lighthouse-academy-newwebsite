import React from "react";
import { Modal } from "react-materialize";
import imageActivity1 from "../../img/class-time.jpg";
import imageActivity2 from "../../img/class-time2.jpg";
import imageActivity3 from "../../img/class-time3.jpg";
import imageActivity4 from "../../img/class-time4.jpg";
import imageActivity5 from "../../img/class-time5.jpg";
import imageActivity6 from "../../img/spanish-class.jpg";

export default class ActivitiesIndex extends React.Component {
  render() {
    return (
      <div className="activities-wrapper">
        <div>
          <h2>~ Activities ~</h2>
          <div className="images-activities-wrapper ">
            <div className="row-wrapper">
              <div
                className="activity-img"
                style={{ backgroundImage: `url${imageActivity1}` }}
              >
                description
              </div>
              <div className="subtitle"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
