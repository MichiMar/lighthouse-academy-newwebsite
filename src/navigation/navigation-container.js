import React from "react";
import axios from "axios";
import { withRouter } from "react-router";
import { NavLink, Link } from "react-router-dom";
import Logo from "../img/Light-House-white_clipped_rev_3.png";

const NavigationContainer = props => {
  const dynamicLink = (route, linkText) => {
    return (
      <div className="nav-link-wrapper">
        <NavLink to={route} activeClassName="nav-link-active">
          {linkText}
        </NavLink>
      </div>
    );
  };

  return (
    <div className="nav-wrapper">
      <div className="title-wrapper">
        <Link to="/">
          <div className="logo">
            <img src={Logo} />
          </div>
        </Link>

        <div className="academy-name">
          <h1>Lighthouse Montessori Academy</h1>
          <h5>Inspiring. Individualized. Hands-on.</h5>
        </div>
      </div>

      <div className="menu-burger-bars">
        <div className="nav-link-wrapper">
          <NavLink exact to="/" activeClassName="nav-link-active">
            <button className="btn">Home</button>
          </NavLink>
        </div>

        <div className="nav-link-wrapper">
          <NavLink to="/general" activeClassName="nav-link-active">
            <button className="btn">General</button>
          </NavLink>
        </div>

        <div className="nav-link-wrapper">
          <NavLink to="/curriculum" activeClassName="nav-link-active">
            <button className="btn">Curriculum</button>
          </NavLink>
        </div>

        <div className="nav-link-wrapper">
          <NavLink to="/about" activeClassName="nav-link-active">
            <button className="btn">About Us</button>
          </NavLink>
        </div>

        <div className="nav-link-wrapper">
          <NavLink to="/tuitions-and-fees" activeClassName="nav-link-active">
            <button className="btn">Tuition and Fees</button>
          </NavLink>
        </div>

        <div className="nav-link-wrapper">
          <NavLink to="/galery" activeClassName="nav-link-active">
            <button className="btn">Galery</button>
          </NavLink>
        </div>

        <div className="nav-link-wrapper">
          <NavLink to="/registration" activeClassName="nav-link-active">
            <button className="btn">Registration</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default withRouter(NavigationContainer);
