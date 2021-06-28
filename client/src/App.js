import React from 'react';
import { Router } from '@reach/router';
import HomePage from './Views/HomePage';
import About from './Views/about';
import adminForm from './Views/adminForm';
import userProfile from './Views/userProfile';
import officerForm from './Views/officerForm';
import viewCart from './Views/viewCart';
import "./Main.css"

function App() {
  return (
    
    <div className="App">
      <React.Fragment>
          <Router>
            <HomePage path="/"/>
            <About path="/About"/>
            <adminForm path="/adminForm"/>
            <userProfile path="/userProfile"/>
            <officerForm path="/officer"/>
            <viewCart path="/Cart"/>
          </Router>
      </React.Fragment>
    </div>
  );
  
}

export default App;