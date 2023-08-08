import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { SpeedOne } from '../displays/speed_one';
import { SpeedThree } from '../displays/speed_three';
import { SpeedTwo } from '../displays/speed_two';

function Speed() {
    //Carousel responsive
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1200 },
            items: 3,
            slidesToSlide: 1,
        },
        desktop: {
            breakpoint: { max: 1200, min: 800 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 800, min: 450 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 450, min: 0 },
            items: 1,
        },
    };

    return (
        <div className="speed">
            <Carousel showDots={true} responsive={responsive} removeArrowOnDeviceType={["desktop"]}>
                <SpeedOne />
                <SpeedTwo />
                <SpeedThree />
            </Carousel>
        </div>
    )
}

export default Speed;