import React, { Component } from 'react'
import Button from "../Button";
import "./card.scss"

export default class Card extends Component {
  render() {
    console.log(this.props.char)
    return (
      <div className='card'>
        <img src={this.props.char.image} alt="character" />
        <h2>{this.props.char.name}</h2>
        <Button title="Like" method={() => this.props.setSelectedChar(this.props.char)}/>
      </div>
    )
  }
}
