import React, { Component } from 'react'
import { addRegatta } from './regatta-api.js'

export default class AddRegattaPage extends Component {
  state = {
    name: '',
    type: '',
    city: '',
    length_km: '',
    recommend: '',
  }

  handleSubmit = async(e) => {
    e.preventDefault();

    addRegatta({
      name: this.state.name,
      type: this.state.type,
      city: this.state.city,
      length_km: this.state.length_km,
      recommend: this.state.recommend
    })

    this.setState({
      name: '',
      type: '',
      city: '',
      length_km: '',
      recommend: '',
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
            <input type="text" onChange={this.handleNameChange} />
          </label>
          <label>
            Type:
            <input type="text" onChange={this.handleTypeChange} />
          </label>
          <label>
            City:
            <input type="text" onChange={this.handleCityChange} />
          </label>
          <label>
            Length:
            <input type="number" onChange={this.handleLengthChange} />
          </label>
          <label>
            Do You Recommend This Regatta?
            <select onChange={this.handleRecommendChange}>
              <option value="true">I do recommend</option>
              <option value="false">Don't go to this regatta</option>
            </select>
          </label>
          <button>Submit Regatta</button>
        </form>
      </div>
    )
  }
}
