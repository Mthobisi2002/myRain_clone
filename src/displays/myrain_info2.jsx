import React from "react";

export default function MyRainInfoTwo({ first_img, sec_img, header, paragraph }) {
    return (
        <div className="myrain_info_two">
            <img src={first_img} alt="img_first" className="img_first_two" />
            <img src={sec_img} alt="img_sec" className="img_sec_two" />
            <span>
                <h1>{header}</h1>
                <p>{paragraph}</p>
            </span>
        </div>
    )
}