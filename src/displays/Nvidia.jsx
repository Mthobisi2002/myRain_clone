import React from 'react';
import nvidia from "../images/1689692425595.png";
import rainl from "../images/Rain_Logo.svg.png";
import nvidia_r from "../images/nvidia-right.png";
import nvidia_d from "../images/nvidia-details.png";


import InputAdornment from "@material-ui/core/InputAdornment";
import Input from "@material-ui/core/Input";
import IconButton from "@material-ui/core/IconButton";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { BiSearch } from 'react-icons/bi';


function NvidiaD() {

    //validate errors
    const { register, formState: { errors }, handleSubmit, } = useForm();
    const onSubmit = (data) => console.log(data);

    return (
        <div className="nvidia">
            <div className='header'>
                <div className="main_nvidia">
                    <img src={rainl} id="rl_img" alt="logo" />
                    <img src={nvidia} id="nv_img" alt="nvidia" />
                </div>
                <img src={nvidia_r} id="nvr_img" alt="nvidia" />
            </div>
            <div className="sec-main">
                <h1>rain joins with NVIDIA to introduce GeForce NOW</h1>
                <h2>Bringing high-performance cloud gaming to South Africa for the first time.</h2>
                <h3>As part of the partnership rain will bring the NVIDIA GeForce NOW to South Africa
                    to ensure the highest quality gaming experience.
                    The NVIDIA GeForce NOW service will be hosted locally in rain data centres.
                </h3>
                <p>GeForce NOW is NVIDIA’s premium cloud gaming service, which seamlessly streams PC games
                    from the world’s most powerful GeForce-powered servers in the cloud at ultra-low latency.
                    Members can stream titles they already own from popular digital gaming stores including Steam,
                    Epic, Ubisoft, Origin, even on under-powered devices. With rain and GeForce NOW all you will need
                    is a screen, compatible controllers and an internet connection to stream the latest games.
                </p>
                <h4>Watch this space to get your game on with rain and NVIDIA GeForce NOW.</h4>
            </div>
            <div className='bottom_nvidia'>
                <img src={nvidia_d} id="nvd_img" alt="details" />
                <div id="nvidia_sign">
                    <h1>don’t miss out!</h1>
                    <p>Register your interest now and we will let you know as soon as the service is available in your area.</p>
                    <form onSubmit={handleSubmit(onSubmit)} onBlur={handleSubmit(onSubmit)}>
                        <div id="one">
                            <span>
                                <Input placeholder="full name" type="name" {...register("name", { required: true })} />
                                <error>
                                    {errors.name?.type === "required" && "Name is required"}
                                </error>
                            </span>
                            <span>
                                <Input placeholder="email" type="email"
                                    {...register("email", {
                                        required: true, pattern: /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                                    })} />
                                <error>
                                    {errors.email?.type === "required" && "Email is required"}
                                    {errors.email?.type === "pattern" && "Email is invalid"}
                                </error>
                            </span>
                        </div>
                        <div className="two">
                            <span>
                                <Input placeholder="phone" type="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" {...register("phone", { required: true, maxLength: 13, })} />
                                <error>
                                    {errors.phone?.type === "maxLength" && "maxLength exceeded"}
                                    {errors.phone?.type === "pattern" && "Please enter a valid cell number."}
                                    {errors.phone?.type === "required" && "Cell number is required."}
                                </error>
                            </span>
                            <span>
                                <Input placeholder="search address" type="text"
                                    {...register("text", {
                                        required: true
                                    })}
                                    endAdornment={<InputAdornment
                                        id="s-l" position="end">
                                        <IconButton id="s-b">
                                            <BiSearch id="search" />
                                        </IconButton>
                                    </InputAdornment>}
                                />
                                <error>
                                    {errors.phone?.type === "required" && "This field is required"}
                                </error>
                                <div id="btn-i">
                                    <button type="submit">i'm interested</button>
                                </div>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NvidiaD;