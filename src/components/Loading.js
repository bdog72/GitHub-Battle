import React, { Component } from 'react'
import PropTypes from 'prop-types'

const styles = {
  content: {
    textAlign: 'center',
    fontSize: '35px'
  }
}

export default class Loading extends Component {
  constructor (props) {
    super(props)

    this.state = {
      text: props.text
    }
  }

  componentDidMount () {
    const stopper = this.props.text + '...'
    this.interval = window.setInterval(() => {
      if (this.state.text === stopper) {
        this.setState(() => {
          return {
            text: this.props.text
          }
        })
      } else {
        this.setState((prevState) => {
          return {
            text: prevState.text + '.'
          }
        })
      }
    }, 300)
  }

  componentWillUnmount () {
    window.clearInterval(this.interval)
  }

  render () {
    return <div>
      <p style={styles.content}>
        {this.state.text}
      </p>
    </div>
  }
}

Loading.propTypes = {
  text: PropTypes.string.isRequired
}

Loading.defaultProps = {
  text: 'Loading'
}
