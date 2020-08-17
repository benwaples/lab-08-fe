import React, { Component } from 'react'
import request from 'superagent'
import MoreDetailCard from './MoreDetailCard.js'

export default class MoreInfo extends Component {

  state = {
    regattaData: null,
    isLoading: false,
    name: 'toot',
    type: 2,
    city: 'portland',
    length_km: 4200,
    recommend: true,
  }
  
  componentDidMount = async () => {
    this.state.isLoading = true;
    const regattaId = this.props.match.params.id

    const data = await request.get(`https://polar-sierra-76292.herokuapp.com/regattas/${regattaId}`)

    const thisRegatta = data.body;
    this.setState({
      regattaData: thisRegatta,
    })

    this.state.isLoading = false;

  }

  handleNameChange = e => {
    this.setState({ name: e.target.value })
  }

  handleDelete = async () => {
    const regattaId = this.props.match.params.id

    await request.delete(`https://polar-sierra-76292.herokuapp.com/regattas/${regattaId}`)

    this.props.history.push('/');
  }

  render() {
    return (
      <div className="form-div">
        {
          this.state.isLoading ?
          <MoreDetailCard history={this.props.history} id={this.props.match.params.id} delete={this.handleDelete} regattaData={this.state.regattaData}/>
          :
          <img src="/oar.png" alt="spinning oar" className="loading spin" />
        }
      </div>
    )
  }
}
