import React from 'react';
import { Link } from '@reach/router';
import '../Main.css';
import Social from "./social";

function Footer() {
    return (
        <div>
        <div class="footer_contact">
                    <h4>Email:
                        <br/>
                        CoffeeCafe@email.com
                    </h4>
                    <h4>Phone: 
                        <br/>
                        +1(999)999-9999
                    </h4>
                    <h4>
                        Address:
                        <br/>
                        123 Main Street,
                        Boise, ID 83705
                    </h4>
                    <Social />
                    </div>
        </div>
    )
}
export default Footer;