import React from 'react'
import axios from 'axios';
import { Link } from '@reach/router'
import { Router } from '@reach/router';
function NavPanel() {

return (
    <ul>
    <li>
        <Link to="/">Home</Link>
    </li>
    <li>
        <Link to="/About">About</Link>
    </li>
    <li>
        <Link to="/">Cart</Link>
    </li>
    <li>
        {/* ${item.itemName} */}
    </li>
</ul>

)}
export default NavPanel;