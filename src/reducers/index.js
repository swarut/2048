import {
  START,
  MOVE_LEFT,
  MOVE_RIGHT,
  MOVE_UP,
  MOVE_DOWN
} from '../actions/index'

const startupCells = (new Array(16)).fill(null)

const defaultState = {
  isStarted: false,
  cells: startupCells
}

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case START:
      return {
        isStarted: true
      }
    case MOVE_LEFT:
    case MOVE_RIGHT:
    case MOVE_UP:
    case MOVE_DOWN:
    default:
      return state
  }
}

export default reducer
