import React from "react";

export default function MyRainInfo({ first_img, sec_img, header, paragraph }) {
    return (
        <div className="myrain_info">
            <img src={first_img} alt="img_first" className="img_first" />
            <img src={sec_img} alt="img_sec" className="img_sec" />
            <span>
                <h1>{header}</h1>
                <p>{paragraph}</p>
            </span>
        </div>
    )
}

