import React, { Component } from 'react'
import Popular from './Popular'
import Nav from './Nav'
import Home from './Home'
import Battle from './Battle'
import Results from './Results'
import { BrowserRouter as Router, Route } from 'react-router-dom'

export default class App extends Component {
  render () {
    return (
      <Router>
        <div className='container'>
          <Nav />
          <Route exact path='/' component={Home} />
          <Route exact path='/battle' component={Battle} />
          <Route path='/battle/results' component={Results} />
          <Route path='/popular' component={Popular} />
        </div>
      </Router>
    )
  }
}
