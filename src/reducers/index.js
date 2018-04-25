import { START } from '../actions/index'

const defaultState = {
  isStarted: false
}

const randomLocation = (row = 4, col = 4) => {
  let rRow = Math.floor(Math.random() * row)
  let rCol = Math.floor(Math.random() * col)
  return {row: rRow, col: rCol}
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
