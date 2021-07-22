import React from 'react'
import axios from 'axios';
import { Link } from '@reach/router'
import HeadPanel from '../Components/HeadPanel';
import NavPanel from '../Components/NavPanel';

function productDetail() {
    return (
        <div>
            <HeadPanel/>
                <div class="product_wrapper">
                    <NavPanel/>

                </div>
        </div>
)}
export default productDetail;