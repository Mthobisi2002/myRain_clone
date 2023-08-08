import React from 'react';

export default function VoLTETwo(props) {
    return (
        <div className="voltetwo">
            <h1>{props.Title}</h1>
            <ul>
                <li>{props.Firstline}</li>
            </ul>
        </div>
    )
};