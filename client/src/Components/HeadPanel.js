import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import Logo from '../Static/LogoCup.png'
import cart_logo from '../Static/Cart1.png'
import "../HeadPanel.css"


function HeadPanel() {
    return (
        <div class="head_page_wrapper">
            <div>
                <Link to="/userLogin">Login</Link> || <Link to="/">Logout</Link>
            </div>
            <div>
                {/* <h3>
                    Hello ${user.username}
                </h3>  */}
                {/* for some reason whenever I add in this second media element the CSS goes nuts */}
            </div>
            <div class="logos">
                <Link to="/Cart"><img id="cart_logo" src={cart_logo}/></Link> 
                <Link to="/"><img id="coffee_logo" src={Logo}/></Link>
            </div>
        </div>
    )
}
export default HeadPanel;