import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import NavPanel from '../Components/navPanel';
import HeadPanel from '../Components/HeadPanel';
import '../Main.css';

export default () => {
    return (
        <div>
            <HeadPanel/>
            <div class="main_page_wrapper">
            <h3>
                {/* Hello ${user.username} */}
            </h3> 
            <div>
                <h1>
                    Welcome to the Cafe
                </h1>
            <NavPanel/>
            </div>
            </div>
        </div>
    )
}
