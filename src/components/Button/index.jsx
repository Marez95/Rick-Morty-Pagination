import React, { Component } from 'react'
import "./button.scss"

export default class Button extends Component {
  render() {
    return (
      <button onClick={this.props.method}>{this.props.title}</button>
    )
  }
}
