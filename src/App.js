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
import SocialStudies from "./pages/homepage-links/social-studies";
import Technology from "./pages/homepage-links/technologyAndSensoliar";
import Math from "./pages/homepage-links/math";
import Mathematics from "./pages/homepage-links/math";
import Languages from "./pages/homepage-links/languages";
import Geography from "./pages/homepage-links/geography";
import PeaceEducation from "./pages/homepage-links/peaceEducation";

class ToggleBar extends React.Component {
  constructor() {
    // @ts-ignore
    super();

    this.state = {
      navside: false
    };
    this.toggleNavSide = this.toggleNavSide.bind(this);
  }

  toggleNavSide() {
    this.setState({
      navside: !this.state.navside
    });
  }

  render() {
    return (
      <div>
        <div className="bars-menu" onClick={this.toggleNavSide}>
          <FaBars />
        </div>

        {this.state.navside ? (
          <div className="media-navbar">
            <div className="b">
              <NavigationContainer />
            </div>
          </div>
        ) : null}

        <div className="navbar">
          <div className="b">
            <NavigationContainer />
          </div>
        </div>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <Router>
          <div className="Navigation">
            <ToggleBar />
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

              <Route path="/social-studies" component={SocialStudies} />
              <Route path="/technology-and-sensorial" component={Technology} />
              <Route path="/mathematics" component={Mathematics} />
              <Route path="/languages" component={Languages} />
              <Route path="/geography" component={Geography} />
              <Route path="/peace-education" component={PeaceEducation} />
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
