import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar' ;


export default class App extends Component {
  pageSize = 5 ;
  state = {
    progress : 0 
  }
  setProgress = (progress) =>{
    this.setState({progress: progress})
  }
  render() {
    return (
      <div>
      <Router>
        <Navbar  />
      <LoadingBar color='#f11946' progress={this.state.progress} />
        <Switch >
          <Route path="/General"><News setProgress= {this.setProgress}  key="General" pageSize={this.pageSize} country = "in" category = 'General' /></Route>
          <Route path="/Business"><News setProgress= {this.setProgress}   key="Business" pageSize={this.pageSize} country = "in" category = 'Business' /></Route>
          <Route path="/Sports"><News setProgress= {this.setProgress}  key="Sports" pageSize={this.pageSize} country = "in" category = 'Sports' /></Route>
          <Route path="/Health"><News setProgress= {this.setProgress}   key="Health" pageSize={this.pageSize} country = "in" category = 'Health' /></Route>
          <Route path="/Technology"><News setProgress= {this.setProgress}   key="Technology" pageSize={this.pageSize} country = "in" category = 'Technology' /></Route>
          <Route path="/Entertainment"><News setProgress= {this.setProgress}  key="Entertainment" pageSize={this.pageSize} country = "in" category = 'Entertainment' /></Route>
          <Route path="/Science"><News setProgress= {this.setProgress}  key="Science" pageSize={this.pageSize} country = "in" category = 'Science' /></Route>
        </Switch>
      </Router>
      </div>
    )
  }
}



