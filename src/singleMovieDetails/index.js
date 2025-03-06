import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cast from '../Cast'
import './index.css'

class SingleMovie extends Component {
  state = {movieDetails: '', isloading: true}

  componentDidMount() {
    this.fetchdetails()
  }

  fetchdetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=fd6ce146824b2c63d33e5d1ca82d8e4a&language=en-US`
    const result = await fetch(url)
    const data = await result.json()
    if (result.ok) {
      const movieDetails = {
        name: data.original_title,
        image: data.poster_path,
        rating: data.vote_average,
        duration: data.runtime,
        genre: data.genres,
        releaseDate: data.release_date,
        overview: data.overview,
      }
      this.setState({
        movieDetails,
        isloading: false,
      })
    }
  }

  render() {
    const {isloading, movieDetails} = this.state
    const {
      image,
      name,
      rating,
      duration,
      releaseDate,
      genre,
      overview,
    } = movieDetails
    let genres
    if (!isloading) {
      const genreVal = genre.map(each => each.name)
      genres = genreVal.join()
    }
    const {match} = this.props
    const {params} = match
    const {id} = params
    return (
      <>
        {isloading ? (
          <Loader
            className="loader-container"
            type="Oval"
            width={50}
            height={50}
            color="blue"
          />
        ) : (
          <>
            <h1 className="head">
              Movie : <span className="movie-name">{name}</span>
            </h1>
            <div className="single-movie">
              <img
                className="single-image"
                src={`https://image.tmdb.org/t/p/w500/${image}`}
                alt={name}
              />
              <div className="movie-details">
                <p className="text">
                  <span className="spantext">genre : </span>
                  {genres}
                </p>
                <p className="text">
                  <span className="spantext">rating : </span> {rating}
                </p>
                <p className="text">
                  <span className="spantext">duration : </span> {duration}
                </p>
                <p className="text">
                  <span className="spantext">release_date : </span>{' '}
                  {releaseDate}
                </p>
                <p className="text">
                  <span className="spantext">overview : </span> {overview}
                </p>
              </div>
            </div>
          </>
        )}
        <Cast id={id} />
      </>
    )
  }
}
export default SingleMovie
