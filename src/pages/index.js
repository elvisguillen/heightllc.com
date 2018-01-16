import React, { Component } from 'react'

import HomePage from '../templates/home.js'


export default class IndexPage extends Component {
  render() {
    return(
      <div style={this.props.transition && this.props.transition.style}>
      <HomePage></HomePage>
      </div>
    )
  }
}

