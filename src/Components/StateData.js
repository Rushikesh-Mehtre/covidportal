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
   
    let url = "https://api.rootnet.in/covid19-in/stats/latest";
    let response = await fetch(url);
    let finaldata = await response.json();
    this.setState({
      articles: finaldata.data.regional,
      date: finaldata.lastRefreshed,
      loading : false
    });
  }
  render() {
    document.title = `Covid Data Portal | India's Data`

    return (
      <div>
        {this.state.loading && <Spinner/> }
        <div
          className="table-responsive"
          style={{ marginTop: "10px", marginBottom: "65px" }}
        >
          <table
            className="table"
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
                style={{ zIndex: "4" }}
              >
                <td style={{ paddingLeft: "15px" }}>State / UT</td>
                <td style={{ paddingLeft: "275px" }}>
                  Confirmed Cases <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(Indian)
                </td>
                <td style={{ paddingLeft: "55px" }}>
                  Confirmed Cases <br />{" "}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(Foreigner)
                </td>
                <td style={{ paddingLeft: "15px" }}>
                  Total Confirmed <br />{" "}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Cases
                </td>
                <td style={{ paddingLeft: "37px" }}>Total Deaths</td>
                <td style={{ paddingLeft: "25px" }}>Discharged</td>

                <td style={{ paddingLeft: "195px", paddingRight: "175px" }}>
                  Last Updated{" "}
                </td>
              </tr>
            </thead>
          </table>
        </div>
        {!this.state.loading && this.state.articles.map((element) => {
          return (
            <div className="table-responsive ">
              <table
                className="table table-hover"
                style={{ marginBottom: "0rem" }}
              >
                <tbody>
                  <tr
                    key={element.statecode}
                    className="d-flex bd-highlight"
                    style={{ zIndex: "-1" }}
                  >
                    <td style={{ width: "24rem", paddingLeft: "15px" }}>
                      {element.loc}
                    </td>
                    <td style={{ width: "13rem" }}>
                      {" "}
                      {element.confirmedCasesIndian}
                    </td>
                    <td style={{ width: "8rem" }}>
                      {" "}
                      {element.confirmedCasesForeign}
                    </td>
                    <td style={{ width: "8.5rem" }}>
                      {" "}
                      {element.totalConfirmed}
                    </td>
                    <td style={{ width: "7.5rem" }}>{element.deaths} </td>
                    <td style={{ width: "13rem" }}>{element.discharged} </td>

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
