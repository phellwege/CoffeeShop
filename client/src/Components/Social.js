import React from 'react'
import axios from 'axios';
import { Link } from '@reach/router'
import Twitter from '../Static/twitter.png'
import '../Main.css'
function Social() {
    return (
        <div>
            <Link to="/"><img id="social_media" src={Twitter}/></Link>
        </div>
    )}
export default Social;