import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import NavPanel from '../Components/navPanel';
import HeadPanel from '../Components/HeadPanel';
import SignUp from '../Components/registerUser';
import Login from '../Components/login';
import '../Main.css';

function userLogin() {
    return (
        <div>
            <HeadPanel/>
            <div class="register_page_wrapper">
                {/* <h3>
                    Hello ${user.username}
                </h3>  */}
            <NavPanel/>
                <h1>
                    Login
                </h1>
                
                <div id="login">
                <Login/>
                <h3>Don't already have an account? click <Link to="/UserReg">here</Link> to Register</h3>
                </div>
            </div>
        </div>
    )}
export default userLogin;
