import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    let {title, description, url,source} = this.props;
    return (
      <div>
            <div class="card my-3" style={{"width": "18rem"}}>
                        <img src={source} class="card-img-top" alt="..."/>
                        <div class="card-body">
                        <h5 class="card-title">{title}</h5>
                        <p class="card-text">{description}</p>
                        <a href={url} class="btn btn-primary">Read More</a>
                        </div>
            </div>
      </div>
    )
  }
}
export default Newsitem
