import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import NavPanel from '../Components/navPanel';
import HeadPanel from '../Components/headPanel';
import SignUp from '../Components/registerUser';
import Login from '../Components/login';
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
