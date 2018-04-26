import { START } from '../actions/index'

const startupCells = new Array(4).fill(
  (new Array(4)).fill(null)
)

const defaultState = {
  isStarted: false,
  cells: startupCells
}

const randomLocation = (row = 4, col = 4) => {
  let rRow = Math.floor(Math.random() * row)
  let rCol = Math.floor(Math.random() * col)
  return {row: rRow, col: rCol}
}

const initializeCells = (startupCells) => {
  {row, col} = randomLocation()
  
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
