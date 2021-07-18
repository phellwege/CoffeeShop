import React from 'react'
import axios from 'axios';
import { Link } from '@reach/router'
import HeadPanel from '../Components/HeadPanel';
import NavPanel from '../Components/navPanel';

function products() {
    return (
        <div>
            <HeadPanel/>
                <div class="product_wrapper">
                    {/* <h3>
                        Hello ${user.username}
                    </h3>  */}
                    <NavPanel/>

                </div>
        </div>
)}
export default products;