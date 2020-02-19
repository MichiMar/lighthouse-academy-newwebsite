import React from "react";
import { withRouter } from "react-router";
import { NavLink, Link } from "react-router-dom";
import Logo from "../img/Light-House-transpatern.png";

const NavigationContainer = props => {
  return (
    <div className="nav-wrapper">
      <div className="title-wrapper">
        <div className="logo">
          <Link to="/">
            <img src={Logo} />
          </Link>
        </div>

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

        {/* <div className="nav-link-wrapper">
          <NavLink to="/curriculum" activeClassName="nav-link-active">
            <button className="btn">Curriculum</button>
          </NavLink>
        </div> */}

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
          <NavLink to="/registration" activeClassName="nav-link-active">
            <button className="btn">Registration</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default withRouter(NavigationContainer);

// *feb-19/20* 'Elimine' la opcion de curriculum a peticion del due;o
