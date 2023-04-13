import React, { Component } from 'react'
import Button from "../Button"
import "./pagination.scss"

export default class Pagination extends Component {
  render() {
    let arr = [1,2,3,4,5] // [this.props.page, this.props.page + 1, this.props.page + 2, this.props.page + 3, this.props.page + 4, this.props.page + 5]
    if( this.props.page >=4 && this.props.page <= 39 ) {
      arr = [this.props.page - 2, this.props.page - 1, this.props.page, this.props.page + 1, this.props.page + 2]
    }
    else if( this.props.page >= 40 && this.props.page <= 42) {
      arr = [38,39,40,41,42] // [this.props.maxPage - 3, this.props.maxPage - 2, this.props.maxPage - 1, this.props.maxPage]
    }
    return (
      <div className='pagination'>
        <Button title="<<" method={this.props.prevPage}/>
        {arr.map((e) => <Button title={e} method={() => {
          this.props.setPage(e)
        }} />)}
        <Button title=">>" method={this.props.nextPage}/>
      </div>
    )
  }
}
