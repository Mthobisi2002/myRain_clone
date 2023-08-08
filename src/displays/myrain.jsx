import React from "react";
import { useNavigate } from "react-router-dom";

export default function MyRain({ myrain, header, paragraph }) {
    const navigate = useNavigate();
    return (
        <div className="myrain">
            <img src={myrain} alt="myrain_img" className="myrain_img" />
            <div className="container">
                <h1>{header}</h1>
                <p>{paragraph}</p>
                <button onClick={() => navigate("/sign-in")}>sign in</button>
            </div>
        </div>
    )
}