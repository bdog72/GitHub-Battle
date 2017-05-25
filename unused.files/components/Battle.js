import React, { Component } from 'react'
import '../styles/battle.scss'
import { Link } from 'react-router-dom'
var PropTypes = require('prop-types')
var PlayerPreview = require('./PlayerPreview')

class PlayerInput extends Component {
  constructor (props) {
    super(props)
    this.state = {
      username: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    let value = event.target.value

    this.setState(() => {
      return {
        username: value
      }
    })
  }

  handleSubmit (event) {
    event.preventDefault()

    this.props.onSubmit(
      this.props.id,
      this.state.username
    )
  }

  render () {
    return <div>
      <form className='column' onSubmit={this.handleSubmit}>
        <label className='header' htmlFor='username'>
          {this.props.label}
        </label>
        <input
          id='username'
          placeholder='github username'
          type='text'
          autoComplete='off'
          value={this.state.username}
          onChange={this.handleChange}
        />
        <button
          className='button'
          type='submit'
          disabled={!this.state.username}>
            Submit
          </button>
      </form>
    </div>
  }
}

PlayerInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default class Battle extends Component {
  constructor (props) {
    super(props)
    this.state = {
      playerOneName: '',
      playerTwoName: '',
      playerOneImage: null,
      playerTwoImage: null
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleReset = this.handleReset.bind(this)
  }

  handleSubmit (id, username) {
    this.setState(function () {
      let newState = {}
      newState[id + 'Name'] = username
      newState[id + 'Image'] = 'https://github.com/' + username + '.png?size=200'
      return newState
    })
  }

  handleReset (id) {
    this.setState(function () {
      var newState = {}
      newState[id + 'Nmae'] = ''
      newState[id + 'Image'] = null
      return newState
    })
  }

  render () {
    let match = this.props.match
    let playerOneName = this.state.playerOneName
    let playerTwoName = this.state.playerTwoName
    let playerOneImage = this.state.playerOneImage
    let playerTwoImage = this.state.playerTwoImage
    return <div>
      <div className='row'>
        {!playerOneName && <PlayerInput
          id='playerOne'
          label='Player One'
          onSubmit={this.handleSubmit} /> }

        {playerOneImage !== null &&
        <PlayerPreview
          avatar={playerOneImage}
          username={playerOneName}
          onReset={this.handleReset}
          id='playerOne'
        />
          }

        {!playerTwoName && <PlayerInput
          id='playerTwo'
          label='Player Two'
          onSubmit={this.handleSubmit} /> }

        {playerTwoImage !== null &&
          <PlayerPreview
            avatar={playerTwoImage}
            username={playerTwoName}
            onReset={this.handleReset}
            id='playerTwo'
          />
            }
      </div>
      {playerOneImage && playerTwoImage &&
        <Link
          className='button1'
          to={{
            pathname: match.url + '/results',
            search: `?playerOneName=` + playerOneName + '&playerTwoName=' + playerTwoName
          }}>
          Battle
        </Link>}
    </div>
  }
}
