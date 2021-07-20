import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import NavPanel from '../Components/navPanel';
import HeadPanel from '../Components/HeadPanel';
import SignUp from '../Components/registerUser';
import '../Main.css';

function userReg() {
    return (
        <div>
            <HeadPanel/>
            <div class="register_page_wrapper">
                {/* <h3>
                    Hello ${user.username}
                </h3>  */}
            <NavPanel/>
                <h1>
                    Register
                </h1>
                <SignUp />
            </div>
        </div>
    )}
export default userReg;
