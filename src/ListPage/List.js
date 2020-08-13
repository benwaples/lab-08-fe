import React, { Component } from 'react'
import Regatta from './Regatta.js'

export default class List extends Component {
  render() {
    const {
      data
    } = this.props
    return (
      <ul>
        {data.map(regatta => <Regatta data={regatta} />)}
      </ul>
    )
  }
}
