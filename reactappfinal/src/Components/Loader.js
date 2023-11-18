import React, { Component } from 'react'
import spinner from '../spinneric.gif'


export class loader extends Component {
  render() {
    return (
      <div className="position-absolute top-50 z-3" style={{left: "45%"}}>
          <img src={spinner} alt="loading.."/>
      </div>
    )
  }
}

export default loader