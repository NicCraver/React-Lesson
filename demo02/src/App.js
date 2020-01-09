import React, { Component } from 'react'
import store from './store'
import ToDoListUI from './ToDoListUI'
import {
  changeInputAction,
  addAction,
  deleteAction
} from './store/actionCreators'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = store.getState()
    this.changeInpueValue = this.changeInpueValue.bind(this)
    this.add = this.add.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    this.storeChange = this.storeChange.bind(this)
    store.subscribe(this.storeChange)
  }
  storeChange() {
    this.setState(store.getState())
  }
  changeInpueValue(e) {
    // const a = {
    //   type: INPUT,
    //   value: e.target.value
    // }
    store.dispatch(changeInputAction(e.target.value))
  }
  add() {
    // const a = {
    //   type: ADD
    // }
    store.dispatch(addAction())
  }
  deleteItem(index) {
    console.log('index :', index)
    // console.log('index :', index)
    // const a = {
    //   type: DELETE,
    //   index
    // }
    store.dispatch(deleteAction(index))
  }
  render() {
    const { inputValue, list } = this.state
    return (
      <ToDoListUI
        changeInpueValue={this.changeInpueValue}
        add={this.add}
        deleteItem={this.deleteItem}
        inputValue={inputValue}
        list={list}
      />
    )
  }
}
