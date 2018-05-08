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
  mergeDown
} from '../models/MBoard'

const startupCells = (new Array(16)).fill(null)

const defaultState = {
  isStarted: false,
  cells: randomlyAddCell(startupCells)
}

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case START:
      return Object.assign({}, state, {
        isStarted: true,
        cells: randomlyAddCell(startupCells)
      })
    case MOVE_LEFT:
      return Object.assign({}, state, {
        isStarted: true,
        cells: randomlyAddCell(mergeLeft(state.cells, 4))
      })
    case MOVE_RIGHT:
      return Object.assign({}, state, {
        isStarted: true,
        cells: randomlyAddCell(mergeRight(state.cells, 4))
      })
    case MOVE_UP:
      return Object.assign({}, state, {
        isStarted: true,
        cells: randomlyAddCell(mergeUp(state.cells, 4))
      })
    case MOVE_DOWN:
      return Object.assign({}, state, {
        isStarted: true,
        cells: randomlyAddCell(mergeDown(state.cells, 4))
      })
    default:
      return state
  }
}

export default reducer
