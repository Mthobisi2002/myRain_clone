import React from 'react';
import support from "../images/support.png";
import "../styles/support.css";
import Help from "../displays/help";
import icon_faq from "../images/icon-faq.svg";
import BsAccordianOne from '../displays/BsAccordion_one';
import BsAccordianTwo from '../displays/BsAccordion_two';
import { Link } from 'react-router-dom';
import iconCall from "../images/icon-call.svg";

function Support() {
    return (
        <div className="support">
            <img src={support} alt="support" className='support_img' />
            <h1>we're here to help</h1>
            <Help />
            <div className="faq_two">
                <img
                    src={icon_faq}
                    alt="faq"
                />
                <span>
                    FAQ
                </span>
            </div>
            <div className="accordions">
                <BsAccordianOne />
                <BsAccordianTwo />
            </div>
            <div className="helpline_two">
                <h1>If you still need help, please give us a call.</h1>
                <span>
                    <Link to="/support">
                        <img
                            src={iconCall}
                            alt="phone"
                        />
                    </Link>
                    <h2>081 610 1000</h2>
                </span>
            </div>
            <br />
            <Link to="/sign-in">
                <button>sign in to myrain</button>
            </Link>
            <br></br>
        </div>
    )
}

export default Support;