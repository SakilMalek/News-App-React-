import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'

export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 8,
        category: 'general'
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: true,
            page: 1
        }
    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9861fa5cb4164cb2aa6dbf5257c1f0e6&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        try {
            this.setState({ loading: true });
            const res = await fetch(url);
            const data = await res.json();
            this.setState({
                articles: data.articles,
                totalResults: data.totalResults,
                loading: false
            });
        }
        catch (e) {
            console.log("Something is not working");
        }
    }

    handlePrevClick = async () => {

        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9861fa5cb4164cb2aa6dbf5257c1f0e6&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        try {
            this.setState({ loading: true });

            const res = await fetch(url);
            const data = await res.json();
            this.setState({
                page: this.state.page - 1,
                articles: data.articles,
                loading: false
            });
        }
        catch (e) {
            console.log("Something is not working");
        }
    }
    handleNextClick = async () => {
        console.log("hi")
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) { }
        else {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9861fa5cb4164cb2aa6dbf5257c1f0e6&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            try {
                this.setState({ loading: true });

                const res = await fetch(url);
                const data = await res.json();
                this.setState({
                    page: this.state.page + 1,
                    articles: data.articles,
                    totalResults: data.totalResults,
                    loading: false
                });
            }
            catch (e) {
                console.log("Something is not working");
            }
        }

    }


    render() {
        return (
            <div className='container my-3'>
                <h1 className="text-center">NewsBird - Top HeadLines</h1>
                {this.state.loading && <Spinner />}

                <div className="row">
                    {
                        !this.state.loading && this.state.articles.map((element) => {
                            return <div className="col-md-4" key={element.url} >
                                <NewsItem title={element.title ? element.title.slice(0, 30) : ""} description={element.description ? element.description.slice(0, 90) : ""} imgurl={element.urlToImage} newsurl={element.url} />

                            </div>
                        })}

                </div>
                <div className="container d-flex justify-content-between">
                    <button type="button" rel="noreferrer" disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.handlePrevClick} >&laquo; Previous</button>
                    <button type="button" rel="noreferrer" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 20)} className="btn btn-dark" onClick={this.handleNextClick} >Next &raquo;</button>
                </div>
            </div >

        )
    }
}

export default News
