import React, { Component } from 'react'

export class NewsItem extends Component {
    
  render() {
    let {title, description, imageUrl, newsUrl, author, Date, source} = this.props ;
    return (
      <div className='my-3'>
         <div className="card" >
             <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{ left:'85%' , zIndex: '1' }}> {source} 
              </span>
            <img src={!imageUrl?"https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/vo1rstipzruawucy_1690471481.jpeg" : imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a  href={newsUrl} rel="noreferrer" target='_blank' className="btn btn-sm btn-dark">Details</a>
                <p className="card-text"><small className="text-body-secondary">By {author?author : "Unknown"} on {Date}</small></p>
            </div>
            </div>
      </div>
    )
  }
}

export default NewsItem
