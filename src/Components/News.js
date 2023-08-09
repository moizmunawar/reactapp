import NewsItem from './NewsItem'
import InfiniteScroll from "react-infinite-scroll-component";
import React, { useEffect, useState  } from 'react'


  const News = (props) => {
  
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0);
  
    
    const capitalizeFirstLetter = (string) =>{
      return string.charAt(0).toUpperCase() + string.slice(1);
    } 
      
      const updateNews = async ()=>{
        props.setProgress(30) ;
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3520b7fbed8f4280bc037d0e74ace57c&page=${page + 1}&pageSize=${props.pageSize}  ` ;
        setLoading (true)
        let data = await fetch(url) ;
        let parsedData = await data.json() 
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        
        props.setProgress(100);
        
      }
      
      useEffect(()=>{
        document.title = `${capitalizeFirstLetter (props.category)} - NewsMonkey`
        updateNews();
        // eslint-disable-next-line
      },[])
      
    //   const handlePrevClick =async () =>{
    //   setPage(page-1)
    //   updateNews();
    // }

    // const handleNextClick =async () =>{
    //   setPage(page+1)
    //   updateNews();
    // }


    const fetchMoreData = async () => {
    
      
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3520b7fbed8f4280bc037d0e74ace57c&page=${page + 1}&pageSize=${props.pageSize}  ` ;
      setPage(page+1)
      setLoading(true)
        let data = await fetch(url) ;
        let parsedData = await data.json() 
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
        setLoading(false)
    };
    return (
      <>
      <h1 className="text-center " style={{marginTop: '90px'}}>NewsMonkey - Top {capitalizeFirstLetter (props.category)} Headlines</h1> 
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<h4>Loading...</h4>}
            >
            <div className="container">
        <div className="row">

            {articles.map((element) => {
            return (
            <div className="col-md-4" key = {element.url}>
            <NewsItem title= {element.title?element.title: ""} escription={element.description?element.description:""} 
            imageUrl =  {element.urlToImage} newsUrl= {element.url} author={element.author}
             Date={element.publishedAt} source={element.source.name}/>

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

export default News
