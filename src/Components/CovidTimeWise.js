import React, { Component } from "react";
import Spinner from "./Spinner";
export class StatewiseData extends Component {
  state = {
    articles: [],
    loading: false,
  };
  async componentDidMount() {
    this.setState({
      loading: true,
    });
    let url = "https://data.covid19india.org/data.json";
    let response = await fetch(url);
    let responseData = await response.json();
    console.log(responseData);
    this.setState({
      articles: responseData.cases_time_series,
      loading: false,
    });
  }
  render() {
    document.title = `Covid Data Portal | Datewise COVID cases`;

    return (
      <div>
        {this.state.loading && <Spinner />}
        <div
          class="table-responsive"
          style={{ marginTop: "10px", marginBottom: "40px" }}
        >
          <table
            class="table"
            style={{
              position: "fixed",
              top: "20",
              left: "0",
              overflowX: "scroll",
            }}
          >
            <thead>
              <tr className="table-dark d-flex bd-highlight">
                <td style={{ paddingLeft: "10px" }}>Date</td>
                <td style={{ paddingLeft: "180px" }}>Daily Confirmed</td>
                <td style={{ paddingLeft: "75px" }}>Daily Deceased</td>
                <td style={{ paddingLeft: "87px" }}>Daily Recovered</td>
                <td style={{ paddingLeft: "115px" }}>Total Confirmed</td>
                <td style={{ paddingLeft: "85px" }}>Total Recovered</td>
                <td style={{ paddingLeft: "80px", paddingRight: "142px" }}>
                  Total Deceased
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
                    <tr key={element.statecode} className="d-flex bd-highlight">
                      <td style={{ width: "16rem" }}>{element.date}</td>
                      <td style={{ width: "13rem", paddingLeft: "15px" }}>
                        {element.dailyconfirmed}
                      </td>
                      <td style={{ width: "13rem" }}>
                        {" "}
                        {element.dailydeceased}
                      </td>
                      <td style={{ width: "13rem" }}>
                        {" "}
                        {element.dailyrecovered}
                      </td>
                      <td style={{ width: "13rem" }}>
                        {" "}
                        {element.totalconfirmed}
                      </td>

                      <td style={{ width: "13rem" }}>
                        {element.totalrecovered}{" "}
                      </td>
                      <td style={{ width: "13.9rem" }}>
                        {" "}
                        {element.totaldeceased}
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

export default StatewiseData;
