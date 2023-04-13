import React, { Component } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Wrapper from "../../components/Wrapper";

export default class MainPage extends Component {
  render() {
    return (
      <div>
        <Header setSelectedChar={this.props.setSelectedChar} />
        <Wrapper
          characters={this.props.characters}
          page={this.props.page}
          setSelectedChar={this.props.setSelectedChar}
          nextPage={this.props.nextPage}
          prevPage={this.props.prevPage}
          setPage={this.props.setPage}
        />
        <Footer />
      </div>
    );
  }
}
