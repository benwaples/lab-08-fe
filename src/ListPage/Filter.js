import React, { Component } from 'react'

export default class Filter extends Component {
  render() {
    return (
      <select onChange={this.props.handleFilter}>
        <option value='all'>all</option>
        {
          this.props.options.map(option => {
            return <option key={option.id}value={option.id}>{option.type}</option>
          })
        }
      </select>
    )
  }
}
