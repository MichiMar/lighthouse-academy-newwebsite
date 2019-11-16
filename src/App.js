import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

import NavigationContainer from "./navigation/navigation-container";
import Home from "./pages/home";
import MethodInfo from "./pages/general";
import Activities from "./pages/curriculum";
import About from "./pages/about";
import TuitionAndFees from "./pages/tuition-n-fee-info";
// import Blog from "./pages/blog";
import Contact from "./pages/contact";
// import Galery from "./pages/galery";
import Registration from "./pages/registration";
import AgesPage from "./pages/ages-page";
import SeasonCourses from "./cursos/cursos-de-temporada";

import "./styles/main.scss";

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />

              <Route path="/general" component={MethodInfo} />
              <Route path="/curriculum" component={Activities} />
              <Route path="/about" component={About} />
              <Route path="/tuitions-and-fees" component={TuitionAndFees} />
              {/* <Route path="/blog" component={Blog} /> */}
              <Route path="/contact" component={Contact} />
              {/* <Route path="/galery" component={Galery} /> */}
              <Route path="/registration" component={Registration} />
              <Route path="/ages" component={AgesPage} />
              <Route path="/summer-course" component={SeasonCourses} />
            </Switch>
          </div>

          <div className="footer">
            <footer className="footer-wrapper">
              <div className="footer-copyright">
                &copy;LightHouse Montessori Academy
              </div>
            </footer>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
