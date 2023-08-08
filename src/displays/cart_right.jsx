import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import wifispeed from "../images/rain-one-wifi-levels-icon.svg";
import wifilevel from "../images/levelup-icon.svg";
import moment from 'moment';
import Input from "@material-ui/core/Input";
import { useForm } from "react-hook-form";
import { IoClose } from 'react-icons/io5';

function CartR() {
    const [topping, setTopping] = useState("1")

    const onOptionChange = e => {
        setTopping(e.target.value)
    }
    const current = new Date();
    const c_d = moment(`${current.getFullYear()}, ${current.getMonth() + 1}, ${current.getDate()}`);
    const s_d = moment(`${current.getFullYear()}, ${topping < current.getDate() ? (current.getMonth() + 2) : (current.getMonth()) + 1}, ${topping}`);
    const d_d = c_d.diff(s_d, "days");
    const p_d_d = (d_d * -1);
    const m_price = Math.round(p_d_d * 18.0322580645).toFixed(2);

    //validate errors
    const { register, formState: { errors }, handleSubmit, } = useForm();
    const onSubmit = (data) => console.log(data);
    //request sales modal
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    return (
        <div className='cart_r'>
            <div className='total'>
                <div id="top">
                    <h1>total due now</h1>
                    <h2>R{m_price}</h2>
                </div>
                <div id="bottom">
                    <Link to="/cart">
                        <button id="btn-1" onClick={toggleModal}>request sales call</button>
                    </Link>
                    <Link to="/register">
                        <button id="btn-2" type="submit">proceed to payment</button>
                    </Link>
                </div>
            </div>
            <div className="more">
                <h1>need more</h1>
                <h2>You can level up your mobile phone lines or home wifi speed.</h2>
                <div className="level_info">
                    <p><span>level up</span> your mobile phone lines</p>
                    <img src={wifilevel} alt="wifi" className="wifilevel" />
                </div>
                <div className="speed_info">
                    <p><span>{p_d_d} up</span> your 5G home wifi</p>
                    <img src={wifispeed} alt="wifi" className="wifispeed" />
                </div>
                <div className="monthly">
                    <h1>select your monthly payment date</h1>
                    <p>Let us know what day you’d like your subscription to renew every month.
                        We suggest picking a date that’s close to your payday.</p>
                    <form>
                        <div className="radio_one">
                            <input
                                type="radio"
                                name="topping"
                                value="1"
                                checked={topping === "1"}
                                onChange={onOptionChange}
                            />
                            <label htmlFor="1">1st of every month</label>
                            <input
                                type="radio"
                                name="topping"
                                value="15"
                                checked={topping === "15"}
                                onChange={onOptionChange}
                            />
                            <label htmlFor="15">15th of every month</label>
                        </div>
                        <div className="radio_two">
                            <input
                                type="radio"
                                name="topping"
                                id="radio"
                                value="20"
                                checked={topping === "20"}
                                onChange={onOptionChange}
                            />
                            <label htmlFor="20">20th of every month</label>
                            <input
                                type="radio"
                                name="topping"
                                value="25"
                                checked={topping === "25"}
                                onChange={onOptionChange}
                            />
                            <label htmlFor="25">25th of every month</label>
                        </div>
                    </form>
                </div>
            </div>
            <div className="sales_modal">
                {modal && (
                    <div className="modal">
                        <div onClick={toggleModal} className="overlay"></div>
                        <div className="modal-content">
                            <div className="sales-form">
                                <form onSubmit={handleSubmit(onSubmit)} onBlur={handleSubmit(onSubmit)}>
                                    <h1>request a sales call</h1>
                                    <p>Leave your details with us and one of our sales agents will be in touch shortly</p>
                                    <span>
                                        <Input placeholder="full name" type="name" {...register("name", { required: true })} />
                                        <error>
                                            {errors.name?.type === "required" && "Name is required"}
                                        </error>
                                    </span>
                                    <span>
                                        <Input placeholder="email address" type="email"
                                            {...register("email", {
                                                required: true, pattern: /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                                            })} />
                                        <error>
                                            {errors.email?.type === "required" && "Email is required"}
                                            {errors.email?.type === "pattern" && "Email is invalid"}
                                        </error>
                                    </span>
                                    <span>
                                        <Input placeholder="contact number" type="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" {...register("phone", { required: true, maxLength: 13, })} />
                                        <error>
                                            {errors.phone?.type === "maxLength" && "maxLength exceeded"}
                                            {errors.phone?.type === "pattern" && "Please enter a valid contact number."}
                                            {errors.phone?.type === "required" && "Contact number is required."}
                                        </error>
                                    </span>
                                    <span>
                                        <Input placeholder="question" type="text"
                                            {...register("question", {
                                                required: true
                                            })} />
                                        <error>
                                            {errors.question?.type === "required" && "question is required"}
                                        </error>
                                    </span>
                                    <IoClose className="close-modal" onClick={toggleModal} />
                                    <button>submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CartR;