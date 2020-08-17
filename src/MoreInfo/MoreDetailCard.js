import React, { Component } from 'react'
import {
  Link
} from 'react-router-dom';
import EditRegatta from './EditRegatta.js'


export default class MoreDetailCard extends Component {

  state = {
    editRegatta: false
  }

  displayForm = () => {
    this.setState({editRegatta: true})
  }

  render() {
    const { regattaData,
            id,
            history } = this.props

    return (
      <div className="infoCard">
        <h1>{regattaData.name}</h1>
        <p>Race Type: {regattaData.type_id}</p>
        <p>City: {regattaData.city}</p>
        <p>Race Length: {regattaData.length_km}k</p>
        <p>Recommend: {regattaData.recommend ? 'Yes' : 'No'}</p>
        <p><Link to='/' className="choices nostyleLinks">Go back</Link></p>
        <p className="choices nostyleLinks" onClick={this.displayForm}>edit info</p>
        {
          this.state.editRegatta &&
          <EditRegatta history={history} id={id} regattaData={regattaData}/>
        }
        <p className="choices delete" onClick={this.props.delete}>delete regatta</p>
      </div>
    )
  }
}
