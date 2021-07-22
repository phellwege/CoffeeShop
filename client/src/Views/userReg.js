import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import NavPanel from '../Components/NavPanel';
import HeadPanel from '../Components/HeadPanel';
import SignUp from '../Components/RegisterUser';
import Login from '../Components/Login';
import '../Main.css';

function userReg() {
    return (
        <div>
            <HeadPanel/>
            <div class="register_page_wrapper">
                <div id="login">
                    <h1>
                    Login
                    </h1>
                <SignUp />
                <h3>Already have an account? click <Link to="/userLogin">here</Link> to Login</h3>
                </div>
            </div>
        </div>
    )}
export default userReg;
