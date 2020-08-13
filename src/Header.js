import React, { Component } from 'react'
import {
  Link
} from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <header>
        <h1>Regatta Library</h1>
        <Link to='/addRegatta'>Add A Regatta</Link>
      </header>
    )
  }
}
