import { START } from '../actions/index'

const defaultState = {
  isStarted: false
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
