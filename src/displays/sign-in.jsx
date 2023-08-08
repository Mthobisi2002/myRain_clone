import React from "react";
import IconButton from "@material-ui/core/IconButton";
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import InputAdornment from "@material-ui/core/InputAdornment";
import { AiOutlineEye } from 'react-icons/ai';
import Input from "@material-ui/core/Input";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import { useState } from "react";

const LoginForm = () => {
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

    //validate errors
    const { register, formState: { errors }, handleSubmit, } = useForm();
    const onSubmit = (data) => console.log(data);

    const [style, setStyle] = useState({
        borderBottom: " 0.0px solid #0077c8"
    });

    return (
        <div className="loginform">
            <form onSubmit={handleSubmit(onSubmit)} onBlur={handleSubmit(onSubmit)}>
                <div id="one">
                    <Input placeholder="email" type="email" style={style}
                        {...register("email", {
                            required: true, pattern: /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                        })} />
                    <error>
                        {errors.email?.type === "required" && "Email is required"}
                        {errors.email?.type === "pattern" && "Email is invalid"}
                    </error>
                </div>
                <div id="two">
                    <Input placeholder="password" type={values.showPassword ? "text" : "password"} style={style}
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
                </div>
                <error>
                    {errors.password?.type === "required" && "Passwprd is required"}
                </error>
                <div id="btn-f">
                    <button type="submit">submit</button>
                </div>
                <Link to="/sign-in">
                    <h2>forgot password</h2>
                </Link>

            </form>
        </div>
    );
};

export default LoginForm;