import React, { Component } from 'react'
import request from 'superagent'
import MoreDetailCard from './MoreDetailCard.js'

export default class MoreInfo extends Component {

  state = {
    regattaData: null
  }
  
  componentDidMount = async () => {

    const regattaId = this.props.match.params.id

    const data = await request.get(`https://polar-sierra-76292.herokuapp.com/regattas/${regattaId}`)

    const thisRegatta = data.body;
    this.setState({
      regattaData: thisRegatta,
    })

    console.log(this.state.regattaData)
  }

  render() {
    const { regattaData } = this.state
    return (
      <div>
        {/* <MoreDetailCard  regattaData={this.state.regattaData}/> */}
      </div>
    )
  }
}
