import React from 'react'
import { connect } from 'react-redux'
import { start } from '../actions/index'

class Board extends React.Component {
  render() {
    return (
      <div className='board'>
        board {this.props.isStarted ? "yes" : "no"}
        <br/>
        <button onClick={this.props.onClick}>start</button>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isStarted: state.isStarted
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(start())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
