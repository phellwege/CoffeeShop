import React from 'react'
import axios from 'axios';
import { Link } from '@reach/router'
import MapContainer from '../Components/GoogleMaps'
import HeadPanel from '../Components/HeadPanel'
function About() {
    return(
<div>
    <div>
        <HeadPanel/><Link to="/">Home</Link>
    </div>
        <div class="about_wrapper">
    
    <div>
        <h2>Who we are</h2>
        <p>We are a coffee shop who happen to also have an e-commerce site specifically dedicated to coffee.</p>
        <div>
            {/* media */}
        </div>
    </div>
    <div>
        <h2>Contact</h2>
        <h4>social</h4>
        <h4>CoffeeCafe@email.com</h4>
        <h4>phone</h4>
        <h4>address</h4>
    </div>
    <div>
        <div class="google_maps">
        <MapContainer />
        </div>
    </div>
    </div>
</div>
)}
export default About;