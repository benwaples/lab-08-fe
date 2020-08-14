import React, { Component } from 'react'

export default class MoreDetailCard extends Component {
  render() {
    const { regattaData } = this.props

    return (
      <div>
        <h1>{regattaData.name}</h1>
      </div>
    )
  }
}
