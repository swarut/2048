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
  equal
} from '../models/MBoard'

const startupCells = (new Array(16)).fill(null)

const defaultState = {
  isStarted: false,
  cells: randomlyAddCell(startupCells)
}

const reducer = (state = defaultState, action) => {
  let merged
  switch(action.type) {
    case START:
      return Object.assign({}, state, {
        isStarted: true,
        cells: randomlyAddCell(state.cells)
      })
    case MOVE_LEFT:
      merged = mergeLeft(state.cells, 4)
      if(!equal(merged, state.cells)) {
        merged = randomlyAddCell(merged)
      }
      return Object.assign({}, state, {
        isStarted: true,
        cells: merged
      })
    case MOVE_RIGHT:
      merged = mergeRight(state.cells, 4)
      if(!equal(merged, state.cells)) {
        merged = randomlyAddCell(merged)
      }
      return Object.assign({}, state, {
        isStarted: true,
        cells: merged
      })
    case MOVE_UP:
      merged = mergeUp(state.cells, 4)
      if(!equal(merged, state.cells)) {
        merged = randomlyAddCell(merged)
      }
      return Object.assign({}, state, {
        isStarted: true,
        cells: merged
      })
    case MOVE_DOWN:
      merged = mergeDown(state.cells, 4)
      if(!equal(merged, state.cells)) {
        merged = randomlyAddCell(merged)
      }
      return Object.assign({}, state, {
        isStarted: true,
        cells: merged
      })
    default:
      return state
  }
}

export default reducer
