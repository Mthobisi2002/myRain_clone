import React from 'react';
import { useState } from 'react';
import "../styles/about-my-rain.css";

const BsAccordianOne = () => {
    const [selected, setSelected] = useState(null);
    const [selected2, setSelected2] = useState(null);
    const [selected3, setSelected3] = useState(null);
    const [selected4, setSelected4] = useState(null);
    const [selected5, setSelected5] = useState(null);
    const [selected6, setSelected6] = useState(null);


    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }

        setSelected(i)
        setSelected2(null)
        setSelected3(null)
        setSelected4(null)
        setSelected5(null)
        setSelected6(null)
    };
    const toggle2 = (i2) => {
        if (selected2 === i2) {
            return setSelected2(null)
        }

        setSelected2(i2)
        setSelected(null)
        setSelected3(null)
        setSelected4(null)
        setSelected5(null)
        setSelected6(null)
    };
    const toggle3 = (i3) => {
        if (selected3 === i3) {
            return setSelected3(null)
        }

        setSelected3(i3)
        setSelected2(null)
        setSelected(null)
        setSelected4(null)
        setSelected5(null)
        setSelected6(null)
    };
    const toggle4 = (i4) => {
        if (selected4 === i4) {
            return setSelected4(null)
        }

        setSelected4(i4)
        setSelected2(null)
        setSelected3(null)
        setSelected(null)
        setSelected5(null)
        setSelected6(null)
    };
    const toggle5 = (i5) => {
        if (selected5 === i5) {
            return setSelected5(null)
        }

        setSelected5(i5)
        setSelected2(null)
        setSelected3(null)
        setSelected4(null)
        setSelected(null)
        setSelected6(null)
    };
    const toggle6 = (i6) => {
        if (selected6 === i6) {
            return setSelected6(null)
        }

        setSelected6(i6)
        setSelected2(null)
        setSelected3(null)
        setSelected4(null)
        setSelected5(null)
        setSelected(null)
    };
    return (
        <div className='wrapper'>
            <div className='accordion'>
                {data.map((item, i) => (
                    <div className='item'>
                        <div className='title' onClick={() => toggle(i)}>
                            <h1>{item.title}</h1>
                            <span>{selected === i ? '-' : '+'}</span>
                        </div>
                        <div className={selected === i ? 'content show' : 'content'}>
                            <h2>{item.header}</h2>
                            <ul>
                                <li>
                                    {item.bp}
                                </li>
                                <li>
                                    {item.bp2}
                                </li>
                            </ul>
                        </div>
                    </div>
                ))}
                {data2.map((item, i2) => (
                    <div className='item'>
                        <div className='title' onClick={() => toggle2(i2)}>
                            <h1>{item.title}</h1>
                            <span>{selected2 === i2 ? '-' : '+'}</span>
                        </div>
                        <div className={selected2 === i2 ? 'content show' : 'content'}>
                            <h2>{item.header}</h2>
                            <ul>
                                <li>
                                    {item.bp}
                                </li>
                                <li>
                                    {item.bp2}
                                </li>
                                <li>
                                    {item.bp3}
                                </li>
                            </ul>
                            <h3>{item.header2}</h3>
                            <p>{item.paragraph}</p>
                            <ul>
                                <li>
                                    {item.bp4}
                                </li>
                                <li>
                                    {item.bp5}
                                </li>
                            </ul>
                        </div>
                    </div>
                ))}
                {data3.map((item, i3) => (
                    <div className='item'>
                        <div className='title' onClick={() => toggle3(i3)}>
                            <h1>{item.title}</h1>
                            <span>{selected3 === i3 ? '-' : '+'}</span>
                        </div>
                        <div className={selected3 === i3 ? 'content show' : 'content'}>
                            <h2>{item.header}</h2>
                            <ul>
                                <li>
                                    {item.bp}
                                </li>
                                <li>
                                    {item.bp2}
                                </li>
                            </ul>
                            <h3>{item.header2}</h3>
                            <ul>
                                <li>
                                    {item.bp3}
                                </li>

                            </ul>
                            <h3>{item.header3}</h3>
                            <ul>
                                <li>
                                    {item.bp4}
                                </li>
                            </ul>
                        </div>
                    </div>
                ))}
                {data4.map((item, i4) => (
                    <div className='item'>
                        <div className='title' onClick={() => toggle4(i4)}>
                            <h1>{item.title}</h1>
                            <span>{selected4 === i4 ? '-' : '+'}</span>
                        </div>
                        <div className={selected4 === i4 ? 'content show' : 'content'}>
                            <h2>{item.header}</h2>
                            <p>{item.paragraph}</p>
                            <ul>
                                <li>
                                    {item.bp}
                                </li>
                                <li>
                                    {item.bp2}
                                </li>
                                <li>
                                    {item.bp3}
                                </li>
                                <li>
                                    {item.bp4}
                                </li>
                            </ul>
                            <h3>{item.header2}</h3>
                            <p>{item.paragraph2}</p>
                            <h4>{item.header3}</h4>
                            <p>{item.paragraph3}</p>
                        </div>
                    </div>
                ))}
                {data5.map((item, i5) => (
                    <div className='item'>
                        <div className='title' onClick={() => toggle5(i5)}>
                            <h1>{item.title}</h1>
                            <span>{selected5 === i5 ? '-' : '+'}</span>
                        </div>
                        <div className={selected5 === i5 ? 'content show' : 'content'}>
                            <h2>{item.header}</h2>
                            <p>{item.paragraph}</p>
                            <h5>{item.header2}</h5>
                            <p>{item.paragraph2}</p>
                            <p>{item.prg21}</p>
                            <p>{item.prg22}</p>
                            <ul>
                                <li>
                                    {item.bp}
                                </li>
                                <li>
                                    {item.bp2}
                                </li>
                                <li>
                                    {item.bp3}
                                </li>
                            </ul>
                        </div>
                    </div>
                ))}
                {data6.map((item, i6) => (
                    <div className='item'>
                        <div className='title' onClick={() => toggle6(i6)}>
                            <h1>{item.title}</h1>
                            <span>{selected6 === i6 ? '-' : '+'}</span>
                        </div>
                        <div className={selected6 === i6 ? 'content show' : 'content'}>
                            <h2>{item.header}</h2>
                            <p>{item.paragraph}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div >

    )
}

const data = [
    {
        title: 'onboarding',
        header: 'how do I buy rainone?',
        bp: 'You can buy rainone, or upgrade to rainone from your existing rain plan on the website or by requesting a sales call. Once your order has been processed, we’ll deliver it to you within 3-5 working days. Our courier CCD will RICA you at the door. And once that’s done, you’re good to go. ​',
        bp2: 'You can also get rainone by visiting one of our stores.​',
    },
];
const data2 = [
    {
        title: 'RICA',
        header: 'what do I need to RICA when the courier arrives with my order?',
        bp: 'A valid South African ID, South African passport or foreign passport.',
        bp2: '​Proof of address not older than 3 months (like a municipal bill, utility bill, lease agreement or bank statement) that shows your name, address and the date.',
        bp3: 'Yourself! You`ll need to RICA your SIM yourself — no one can do it on your behalf.',
        header2: 'can I RICA in-store? ',
        paragraph: 'Yes, you can! When you choose to collect your order in store, you will RICA with one of our sales agents. Please make sure to bring the documents below:',
        bp4: 'A valid South African ID, South African passport or foreign passport.',
        bp5: 'Proof of address not older than 3 months (like a municipal bill, utility bill, lease agreement or bank statement) that shows your name, address and the date.',
    },
];
const data3 = [
    {
        title: 'deliveries​',
        header: 'when will my order arrive?',
        bp: 'Online orders take between 3 and 5 working days to be delivered by our courier partner. You can track your delivery as soon as you receive your reference number via SMS from the courier.​',
        bp2: 'If you haven`t received any communication within 5 working days, please go to my orders and contact support.',
        header2: 'can I pick up my order in store?',
        bp3: 'Yes, you can! Visit any one of our rain stores and be sure to bring your RICA documents along with you so that one of our agents can help you complete the RICA process successfully. You will need: a valid SA ID or passport, proof of address that is dated within the last 3 months and yourself!',
        header3: 'how do I change my delivery address?',
        bp4: 'For online orders, look out for an SMS sent from our courier partner. You can use the reference number in your SMS to contact the courier partner directly.',
    },
]
const data4 = [
    {
        title: 'payment',
        header: 'my order payment was unsuccessful... what now?',
        paragraph: 'First, please check with your bank that the card you’re using has 3D Secure (you might know it as MasterCard SecureCode or Verified by Visa) – that means it’s enabled for online transactions. If your card is 3D secure and you are still experiencing this problem, please contact your bank to investigate. An unsuccessful transaction is usually the result of one of the following reasons:',
        bp: 'The OTP has not been applied within the necessary timeframe​',
        bp2: 'The bank card you are using is from an international bank which rain can’t process',
        bp3: 'The card is being used or has been used under a different rain account​',
        bp4: 'You`ve exceeded your online spend limit or you have insufficient funds',
        header2: 'how do I update my payment details?​',
        paragraph2: 'You can update your bank card details on myrain, under ‘my account’.',
        header3: 'how do I track my refund?​',
        paragraph3: 'Please note that once you’ve received approval on your refund, it will take between 7 to 10 business days from receipt of confirmation to reflect in your bank account. If you have still not received your refund after this timeframe, please contact us on 081 610 1000​',

    },
];
const data5 = [
    {
        title: 'network',
        header: 'how do I check my coverage?',
        paragraph: 'Enter your address on our coverage map and use the map key in the corner to see if you’re in 4G/5G home coverage. Please note you will need to be in 4G / 5G home coverage in order to purchase a rainone plan.',
        header2: 'I’m connected but can’t get onto the internet?​',
        paragraph2: 'This might be because of your APN settings. For phones and most other devices your APN settings are automatically set up. If not, the default APN settings are as follows:',
        prg21: 'APN name: rain​ All other settings can be left blank​',
        prg22: 'If it’s not your APN settings, this might be the cause:​',
        bp: 'You’re using the incorrect device - make sure you’re using a 4G enabled device for your 4G mobile SIM, or rain’s 5G router for your 5G SIM. If you are on a 4G for phones product, your SIM will only work in a 4G phone.​',
        bp2: 'You’ve reached your gig limit – you can manage your limit on my rain​',
        bp3: 'An unsuccessful debit order – your rain account may be in arrears. Sign in to my rain to pay now and get back online​',

    },
];
const data6 = [
    {
        title: 'activations',
        header: 'how long will it take for my SIM to activate?',
        paragraph: 'Your SIM(s) should be active within 2 hours of successfully completing RICA. We’ll send you an SMS to let you know that your SIM is active. You can also sign in to your myrain page and look out for a green tick next to your SIM in myrain.',
    }
];

export default BsAccordianOne;