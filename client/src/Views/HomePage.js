import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import NavPanel from '../Components/navPanel'
import HeadPanel from '../Components/HeadPanel'
export default () => {
    return (
        <div>
            <p>
            <HeadPanel/>
            </p>
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
    )
}
