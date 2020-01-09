import React, { Component } from 'react'

export default class Boss extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isShow: false
    }
  }

  render() {
    return (
      <div>
        <div className={this.state.isShow ? 'show' : 'hide'}>
          Boss级人物-尤雨溪
        </div>
        <div>
          <button onClick={this.toToggole.bind(this)}>召唤Boss</button>
        </div>
      </div>
    )
  }
  toToggole() {
    this.setState({
      isShow: this.state.isShow ? false : true
    })
  }
}
