import React from 'react'
import Board from './Board'
import { connect } from 'react-redux'
import { start } from '../actions/index'

class GameController extends React.Component {
  render() {
    return (
      <div className='game-controller'>
        game started? {this.props.isStarted ? "yes" : "no"}
        <br/>
        <button onClick={this.props.onClick}>start</button>

        <Board cells={this.props.cells} />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isStarted: state.isStarted,
    cells: state.cells
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(start())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameController)
