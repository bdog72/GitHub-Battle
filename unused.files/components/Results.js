import React, { Component } from 'react'
// import queryString from 'query-string'
import api from '../utils/api'
import { Link } from 'react-router-dom'
import '../styles/results.scss'
var queryString = require('query-string')
var PropTypes = require('prop-types')
var PlayerPreview = require('./PlayerPreview')

function Player (props) {
  return (
    <div>
      <h1 className='header'>{props.label}</h1>
      <h3 style={{textAlign: 'center'}}>Score: {props.score}</h3>
    </div>
  )
}

Player.propTypes = {
  label: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  profile: PropTypes.object.isRequired
}

export default class Results extends Component {
  constructor (props) {
    super(props)

    this.state = {
      winner: null,
      loser: null,
      error: null,
      loading: true
    }
  }
  componentDidMount () {
    let players = queryString.parse(this.props.location.search)
    api.battle([
      players.playerOneName,
      players.playerTwoName
    ]).then((results) => {
      if (results === null) {
        return this.setState(() => {
          return {
            error: 'Looks like there was a error. Check that both users exist on GitHub',
            loading: false
          }
        })
      }

      this.setState(function () {
        return {
          error: null,
          winner: results[0],
          loser: results[1],
          loading: false
        }
      })
    })
  }

  render () {
    var error = this.state.error
    var winner = this.state.winner
    var loser = this.state.loser
    var loading = this.state.loading

    if (loading === true) {
      return <p>Loading</p>
    }

    if (error) {
      return (
        <div>
          <p>{error}</p>
          <Link to='/battle'>Reset</Link>
        </div>
      )
    }

    return (
      <div className='row'>
        <Player
          label='Winner'
          score={winner.score}
          profile={winner.profile}
        />
        <Player
          label='Loser'
          score={loser.score}
          profile={loser.profile}
        />
      </div>
    )
  }
}
