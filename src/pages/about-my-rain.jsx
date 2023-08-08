import React from 'react';
import "../styles/about-my-rain.css";
import MyRain from "../displays/myrain";
import { myrain_data, myrain_info, myrain_info_three, myrain_info_two, myrain_info_four } from '../data/dataMyrain';
import MyRainInfo from '../displays/myrain_info';
import MyRainInfoTwo from "../displays/myrain_info2";
import MyRainInfoThree from '../displays/myrain_info3';
import MyRainInfoFour from '../displays/myrain_info4';
import icon_faq from "../images/icon-faq.svg";
import BsAccordianOne from '../displays/BsAccordion_one';
import BsAccordianTwo from '../displays/BsAccordion_two';
import { Link, useNavigate } from 'react-router-dom';
import iconCall from "../images/icon-call.svg";
import googleplay from "../images/google-play-img.png";
import appgallery from "../images/huawei.png";
import applestore from "../images/apple-store-desktop.svg";


function Myrain() {
    const navigate = useNavigate();

    const google = () => {
        window.location.replace('https://play.google.com/store/search?q=rain&c=apps');
    };
    const gallery = () => {
        window.location.replace('https://appgallery.huawei.com/app/C107430725');
    };
    const apple = () => {
        window.location.replace('https://apps.apple.com/us/app/my-rain-app/id1642478404');
    };
    return (
        <div className="Myrain">
            <div className="myrain_container">
                {myrain_data.map((Item, key) => {
                    return (
                        <MyRain
                            key={key}
                            myrain={Item.myrain}
                            header={Item.header}
                            paragraph={Item.paragraph}
                        />
                    );
                })}
            </div>
            <div className="info_container">
                {myrain_info.map((Item, key) => {
                    return (
                        <MyRainInfo
                            key={key}
                            first_img={Item.first_img}
                            sec_img={Item.sec_img}
                            header={Item.header}
                            paragraph={Item.paragraph}
                        />
                    );
                })}
            </div>
            <div className="info_container_two">
                {myrain_info_two.map((Item, key) => {
                    return (
                        <MyRainInfoTwo
                            key={key}
                            first_img={Item.first_img}
                            sec_img={Item.sec_img}
                            header={Item.header}
                            paragraph={Item.paragraph}
                        />
                    );
                })}
            </div>
            <div className="info_container_three">
                {myrain_info_three.map((Item, key) => {
                    return (
                        <MyRainInfoThree
                            key={key}
                            first_img={Item.first_img}
                            sec_img={Item.sec_img}
                            header={Item.header}
                            paragraph={Item.paragraph}
                        />
                    );
                })}
            </div>
            <div className="info_container_four">
                {myrain_info_four.map((Item, key) => {
                    return (
                        <MyRainInfoFour
                            key={key}
                            first_img={Item.first_img}
                            sec_img={Item.sec_img}
                            header={Item.header}
                            paragraph={Item.paragraph}
                        />
                    );
                })}
            </div>
            <div className="faq">
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
            <div className="helpline">
                <h1>If you still need help, please give us a call.</h1>
                <span>
                    <Link to="/about-my-rain">
                        <img
                            src={iconCall}
                            alt="phone"
                        />
                    </Link>
                    <h2>081 610 1000</h2>
                </span>
            </div>
            <div className="download">
                <h1>download the myrain app</h1>
                <p>With myrain you're in complete control of your rainone plan. It has everything you need in one place.</p>
                <span>
                    <Link to="/about-my-rain">
                        <img
                            src={googleplay}
                            alt="google"
                            onClick={google}
                            className='google'
                        />
                    </Link>
                    <Link to="/about-my-rain">
                        <img
                            src={appgallery}
                            alt="gallery"
                            onClick={gallery}
                            className='gallery'
                        />
                    </Link>
                    <Link to="/about-my-rain">
                        <img
                            src={applestore}
                            alt="apple"
                            onClick={apple}
                            className='apple_img'
                        />
                    </Link>
                </span>
            </div>
            <div className="started">
                <h1>get started</h1>
                <span>
                    <button onClick={() => navigate("/sign-in")}>sign in</button>
                    <button onClick={() => navigate("/")}>shop</button>
                </span>
            </div>
        </div>
    )
}

export default Myrain