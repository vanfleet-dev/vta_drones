import heroImage from '../media/uav_angle.png';
import ownerImage from '../media/ownerImage.jpeg';
import carouselImage1 from '../media/desktop_18.PNG';
import carouselImage2 from '../media/vta_vs_google.png';
import carouselImage3 from '../media/2_as_built.jpg';


export const siteInfo = {
    header: "VTA DRONES",
    subtext: "A BUSINESS OVERVIEW",
    heroImage: heroImage,
    heroAlt: "A powerful quadcopter",
    ticker: [
        {text: "Hours Flown", numbers: "100"},
        {text: "Distance Flown", numbers: "100"},
        {text: "Images Taken", numbers: "10000"},
    ],
    about: {
        title: "Summary",
        image: ownerImage,
        alt: "a very sexy business man indeed!",
        text: "VTA Drones provides drone-enabled flight services for surveying, mapping, and industrial inspections. using a drone that it develops. Its drone is a quadcopter with dual coaxial rotors on each arm and uses an RTK system for highly accurate navigation and data georeferencing. It customizes its base drone as per client requirements."
    },
    platform: {
        title: "Platform",
        carousel: [carouselImage1, carouselImage2, carouselImage3],
        carouselText: ["mee first, I'm great", "then me!  I'm in the middle", "Third here, I'm the largest of them all"],
        tabInfo: [
            {
                title: "sample1",
                content: "content1"
            },
            {
                title: "sample2",
                content: "content2"
            },
            {
                title: "sample3",
                content: "content3"
            },
            {
                title: "sample4",
                content: "content4"
            },
            {
                title: "sample5",
                content: "content5"
            }
        ]
    }
}