import React, { Component } from 'react'

export default class Spinner extends Component {


  render() {
    console.log("In spinner")
    return (
      <div id="spinner">
        <img src="animation_500_l6nsk88p.gif" alt = "Loading...." height="200" width="200" />
      </div>
    )
  }
}
