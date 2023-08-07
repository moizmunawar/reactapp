import React, { Component } from 'react'
import NewsItem from './NewsItem'
import InfiniteScroll from "react-infinite-scroll-component";

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
            page : 1 ,
            totalResults : 0 ,
        }
        document.title = `${this.capitalizeFirstLetter (this.props.category)} - NewsMonkey`
    }
    async componentDidMount(){
      this.updateNews();
    }

    handlePrevClick =async () =>{
      this.updateNews();
    }

    handleNextClick =async () =>{
      this.updateNews();
    }

     async updateNews  (){
      this.props.setProgress(30) ;
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3520b7fbed8f4280bc037d0e74ace57c&page=${this.state.page + 1}&pageSize=${this.props.pageSize}  ` ;
      this.setState({loading : true});
        let data = await fetch(url) ;
        // this.props.setProgress(30); /*this prop for the loading bar*/ 
        let parsedData = await data.json() 
      this.setState( {
        articles : parsedData.articles ,
        totalResults: parsedData.totalResults ,
        loading : false ,
    }) 
    this.props.setProgress(100);

    }

    fetchMoreData = async (props) => {
    
      this.setState({page: this.state.page + 1})
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3520b7fbed8f4280bc037d0e74ace57c&page=${this.state.page + 1}&pageSize=${this.props.pageSize}  ` ;
      this.setState({loading : true});
        let data = await fetch(url) ;
        let parsedData = await data.json() 
      this.setState( {
        articles : this.state.articles.concat(parsedData.articles) ,
        totalResults: parsedData.totalResults ,
        loading : false ,
    }) 

    };
    
  render() {
    return (
      <>
      <h1 className="text-center">NewsMonkey - Top {this.capitalizeFirstLetter (this.props.category)} Headlines</h1> 
            <InfiniteScroll
                dataLength={this.state.articles.length}
                next={this.fetchMoreData}
                hasMore={this.state.articles.length !==this.state.totalResults}
                loader={<h4>Loading...</h4>}
            >
            <div className="container">
        <div className="row">

            {this.state.articles.map((element) => {
            return (
            <div className="col-md-4" key = {element.url}>
            <NewsItem title= {element.title?element.title: ""}description={element.description?element.description:""} imageUrl =  {element.urlToImage} newsUrl= {element.url} author={element.author} Date={element.publishedAt} source={element.source.name}/>

        </div>

        )  })}
       </div>
        </div> 
        </InfiniteScroll>
       {/* <div className="container d-flex justify-content-between">
       <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrevClick}>	&larr; Previous</button>
       <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/20)} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
       </div> */}

      </> 
    )
  }
}

export default News
