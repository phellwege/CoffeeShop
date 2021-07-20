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
            <h1>
                    Admin
                </h1>
            <div class="register_page_wrapper">
                <div id="login">
                    <h3>
                        Add an Officer
                    </h3>
                    <br/>
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
                <div id="add_items">
                    This is where we'll add the add items
                </div>
                <div id="remove_items">
                    This is where we'll remove items
                </div>
            </div>
        </div>
    )}
export default adminAdd;
