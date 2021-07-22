import React from 'react';
import axios from "axios";
import { Link } from "@reach/router";
import MapContainer from "../Components/GoogleMaps";
import HeadPanel from "../Components/HeadPanel";
import blank from "../Static/blank_dude.png";
import NavPanel from "../Components/NavPanel";
import Social from "../Components/Social";


function About() {
    return (
        <div>
            <HeadPanel />
            <div class="about_wrapper">
                <div class="about_header">
                    <NavPanel />
                    <h1>
                        About us
                    </h1>
                    </div>
                <div class="about_content">
                    <h2>Who we are</h2>
                    <p>
                        We are a coffee shop who happen to also have an e-commerce site
                        specifically dedicated to coffee. Coffee Coffee Coffee. Coffee
                        Coffee Coffee. Coffee Coffee Coffee. Coffee Coffee Coffee. Coffee
                        Coffee Coffee. Coffee Coffee Coffee. Coffee Coffee Coffee. Coffee
                        Coffee Coffee.
                    </p>
                    <div class="about_blank_dude">
                        <img src={blank} />
                        <div>
                            <p>
                                About the owner. He is just some guy, who enjoys anonymity and
                                some sort of hobbies. But what he is really about is a great cup
                                of coffee.{" "}
                            </p>
                            <br />
                            <p>
                                You can reach out to some guy by using comments, or also by
                                using the provided links.
                            </p>
                        </div>
                    </div>
                <div class="about_contact_map">
                <div class="about_contact">
                    <h2>Contact Us</h2>
                    <h4>CoffeeCafe@email.com</h4>
                    <h4>Phone: +1(999)999-9999</h4>
                    <h4>
                        Address: 123 Main Street,
                        <br />
                        Boise, ID 83705
                    </h4>
                    <Social />
                    </div>
                            <div class="google_maps">
                                <p>
                                    Located in beautiful Boise Idaho, You should move
                                    here...everyone else already has.
                                </p>
                                <MapContainer/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}
export default About;
