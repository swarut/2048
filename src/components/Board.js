import React from 'react'
import { connect } from 'react-redux'
import { start } from '../actions/index'

class Board extends React.Component {
  render() {
    return (
      <div className='board'>
        <div className='item1'></div>
        <div className='item2'></div>
        <div className='item3'></div>
        <div className='item4'></div>
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
