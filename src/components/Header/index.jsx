import React, { Component } from 'react'
import "./header.scss"

export default class Header extends Component {
  render() {
    return (
      <div className='header'>
        <h1 onClick={() => {
          this.props.setSelectedChar(null)
        }}>Rick and Morty</h1>
      </div>
    )
  }
}
