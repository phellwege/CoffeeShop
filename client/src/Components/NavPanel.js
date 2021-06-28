import React from 'react'
import axios from 'axios';
import { Link } from '@reach/router'
import { Router } from '@reach/router';
function NavPanel() {

return (
    <ul>
    <li></li>
    <li>
        <Link to="/About"><p>About</p></Link>
    </li>
    <li>
        {/* ${item.itemName} */}
    </li>
</ul>

)}
export default NavPanel;