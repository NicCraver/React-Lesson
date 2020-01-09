import React, { Component } from 'react'
import store from './store'
// import { INPUT, ADD, DELETE } from './store/actionTypes'
import {
  changeInputAction,
  addAction,
  deleteAction
} from './store/actionCreators'
import { Input, Button, List } from 'antd'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = store.getState()
    this.changeInpueValue = this.changeInpueValue.bind(this)
    this.add = this.add.bind(this)
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
  delete(index) {
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
      <div style={{ margin: '10px' }}>
        <div>
          <Input
            placeholder="Basic usage"
            style={{ width: '200px', marginRight: '10px' }}
            value={inputValue}
            onChange={this.changeInpueValue}
          />
          <Button type="primary" onClick={this.add}>
            增加
          </Button>
        </div>
        <div style={{ margin: '10px 0 0 0', width: '400px' }}>
          <List
            bordered
            dataSource={list}
            renderItem={(item, index) => (
              <List.Item onClick={this.delete.bind(this, index)}>
                {item}
              </List.Item>
            )}
          />
        </div>
      </div>
    )
  }
}
