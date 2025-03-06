import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class Navbar extends Component {
  state = {searchinput: ''}

  entersearch = event => this.setState({searchinput: event.target.value})

  render() {
    const {searchinput} = this.state
    return (
      <nav className="nav-bar">
        <h1 className="app-name">movieDB</h1>
        <div className="search-container">
          <input
            className="search-input"
            type="text"
            onChange={this.entersearch}
            placeholder="Search here"
            value={searchinput}
          />
          <button type="button" className="search-btn">
            Search
          </button>
        </div>
        <div className="nav-btns">
          <Link to="/">
            <button type="button" className="nav-btn">
              Popular
            </button>
          </Link>
          <Link to="/top-rated">
            <button type="button" className="nav-btn">
              Top Rated
            </button>
          </Link>
          <Link to="/upcoming">
            <button type="button" className="nav-btn">
              Upcoming
            </button>
          </Link>
        </div>
      </nav>
    )
  }
}
export default Navbar
