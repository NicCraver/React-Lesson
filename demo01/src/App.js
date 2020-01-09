import React, { Component, Fragment } from 'react'

import './index.css'
import axios from 'axios'
import Boss from './Boss'
import Test from './Test'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      val: '111',
      list: ['1', '2']
    }
  }
  UNSAFE_componentWillMount() {
    console.log('UNSAFE_componentWillMount---组件将要挂载')
  }
  componentDidMount() {
    console.log('componentDidMount---组件挂载完成')
    axios
      .get('http://rap2api.taobao.org/app/mock/242183/example/1578474720782')
      .then(res => {
        console.log('res', res)
        // let temp = []
        // res.data.forEach(element => {
        //   temp.push(element.title)
        // });
        // this.setState({
        //   list:temp
        // })
      })
      .catch(error => {
        console.log('error', error)
      })
  }
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate')
    return true
  }
  UNSAFE_componentWillUpdate() {
    console.log('UNSAFE_componentWillUpdate')
  }
  componentDidUpdate() {
    console.log('componentDidUpdate')
  }
  inputChange(e) {
    // console.log('e', e.target.value)
    // console.log('this.inputVal.value', this.inputVal)
    this.setState({
      // val: e.target.value
      val: this.inputVal.value
    })
  }
  add(e) {
    if (this.state.val === '') {
      console.log('cuowu')
      return
    }
    this.setState({
      list: [...this.state.list, this.state.val],
      val: ''
    })
  }
  delete(index) {
    console.log('this.state.list[index]', this.state.list[index])
    let list = this.state.list
    list.splice(index, 1)
    this.setState({
      list: this.state.list
    })
  }
  render() {
    console.log('render')
    const { val, list } = this.state
    return (
      <Fragment>
        <div>
          <label htmlFor="add">增加：</label>
          <input
            id="add"
            className="input"
            onChange={this.inputChange.bind(this)}
            value={val}
            ref={inputVal => {
              this.inputVal = inputVal
            }}
          />
          <button onClick={this.add.bind(this)}>add</button>
        </div>
        <ul>
          <TransitionGroup>
            {list.map((item, index) => {
              return (
                <CSSTransition
                  timeout={2000}
                  classNames="boss-text"
                  unmountOnExit
                  appear={true}
                  key={index + item}
                >
                  <Test
                    key={index}
                    test={item}
                    index={index}
                    delete={this.delete.bind(this)}
                  ></Test>
                </CSSTransition>
              )
            })}
          </TransitionGroup>
        </ul>
        <Boss />
      </Fragment>
    )
  }
}
