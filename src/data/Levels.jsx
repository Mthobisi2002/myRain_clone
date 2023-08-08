
import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { LevelOne } from '../displays/level_one';
import { LevelTwo } from '../displays/level_two';
import { LevelThree } from '../displays/level_three';
import { LevelFour } from '../displays/level_four';
import { LevelFive } from '../displays/level_five';

function Levels() {
    //Carousel responsive
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1200 },
            items: 5,
            slidesToSlide: 1,
        },
        desktop: {
            breakpoint: { max: 1200, min: 800 },
            items: 4,
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
        <div className="levels">
            <Carousel showDots={true} responsive={responsive} removeArrowOnDeviceType={["desktop"]}>
                <LevelOne />
                <LevelTwo />
                <LevelThree />
                <LevelFour />
                <LevelFive />
            </Carousel>
        </div>
    )
}

export default Levels;