import React from 'react';

export default function VoLTEOne(props) {
    return (
        <div className="volteone">
            <h1>{props.Title}</h1>
            <ul>
                <li>{props.Firstline}</li>

                <li>{props.Secondline}</li>

                <li>{props.Thirdline}</li>

            </ul>
        </div>
    )
};