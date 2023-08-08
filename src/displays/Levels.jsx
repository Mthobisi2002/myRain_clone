import React from "react";

export default function Level(props) {
    return (
        <div className="card">
            <h2>{props.level}</h2>
            <h3>your</h3>
            <p className="descone">{props.descone}</p>
            <h4>each get</h4>
            <p className="desctwo">{props.desctwo}</p>
            <h5>every month</h5>
            <h6>PLUS unlock <span>{props.extra}</span> when you buy more gigs, mins & sms.</h6>
            <div><p className="numb">{props.numb}</p></div>
        </div>
    );
}