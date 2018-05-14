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
    let board
    if(!this.props.isGameOver) {
      board = <Board cells={this.props.cells} />
    }
    else {
      board = <div>Game Over</div>
    }

    return (
      <div className='game-controller'>
        game started? {this.props.isStarted ? "yes" : "no"}<br/>
        game over? {this.props.isGameOver ? "yes" : "no"}
        <br/>
        <button onClick={this.props.onClick}>start</button>
        {board}

      </div>
    )

  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isStarted: state.isStarted,
    cells: state.cells,
    isGameOver: state.isGameOver
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
