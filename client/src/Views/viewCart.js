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
                
                <div class="cart_lower_section">
            <NavPanel/>
                <h1>
                    <img id="cart_logo2" src={cart_logo}/> Shopping Cart 
                </h1>
                <div id="cart_lower_center">
                    <h2>
                        Items
                    </h2>
                    <ul>
                        <li>
                            cup
                        </li>
                        <li>
                            cup2
                        </li>
                        <li>
                            bean1
                        </li>
                        <li>
                            bean2
                        </li>
                    </ul>
                    <br/>
                    <button id="checkout_button">Checkout</button>
                    </div>
                </div>
        </div>
        </div>
    )}
export default viewCart;