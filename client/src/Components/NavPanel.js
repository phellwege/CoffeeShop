import React from 'react'
import axios from 'axios';
import { Link } from '@reach/router'
import { Router } from '@reach/router';
import '../Main.css';
function NavPanel() {

return (
    <div class="navigation">
        <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/Products">Products</Link> 
        </li>
        <li>
            <Link to="/Cart">Checkout</Link>
        </li>
        <li>
            <Link to="/About">About</Link>
        </li>
        <li>
            {/* ${item.itemName} */}
        </li>
    </ul>
</div>
)}
export default NavPanel;