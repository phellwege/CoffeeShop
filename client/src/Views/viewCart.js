import React from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import HeadPanel from '../Components/headPanel';
import NavPanel from '../Components/navPanel';
import cart_logo from '../Static/Cart2.png';
import cup from '../Static/cup.jpeg';
import cup2 from '../Static/cup2.jpeg';
import bean from '../Static/bean1.jpeg';
import bean2 from '../Static/bean2.jpeg';

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
            <div class="cart_upper_section">
                <NavPanel/>
                <h1>
                    <img id="cart_logo2" src={cart_logo}/> Shopping Cart 
                </h1>
            </div>
                <div id="cart_lower_center">
                    <h2>
                        Items
                    </h2>
                    <br/>
                    <ul>
                        <li>
                            cup
                            <br/>
                            <img src={cup}/> 
                            <br/>
                            <p>this is a description for this product</p>
                            <br/>
                        </li>
                        <li>
                            cup2
                            <br/>
                            <img src={cup2}/> 
                            <br/>
                            <p>this is a description for this product</p>
                            <br/>
                        </li>
                        <li>
                            bean1
                            <br/>
                            <img src={bean}/> 
                            <br/>
                            <p>this is a description for this product</p>
                            <br/>
                        </li>
                        <li>
                            bean2
                            <br/>
                            <img src={bean2}/> 
                            <br/>
                            <p>this is a description for this product</p>
                            <br/>
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