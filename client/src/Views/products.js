import React from 'react'
import axios from 'axios';
import { Link } from '@reach/router'
import HeadPanel from '../Components/HeadPanel';
import NavPanel from '../Components/navPanel';

function products() {
    return (
        <div>
            <HeadPanel/>
                <div class="products_wrapper">
                    <div class="products_header">
                        {/* <h3>
                        Hello ${user.username}
                        </h3>  */}
                        <NavPanel/>
                        <h1>
                            Products
                        </h1>
                    </div>
                    <div id="products_category">
                    <h2>
                        Categories
                    </h2>
                    <ul>
                        <li>Sampler</li>
                        {/* <li>${item.category}</li> */}
                    </ul>
                    </div>
                </div>
        </div>
)}
export default products;