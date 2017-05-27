import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

var Nav1 = () => {
  return (
    <ul className='nav'>
      <li>
        <NavLink exact activeClassName='active' to='/'><h2>Home</h2></NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/battle'><h2>Battle</h2></NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/popular'><h2>Popular</h2></NavLink>
      </li>
    </ul>
  )
}

export default class Nav extends Component {
  render () {
    return <div>
      <Nav1 />
    </div>
  }
}
