import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import NavPanel from '../Components/navPanel';
import HeadPanel from '../Components/headPanel';
import Footer from '../Components/footer';
import '../Main.css';
import BigBackGround from '../Static/Background.jpeg';



const HomePage = () => {
    return (
        <div 
        style = {{
            backgroundImage: `url(${BigBackGround})`,
            position: 'center',
            width: '100%',
            height: '120vh',
        }}>
            <HeadPanel/>
            <div class="main_page_wrapper">
                {/* <h3>
                    Hello ${user.username}
                </h3>  */}
            <NavPanel/>
                <h1>
                    Welcome to the Cafe
                </h1>
            </div>
            <Footer/>
        </div>
    )
}
export default HomePage