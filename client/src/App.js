import React from 'react';
import { Router } from '@reach/router';
import HomePage from './Views/HomePage';
import About from './Views/About';
import AdminAdd from './Views/AdminAdd';
import UserProfile from './Views/UserProfile';
import ViewCart from './Views/ViewCart';
import Products from './Views/Products';
import ProductDetail from './Views/ProductDetail';
import UserReg from './Views/UserReg';
import UserLogin from './Views/UserLogin';
import AdminLogin from './Views/AdminLogin';
import OfficerLogin from './Views/OfficerLogin';
import OfficerHome from './Views/OfficerHome';
import "./Main.css"

function App() {
  return (
    <div className="App">
      <React.Fragment>
          <Router>
            <HomePage path="/"/>
            <About path="/About"/>
            <AdminLogin path="/Admin"/>
            <OfficerLogin path="/Officer"/>
            <OfficerHome path="/officer_home"/>
            <AdminAdd path="/admin_supreme"/>
            <UserProfile path="/userProfile"/>
            <ViewCart path="/Cart"/>
            <Products path="/Products"/>
            <ProductDetail path="/ProductDetail"/>
            <UserReg path="/UserReg"/>
            <UserLogin path="/userLogin"/>
          </Router>
      </React.Fragment>
    </div>
  );
  
}

export default App;