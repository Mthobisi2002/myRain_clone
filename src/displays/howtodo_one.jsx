import React from 'react';

export default function Phonenumber(props) {
    return (
        <div className="phonenumber">
            <h1>{props.Title}</h1>
            <ul>
                <li>{props.Firstline}</li>

                <li>{props.Secondline} <span>myrain</span> page</li>

                <li>{props.Thirdline} <span>myrain</span> page</li>
            </ul>
        </div>
    )
};