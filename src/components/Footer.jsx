import React from 'react';
import rainlogo from "../images/Rain_Logo.svg.png";
import "../styles/Footer.css";
import { useNavigate } from 'react-router-dom';

function Footer() {
    const navigate = useNavigate();
    return (
        <div className="footer">
            <img src={rainlogo} alt='rainlogo' />
            <h1 onClick={() => navigate("/legal")}>Legal</h1>
            <h2>This site is protected by reCAPTCHA and the Google <span>Privacy Policy</span> and <span onClick={() => navigate("/legal")}>Terms of Service</span> apply.</h2>
        </div>
    )
}

export default Footer