import {Component} from 'react'
import './index.css'

class Cast extends Component {
  state = {castdetails: '', isloading: true}

  componentDidMount() {
    this.fetchdetails()
  }

  fetchdetails = async () => {
    const {id} = this.props
    const url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=fd6ce146824b2c63d33e5d1ca82d8e4a&language=en-US`
    const result = await fetch(url)
    const data = await result.json()
    if (result.ok) {
      const castdetails = data.cast.map(each => ({
        image: each.profile_path,
        name: each.original_name,
        character: each.character,
        id: each.id,
      }))
      this.setState({castdetails, isloading: false})
    }
  }

  render() {
    const {isloading, castdetails} = this.state

    return (
      <>
        {isloading ? (
          ''
        ) : (
          <div className="cast-container">
            <h1>Cast :- </h1>
            <ul className="cast-list">
              {castdetails.map(each => (
                <li key={each.id} className="cast-list-item">
                  <img
                    className="cast-image"
                    src={`https://image.tmdb.org/t/p/w500/${each.image}`}
                    alt={each.name}
                  />
                  <p>Name: {each.name}</p>
                  <p>Character: {each.character}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </>
    )
  }
}
export default Cast
