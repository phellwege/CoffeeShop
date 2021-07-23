import React from 'react'
import { Link } from '@reach/router';
import SignUp from '../Components/adminForm';
import OfficerForm from '../Components/officerForm';
import Items from '../Components/items';
import ShowOfficer from '../Components/showOfficers';
import Footer from '../Components/footer';
import '../Main.css';

function adminAdd() {
    return (
        <div>
            <h1>
                Admin 
            </h1>
            <h2 id="special_h2">
                <Link to="/">View site</Link>
            </h2>
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
                <br/>
                <h3>
                    Current Officers
                </h3>
                <ShowOfficer/>
                </div>
                <div id="add_items">
                    <OfficerForm/>
                    <br/>
                    <Items/>
                </div>
            </div>
        </div>
    )}
export default adminAdd;
