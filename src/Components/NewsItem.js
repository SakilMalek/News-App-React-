import React, { Component } from 'react';
import './NewsItem.css'; // Import the CSS file

export class NewsItem extends Component {
  render() {
    let { title, description, imgurl, newsurl } = this.props;

    return (
      <div className="container">
        <div className="news-card card h-100 my-4">
          <img
            src={
              imgurl ||
              "https://media.wired.com/photos/6557ed60591547359b3c7022/191:100/w_1280,c_limit/The-Startup-That-Transformed-The-Hack-for-Hire-Industry-Security-GettyImages-685008639.jpg"
            }
            className="card-img-top img-fluid" // Ensures the image is responsive
            alt="News"
          />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title text-truncate" style={{ maxHeight: '3.6em', overflow: 'hidden' }}>
              {title ? title : "The Startup That Transformed the Hack-for-Hire Industry"}...
            </h5>
            <p className="card-text text-truncate" style={{ maxHeight: '4.8em', overflow: 'hidden' }}>
              {description
                ? description
                : "Plus: The FBI's baffling inaction on a ransomware group, a massive breach of Danish electric utilities, and more."}
              ...
            </p>
            <a
              href={newsurl}
              target="_blank"
              className="btn btn-primary mt-auto"
              rel="noreferrer"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
