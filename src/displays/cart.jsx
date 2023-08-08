import React from 'react';
import rg from "../images/cpe-sim-2.png";
import sim from "../images/fourg-sim-only.png";
import rainone_img from "../images/rain-one-logo.svg";
import { Link } from 'react-router-dom';

/*function CartL() {
    return (
        <div className='cart_l'>
            <div className='my_cart'>
                <h1>my cart</h1>
                <div className="items_info">
                    <h1>item</h1>
                    <h2>qty</h2>
                    <h3>monthly subscription</h3>
                </div>
            </div>
            {qty_data.map((qty) => (
                <div className='qty'>
                    <img src={qty.rainone} alt="rainone" />
                    <h1>{qty.qty}</h1>
                    <h2>{qty.price}</h2>
                </div>
            ))}
            {items_data.map((item) => (
                <div className="items">
                    <div id="left">
                        <img src={item.item_img} alt="item_img" />
                        <h4>{item.free}</h4>
                    </div>
                    <div id="middle">
                        <ul>
                            <h1>{item.header}</h1>
                            <h2>{item.pay}</h2>
                            <li>
                                {item.bp}
                            </li>
                            <li>
                                {item.bp2}
                            </li>
                            <li>
                                {item.bp3}
                            </li>
                        </ul>
                    </div>
                    <div id="right">

                        <h3>{item.free}</h3>
                    </div>
                </div>
            ))}
            <div id="remove">
                <Link to="/">
                    <h1>remove</h1>
                </Link>
            </div>
        </div>
    )
}

export default CartL;*/

export const qty_data = [
    {
        rainone: rainone_img,
        qty: "1",
        price: "R559",
    },
];

export const items_data = [
    {
        item_img: rg,
        header: "unlimited 5G home wifi",
        free: "FREE-TO-USE ROUTER",
        bp: "Speeds up to 30Mbps",
        bp2: "No contracts",
        bp3: "Simple plug and play",
    },
    {
        item_img: sim,
        header: "4G mobile phone line",
        free: "FREE",
        pay: "every month",
        bp: "2 FREE gigs",
        bp2: "60 FREE minutes",
        bp3: "100 FREE sms",
    },
    {
        item_img: sim,
        header: "4G mobile phone line",
        free: "FREE",
        pay: "every month",
        bp: "2 FREE gigs",
        bp2: "60 FREE minutes",
        bp3: "100 FREE sms",
    },


]