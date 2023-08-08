import React from "react";

export default function MyRainInfoFour({ first_img, sec_img, header, paragraph }) {
    return (
        <div className="myrain_info_four">
            <img src={first_img} alt="img_first" className="img_first_four" />
            <img src={sec_img} alt="img_sec" className="img_sec_four" />
            <span>
                <h1>{header}</h1>
                <p>{paragraph}</p>
            </span>
        </div>
    )
}