import React from "react";
import preeschool from "../../img/flowers.png";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

const Ages = () => {
  return (
    <div className="ages-home-wrapper">
      <h2>~ Ages ~</h2>
      <Link to="/ages" className="link-to-age-page">
        <div className="link-ages">
          <div className="ages-img">
            <img src={preeschool} className="age-img" />
          </div>
          <div className="ages-links">
            <p>Early Childhood and elementary</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default withRouter(Ages);
