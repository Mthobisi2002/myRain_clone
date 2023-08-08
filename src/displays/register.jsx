import React from 'react';
import "../styles/register.css";
import { Link } from "react-router-dom";
import Input from "@material-ui/core/Input";
import { useForm } from "react-hook-form";
import { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import { AiOutlineEyeInvisible, AiFillQuestionCircle } from 'react-icons/ai';
import InputAdornment from "@material-ui/core/InputAdornment";
import { AiOutlineEye } from 'react-icons/ai';
import { IoClose } from 'react-icons/io5';
import { BiInfoCircle, BiSearch } from 'react-icons/bi';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import '@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import t_c from '../pdf/TermsRainOne.pdf';

function RegisterD() {

    //validate errors
    const { register, formState: { errors }, handleSubmit, } = useForm();
    const onSubmit = (data) => console.log(data);

    //radio buttons
    const [topping, setTopping] = useState("sa_id");
    const [pValue, setPValue] = useState("ID number(18 years or older)");
    const [typeN, setTypeN] = useState("ID number");

    const onOptionChange = e => {
        setTopping(e.target.value)
    }

    //show and hide password
    const [values, setValues] = React.useState({
        password: "",
        showPassword: false,
    });

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handlePasswordChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    //checkbox 
    const [style, setStyle] = useState({ color: "grey", fontWeight: "100" });
    const [style2, setStyle2] = useState({ color: "#0077c8", fontWeight: "800" });
    const [style3, setStyle3] = useState({ color: "#0077c8" });
    const [style4, setStyle4] = useState({ color: "grey" });
    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(true);

    const handleOnChange1 = () => {
        if (isChecked1) {
            setIsChecked1(false);
            setStyle({ color: "grey", fontWeight: "100" })
        } else {
            setIsChecked1(true);
            setStyle({ color: "#0077c8", fontWeight: "800" })
        }

    };

    const handleOnChange2 = () => {
        if (!isChecked2) {
            setIsChecked2(true);
            setStyle2({ color: "#0077c8", fontWeight: "800" })
        } else {
            setIsChecked2(false);
            setStyle2({ color: "grey", fontWeight: "100" })
        }
    };
    const untick = () => {
        if (!isChecked2 || isChecked2) {
            setIsChecked2(false);
            setStyle2({ color: "grey", fontWeight: "100" })
        } else {
            setIsChecked2(false);
            setStyle2({ color: "grey", fontWeight: "100" })
        }
    };
    const tick = () => {
        if (!isChecked2 || isChecked2) {
            setIsChecked2(true);
            setStyle2({ color: "#0077c8", fontWeight: "800" })
        } else {
            setIsChecked2(true);
            setStyle2({ color: "#0077c8", fontWeight: "800" })
        }
    };

    //coverage modal
    const [modal_c, setModal_c] = useState(false);

    const toggleModal = () => {
        setModal_c(!modal_c);
    };

    //whatsapp modal
    const [modal_w, setModal_w] = useState(false);

    const toggleModal2 = () => {
        setModal_w(!modal_w);
    };

    //terms and condition
    const [modal_t, setModal_t] = useState(false);

    const toggleModal3 = () => {
        setModal_t(!modal_t);
    };

    //pdf newplugin
    const newplugin = defaultLayoutPlugin();

    return (
        <div className="register">
            <h1>create an account</h1>
            <p>Already have an account? <Link to="/sign-in">sign in</Link></p>
            <div className="rf-cont">
                <form onSubmit={handleSubmit(onSubmit)} onBlur={handleSubmit(onSubmit)}>
                    <h1>personal details</h1>
                    <span>
                        <Input placeholder="name" type="name" {...register("name", { required: true })} />
                        <error>
                            {errors.name?.type === "required" && "Name is required"}
                        </error>
                    </span>
                    <span>
                        <Input placeholder="last name" type="surname" {...register("surname", { required: true })} />
                        <error>
                            {errors.surname?.type === "required" && "Last name is required."}
                        </error>
                    </span>
                    <div id="r-id">
                        <input
                            type="radio"
                            name="topping"
                            value="sa_id"
                            onClick={() => { setPValue("ID number(18 years or older"); setTypeN("ID number"); setStyle3({ color: "#0077c8" }); setStyle4({ color: "grey" }) }}
                            checked={topping === "sa_id"}
                            onChange={onOptionChange}
                        />
                        <label style={style3} htmlFor="sa_id">SA ID</label>
                        <input
                            type="radio"
                            name="topping"
                            value="passport"
                            onClick={() => { setPValue("non-SA passport"); setTypeN("Non-SA passport"); setStyle4({ color: "#0077c8" }); setStyle3({ color: "grey" }) }}
                            checked={topping === "passport"}
                            onChange={onOptionChange}
                        />
                        <label style={style4} htmlFor="passport">non-SA passport</label>
                    </div>
                    <span>
                        <Input placeholder={pValue} pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" type="number" name="number" min="1" max="20" {...register("number", { required: true, maxLength: 13, })} />
                        <error>
                            {errors.number?.type === "required" && `${typeN} is required.`}
                            {errors.number?.type === "pattern" && `${typeN} is invalid.`}
                            {errors.number?.type === "maxLength" && "13 digits exceeded"}
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
                    <span>
                        <Input placeholder="cellphone number" type="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" {...register("phone", { required: true, maxLength: 13, })} />
                        <error>
                            {errors.phone?.type === "maxLength" && "maxLength exceeded"}
                            {errors.phone?.type === "pattern" && "Please enter a valid cell number."}
                            {errors.phone?.type === "required" && "Cell number is required."}
                        </error>
                    </span>
                    <span>
                        <Input placeholder="password" type={values.showPassword ? "text" : "password"}
                            {...register("password", {
                                required: true
                            })}
                            onChange={handlePasswordChange("password")} value={values.password} endAdornment={<InputAdornment
                                id="eye-l" position="end">
                                <IconButton id="i-b" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>
                                    {values.showPassword ?
                                        <AiOutlineEye id="eye" /> :
                                        <AiOutlineEyeInvisible id="eye" />}
                                </IconButton>
                            </InputAdornment>}
                        />
                        <error style={{ paddingBottom: "30px" }}>
                            {errors.password?.type === "required" && "Password is required"}
                        </error>
                    </span>
                    <div className="c_a">
                        <span>
                            <h2>coverage address</h2>
                            <h3>*location where you will be using your 5G router</h3>
                        </span>
                        <BiInfoCircle id="caution" onClick={toggleModal} />
                    </div>
                    <span style={{ paddingTop: "20px" }}>
                        <Input placeholder="search address" style={{ width: "95%" }} type="text"
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
                    </span>
                    <span>
                        <div id="c-tc">
                            <span>
                                <input
                                    type="checkbox"
                                    name="t&c"
                                    value="t&c"
                                    /*onClick={() => { tick1() }}*/
                                    checked={isChecked1}
                                    onChange={handleOnChange1}


                                />
                                <label style={style} htmlFor="t&c">Accept <h onClick={toggleModal3}>Terms and Conditions</h></label>
                            </span>
                            <span>
                                <input
                                    type="checkbox"
                                    name="WhatsApp"
                                    value="WhatsApp"
                                    checked={isChecked2}
                                    onChange={handleOnChange2}
                                /*onClick={() => { tick2() }}*/
                                />
                                <label style={style2} htmlFor="WhatsApp">Opt in for WhatsApp <AiFillQuestionCircle id="question" onClick={() => { toggleModal2(); untick(); }} /></label>
                            </span>
                        </div>
                    </span>
                    <div id="btn-c">
                        <button>create account</button>
                    </div>
                </form>
                <div className="coverage_modal">
                    {modal_c && (
                        <div className="modal">
                            <div onClick={toggleModal} className="overlay"></div>
                            <div className="modal-content">
                                <h2>coverage address</h2>
                                <p>
                                    We need to check if you're in 5G coverage. If you're not
                                    , we'll keep you on our 4G network and switch you to 5G
                                    as soon as it becomes available in your area.
                                </p>
                                <IoClose className="close-modal" onClick={toggleModal} />
                                <button onClick={toggleModal}>got it</button>
                            </div>
                        </div>
                    )}
                </div>
                <div className="tc_modal">
                    {modal_t && (
                        <div className="modal">
                            <div onClick={toggleModal3} className="overlay"></div>
                            <div className="modal-content">
                                <h2>Terms & Conditions</h2>
                                <div className="pdf-folder" style={{ border: "3px solid #0077c8" }}>
                                    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js">
                                        <Viewer fileUrl={t_c} plugins={[newplugin]} />
                                    </Worker>
                                </div>
                                <IoClose className="close-modal" onClick={toggleModal3} />
                            </div>
                        </div>
                    )}
                </div>
                <div className="whatsapp_modal">
                    {modal_w && (
                        <div className="modal">
                            <div onClick={toggleModal2} className="overlay"></div>
                            <div className="modal-content">
                                <h2>why whatsapp?</h2>
                                <p>
                                    Opting in for WhatsApp means you can get all your important rain billing,
                                    network and account info there. No spam. No sales pitches. Just useful stuff
                                    to help you get the most out of rain.
                                </p>
                                <IoClose className="close-modal" onClick={toggleModal2} />
                                <div id="btn-o">
                                    <button onClick={toggleModal2}>no thanks</button>
                                    <button onClick={() => { toggleModal2(); tick(); }}>yes please</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default RegisterD;