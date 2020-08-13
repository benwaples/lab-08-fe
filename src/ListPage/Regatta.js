import React, { Component } from 'react'

export default class Regatta extends Component {
  render() {
    const {
      data
    } = this.props
    return (
      <li key={`${data.id}-${Math.random()*200}`} className="regattaCard">
        <h1>{data.name}</h1>
        <p>Race Type: {data.type}</p>
        <p>City: {data.city}</p>
        <p>Race Length: {data.length_km}</p>
        <p>Recommend: {data.recommend ? 'Yes' : 'No'}</p>
      </li>
    )
  }
}
 