import React, { Component } from 'react'
import store from './store'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'

export default class ToDoList extends Component {
  constructor(props) {
    super(props)
    // console.log('store.getState :', store.getState())
    this.state = store.getState()
    this.state = store.getState()
    this.changeInputValue = this.changeInputValue.bind(this)
    this.storeChange = this.storeChange.bind(this)
    this.add = this.add.bind(this)
    store.subscribe(this.storeChange)
  }
  storeChange() {
    this.setState(store.getState())
  }
  changeInputValue(e) {
    // console.log('e :', e.target.value)
    const action = {
      type: 'changeInput',
      value: e.target.value
    }
    store.dispatch(action)
  }
  add() {
    const action = {
      type: 'addItem'
    }
    store.dispatch(action)
  }
  delete(index) {
    console.log('index :', index)
    const action = {
      type: 'deleteItem',
      value: index
    }
    store.dispatch(action)
  }

  render() {
    const { inputValue, list } = this.state
    return (
      <div style={{ margin: '10px' }}>
        <div>
          <Input
            style={{ width: '200px', marginRight: '10px' }}
            placeholder={inputValue}
            onChange={this.changeInputValue}
            value={inputValue}
          />
          <Button onClick={this.add} type="primary">
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
