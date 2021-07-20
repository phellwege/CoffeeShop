import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import NavPanel from '../Components/navPanel';
import HeadPanel from '../Components/HeadPanel';
import SignUp from '../Components/adminForm';
import '../Main.css';

function adminAdd() {
    return (
        <div>
            <HeadPanel/>
            <div class="register_page_wrapper">
                <h1>
                    Admin
                </h1>
                
                <div id="login">
                    <h3>
                        Add an Officer
                    </h3>
                <SignUp />
                <br/>
                <p> 
                    When you add an officer they are able to add/remove items and update inventory. 
                </p>
                <br/>
                <p> 
                    They are NOT able to view/remove other officers or users, or gather site data.
                </p>
                <br/>
                <p>
                    Once their credentials have been set, they are not able to modify them unless the admin removes them
                </p>
                </div>
            </div>
        </div>
    )}
export default adminAdd;
