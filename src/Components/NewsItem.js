import React, { Component } from 'react'


export class NewsItem extends Component {
    render() {
        let { title, description, imgurl, newsurl } = this.props;
        return (
            <div className='container'>
                <div className="card h-50 my-4">
                    <img src={!imgurl ? "https://media.wired.com/photos/6557ed60591547359b3c7022/191:100/w_1280,c_limit/The-Startup-That-Transformed-The-Hack-for-Hire-Industry-Security-GettyImages-685008639.jpg" : imgurl} className="card-img-top" alt="..." />
                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title">{!title ? "The Startup That Transformed the Hack-for-Hire Industry" : title}...</h5>
                        <p className="card-text">{!description ? "Plus: The FBI's baffling inaction on a ransomware group, a massive breach of Danish electric utilities, and more." : description}...</p>
                        <a href={newsurl} target="_blank" className="btn btn-primary mt-auto">Read More</a>
                    </div>
                </div>
            </div >
        )
    }
}

export default NewsItem
