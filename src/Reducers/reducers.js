import { combineReducers } from 'redux'

const initialState = {top:40, left:40}

const setMoveState = (state = initialState, action) => {
	console.log("move state", state)

  // console.log("reducer move action", action)
  switch (action.type) {
    case 'MOVE':
      // console.log("move reducer fired")
      return Object.assign({}, state, {top: state.top+action.payload.deltaTop, left: state.left+action.payload.deltaLeft});
    default:
      return state
  }
}

const paintIntialState = {color:"lime"}

const paint = (state = paintIntialState, action) => {
  console.log("paint state", state)
  console.log("reducer paint action", action)

  switch (action.type) {
    case 'PAINT':
      console.log("paint reducer fired")
      return Object.assign({}, state, {color: action.payload.color});
    default:
      return state
  }
}

export default combineReducers({
  setMoveState,
  paint,
})