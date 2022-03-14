import React, { Component } from "react";
import Spinner from "./Spinner";
export class Coviddata extends Component {
  state = {
    articles: [],
    sr: 1,
    loading: false,
  };
  async componentDidMount() {
    this.setState({
      loading: true,
    });
    let url = "https://api.covid19api.com/summary";
    let response = await fetch(url);
    let responseData = await response.json();
    console.log(responseData.Countries[1]);
    this.setState({
      articles: responseData.Countries,
      sr: 1,
      loading: false,
    });
  }
  render() {
    document.title = `Covid Data Portal | Global Data`;
    return (
      <div>
        {this.state.loading && <Spinner />}

        <div
          class="table-responsive"
          style={{ marginTop: "10px", marginBottom: "25px" }}
        >
          <table class="table table-responsive">
            <thead>
              <tr
                className="table-dark d-flex bd-highlight"
                style={{
                  position: "fixed",
                  top: "-10",
                  left: "0",

                  zIndex: "2",
                  height: "40px",
                }}
              >
                <td style={{ paddingTop: "10px", paddingLeft: "14px" }}>
                  Country
                </td>
                <td style={{ paddingTop: "10px", paddingLeft: "110px" }}>
                  Country Flag
                </td>
                <td style={{ paddingTop: "10px", paddingLeft: "50px" }}>
                  New Confirmed
                </td>
                <td style={{ paddingTop: "10px", paddingLeft: "52px" }}>
                  Total Confirmed
                </td>
                <td style={{ paddingTop: "10px", paddingLeft: "50px" }}>
                  Total Deaths
                </td>
                <td style={{ paddingTop: "10px", paddingLeft: "50px" }}>
                  New Recovered
                </td>
                <td
                  style={{
                    paddingTop: "10px",
                    paddingLeft: "50px",
                    paddingRight: "132px",
                  }}
                >
                  Total Recovered
                </td>
                <td
                  style={{
                    paddingTop: "10px",
                    paddingRight: "184px",
                  }}
                >
                  Last Updated
                </td>
              </tr>
            </thead>
          </table>
        </div>

        {!this.state.loading &&
          this.state.articles.map((element) => {
            return (
              <div class="table-responsive ">
                <table
                  class="table table-hover"
                  style={{ marginBottom: "0rem" }}
                >
                  <tbody>
                    <tr
                      key={element.ID}
                      className="d-flex bd-highlight"
                      style={{ zIndex: "-1" }}
                    >
                      <td style={{ width: "11rem", paddingLeft: "15px" }}>
                        {element.Country}
                      </td>
                      <td style={{ width: "12rem", paddingLeft: "15px" }}>
                        <img
                          src={`https://www.countryflags.io/${element.CountryCode}/flat/64.png`}
                          alt=""
                          srcset=""
                        />
                      </td>
                      <td style={{ width: "10rem" }}>
                        {" "}
                        {element.NewConfirmed}
                      </td>
                      <td style={{ width: "10rem" }}>
                        {" "}
                        {element.TotalConfirmed}
                      </td>
                      <td style={{ width: "10rem" }}> {element.TotalDeaths}</td>
                      <td style={{ width: "10rem" }}>
                        {element.NewRecovered}{" "}
                      </td>
                      <td style={{ width: "10rem" }}>
                        {" "}
                        {element.TotalRecovered}
                      </td>
                      <td style={{ width: "21.9rem" }}>
                        {new Date(element.Date).toGMTString()}{" "}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          })}
      </div>
    );
  }
}

export default Coviddata;
