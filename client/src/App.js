import React from 'react';
import { Router } from '@reach/router';
import HomePage from './Views/HomePage';
import About from './Views/About';
import AdminAdd from './Views/adminAdd';
import UserProfile from './Views/userProfile';
import ViewCart from './Views/viewCart';
import Products from './Views/products';
import ProductDetail from './Views/ProductDetail';
import UserReg from './Views/userReg';
import UserLogin from './Views/userLogin';
import AdminLogin from './Views/adminLogin';
import OfficerLogin from './Views/officerLogin';
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