import React from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import HeadPanel from '../Components/HeadPanel';
import NavPanel from '../Components/navPanel';
import cart_logo from '../Static/Cart2.png';

import '../Main.css';

function viewCart() {
    return (
        <div>
            <HeadPanel/>
            <div class="cart_wrapper">
                {/* <h3>
                    Hello ${user.username}
                </h3>  */}
            <NavPanel/>
                <h1>
                    <img id="cart_logo" src={cart_logo}/> Shopping Cart 
                </h1>
        </div>
        </div>
    )}
export default viewCart;