import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = {
    }
    capitalizeFirstLetter = (string) =>{
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    constructor(props){
        super(props);
        this.state = {
            articles : [] ,
            loading : false ,
            page : 1
        }
        document.title = `${this.capitalizeFirstLetter (this.props.category)} - NewsMonkey`
    }
    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3520b7fbed8f4280bc037d0e74ace57c&page=1&pageSize=${this.props.pageSize}` ;
        let data = await fetch(url) ;
        let parsedData = await data.json() 
        this.setState({articles : parsedData.articles})
    }

    handlePrevClick =async () =>{
      if (this.state.page + 1 > Math.ceil(this.state.totalResults/20)) ;
      else{

        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3520b7fbed8f4280bc037d0e74ace57c&page=${this.state.page - 1}&pageSize=${this.props.pageSize}` ;
          let data = await fetch(url) ;
          let parsedData = await data.json() 
         this.setState( {
         page : this.state.page - 1 ,
         articles : parsedData.articles
    }) }
    }
    handleNextClick =async () =>{

      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3520b7fbed8f4280bc037d0e74ace57c&page=${this.state.page + 1}&pageSize=${this.props.pageSize}  ` ;
        let data = await fetch(url) ;
        let parsedData = await data.json() 
      this.setState( {
        page : this.state.page + 1 ,
        articles : parsedData.articles
    }) 
    }

    
  render() {
    return (
       
      <div className="container my-3">
      <h1 className="text-center">NewsMonkey - Top {this.capitalizeFirstLetter (this.props.category)} Headlines</h1> 
        <div className="row">
          {this.state.articles.map((element) => {
          return (
          <div className="col-md-4" key = {element.url}>
          <NewsItem title= {element.title?element.title: ""}description={element.description?element.description:""} imageUrl =  {element.urlToImage} newsUrl= {element.url} author={element.author} Date={element.publishedAt} source={element.source.name}/>
        </div>
        )  })}
       </div>
       <div className="container d-flex justify-content-between">
       <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrevClick}>	&larr; Previous</button>
       <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/20)} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
       </div>
      </div> 
    )
  }
}

export default News
