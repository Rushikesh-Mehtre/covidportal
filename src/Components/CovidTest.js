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
    let finalresponseData = responseData.tested.slice(313);
    console.log(responseData.tested[400]);
    this.setState({
      articles: finalresponseData,
      loading: false,
    });
  }
  render() {
    document.title = `Covid Data Portal | Datewise Vaccination Data`;

    return (
      <div>
        {this.state.loading && <Spinner />}
        <div class="table-responsive" style={{ marginBottom: "65px" }}>
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
                <td style={{ paddingLeft: "80px" }}>
                  Frontline Workers <br /> (1st Dose){" "}
                  <i class="fas fa-user-md" style={{ fontSize: "15px" }}></i>
                </td>
                <td style={{ paddingLeft: "60px" }}>
                  Frontline Workers <br /> (2st Dose){" "}
                  <i class="fas fa-user-md" style={{ fontSize: "15px" }}></i>
                </td>
                <td style={{ paddingLeft: "60px" }}>
                  First Dose <br /> Administered
                </td>
                <td style={{ paddingLeft: "60px" }}>
                  Second Dose <br /> Administered
                </td>
                <td style={{ paddingLeft: "60px" }}>
                  Total Doses{" "}
                  <i style={{ fontSize: "15px" }} class="fas fa-syringe"></i>{" "}
                  <br /> Adminisstered
                </td>
                <td style={{ paddingLeft: "269px", paddingRight: "251px" }}>
                  Source
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
                      <td style={{ width: "9rem" }}>{element.testedasof}</td>
                      <td style={{ width: "12rem" }}>
                        {element.frontlineworkersvaccinated1stdose}
                      </td>
                      <td style={{ width: "11rem" }}>
                        {" "}
                        {element.frontlineworkersvaccinated2nddose}
                      </td>
                      <td style={{ width: "11rem" }}>
                        {" "}
                        {element.firstdoseadministered}
                      </td>
                      <td style={{ width: "10rem" }}>
                        {" "}
                        {element.seconddoseadministered}
                      </td>

                      <td style={{ width: "10rem" }}>
                        {element.totaldosesadministered}{" "}
                      </td>
                      <td style={{ width: "31.9rem" }}>
                        {" "}
                        {
                          <a
                            target="_blank"
                            rel="noreferrer"
                            style={{
                              textDecoration: "none",
                              color: "black",
                              hover: {
                                color: "tomato",
                              },
                            }}
                            hover={{ color: "tomato" }}
                            href={element.source}
                          >
                            {" "}
                            ${element.source}
                          </a>
                        }
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
