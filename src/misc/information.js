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
        text:{
            about:"This is just a filler for now because I can not thing of how I want to implement the index information in the platform section.  First thing first, get the layout down and then flesh out the rest of the functionality.  This is really one of the last unknowns anyway so it should be fine.",
            tab2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            tab3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            tab4: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            } 
    }

}