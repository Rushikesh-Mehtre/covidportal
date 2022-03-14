import React, { Component } from "react";
import "./Homepage.css";
import { Link } from "react-router-dom";
export class Homepage extends Component {
  render() {
    document.title = `Covid Data Portal | Home`;
    return (
      <div
        class="card text-center main-body"
        style={{ overflowX: "hidden", overflowY: "hidden" }}
      >
        <div class="card-body">
          <h1 class="card-title">Welcome to COVID Data Portal</h1>
          <p class="card-text">
            Here you will get the updated information about COVID 19 and the
            status of active cases, vaccination at one click !
          </p>
          <p>(for best user experience open application on dekstop)</p>
          <Link to="/globaldata" class="btn btn-dark">
            Click here to get global data
          </Link>
        </div>
      </div>
    );
  }
}

export default Homepage;
