import React from 'react';
import CartR from '../displays/cart_right';
import "../styles/cart.css";
import EmptyCart from '../displays/empty_cart';
/*Cart Left Import starting from here*/
import { qty_data, items_data } from '../displays/cart';
import { useNavigate } from 'react-router-dom';


function Cart(props) {
    const navigate = useNavigate();
    const submit = () => {
        props.setStyle({ display: "block" });
        props.setStyle2({ display: "none" });
        props.setNumb("0");
        navigate("/cart");
    }
    return (
        <div className="cart">
            <div className="empty_cart" style={props.style}>
                <EmptyCart />
            </div>
            <div className="cart_l" style={props.style2}>
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
                        <h1 onClick={submit}>remove</h1>
                    </div>
                </div>
            </div>
            <div className='cart_r' style={props.style2}>
                <CartR />
            </div>
        </div>
    )
}

export default Cart;