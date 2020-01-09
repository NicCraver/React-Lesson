import { INPUT, ADD, DELETE } from './actionTypes'

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
