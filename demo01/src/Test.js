import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Test extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  UNSAFE_componentWillReceiveProps() {
    console.log('child - UNSAFE_componentWillReceiveProps')
  }

  componentWillUnmount(){
    console.log('child - componentWillUnmount')
  }

  render() {
    const { test, index, name } = this.props
    return (
      <li onClick={this.delete.bind(this, index)}>
        {name}-{test}
      </li>
    )
  }

  delete() {
    // console.log('this.props.index', this.props.index)
    this.props.delete(this.props.index)
  }
}

Test.propTypes = {
  name: PropTypes.string.isRequired,
  test: PropTypes.string,
  index: PropTypes.number,
  delete: PropTypes.func
}
Test.defaultProps = {
  name: '0001'
}
