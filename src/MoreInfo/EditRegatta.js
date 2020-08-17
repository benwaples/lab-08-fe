import React, { Component } from 'react'
import { editRegatta } from '../AddRegattaPage/regatta-api.js'

export default class EditRegatta extends Component {
  state = {
    name: this.props.regattaData.name || '',
    type_id: this.props.regattaData.type_id === 'Head Race' ? '2' : '1',
    city: this.props.regattaData.city || '',
    length_km: this.props.regattaData.length_km ||'',
    recommend: this.props.regattaData.recommend || true,
  }

  handleSubmit = async(e) => {
    e.preventDefault();

    const regattaId = this.props.id

    const postData = await editRegatta( regattaId, {
      name: this.state.name,
      type_id: this.state.type_id,
      city: this.state.city,
      length_km: this.state.length_km,
      recommend: this.state.recommend
    })

    console.log(postData)

    this.props.history.push('/')

  }

  handleNameChange = e => {
    this.setState({name: e.target.value})
  }
  handleTypeChange = e => {
    this.setState({type: e.target.value})
  }
  handleCityChange = e => {
    this.setState({city: e.target.value})
  }
  handleLengthChange = e => {
    this.setState({length_km: e.target.value})
  }
  handleRecommendChange = e => {
    this.setState({recommend: e.target.value})
  }
  
  render() {

    return (
      <div className="editBackground form-div">
        <h3>Edit This Regatta Below</h3>
        <form className="form-div do-it" onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" onChange={this.handleNameChange} value={this.state.name}/>
          </label>
          <label>
            Type:
            <select onChange={this.handleTypeChange} value={this.state.type_id}>
              <option value="2">Head Race</option>
              <option value="1">Sprint</option>
            </select>
          </label>
          <label>
            City:
            <input type="text" onChange={this.handleCityChange} value={this.state.city}/>
          </label>
          <label>
            Length:
            <input type="number" onChange={this.handleLengthChange} value={this.state.length_km}/>
          </label>
          <label>
            Recommend it?
            <select onChange={this.handleRecommendChange} value={this.state.recommend}>
              <option value="true">I do recommend</option>
              <option value="false">Don't go to this regatta</option>
            </select>
          </label>
          {
            (!this.state.name || !this.state.type_id ||!this.state.city || !this.state.length_km ) ? <button className="disabled">Edit Regatta</button> : <button>Edit Regatta</button>
          }
        </form>
       </div>
    )
        }
}
