import React from 'react';
import { useState } from 'react';
import "../styles/about-my-rain.css";

const BsAccordianTwo = () => {
    const [selected, setSelected] = useState(null);
    const [selected2, setSelected2] = useState(null);


    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }

        setSelected(i)
        setSelected2(null)
    };
    const toggle2 = (i2) => {
        if (selected2 === i2) {
            return setSelected2(null)
        }

        setSelected2(i2)
        setSelected(null)
    };

    return (
        <div className='wrapper'>
            <div className='accordion_two'>
                {data.map((item, i) => (
                    <div className='item'>
                        <div className='title' onClick={() => toggle(i)}>
                            <h1>{item.title}</h1>
                            <span>{selected === i ? '-' : '+'}</span>
                        </div>
                        <div className={selected === i ? 'content show' : 'content'}>
                            <h6>{item.paragraph}</h6>
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
                            <h6>{item.paragraph}</h6>
                        </div>
                    </div>
                ))}

            </div>
        </div >

    )
}

const data = [
    {
        title: 'level up 4G mobile phone line',
        paragraph: 'If you need more gigs and minutes every month, you can level up anytime. The cost of your level up will be added to your monthly bill.',
    },
    {
        title: 'speed up 5G home wifi',
        paragraph: 'If you need more 5G home wifi speed, you can level up speed anytime. The cost of your speed level up will be added to your monthly bill.',
    },
    {
        title: 'check my balances',
        paragraph: 'To check your balance, go to manage your account at myrain or you can sms ‘balance’ to 136.​',
    },
    {
        title: 'buy more',
        paragraph: 'If you’re running low on gigs, minutes or sms, you can buy more anytime. These ‘buy more’ purchases are once-off and they never expire. So, whatever you don’t use this month, will still be there for you next month.',
    },
    {
        title: 'port my number',
        paragraph: 'You can keep your old phone number by porting it to your new rain 4G mobile phone SIM. It’s really quick and easy. Just go to your myrain page and request your number to be ported.',
    },
];
const data2 = [
    {
        title: 'about my 4G mobile phone line​',
        header: 'can I use voicemail? ​​',
        paragraph: 'We do not offer traditional voicemail services, but you`ll receive an SMS notification for missed calls.',
        header2: 'can I make international calls?​',
        paragraph2: 'You can receive international calls, but outbound international calling is not currently supported.​',
        header3: 'can I use hotspot?',
        paragraph3: 'Yes, you can enable hotspot by accessing your smartphone settings',
    },
];


export default BsAccordianTwo;