import {
  START,
  MOVE_LEFT,
  MOVE_RIGHT,
  MOVE_UP,
  MOVE_DOWN
} from '../actions/index'

import {
  randomlyAddCell,
  mergeLeft,
  mergeRight,
  mergeUp,
  mergeDown,
  equal,
  isMovable
} from 'w2048'

const startupCells = (new Array(16)).fill(null)

const defaultState = {
  isStarted: false,
  cells: randomlyAddCell(startupCells),
  isGameOver: false,
  isGameCompleted: false,
  gameCompletionPoint: 32
}

const isGameCompleted = (cells, gameCompletionPoint) => {
  return cells.some((cell) => cell === gameCompletionPoint)
}

const reducer = (state = defaultState, action) => {
  let merged
  let isGameOver
  switch(action.type) {
    case START:
      return Object.assign({}, state, {
        isStarted: true,
        isGameOver: false,
        cells: randomlyAddCell(startupCells)
      })
    case MOVE_LEFT:
      merged = mergeLeft(state.cells, 4)
      if(!equal(merged, state.cells)) {
        merged = randomlyAddCell(merged)
      }
      isGameOver = !isMovable(merged, 4)
      return Object.assign({}, state, {
        isStarted: true,
        cells: merged,
        isGameOver: isGameOver,
        isGameCompleted: isGameCompleted(merged, state.gameCompletionPoint)
      })
    case MOVE_RIGHT:
      merged = mergeRight(state.cells, 4)
      if(!equal(merged, state.cells)) {
        merged = randomlyAddCell(merged)
      }
      isGameOver = !isMovable(merged, 4)
      return Object.assign({}, state, {
        isStarted: true,
        cells: merged,
        isGameOver: isGameOver,
        isGameCompleted: isGameCompleted(merged, state.gameCompletionPoint)
      })
    case MOVE_UP:
      merged = mergeUp(state.cells, 4)
      if(!equal(merged, state.cells)) {
        merged = randomlyAddCell(merged)
      }
      isGameOver = !isMovable(merged, 4)
      return Object.assign({}, state, {
        isStarted: true,
        cells: merged,
        isGameOver: isGameOver,
        isGameCompleted: isGameCompleted(merged, state.gameCompletionPoint),
      })
    case MOVE_DOWN:
      merged = mergeDown(state.cells, 4)
      if(!equal(merged, state.cells)) {
        merged = randomlyAddCell(merged)
      }
      isGameOver = !isMovable(merged, 4)
      return Object.assign({}, state, {
        isStarted: true,
        cells: merged,
        isGameOver: isGameOver,
        isGameCompleted: isGameCompleted(merged, state.gameCompletionPoint),
      })
    default:
      return state
  }
}

export default reducer
