import React from 'react'
import { connect } from 'react-redux'
import { start } from '../actions/index'
import Cell from './Cell'

class Board extends React.Component {
  renderCells() {
    let items = [1,2,3,4]
    return items.map((i) => {
      return <Cell value={i} key={i} />
    })
  }
  render() {
    return (
      <div className='board'>
        {this.renderCells()}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
