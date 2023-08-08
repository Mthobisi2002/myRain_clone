import React from 'react';
import e_c from "../images/empty-cart.svg";
import { Link } from 'react-router-dom';

function EmptyCart() {
    return (
        <div className='empty_cart'>
            <h1>my cart</h1>
            <div className='center'>
                <Link to="/">
                    <img src={e_c} alt="empty" />
                </Link>
                <h2>You have no item in your cart</h2>
                <p>Click shop to add items to your cart or <Link to="/sign-in">sign in</Link> and go to ‘my order’
                    to complete any pending orders you might have.</p>
                <Link to="/">
                    <button>shop</button>
                </Link>
            </div>
        </div>
    )
}

export default EmptyCart;