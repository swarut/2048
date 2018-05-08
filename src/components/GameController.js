import React from 'react'
import Board from './Board'
import { connect } from 'react-redux'
import {
  start,
  moveLeft,
  moveRight,
  moveUp,
  moveDown
} from '../actions/index'

class GameController extends React.Component {

  constructor(props) {
    super(props)
    this.onKeyPressed = this.onKeyPressed.bind(this)
  }

  onKeyPressed(e) {
    console.log("key press", e)
  }

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
    },
    onLeftPressed: () => {
      dispatch(moveLeft())
    },
    onRightPress: () => {
      dispatch(moveRight())
    },
    onUpPress: () => {
      dispatch(moveUp())
    },
    onDownPress: () => {
      dispatch(moveDown())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameController)
