import { INPUT, ADD, DELETE, GET_LIST } from './actionTypes'
import axios from 'axios'
export const changeInputAction = value => ({
  type: INPUT,
  value
})
export const addAction = () => ({
  type: ADD
})
export const deleteAction = index => ({
  type: DELETE,
  index
})
export const getListAction = data => ({
  type: GET_LIST,
  data
})

export const getTodoList = () => {
  return dispatch => {
    axios
      .get('http://rap2api.taobao.org/app/mock/242291/reactlesson')
      .then(res => {
        dispatch(getListAction(res.data.list))
      })
      .catch(error => {
        console.log('error', error)
      })
  }
}
