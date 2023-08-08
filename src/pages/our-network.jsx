import React from 'react';
import network from "../images/our-network.png";
import { Link } from 'react-router-dom';
import "../styles/our-network.css";

function OurNetwork() {
    return (
        <div className="our_network">
            <div className="top">
                <img src={network} alt="network" className='our_network_img' />
                <h1>our national 4G mobile network</h1>
                <p>We're proud to announce the launch of our new 4G only mobile network, now offering national coverage.</p>
                <h2>our 4G & 5G home network</h2>
                <p>Our 4G/5G home network is also growing rapidly, reaching new locations every day. If you're not yet covered
                    by our home network, please check back soon, as we're actively working to expand our coverage area.
                    Check your home coverage below.
                </p>
            </div>



            <div className="bot">
                <Link to="/">
                    disclaimer
                </Link>
                <p>
                    The information contained in this coverage map is for general information purposes only and does not guarantee actual coverage.
                    While we endeavour to keep the information accurate and up to date, some factors influencing coverage varies over time such as
                    terrain. Other factors include, but are not limited to a person’s residence in relation to the cellular enabled mobile device
                    site and poor radio conditions within a person’s residential area as a result of environmental factors beyond rain’s control.
                    rain makes no representations or warranties of any kind, whether expressed or implied, relating to the completeness,
                    accuracy, reliability, suitability or availability with respect to the coverage map. Your indoor coverage may be affected
                    by factors that may not be in our control and impact accuracy of coverage approximation.
                </p>
            </div>
        </div>
    )
}

export default OurNetwork;