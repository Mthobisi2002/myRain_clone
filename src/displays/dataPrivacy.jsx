import React from 'react';
import { Link } from 'react-router-dom';

function DataPrivacy() {
    return (
        <div className='data_privacy'>
            <h1>report your data privacy
                or fraud related query
            </h1>
            <p>We want to ensure your personal data remains safe, if you have concerns about one of the
                below categories</p>
            <div className='container'>
                {privacy_info.map((i) => (
                    <div className="block">
                        <h2>{i.info}</h2>
                    </div>
                ))}
            </div>
            <h3>
                please sign in and let us know so we can assist
            </h3>
            <Link to="/sign-in">
                <button id="btn-in">sign in</button>
            </Link>
        </div>
    )
}

export default DataPrivacy;

const privacy_info = [
    {
        info: "data privacy breach",
    },
    {
        info: "suspected fraud"
    },
    {
        info: "right to forget/erasure"
    },
    {
        info: "request information"
    },

];