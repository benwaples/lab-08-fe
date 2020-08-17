import React, { Component } from 'react'
import request from 'superagent'
import List from './List.js'
import Filter from './Filter.js'
import {
  Link
} from 'react-router-dom';

export default class ListPage extends Component {
  state = {
    bulkRegatta: [],
    isLoading: false,
    options: [],
    filterBy: 0,
  }

  componentDidMount = async () => {
    this.state.isLoading = true;

    const data = await request.get(`https://polar-sierra-76292.herokuapp.com/regattas`)

    const filterData = await request.get('https://polar-sierra-76292.herokuapp.com/types')

    const parsed = data.body;
    const parsedFilter = filterData.body;

    this.setState({
      bulkRegatta: parsed,
      options: parsedFilter
    })

    this.state.isLoading = false;
  }

  handleFilter = async(e) => {
    this.state.isLoading = true;

    const filterValue = e.target.value

    let filterRequest = []

    filterValue !== 'all' ?
    filterRequest = await request.get(`https://polar-sierra-76292.herokuapp.com/types/${filterValue}`)
    :
    filterRequest = await request.get(`https://polar-sierra-76292.herokuapp.com/regattas`)


    const parsedFilterResults = filterRequest.body

    this.setState({
      bulkRegatta: parsedFilterResults
    })
    this.state.isLoading = false;

    console.log(this.state.bulkRegatta);
  }

  render() {
    return (
      <div className="home">
      {
        this.state.isLoading ?
        <div className="filter">
          <p>Filter</p>
          <Filter handleFilter={this.handleFilter} options={this.state.options}/>
          <Link to='/addRegatta' className="addRegatta nostyleLinks">Add A Regatta</Link>
        </div>
        :
        <div><Link to='/addRegatta' className="addRegatta nostyleLinks">Add A Regatta</Link></div>
      }
        <div className="details">
          {
            this.state.isLoading ?
            <div>
              <List data={this.state.bulkRegatta} />
            </div> 
            :
            <img src="/oar.png" alt="spinning oar" className="loading spin" />
          }
        </div>
      </div>
    )
  }
}
