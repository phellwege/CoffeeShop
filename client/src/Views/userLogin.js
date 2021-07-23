import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import NavPanel from '../Components/navPanel';
import HeadPanel from '../Components/headPanel';
import SignUp from '../Components/registerUser';
import Login from '../Components/login';
import Footer from '../Components/footer';
import '../Main.css';

function userLogin() {
    return (
        <div>
            <HeadPanel/>
            <div class="register_page_wrapper">
                <div id="login">
                    <h1>
                        Login
                    </h1>
                    <Login/>
                    <h3>Don't already have an account? click <Link to="/UserReg">here</Link> to Register</h3>
                </div>
            </div>
            <Footer/>
        </div>
    )}
export default userLogin;
