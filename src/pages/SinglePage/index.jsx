import React, { Component } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import "./single-page.scss"

export default class SinglePage extends Component {
  render() {
    return (
      <div className='single-page'>
        <Header setSelectedChar={this.props.setSelectedChar} />
        <main>
          <h2>{this.props.selectedChar.name}</h2>
          <img src={this.props.selectedChar.image} alt="character" />
          <h3>Status: {this.props.selectedChar.status}</h3>
          <h3>Location: {this.props.selectedChar.location.name}</h3>
          <h3>Origin: {this.props.selectedChar.origin.name}</h3>
        </main>
        <Footer />
      </div>
    )
  }
}
