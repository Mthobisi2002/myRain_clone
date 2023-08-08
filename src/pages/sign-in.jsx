import React from 'react';
import "../styles/sign-in.css";
import LoginForm from '../displays/sign-in';

function SignIn() {
    return (
        <div className="sign_in">
            <h1>welcome back</h1>
            <LoginForm />
        </div>
    )
}

export default SignIn;