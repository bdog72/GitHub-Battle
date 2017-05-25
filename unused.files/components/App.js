import React, {Component} from 'react'
import Battle from './Battle'
import Home from './Home'
import Nav from './Nav'
import Results from './Results'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Popular from './Popular'

export default class App extends Component {
  render () {
    return <div>
      <Router>
        <div className='container'>
          <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/battle' component={Battle} />
            <Route path='/battle/results' component={Results} />
            <Route path='/popular' component={Popular} />
            <Route render={() => {
              return <p>Not Found</p>
            }} />
          </Switch>
        </div>
      </Router>
    </div>
  }
}
