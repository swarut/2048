import { START } from '../actions/index'

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
    default:
      return state
  }
}

export default reducer
