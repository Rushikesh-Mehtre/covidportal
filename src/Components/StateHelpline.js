import React, { Component } from "react";
import Spinner from "./Spinner";

export class StateHelpline extends Component {
  state = {
    articles: [],
    loading : false
  };
  async componentDidMount() {
      this.setState({
          loading : true
      })
    let url = "https://api.rootnet.in/covid19-in/contacts";
    let response = await fetch(url);
    let responsedata = await response.json();
    console.log(responsedata.data.contacts.regional);
    this.setState({
      articles: responsedata.data.contacts.regional,
      loading : false
    });
  }
  render() {
    document.title = `Covid Data Portal | Helpline (Statewise)`

    return (
        <div>
            {this.state.loading && <Spinner/>} 
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
                  width: "100%",
                  zIndex: "2",
                  height: "40px",
                }}
              >
                <td style={{ paddingTop: "10px", paddingLeft: "14px" ,width:"50vw"}}>
                  State
                </td>
                <td style={{ paddingTop: "10px", paddingLeft: "50px" ,width:"50vw"}}>
                  Contact Number
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
                  <tr
                    key={element.ID}
                    className="d-flex bd-highlight"
                    style={{ zIndex: "-1" }}
                  >
                    <td style={{ paddingLeft: "15px",width:"50rem" }}>
                      {element.loc}
                    </td>
                   
                    <td style={{ width:"44.9rem"}}> {element.number}</td>
                    
                  </tr>
                </tbody>
              </table>
            </div>
          );
        })}
      </div>
    )
  }
}

export default StateHelpline;
