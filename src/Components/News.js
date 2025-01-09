import React, { Component } from "react";
import { NewsItem } from './NewsItem'// Assuming you have this component
import {Spinner} from "./Spinner"; // Optional: Loading spinner component

export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
  }

  async componentDidMount() {
    this.fetchNews();
  }

  fetchNews = async () => {
    const { country, category, pageSize } = this.props;
    const { page } = this.state;
    const apiKey = "9861fa5cb4164cb2aa6dbf5257c1f0e6";

    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;

    try {
      this.setState({ loading: true });
      const res = await fetch(url);
      const data = await res.json();

      if (data.status === "ok") {
        this.setState({
          articles: data.articles || [],
          totalResults: data.totalResults || 0,
          loading: false,
        });
      } else {
        console.error("Error fetching news: ", data);
        this.setState({ loading: false });
      }
    } catch (error) {
      console.error("Error fetching news: ", error);
      this.setState({ loading: false });
    }
  };

  handlePrevClick = async () => {
    this.setState(
      (prevState) => ({ page: prevState.page - 1 }),
      this.fetchNews
    );
  };

  handleNextClick = async () => {
    this.setState(
      (prevState) => ({ page: prevState.page + 1 }),
      this.fetchNews
    );
  };

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">NewsBird - Top Headlines</h1>

        {this.state.loading && <Spinner />}

        <div className="row">
          {this.state.articles && this.state.articles.length > 0 ? (
            this.state.articles.map((element) => (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 30) : ""}
                  description={
                    element.description ? element.description.slice(0, 90) : ""
                  }
                  imgurl={element.urlToImage}
                  newsurl={element.url}
                />
              </div>
            ))
          ) : (
            !this.state.loading && <p>No articles found.</p>
          )}
        </div>

        <div className="container d-flex justify-content-between">
          <button
            type="button"
            disabled={this.state.page <= 1}
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &laquo; Previous
          </button>
          <button
            type="button"
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &raquo;
          </button>
        </div>
      </div>
    );
  }
}

News.defaultProps = {
  country: "us", // Default country
  category: "general", // Default category
  pageSize: 10, // Default number of articles per page
};
