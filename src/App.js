import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/home";
import MethodInfo from "./pages/general";
import Activities from "./pages/curriculum";
import About from "./pages/about";
import TuitionAndFees from "./pages/tuition-n-fee-info";
import Contact from "./pages/contact";
import Registration from "./pages/registration";
import AgesPage from "./pages/ages-page";
import SeasonCourses from "./cursos/cursos-de-temporada";
import { FaBars } from "react-icons/fa";

import "./styles/main.scss";
import NavigationContainer from "./navigation/navigation-container";

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <Router>
          <div className="navbar">
            <div className="b">
              <NavigationContainer />
            </div>
          </div>
          <div className="bars-menu">
            <FaBars />
          </div>
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />

              <Route path="/general" component={MethodInfo} />
              <Route path="/curriculum" component={Activities} />
              <Route path="/about" component={About} />
              <Route path="/tuitions-and-fees" component={TuitionAndFees} />
              <Route path="/contact" component={Contact} />
              <Route path="/registration" component={Registration} />
              <Route path="/ages" component={AgesPage} />
              <Route path="/summer-course" component={SeasonCourses} />
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
