import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


export default class App extends Component {
  pageSize = 10 ;
  render() {
    return (
      <div>
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/General"><News key="General" pageSize={this.pageSize} country = "in" category = 'General' /></Route>
          <Route path="/Business"><News  key="Business" pageSize={this.pageSize} country = "in" category = 'Business' /></Route>
          <Route path="/Sports"><News key="Sports" pageSize={this.pageSize} country = "in" category = 'Sports' /></Route>
          <Route path="/Health"><News  key="Health" pageSize={this.pageSize} country = "in" category = 'Health' /></Route>
          <Route path="/Technology"><News  key="Technology" pageSize={this.pageSize} country = "in" category = 'Technology' /></Route>
          <Route path="/Entertainment"><News key="Entertainment" pageSize={this.pageSize} country = "in" category = 'Entertainment' /></Route>
          <Route path="/Science"><News key="Science" pageSize={this.pageSize} country = "in" category = 'Science' /></Route>
        </Switch>
      </Router>
      </div>
    )
  }
}



