import React, { Component } from 'react'
import QueryItem from './QueryItem.js'
export default class Content extends Component {

  constructor() {
    super();
    this.state = {
      query: []
    };
  }
  async componentDidMount() {
    let data = await fetch('./data.json'
      , {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    );

    let dataJson = await data.json();

    this.setState({ query: dataJson.children });

  }

  copyQuery(id){
    console.log(document.getElementById(id).innerText);
    navigator.clipboard.writeText(document.getElementById(id).innerText); // Copying the queries.

    alert(`Copied --> ${document.getElementById(id).innerText}`)
  }

  render() {
 
    return (
      <>
        
        <div className="container">
          <div className="row">

            {this.state.query.map((data) =>
              <div key={data.name} className="col-12 my-5">
                <QueryItem  data={data} copyQuery={this.copyQuery} buttonValue={this.state.value} cardColor={this.props.cardColor} />
              </div>
            )}


          </div>
        </div>
      </>
    )
  }
}
