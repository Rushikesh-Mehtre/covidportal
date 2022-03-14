import React, { Component } from "react";
export class About extends Component {
  render() {
    document.title = `Covid Data Portal | About`;
    return (
      <div>
        <div
          class="card text-center about-body"
          style={{ overflowX: "hidden", overflowY: "hidden" }}
        >
          <div class="card-body">
            <h1 class="card-title">About Us</h1>
            <p class="card-text">
              This ReactJS project has been developed by Rushikesh Mehtre solely
              for the learning purpose.It uses fetched data from COVID data API
              provided by postman API and rootnet API. This web application is
              not intended to use for any commerical purpose.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
