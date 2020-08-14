import React, { Component } from 'react'
import request from 'superagent'
import List from './List.js'

export default class ListPage extends Component {
  state = {
    bulkRegatta: [],
    isLoading: false
  }

  componentDidMount = async () => {
    this.state.isLoading = true;

    const data = await request.get(`https://polar-sierra-76292.herokuapp.com/regattas`)

    const parsed = data.body;

    this.setState({
      bulkRegatta: parsed
    })

    this.state.isLoading = false;
  }

  render() {
    return (
      <>
        {
          this.state.isLoading ?
          <div>
            <List data={this.state.bulkRegatta} />
          </div> 
          :
          <img src="/oar.png" alt="spinning oar" className="loading" />
        }
      </>
    )
  }
}
