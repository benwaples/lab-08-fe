import React, { Component } from 'react'
import {
  Link
} from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <header>
        <h1><Link to='/' className="nostyleLinks">Regatta Library</Link></h1>
        <nav>
          <Link to='/addRegatta' className="nav">Add A Regatta</Link>
          <Link to='/regatta/:id' className="nav">More Info Page</Link>
        </nav>
      </header>
    )
  }
}
