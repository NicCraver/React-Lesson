import { INPUT, ADD, DELETE, GET_LIST } from './actionTypes'
const defaultState = {
  inputValue: 'Write Somthing',
  list: []
}

export default (state = defaultState, action) => {
  let temp = clone(state)
  switch (action.type) {
    case INPUT:
      temp.inputValue = action.value
      return temp

    case ADD:
      temp.list.push(temp.inputValue)
      temp.inputValue = ''
      return temp

    case DELETE:
      temp.list.splice(action.index, 1)
      return temp
    case GET_LIST:
      temp.list = action.data
      return temp

    default:
      break
  }
  return state
}

function clone(params) {
  return JSON.parse(JSON.stringify(params))
}
