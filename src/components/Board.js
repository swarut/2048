import React from 'react'
import { connect } from 'react-redux'
import { start } from '../actions/index'

class Board extends React.Component {
  render() {
    return (
      <div className='board'>
        a board
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
