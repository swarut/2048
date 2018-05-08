import {
  START,
  MOVE_LEFT,
  MOVE_RIGHT,
  MOVE_UP,
  MOVE_DOWN
} from '../actions/index'

import {
  randomlyAddCell
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
    case MOVE_RIGHT:
    case MOVE_UP:
    case MOVE_DOWN:
    default:
      return state
  }
}

export default reducer
