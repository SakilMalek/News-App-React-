import React, { Component } from 'react'


export class NewsItem extends Component {
    render() {
      let { title, description, imgurl, newsurl } = this.props;
      return (
        <div className="container">
          <div className="card h-50 my-4" style={{ width: "300px", height: "400px" }}>
            <img
              src={
                !imgurl
                  ? "https://media.wired.com/photos/6557ed60591547359b3c7022/191:100/w_1280,c_limit/The-Startup-That-Transformed-The-Hack-for-Hire-Industry-Security-GettyImages-685008639.jpg"
                  : imgurl
              }
              className="card-img-top rounded-3"
              alt="..."
            />
            <div className="card-body d-flex flex-column">
              <h5
                className="card-title"
                style={{ fontSize: "18px", fontWeight: "bold" }}
              >
                {!title ? "The Startup That Transformed..." : title}
              </h5>
              <p className="card-text" style={{ fontSize: "14px", lineHeight: "1.5" }}>
                {!description ? (
                  "Plus: The FBI's baffling inaction..."
                ) : (
                  description
                )}
                ...
              </p>
              <a
                href={newsurl}
                target="_blank"
                className="btn btn-primary mt-auto rounded-pill"
                rel="noreferrer"
                style={{ backgroundColor: "#007bff" }}
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      );
    }
  }