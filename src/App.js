import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './Navbar'
import UpComing from './UpComing'
import TopRated from './TopRated'
import Home from './popularMovies'
import SingleMovie from './singleMovieDetails'

import './App.css'

// write your code here
const App = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/top-rated" component={TopRated} />
      <Route exact path="/upcoming" component={UpComing} />
      <Route exact path="/movie/:id" component={SingleMovie} />
    </Switch>
  </BrowserRouter>
)

export default App
