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

  componentDidMount() {
    window.onkeyup = (e) => {
      switch(e.keyCode) {
        case 38:
          this.props.onKeyUp()
          break;
        case 40:
          this.props.onKeyDown()
          break;
        case 37:
          this.props.onKeyLeft()
          break;
        case 39:
          this.props.onKeyRight()
          break;
        default:
          break;
      }
    }
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
    onKeyLeft: () => {
      dispatch(moveLeft())
    },
    onKeyRight: () => {
      dispatch(moveRight())
    },
    onKeyUp: () => {
      dispatch(moveUp())
    },
    onKeyDown: () => {
      dispatch(moveDown())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameController)
