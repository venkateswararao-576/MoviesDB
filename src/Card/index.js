import {Link} from 'react-router-dom'
import './index.css'

const Card = props => {
  const {details} = props
  const {id, image, name, rating} = details
  return (
    <div className="list-item">
      <img
        className="card-img"
        src={`https://image.tmdb.org/t/p/w500/${image}`}
        alt={name}
      />
      <h1 className="title">{name}</h1>
      <p className="rating">{rating}</p>
      <Link to={`/movie/${id}`}>
        <button type="button" className="view-btn">
          View Details
        </button>
      </Link>
    </div>
  )
}
export default Card
