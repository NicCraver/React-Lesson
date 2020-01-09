import { INPUT, ADD, DELETE } from './actionTypes'
const defaultState = {
  inputValue: 'Write Somthing',
  list: [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.'
  ]
}

export default (state = defaultState, action) => {
  let temp = clone(state)
  switch (action.type) {
    case 'changeInput':
      temp.inputValue = action.value
      return temp

    case 'addItem':
      temp.list.push(temp.inputValue)
      temp.inputValue = ''
      return temp

    case 'deleteItem':
      temp.list.splice(action.value, 1)
      return temp

    case INPUT:
      temp.inputValue = action.value
      return temp

    case ADD:
      temp.list.push(temp.inputValue)
      temp.inputValue = ''
      return temp

    case DELETE:
      temp.list.splice(action.value, 1)
      return temp

    default:
      break
  }
  return state
}

function clone(params) {
  return JSON.parse(JSON.stringify(params))
}
