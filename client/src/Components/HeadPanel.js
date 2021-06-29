import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import Logo from '../Static/LogoCup.png'
import "../Main.css"
function HeadPanel() {
    return (
        <div class="page_wrapper">
            <div><Link to="/">Login</Link> || <Link to="/">Logout</Link></div>
            <div class="logo">
                <img src={Logo}/>
            </div>
            
        </div>
    )
}
export default HeadPanel;