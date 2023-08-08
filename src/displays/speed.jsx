import React from "react";

export default function Speed(props) {
    return (
        <div className="speed--section">
            <div className="card-speed">
                <h2>{props.speed}</h2>
                <p className="descrone">{props.descrone}</p>
                <h3>{props.upto}</h3>
                <h4 className="empty">{props.emptyone}</h4>
                <p className="descrtwo">{props.descrtwo}</p>
                <p className="mbps">Mbps</p>
                <p className="download">download speed</p>
                <p className="descrthree">{props.descrthree}</p>
                <h4 className="emptytwo">{props.emptytwo}</h4>

            </div>
        </div>
    );
};


