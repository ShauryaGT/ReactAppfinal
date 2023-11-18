import React, { Component } from 'react'
import Loader from './Loader';
import Newsitem from './Newsitem'

export class News extends Component {
  constructor(){
    super();
    this.state = {
      articles : [],
      loading : false,
      page : 1,
      totalCount : 0      
    };
  }

  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=7d556904b93146dab52e2959950c1544";
    this.setState({ loading : true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ loading : false });
    this.setState({ articles : parsedData.articles, totalCount : parsedData.totalResults });
  }
  
  handlePreviousClick = async () => {
    window.scroll({
      top: 0,
    });
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=7d556904b93146dab52e2959950c1544&page=${this.state.page - 1}&pagesize=20`;
    this.setState({ loading : true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ loading : false });
    this.setState({ page : this.state.page - 1, articles : parsedData.articles });
  }

  handleNextClick = async () => {
    window.scroll({
      top: 0,
    });
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=7d556904b93146dab52e2959950c1544&page=${this.state.page + 1}&pagesize=20`;
    this.setState({ loading : true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ loading : false });
    this.setState({ page : this.state.page + 1, articles : parsedData.articles });
  }

  render() {
    return (
        <div className="container my-2">
            <h2>Today's headlines</h2>
            {this.state.loading && <div className="text-center">
              <Loader/>
            </div> }
            <div className="container">
               <div class="row">
                  {this.state.articles.map(element => {
                        return <div class="col-md-4" key={element.url}>
                        <Newsitem title={element.title}  description={element.description} url={element.url} source={element.urlToImage}/>
                        </div>
                  })} 
               </div>                           
            </div>
            { !this.state.loading && 
              <div className="container d-flex justify-content-between">
                <button type="button" class="btn btn-dark btn-lg" onClick={this.handlePreviousClick} disabled={this.state.page == 1}>&larr; Previous</button>
                <button type="button" class="btn btn-dark btn-lg" onClick={this.handleNextClick} disabled={this.state.page == Math.ceil(this.state.totalCount/20)}>Next &rarr;</button>
              </div>    
            } 
      </div>
    )
  }
}

export default News