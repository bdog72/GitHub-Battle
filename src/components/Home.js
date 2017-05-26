import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Home extends Component {
  render () {
    return <div>
      <div className='home-container'>
        <h1>GitHub Battle:</h1>
        <Link className='button' to='/battle'>
        Battle
      </Link>
      </div>
    </div>
  }
}
