import React from "react";
import * as SiIcons from "react-icons/si";

export default function Android(props) {
    return (
        <div className="android">
            <span>
                <SiIcons.SiAndroid />
            </span>
            <h1>{props.title}</h1>
            <div>
                <span>1</span> {props.first}
            </div>
            <div>
                <span>2</span> {props.second}
            </div>
            <div>
                <span>3</span> {props.third}
            </div>
            <div>
                <span>4</span> {props.fourth}
            </div>
        </div>
    );
}