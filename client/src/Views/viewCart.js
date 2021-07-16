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
                    <h2>
                        Items
                    </h2>
                    <ul>
                        <li>
                            item 1
                        </li>
                        <li>
                            item 2
                        </li>
                        <li>
                            item 3
                        </li>
                        <li>
                            item 4
                        </li>
                        <li>
                            item 5
                        </li>
                    </ul>
                </div>
        </div>
        </div>
    )}
export default viewCart;