import React, { Component } from 'react'
import '../styles/popular.scss'
var PropTypes = require('prop-types')
var api = require('../utils/api')

function SelectLanguage (props) {
  var languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python']
  return <div>
    <ul className='languages'>
      {languages.map(function (lang) {
        return <div>
          <li
            style={lang === props.selectedLanguage ? { color: 'red' } : null}
            onClick={props.onSelect.bind(null, lang)}
            key={lang}>
            {lang}
          </li>
        </div>
      })}
    </ul>
  </div>
}

function RepoGrid (props) {
  return (
    <ul className='popular-list'>
      {props.repos.map(function (repo, index) {
        return (
          <li key={repo.name} className='popular-item'>
            <div className='popular-rank'>#{index + 1}</div>
            <ul className='space-list-otems'>
              <li>
                <img
                  className='avatar'
                  src={repo.owner.avatar_url} />
              </li>
              <li><a href={repo.html_url}>{repo.name}</a></li>
              <li>@{repo.owner.login}</li>
              <li>{repo.stargazers_count} stars</li>
            </ul>
          </li>
        )
      })}
    </ul>
  )
}

RepoGrid.propTypes = {
  repos: PropTypes.array.isRequired
}

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}

export default class Popular extends Component {
  constructor (props) {
    super()
    this.state = {
      selectedLanguage: 'All',
      repos: null
    }

    this.updateLanguage = this.updateLanguage.bind(this)
  }

  componentDidMount () {
    this.updateLanguage(this.state.selectedLanguage)
  }

  updateLanguage (lang) {
    this.setState(function () {
      return {
        selectedLanguage: lang,
        repos: null
      }
    })

    api.fetchPopularRepos(lang)
    .then(function (repos) {
      this.setState(function () {
        return {
          repos: repos
        }
      })
    }.bind(this))
  }

  render () {
    return <div>
      <SelectLanguage
        selectedLanguage={this.state.selectedLanguage}
        onSelect={this.updateLanguage}
        />
      {!this.state.repos ? <p>Loading</p>
          : <RepoGrid repos={this.state.repos} />}

    </div>
  }
}
