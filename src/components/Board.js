import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { start } from '../actions/index'
import Cell from './Cell'

class Board extends React.Component {
  renderCells() {
    let items = this.props.cells
    return items.map((i, index) => {
      return <Cell value={i} key={index} />
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

Board.propTypes = {
  cells: PropTypes.arrayOf(PropTypes.number)
}

export default Board
