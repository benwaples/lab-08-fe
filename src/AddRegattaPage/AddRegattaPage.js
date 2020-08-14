import React, { Component } from 'react'
import { addRegatta } from './regatta-api.js'

export default class AddRegattaPage extends Component {
  state = {
    name: '',
    type: 'sprint',
    city: '',
    length_km: '',
    recommend: true,
  }

  handleSubmit = async(e) => {
    e.preventDefault();

    const postData = await addRegatta({
      name: this.state.name,
      type: this.state.type,
      city: this.state.city,
      length_km: this.state.length_km,
      recommend: this.state.recommend
    })

    console.log(postData)

    this.setState({
      name: '',
      type: 'sprint',
      city: '',
      length_km: '',
      recommend: true,
    })

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
      <div className="form-div">
        <h3>Add A Regatta Below</h3>
        <form className="do-it" onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" onChange={this.handleNameChange} value={this.state.name}/>
          </label>
          <label>
            Type:
            <select onChange={this.handleTypeChange}>
              <option value="Head Race">Head Race</option>
              <option value="Spring">Sprint</option>
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
            Do You Recommend This Regatta?
            <select onChange={this.handleRecommendChange}>
              <option value="true">I do recommend</option>
              <option value="false">Don't go to this regatta</option>
            </select>
          </label>
          {
            (!this.state.name || !this.state.type ||!this.state.city || !this.state.length_km ) ? <button className="disabled">Submit Regatta</button> : <button>Submit Regatta</button>
          }
        </form>
      </div>
    )
  }
}
