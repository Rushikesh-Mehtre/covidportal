import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";
export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav
          class="navbar navbar-expand-lg navbar-dark bg-dark"
          style={{ height: "50px" }}
        >
          <div
            class="container-fluid"
            style={{
              position: "fixed",
              top: "0",
              width: "104%",
              backgroundColor: "black",
              zIndex: "3",
              height: "60px",
              paddingLeft: "0px",
            }}
          >
            <Link class="navbar-brand" to="/">
              <i class="fas fa-virus"></i> COVID Data Portal
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={{ backgroundColor: "black", color: "white" }}
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item" style={{ backgroundColor: "black" }}>
                  <Link
                    class="nav-link"
                    aria-current="page"
                    to="/"
                    style={{ paddingLeft: "20px", color: "white" }}
                  >
                    Home
                  </Link>
                </li>
                <li class="nav-item" style={{ backgroundColor: "black" }}>
                  <Link
                    class="nav-link"
                    to="/about"
                    style={{ paddingLeft: "20px", color: "white" }}
                  >
                    About
                  </Link>
                </li>
                <li
                  class="nav-item"
                  style={{ backgroundColor: "black", color: "white" }}
                >
                  <Link
                    class="nav-link"
                    to="/globaldata"
                    style={{ paddingLeft: "20px", color: "white" }}
                  >
                    Global Data{" "}
                  </Link>
                </li>
                <li
                  class="nav-item"
                  style={{ backgroundColor: "black", color: "white" }}
                >
                  <Link
                    class="nav-link"
                    to="/statewisedata"
                    style={{ paddingLeft: "20px", color: "white" }}
                  >
                    India's Data{" "}
                  </Link>
                </li>
                <li
                  class="nav-item"
                  style={{ backgroundColor: "black", color: "white" }}
                >
                  <Link
                    class="nav-link"
                    to="/bedshospitals"
                    style={{ paddingLeft: "20px", color: "white" }}
                  >
                    Beds {`&`} Hospitals
                  </Link>
                </li>
                <li
                  class="nav-item dropdown"
                  style={{ backgroundColor: "black", color: "white" }}
                >
                  <a
                    class="nav-link dropdown-toggle"
                    href="index.html"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{ paddingLeft: "20px", color: "white" }}
                  >
                    Services
                  </a>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                    style={{
                      backgroundColor: "black",
                      color: "white",
                      paddingLeft: "5px",
                    }}
                  >
                    <li style={{ backgroundColor: "black" }}>
                      <Link
                        class="dropdown-item"
                        to="/globaldata"
                        style={{ color: "white", paddingLeft: "20px" }}
                      >
                        Countrywise Data
                      </Link>
                    </li>
                    <li style={{ backgroundColor: "black", color: "white" }}>
                      <Link
                        class="dropdown-item"
                        to="/statewisedata"
                        style={{ color: "white", paddingLeft: "20px" }}
                      >
                        Statewise Cases Data (India)
                      </Link>
                    </li>
                    <li style={{ backgroundColor: "black", color: "white" }}>
                      <Link
                        class="dropdown-item"
                        to="/timewise"
                        style={{ color: "white", paddingLeft: "20px" }}
                      >
                        Datewise Cases Data (India)
                      </Link>
                    </li>
                    <li style={{ backgroundColor: "black", color: "white" }}>
                      <Link
                        class="dropdown-item"
                        to="/vaccination"
                        style={{ color: "white", paddingLeft: "20px" }}
                      >
                        Datewise Vaccination Data (India)
                      </Link>
                    </li>
                    <li style={{ backgroundColor: "black", color: "white" }}>
                      <Link
                        class="dropdown-item"
                        to="/bedshospitals"
                        style={{ color: "white", paddingLeft: "20px" }}
                      >
                        Beds {`&`} Hospitals
                      </Link>
                    </li>
                  </ul>
                </li>
                <li
                  class="nav-item dropdown"
                  style={{ backgroundColor: "black", color: "white" }}
                >
                  <a
                    class="nav-link dropdown-toggle"
                    href="index.html"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{ paddingLeft: "20px", color: "white" }}
                  >
                    Helpline Numbers
                  </a>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                    style={{
                      backgroundColor: "black",
                      color: "white",
                      paddingLeft: "5px",
                    }}
                  >
                    <li style={{ backgroundColor: "black" }}>
                      <Link
                        class="dropdown-item"
                        to="/nationalhelp"
                        style={{ color: "white", paddingLeft: "20px" }}
                      >
                        National
                      </Link>
                    </li>
                    <li style={{ backgroundColor: "black", color: "white" }}>
                      <Link
                        class="dropdown-item"
                        to="/statehelp"
                        style={{ color: "white", paddingLeft: "20px" }}
                      >
                        Statewise
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
