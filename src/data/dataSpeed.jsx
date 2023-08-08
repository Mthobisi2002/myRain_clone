import sim from "../images/fourg-sim-only.png";

export const responsivetwo = {
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
        breakpoint: { max: 800, min: 550 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 550, min: 0 },
        items: 1,
    },
};

export const speedData = [
    {
        id: 1,
        speed: "30mbps",
        descrone: "5G home wifi speed",
        upto: "up to",
        descrtwo: "30",
        descrthree: "included with rainone",


    },
    {
        id: 2,
        speed: "60mbps",
        descrone: "5G home wifi speed",
        upto: "up to",
        descrtwo: "60",
        extra: "15% extra FREE",
        emptytwo: "empty",

    },
    {
        id: 3,
        speed: "100+mbps",
        descrone: "5G home wifi speed",
        emptyone: "empty",
        descrtwo: "100+",
        emptytwo: "empty",

    },

];
export const buymoreData = [
    {
        rainfourg: sim,
        header: "you can buy more anytime",
        paragraph: "Buy more gigs, minutes and sms's for your rainone 4G mobile phone lines.R50 a gig, R1 a minute, plus you unlock extra FREE when you level up.",
    },
];