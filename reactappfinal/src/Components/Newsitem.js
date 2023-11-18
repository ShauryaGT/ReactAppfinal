import React, { Component } from 'react'
import logo from '../appicon.jpeg'


export class Newsitem extends Component {
  render() {
    let {title, description, url,source} = this.props;
    return (
      <div>
            <div className="card my-3" style={{"width": "18rem"}}>
                        <img src={!source ? logo : source} className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={url} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                        </div>
            </div>
      </div>
    )
  }
}
export default Newsitem
