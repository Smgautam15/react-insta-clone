import React from "react";
import home from ",,/image/home.png";
import {Link } from "react-router-dom";
import '.\components\Landing.css';

export default function LandingPage(){
    return(
        <div className=" home-content">
            <div className ="landing-img">
            <img src ={home} alt ="Landing-image"></img>
            <div class="landing-content">
                <h3>10x Team 04</h3>
                <Link to ={"post/all"}><button>enter</button></Link>

        </div>
        </div>
        </div>
    )
}