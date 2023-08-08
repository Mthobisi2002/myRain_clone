import React from "react";

export default function Container({ rainfourg, header, paragraph }) {
    return (
        <div className="containerfour">
            <img className="rainfourg" src={rainfourg} alt="rainfourg" />
            <h1>{header}</h1>
            <p>{paragraph}</p>
        </div>
    )
};