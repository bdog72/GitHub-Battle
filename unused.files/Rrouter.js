import React, { Component } from 'react'
import { Link, BrowserRouter as Router, Route } from 'react-router-dom'

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)
const About = () => (
  <div>
    <h2>About</h2>
  </div>
)
const Topics = () => (
  <div>
    <h2>Topics</h2>
  </div>
)
export default class Rrouter extends Component {
  render () {
    return <div>
      <Router>
        <div>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/topics'>Topics</Link></li>
          </ul>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/topics' component={Topics} />
        </div>
      </Router>
    </div>
  }
}
