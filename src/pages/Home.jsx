import React from 'react';
import '../styles/Home.css';
import Levels from '../data/Levels';
import Speed from '../data/Speed';
import sim from '../images/fourg-sim-only.png';
/*Hmain Import starting from here*/
import { Link, useNavigate } from 'react-router-dom';
import one from '../images/rain-one-banner.png';
import rainone from '../images/rain-one-logo.svg';
import city from '../images/dcQF6t.jpg';
import { BsPlusLg } from 'react-icons/bs';
import router from '../images/cpe-sim-2.png';
import fourg from '../images/fourg-sim-only.png';
import Input from "@material-ui/core/Input";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { IoClose } from 'react-icons/io5';

function Home(props) {
    const navigate = useNavigate();
    const submit = () => {
        props.setStyle({ display: "none" });
        props.setStyle2({ display: "block" });
        props.setNumb("1");
        navigate("/cart");
    }
    //validate errors
    const { register, formState: { errors }, handleSubmit, } = useForm();
    const onSubmit = (data) => console.log(data);
    //request sales modal
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };
    return (
        <div className="Home">
            <div className='main'>
                <img src={one} className='one' alt="rainone" />
                <h1>one plan for your home and phone.</h1>
                <h2><img src={rainone} alt="raione" /> is here</h2>
                <img src={city} className='city' alt="city" />
                <div className='container'>
                    <div className='header'>
                        <img src={rainone} alt="rainone" />
                        <span>
                            <h1>R559</h1>
                            <h2>month-to-month</h2>
                        </span>
                    </div>
                    <div className='deals'>
                        <div className="wifi">
                            <h1>unlimited 5G home wifi</h1>
                            <span>
                                <img src={router} alt="router" />
                                <ul>
                                    <h2>
                                        unlimited
                                        5G home wifi
                                    </h2>
                                    <li>
                                        Speeds up to 30Mbps
                                    </li>
                                    <li>
                                        Free-to-use router
                                    </li>
                                </ul>
                            </span>
                        </div>
                        <BsPlusLg id="plus" />
                        <div className="sims">
                            <h1>FREE monthly calls, sms & data for 2 phones*</h1>
                            <div className="two-sims">
                                <div id="fourg">
                                    <img src={fourg} alt="fourg" />
                                    <h3>SIM 1</h3>
                                    <ul>
                                        <h2>
                                            every month
                                        </h2>
                                        <li>
                                            2 <span>FREE</span> gigs
                                        </li>
                                        <li>
                                            60 <span>FREE</span> minutes
                                        </li>
                                        <li>
                                            100 <span>FREE</span> sms
                                        </li>
                                    </ul>
                                </div>
                                <div id="fourg_2">
                                    <img src={fourg} alt="fourg" />
                                    <h3>SIM 1</h3>
                                    <ul>
                                        <h2>
                                            every month
                                        </h2>
                                        <li>
                                            2 <span>FREE</span> gigs
                                        </li>
                                        <li>
                                            60 <span>FREE</span> minutes
                                        </li>
                                        <li>
                                            100 <span>FREE</span> sms
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="btn-b">
                        <Link to="/legal">
                            <h1>Ts & Cs apply</h1>
                        </Link>
                        <button onClick={toggleModal}>request sales call</button>
                        <button onClick={submit}>buy now</button>
                    </div>
                </div>
            </div>
            <div className="level-container">
                <h1>need more every month - <span>level up</span> for R75 a level</h1>
                <Levels />
                <h1>need more 5G home wifi speed - <span>speed up</span> for R200 a level</h1>
                <Speed />
                <h1>get more whenever you need it</h1>
            </div>
            <div className="more">
                <img src={sim} alt="sim" />
                <span>
                    <h1>you can buy more anytime</h1>
                    <p>Buy more gigs, minutes and sms's for your rainone 4G
                        mobile phone lines. R50 a gig, R1 a minute, plus you
                        unlock extra FREE when you level up.</p>
                </span>
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

export default Home;