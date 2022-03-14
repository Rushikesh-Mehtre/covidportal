import React, { Component } from "react";
import './NationalHelpline.css'
import Spinner from "./Spinner";
export class NationalHelpline extends Component {
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
    console.log(responsedata.data.contacts.primary);
    this.setState({
      articles: responsedata.data.contacts.primary,
      loading : false
    });
  }
  render() {
    document.title = `Covid Data Portal | Helpline (National)`

    return (
        <div >
          {this.state.loading && <Spinner/>}
        <div class="card help-card " style={{height:"100%",paddingTop:"100px" ,paddingBottom:"330px"}}>
          <div class="card-body">
            <h5 class="card-title" style={{marginBottom:"20px"}}>National Helpline</h5>

            <p class="card-text">{`Number - ${this.state.articles.number}`}</p>
            <p class="card-text">

              {`Number(Toll-free) - ${this.state.articles.["number-tollfree"]}`}
            </p>
           
            <p class="card-text">{`Email - ${this.state.articles.email}`}</p>
            <p class="card-text"><span class="badge bg-warning1" ><a href={this.state.articles.twitter} style={{textDecoration:"none",color:"white"}}><i class="fab fa-twitter"></i> Twitter</a></span>  &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                  {`${this.state.articles.twitter}`} </p>
            <p class="card-text">    <span class="badge bg-warning1" > <a href={this.state.articles.facebook}style={{textDecoration:"none",color:"white"}}><i class="fab fa-facebook-f"></i> Facebook</a></span>   &nbsp; &nbsp;  &nbsp;
                  {`${this.state.articles.facebook}`}</p>
            <p class="card-text">   <span class="badge bg-warning1" ><a href={this.state.articles.media} style={{textDecoration:"none",color:"white"}}><i class="fas fa-info"></i> Pib</a></span>         &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
                  {`${this.state.articles.media}`}</p>
          </div>
        </div>
        
      </div>
    );
  }
}

export default NationalHelpline;
