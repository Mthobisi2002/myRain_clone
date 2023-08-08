import React from "react";
import myrain from "../images/myrain_lockup.svg";
import faq from "../images/icon-faq.svg";
import call from "../images/icon-call.svg";

export default function Help() {
    return (

        <div className="box-container">
            {data.map((item) => (
                <div className="box">
                    <h1>{item.header}</h1>
                    <div>
                        <img src={item.img_help} alt="img_help" />
                        <p>{item.paragraph}</p>
                    </div>
                </div>
            ))}
        </div>

    )
};

const data = [
    {
        header: 'myrain',
        img_help: myrain,
        extra: 'sign in',
        paragraph: 'sign in to manage your account.',

    },
    {
        header: 'FAQs',
        img_help: faq,
        paragraph: 'Our FAQs will help you find the answers you’re looking for.',

    },
    {
        header: 'call us',
        img_help: call,
        extra1: 'Call us on',
        extra2: '081 610 1000',
        paragraph: 'Call us on 081 610 1000 to get in touch with a helpful agent.',

    },
];