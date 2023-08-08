import React from "react";

export default function Bottom(props) {
    const google = () => {
        window.location.replace('https://play.google.com/store/search?q=rain&c=apps');
    };
    const gallery = () => {
        window.location.replace('https://appgallery.huawei.com/app/C107430725');
    };
    return (
        <div className="bottom">
            <h1>{props.title}</h1>
            <h2>{props.lineone}</h2>
            <p>{props.paragraph}</p>
            <img onClick={google} src={props.google} alt="google" className="google" />
            <img onClick={gallery} src={props.gallery} alt="gallery" className="gallery" />
            <span id="store">
                <img src={props.raintalk} alt="raintalk" className="raintalk" />
                <p>{props.download}</p>
            </span>
        </div>
    )
};