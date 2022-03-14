import React, { Component } from "react";
import CovidData from "./Components/CovidData.js";
import CovidTimeWise from "./Components/CovidTimeWise.js";
import CovidTest from "./Components/CovidTest.js";
import Navbar from "./Components/Navbar.js";
import Homepage from "./Components/Homepage.js";
import AboutUs from "./Components/AboutUs.js";
import StateData from "./Components/StateData.js";
import TotalHospital from "./Components/TotalHospital.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NationalHelpline from "./Components/NationalHelpline.js";
import StateHelpline from "./Components/StateHelpline.js";
export class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/">
              <Homepage></Homepage>
            </Route>
            <Route exact path="/about">
              <AboutUs />
            </Route>
            <Route exact path="/statewisedata">
              <StateData></StateData>
            </Route>
            <Route exact path="/globaldata">
              <CovidData />
            </Route>
            <Route exact path="/timewise">
              <CovidTimeWise />
            </Route>
            <Route exact path="/vaccination">
              <CovidTest />
            </Route>
            <Route exact path="/bedshospitals">
              <TotalHospital></TotalHospital>
            </Route>
            <Route exact path="/nationalhelp">
              <NationalHelpline />
            </Route>
            <Route exact path="/statehelp">
              <StateHelpline></StateHelpline>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
