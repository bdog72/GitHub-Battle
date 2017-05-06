import React, { Component } from 'react'

export default class Popular extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedLanguage: 'All'
    }
    this.updateLanguage = this.updateLanguage.bind(this)
  }

  updateLanguage (lang) {
    this.setState(function () {
      return {
        selectedLanguage: lang
      }
    })
  }

  render () {
    const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python']
    return <div>
      <ul className='languages'>
        {languages.map((lang) => {
          return <div>
            <li
              style={lang === this.state.selectedLanguage ? { color: '#d0021b' } : null}
              onClick={this.updateLanguage.bind(null, lang)}
              key={lang}>
              {lang}
            </li>
          </div>
        }, this)}
      </ul>
    </div>
  }
}
