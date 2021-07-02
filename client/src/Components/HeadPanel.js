import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import Logo from '../Static/LogoCup.png'
import cart_logo from '../Static/Cart1.png'
import "../HeadPanel.css"


function HeadPanel() {
    return (
        <div class="page_wrapper">
            <div>
                <Link to="/">Login</Link> || <Link to="/">Logout</Link>
            </div>
            <div>
                {/* <img id="cart_logo" src={cart_logo}/>  */}
                {/* for some reason whenever I add in this second media element the CSS goes nuts */}
                <img id="logo" src={Logo}/>
            </div>
        </div>
    )
}
export default HeadPanel;