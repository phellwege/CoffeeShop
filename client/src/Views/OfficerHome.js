import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import OfficerForm from '../Components/OfficerForm';
import Items from '../Components/Items';
import '../Main.css';

function OfficerHome() {
    return (
        <div>
            <h1>
                Admin 
            </h1>
            <h2 id="special_h2">
                <Link to="/">View site</Link>
            </h2>
            <div class="register_page_wrapper">
                <div id="add_items">
                    <OfficerForm/>
                    This is where we'll add the add items
                </div>
                <div id="login">
                <div id="remove_items">
                    This is where we'll display and remove items
                    <Items/>
                </div>
            </div>
        </div>
        </div>
    )};

export default OfficerHome;
