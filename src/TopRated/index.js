import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Card from '../Card'
import './index.css'

class TopRated extends Component {
  state = {movies: '', isloading: true, page: 1}

  componentDidMount() {
    this.fetchdetails()
  }

  fetchdetails = async () => {
    const {page} = this.state
    const api = `https://api.themoviedb.org/3/movie/top_rated?api_key=fd6ce146824b2c63d33e5d1ca82d8e4a&language=en-US&page=${page}`
    const result = await fetch(api)
    const data = await result.json()
    if (result.ok) {
      const movies = data.results.map(each => ({
        id: each.id,
        image: each.poster_path,
        name: each.title,
        rating: each.vote_average,
      }))
      this.setState({movies, isloading: false})
    }
  }

  previouspage = () => {
    const {page} = this.state
    if (page !== 1) {
      this.setState(prev => ({page: prev.page - 1}), this.fetchdetails)
    }
  }

  nextpage = () => {
    this.setState(prev => ({page: prev.page + 1}), this.fetchdetails)
  }

  render() {
    const {isloading, movies, page} = this.state
    return (
      <div className="top-container">
        {isloading ? (
          <Loader type="Oval" width={50} height={50} color="blue" />
        ) : (
          <ul className="movie-container">
            {movies.map(each => (
              <Card details={each} key={each.id} />
            ))}
          </ul>
        )}
        <div className="pagination-container">
          <button
            onClick={this.previouspage}
            className="pagination-btn"
            type="button"
          >
            Prev
          </button>
          <p className="page-num">{page}</p>
          <button
            onClick={this.nextpage}
            className="pagination-btn"
            type="button"
          >
            Next
          </button>
        </div>
      </div>
    )
  }
}
export default TopRated
