import React from 'react';
import "../styles/4Gmobile.css";
import fourgmobile from "../images/Screenshot (33).png";
import { howtodo, OSYDetails, RainTalk } from '../data/data4Gmobile';
import Phonenumber from "../displays/howtodo_one";
import Balance from "../displays/howtodo_two";
import AboutFourG from "../displays/howtodo_three";
import VoLTEOne from '../displays/howtodo_four';
import VoLTETwo from "../displays/howtodo_five";
import Huawei from '../displays/Huawei';
import Android from '../displays/Android';
import Apple from '../displays/Apple';
import VoLTEThree from '../displays/howtodosix';
import Bottom from '../displays/raintalk';


function FourGmobile() {

    const howtodo_onefilter = howtodo.filter(block =>
        block.id === "1"
    );

    const howtodo_one = howtodo_onefilter.map(block => (
        <Phonenumber
            Title={block.Title}
            Firstline={block.Firstline}
            Secondline={block.Secondline}
            Thirdline={block.Thirdline}
        />
    ));
    const howtodo_twofilter = howtodo.filter(block =>
        block.id === "2"
    );

    const howtodo_two = howtodo_twofilter.map(block => (
        <Balance
            Title={block.Title}
            Firstline={block.Firstline}
            Secondline={block.Secondline}
            Thirdline={block.Thirdline}
            Fourthline={block.Fourthline}

        />
    ));
    const howtodo_threefilter = howtodo.filter(block =>
        block.id === "3"
    );

    const howtodo_three = howtodo_threefilter.map(block => (
        <AboutFourG
            Title={block.Title}
            Firstline={block.Firstline}
            Secondline={block.Secondline}
            Thirdline={block.Thirdline}
            Fourthline={block.Fourthline}

        />
    ));
    const howtodo_fourfilter = howtodo.filter(block =>
        block.id === "4"
    );

    const howtodo_four = howtodo_fourfilter.map(block => (
        <VoLTEOne
            Title={block.Title}
            Firstline={block.Firstline}
            Secondline={block.Secondline}
            Thirdline={block.Thirdline}

        />
    ));
    const howtodo_fivefilter = howtodo.filter(block =>
        block.id === "5"
    );

    const howtodo_five = howtodo_fivefilter.map(block => (
        <VoLTETwo
            Title={block.Title}
            Firstline={block.Firstline}
        />
    ));
    const howtodo_sixfilter = howtodo.filter(block =>
        block.id === "6"
    );

    const howtodo_six = howtodo_sixfilter.map(block => (
        <VoLTEThree
            Title={block.Title}
            Firstline={block.Firstline}
            image={block.image}
        />
    ));
    const huawei_filter = OSYDetails.filter(block =>
        block.title === "Huawei"
    );

    const huawei_title = huawei_filter.map(block => (
        <Huawei
            title={block.title}
            first={block.first}
            second={block.second}
            third={block.third}
            fourth={block.fourth}
        />
    ));
    const android_filter = OSYDetails.filter(block =>
        block.title === "Android"
    );

    const android_title = android_filter.map(block => (
        <Android
            title={block.title}
            first={block.first}
            second={block.second}
            third={block.third}
            fourth={block.fourth}
        />
    ));
    const apple_filter = OSYDetails.filter(block =>
        block.title === "iOS"
    );

    const apple_title = apple_filter.map(block => (
        <Apple
            title={block.title}
            first={block.first}
            second={block.second}
            third={block.third}
            fourth={block.fourth}
            five={block.five}
        />
    ));
    const bottom = RainTalk.map(block => (
        <Bottom
            title={block.title}
            lineone={block.lineone}
            paragraph={block.paragraph}
            google={block.google}
            gallery={block.gallery}
            raintalk={block.raintalk}
            download={block.download}
        />
    ));

    return (
        <div className="FourGmobile">
            <img src={fourgmobile} alt="fourgmobile" className='fourgmobile' />
            <div className="howtodo">
                {howtodo_one}
                {howtodo_two}
                {howtodo_three}
                {howtodo_four}
                {howtodo_five}
            </div>
            <div className="osy_container">
                {huawei_title}
                {android_title}
                {apple_title}
            </div>
            <div className='howtodo-six'>
                {howtodo_six}
            </div>
            <div className="bottom-container">
                {bottom}
            </div>
        </div>
    )
}

export default FourGmobile