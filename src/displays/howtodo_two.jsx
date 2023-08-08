import React from 'react';

export default function Balance(props) {
    return (
        <div className="balance">
            <h1>{props.Title}</h1>
            <ul>
                <li>You can either visit <span>myrain</span> {props.Firstline}</li>

                <li>{props.Secondline} <span>myrain.</span></li>

                <li>{props.Thirdline}</li>

                <li>Buy more at <span>R50 a gig, R1 a minute</span> {props.Fourthline}</li>
            </ul>
        </div>
    )
};