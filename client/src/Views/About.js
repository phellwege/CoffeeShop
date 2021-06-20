import React from 'react'
import axios from 'axios';
import { Link } from '@reach/router'
import MapContainer from './MapContainer.js'

function about() {
<>
    <div>
        <h2>Who we are</h2>
        <p>loremIpsum</p>
        <div>
            {/* media */}
        </div>
    </div>
    <div>
        <h2>Contact</h2>
        <h4>social</h4>
        <h4>email</h4>
        <h4>phone</h4>
        <h4>address</h4>
        <div>
        <MapContainer />
        </div>
    </div>
</>
}
export default about;