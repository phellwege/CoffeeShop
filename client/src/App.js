import React from 'react';
import { Router } from '@reach/router';
import HomePage from './Views/HomePage';
import About from './Views/about';
import AdminForm from './Views/adminForm';
import UserProfile from './Views/userProfile';
import OfficerForm from './Views/officerForm';
import ViewCart from './Views/viewCart';
import Products from './Views/products';
import ProductDetail from './Views/productDetail';

import "./Main.css"

function App() {
  return (
    
    <div className="App">
      <React.Fragment>
          <Router>
            <HomePage path="/"/>
            <About path="/About"/>
            <AdminForm path="/adminForm"/>
            <UserProfile path="/userProfile"/>
            <OfficerForm path="/officer"/>
            <ViewCart path="/Cart"/>
            <Products path="/Products"/>
            <ProductDetail path="/ProductDetail"/>
          </Router>
      </React.Fragment>
    </div>
  );
  
}

export default App;