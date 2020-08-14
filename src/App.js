import React, { Component } from 'react'
import {
  BrowserRouter as Router, 
  Route, 
  Switch,
} from 'react-router-dom';
import './App.css';
import ListPage from './ListPage/ListPage.js';
import Header from './Header.js';
import AddRegattaPage from './AddRegattaPage/AddRegattaPage.js';
import MoreInfo from './MoreInfo/MoreInfo.js';

export default class  extends Component {
  render() {
    return (
      <div>
      <Router>
        <Header />
          <Switch>
              <Route 
                  path="/" 
                  exact
                  render={(routerProps) => <ListPage {...routerProps} />} 
              />
              <Route 
                  path="/addRegatta" 
                  exact
                  render={(routerProps) => <AddRegattaPage {...routerProps} />} 
              />
              <Route 
                  path="/regatta/:id" 
                  exact
                  render={(routerProps) => <MoreInfo {...routerProps} />} 
              />
          </Switch>
      </Router>
  </div>
    )
  }
}

