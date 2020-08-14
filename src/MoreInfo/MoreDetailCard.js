import React, { Component } from 'react'

export default class MoreDetailCard extends Component {
  render() {
    const { regattaData } = this.props
    console.log(regattaData)

    return (
      <div className="regattaCard">
        <h1>{regattaData.name}</h1>
        <p>Race Type: {regattaData.type}</p>
        <p>City: {regattaData.city}</p>
        <p>Race Length: {regattaData.length_km}</p>
        <p>Recommend: {regattaData.recommend ? 'Yes' : 'No'}</p>
      </div>
    )
  }
}
