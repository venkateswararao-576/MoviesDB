import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Card from '../Card'
import './index.css'

class UpComing extends Component {
  state = {movies: '', isloading: true}

  componentDidMount() {
    this.fetchdetails()
  }

  fetchdetails = async () => {
    const api =
      'https://api.themoviedb.org/3/movie/upcoming?api_key=fd6ce146824b2c63d33e5d1ca82d8e4a&language=en-US&page=1'
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

  render() {
    const {isloading, movies} = this.state
    return (
      <div className="upcoming-container">
        {isloading ? (
          <Loader type="Oval" width={50} height={50} color="blue" />
        ) : (
          <ul className="movie-container">
            {movies.map(each => (
              <Card details={each} key={each.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}
export default UpComing
