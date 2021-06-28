import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import NavPanel from '../Components/navPanel'

export default () => {
    return (
        <div>
            <p>
            <Link to="/">Login</Link> || <Link to="/">Logout</Link>
                
            </p>
            <NavPanel/>
            <h3>
                {/* Hello ${user.username} */}
            </h3>
            <div>
                <h1>
                    Welcome to the Cafe
                </h1>
            </div>
        </div>
    )
}
