import React, { Component } from 'react'
import request from 'superagent'
import List from './List.js'

export default class ListPage extends Component {
  state = {
    bulkRegatta: []
  }

  componentDidMount = async () => {
    const data = await request.get(`https://polar-sierra-76292.herokuapp.com/regattas`)

    const parsed = data.body;

    this.setState({
      bulkRegatta: parsed
    })

  }

  render() {
    return (
      <div>
        <List data={this.state.bulkRegatta} />
      </div>
    )
  }
}
