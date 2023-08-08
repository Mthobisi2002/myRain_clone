import React from 'react';

export default function VoLTEThree(props) {
    return (
        <div className="voltethree">
            <h1>{props.Title}</h1>
            <ul>
                <li>No problem! Just download the <img src={props.image} alt="rainone" className='rainone' /> {props.Firstline}</li>
            </ul>
        </div>
    )
};