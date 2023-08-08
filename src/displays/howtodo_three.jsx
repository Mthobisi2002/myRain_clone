import React from 'react';

export default function AboutFourG(props) {
    return (
        <div className="aboutfourg">
            <h1>{props.Title}</h1>
            <ul>
                <li>{props.Firstline}</li>

                <li>{props.Secondline}</li>

                <li>{props.Thirdline}</li>

                <li>{props.Fourthline}</li>
            </ul>
        </div>
    )
};