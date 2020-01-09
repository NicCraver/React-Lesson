import React, { Component } from 'react'
import store from '../store'
import ToDoListUI from './ToDoListUI'
import {
  changeInputAction,
  addAction,
  deleteAction,
  getTodoList
} from '../store/actionCreators'

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
  componentDidMount() {
    store.dispatch(getTodoList())
  }
  storeChange() {
    this.setState(store.getState())
  }
  changeInpueValue(e) {
    store.dispatch(changeInputAction(e.target.value))
  }
  add() {
    store.dispatch(addAction())
  }
  deleteItem(index) {
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
