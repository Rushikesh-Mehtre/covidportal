import React, { Component } from "react";
import Spinner from "./Spinner";

export class StateData extends Component {
  state = {
    articles: [],
    loading : false
  };
  async componentDidMount() {
    this.setState({
      loading:true
    })
    let url = "https://api.rootnet.in/covid19-in/hospitals/beds";
    let response = await fetch(url);
    let finaldata = await response.json();
    this.setState({
      articles: finaldata.data.regional,
      date: finaldata.lastRefreshed,
      loading : false
    });
  }
  render() {
    document.title = `Covid Data Portal | Beds and Hospitals`

    return (
      <div>
        {this.state.loading && <Spinner/>}
        <div
          class="table-responsive"
          style={{ marginTop: "10px", marginBottom: "45px" }}
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
              <tr
                className="table-dark d-flex bd-highlight"
                style={{ height: "40px" }}
              >
                <td style={{ paddingLeft: "15px", paddingTop: "10px" }}>
                  State / UT
                </td>
                <td style={{ paddingLeft: "205px", paddingTop: "10px" }}>
                  Rural Beds
                </td>
                <td style={{ paddingLeft: "55px", paddingTop: "10px" }}>
                  Rural Hospitals
                </td>
                <td style={{ paddingLeft: "20px", paddingTop: "10px" }}>
                  Urban Beds
                </td>
                <td style={{ paddingLeft: "37px", paddingTop: "10px" }}>
                  Urban Hospitals
                </td>
                <td style={{ paddingLeft: "25px", paddingTop: "10px" }}>
                  Total Beds
                </td>
                <td style={{ paddingLeft: "25px", paddingTop: "10px" }}>
                  Total Hospitals
                </td>

                <td
                  style={{
                    paddingLeft: "195px",
                    paddingRight: "174px",
                    paddingTop: "10px",
                  }}
                >
                  Last Updated{" "}
                </td>
              </tr>
            </thead>
          </table>
        </div>
        {!this.state.loading && this.state.articles.map((element) => {
          return (
            <div class="table-responsive ">
              <table class="table table-hover" style={{ marginBottom: "0rem" }}>
                <tbody>
                  <tr key={element.statecode} className="d-flex bd-highlight">
                    <td style={{ width: "19rem", paddingLeft: "15px" }}>
                      {element.state}
                    </td>
                    <td style={{ width: "9.5rem" }}> {element.ruralBeds}</td>
                    <td style={{ width: "8.5rem" }}>
                      {" "}
                      {element.ruralHospitals}
                    </td>
                    <td style={{ width: "8.5rem" }}> {element.urbanBeds}</td>
                    <td style={{ width: "7.5rem" }}>
                      {element.urbanHospitals}{" "}
                    </td>
                    <td style={{ width: "8rem" }}>{element.totalBeds} </td>
                    <td style={{ width: "13rem" }}>
                      {element.totalHospitals}{" "}
                    </td>

                    <td style={{ width: "20.7rem" }}>
                      {new Date(this.state.date).toGMTString()}
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

export default StateData;
