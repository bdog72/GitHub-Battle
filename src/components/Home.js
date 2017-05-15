import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../styles/home.scss'
export default class Home extends Component {
  render () {
    return <div className='home-container'>
      <h1>GITHUB BATTLE: Battle your friends...</h1>

      <Link className='button' to='/battle'>
        Battle
      </Link>
    </div>
  }
}
