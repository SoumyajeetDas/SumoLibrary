import React, { Component } from 'react'
import PathItem from './PathItem.js'
export default class SqlContent extends Component {

  constructor() {
    super();
    this.state = {
      query: []
    };
  }
  async componentDidMount() {
    let data = await fetch('./DBQuery.json'
      , {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    );

    let dataJson = await data.json();



    this.setState({ query: dataJson.paths });
 

  }

  async copyQuery(id1, id2){
  
    await navigator.clipboard.writeText(document.getElementById(id1).innerText)
 
    document.getElementById(id2).innerText="Copied!!";

    setTimeout(() =>{
      document.getElementById(id2).innerText="Copy Query";
    },2000);
    
  }

  render() {
 
    return (
      <>
        
        <div className="container">
          <div className="row">
 
            {this.state.query.map((data) =>
           
              <div key={data.name} className="col-12 my-5">
                <PathItem  key={data.name}  data={data} copyQuery={this.copyQuery} buttonValue={this.state.value} cardColor={this.props.cardColor} />
              </div>
            )}


          </div>
        </div>
      </>
    )
  }
}
