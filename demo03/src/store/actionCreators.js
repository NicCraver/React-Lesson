import { INPUT, ADD, DELETE, GET_LIST } from './actionTypes'

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
