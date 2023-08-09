import './App.css';

import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar' ;


const App =()=> {

 const pageSize = 5 ;
  
    const [progress, setProgress] = useState(0)
  
    return (
      <div>
      <Router>
        <Navbar  />
      <LoadingBar color='#f11946' progress={progress} />
        <Switch >
          <Route path="/General"><News setProgress= {setProgress}  key="General" pageSize={pageSize} country = "in" category = 'General' /></Route>
          <Route path="/Business"><News setProgress= {setProgress}   key="Business" pageSize={pageSize} country = "in" category = 'Business' /></Route>
          <Route path="/Sports"><News setProgress= {setProgress}  key="Sports" pageSize={pageSize} country = "in" category = 'Sports' /></Route>
          <Route path="/Health"><News setProgress= {setProgress}   key="Health" pageSize={pageSize} country = "in" category = 'Health' /></Route>
          <Route path="/Technology"><News setProgress= {setProgress}   key="Technology" pageSize={pageSize} country = "in" category = 'Technology' /></Route>
          <Route path="/Entertainment"><News setProgress= {setProgress}  key="Entertainment" pageSize={pageSize} country = "in" category = 'Entertainment' /></Route>
          <Route path="/Science"><News setProgress= {setProgress}  key="Science" pageSize={pageSize} country = "in" category = 'Science' /></Route>
        </Switch>
      </Router>
      </div>
    )
  
}

export default App;

