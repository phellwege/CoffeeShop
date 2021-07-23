import React, { useEffect, useState } from 'react'
import { Link } from '@reach/router';
import NavPanel from '../Components/NavPanel';
import HeadPanel from '../Components/HeadPanel';
import OfficerLogin from '../Components/officerLog';
import '../Main.css';

function userLogin() {
    return (
        <div>
            <div class="officer_page_wrapper">
                <h1>
                    Officer Login
                </h1>
                <div id="login">
                <OfficerLogin/>
                </div>
            </div>
        </div>
    )}
export default userLogin;
