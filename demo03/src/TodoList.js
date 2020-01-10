import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import {
  changeInputAction,
  addAction,
  deleteAction,
  getListAction
} from './store/actionCreators'
import ToDoListUI from './ToDoListUI'

class TodoList extends Component {
  componentDidMount() {
    this.props.getList()
  }
  render() {
    let { inputValue, inputChange, clickButton, list, deleteItem } = this.props
    return (
      <ToDoListUI
        changeInpueValue={inputChange}
        add={clickButton}
        deleteItem={deleteItem}
        inputValue={inputValue}
        list={list}
      />
    )
  }
}

const stateToProps = state => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

const dispatchToProps = dispatch => {
  return {
    inputChange(e) {
      dispatch(changeInputAction(e.target.value))
    },
    clickButton() {
      dispatch(addAction())
    },
    deleteItem(index) {
      dispatch(deleteAction(index))
    },
    getList() {
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
}

export default connect(stateToProps, dispatchToProps)(TodoList)
