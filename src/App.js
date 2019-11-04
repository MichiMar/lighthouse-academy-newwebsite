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
import Registration from "./pages/registration";

import "./styles/main.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <NavigationContainer />

          <Switch>
            <Route exact path="/" component={Home} />

            <Route path="/general" component={MethodInfo} />
            <Route path="/curriculum" component={Activities} />
            <Route path="/about" component={About} />
            <Route path="/tuitions-and-fees" component={TuitionAndFees} />
            {/* <Route path="/blog" component={Blog} /> */}
            <Route path="/contact" component={Contact} />
            <Route path="/registration" component={Registration} />
          </Switch>
        </div>
      </Router>
      <div className="footer">
        <h2>footer</h2>
      </div>
    </div>
  );
}

export default App;
