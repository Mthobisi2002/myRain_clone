import React from 'react';
import rainone from '../images/rain-one-logo.svg';

export function SpeedOne() {
    return (
        <div id="one">
            <h1>30 mbps</h1>
            <h2>5G home wifi speed</h2>
            <h3>up to</h3>
            <h4>30</h4>
            <h5>mbps</h5>
            <h6>download speed</h6>
            <p>included with <img src={rainone} alt="raione" /></p>
        </div>
    )
}