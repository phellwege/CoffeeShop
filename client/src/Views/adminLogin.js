import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import NavPanel from '../Components/NavPanel';
import HeadPanel from '../Components/HeadPanel';
import AdminLog from '../Components/AdminLog';
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
                <AdminLog/>
                </div>
            </div>
        </div>
    )}
export default userLogin;
