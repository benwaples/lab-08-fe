import React, { Component } from 'react'
import {
  Link
} from 'react-router-dom';

export default class Regatta extends Component {
  render() {
    const {
      data
    } = this.props
    return (
      <li key={`${data.id}-${Math.random()*200}`} className="regattaCard">
        <h1><Link className="nostyleLinks"to={`/regatta/${data.id}`}>{data.name} </Link></h1>
      </li>
    )
  }
}
 