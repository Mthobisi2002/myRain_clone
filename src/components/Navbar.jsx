import React, { useState } from 'react';
import '../styles/Navbar.css';
import rainlogo from "../images/Rain_Logo.svg.png";
import { NavLink, useNavigate } from "react-router-dom";
import { IoReorderThreeOutline } from 'react-icons/io5';
import { FiShoppingCart } from 'react-icons/fi';
import * as IoIcons from 'react-icons/io5';
import googleplay from "../images/google-play-img.png";
import appgallery from "../images/huawei.png";
import applestore from "../images/apple-store-desktop.svg";


function Navbar(props) {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

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
        <div className="navbar">
            <span>
                <NavLink>
                    <IoReorderThreeOutline onClick={showSidebar} />
                </NavLink>
                <img src={rainlogo} alt='rainlogo' />
            </span>
            <div className='navbar-holder'>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'} onClick={showSidebar}>
                    <div className='welcome'>
                        <h2> <IoIcons.IoClose /></h2>
                        <h1>welcome to rain
                            <NavLink to="/sign-in">
                                <button>
                                    sign in
                                </button>
                            </NavLink>
                        </h1>
                    </div>
                    <ul className='nav-menu-items'>
                        <li>
                            <NavLink to="/">shop</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about-my-rain">about my rain</NavLink>
                        </li>
                        <li>
                            <NavLink to="/4Gmobile">4G mobile</NavLink>
                        </li>
                        <li>
                            <NavLink to="/support">support</NavLink>
                        </li>
                        <li>
                            <NavLink to="/legal">legal</NavLink>
                        </li>
                        <li>
                            <NavLink to="/nvidia">more about NVIDIA</NavLink>
                        </li>
                    </ul>
                    <div className="bottom-r">
                        <h1>download the my rain app</h1>
                        <div id="b_img">
                            <img onClick={google} src={googleplay} alt="google-play" />
                            <img onClick={gallery} src={appgallery} alt="app-gallery" />
                            <img onClick={apple} src={applestore} alt="apple-store" />
                        </div>
                    </div>
                </nav>
            </div>
            <span>
                <li>
                    <NavLink to="/" id="ht">shop</NavLink>
                </li>
                <li>
                    <NavLink to="/4Gmobile" id="ht">4G mobile</NavLink>
                </li>
                <li>
                    <NavLink to="/about-my-rain" id="ht">my rain</NavLink>
                </li>
                <li>
                    <NavLink to="/support" id="ht">support</NavLink>
                </li>
                <li>
                    <NavLink to="/sign-in" id="htt">sign in</NavLink>
                </li>
                <li>
                    <NavLink to="/cart" id="ht">cart</NavLink>
                </li>
                <li>
                    <NavLink to="/cart" id="httt"><FiShoppingCart />{props.numb}</NavLink>
                </li>
            </span>
        </div>
    )
}

export default Navbar