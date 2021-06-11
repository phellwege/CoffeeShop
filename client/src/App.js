import React from 'react';
import { Router } from '@reach/router';
import HomePage from './Views/HomePage';

function App() {
  return (
    
    <div className="App">
      <React.Fragment>
          <Router>
            <HomePage path="/"/>
            
          </Router>
      </React.Fragment>
    </div>
  );
  
}

export default App;