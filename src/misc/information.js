//import nameSVG from '../media/vta_drones_logo.svg';
import ownerImage from '../media/ownerImage.jpeg';
import carouselImage1 from "../media/desktop_18.PNG";
import carouselImage2 from '../media/vta_vs_google.png';
import carouselImage3 from '../media/2_as_built.jpg';


export const siteInfo = {
    header: {
        //image: nameSVG,
        alt: "Vta drones logo"
    },
    heroAlt: "A powerful quadcopter",
    ticker: [
        {text: "Flight Time", numbers: "100"},
        {text: "Distance Flown", numbers: "100"},
        {text: "Images Taken", numbers: "10000"},
    ],
    about: {
        title: "Summary",
        image: ownerImage,
        alt: "a very successful business man indeed!",
        text: [
            "Justin Van Fleet was owner / operator of VTA DRONES form its inception in 2014 until its closure in 2022.", 
            "VTA DRONES was a small business that provided aerial imaging services. The primary focus was the collection of aerial imagery and spacial data used to generate maps, terrain models and measurements of property and facilities.",
            "A UAS platform and several support systems were developed in house, extensively field tested, then deployed. The platform was well suited for mapping applications and the harsh conditions often encountered in the field.",
            "The UAS generated data sets were combined with survey grade ground reference data sets to generate aerial imagery maps and terrain models that had sub inch pixel resolution and less than 1/8 inch of variation in elevation measurements."
        ]
    },
    gallery: {
        title: "Gallery",
        description: "WHY LIKE THIS T.T",
        carousel: [carouselImage1, carouselImage2, carouselImage3],
        carouselText: ["mee first, I'm great", "then me!  I'm in the middle", "Third here, I'm the largest of them all"],
        links: ["/static/media/desktop_18.74004bafed723607c50a.PNG",
         "/static/media/vta_vs_google.945add423c034ea7dabb.png", 
         "/static/media/2_as_built.2e77267540521b312d55.jpg"]
    },
    platform: {
        title: "Platform",
        text: "here here here!",
        tabInfo: [
            {
                title: "UAS",
                content: ["Our ground control station utilized custom built circular polarized directional antennas to reduce RF interference and provide stable data link during banking.", "The antenna panels were used in conjunction with a diversity system to further improve data link stability.", "The uses of the antennas in a sector format gave a 220 degree beam width, eliminating any need for an antenna tracker.", "The hardware used in the GCS was housed in insulated and temp controlled cases to avoid heat and dust.", "A cellular modem was used to connect to NTRIP corrections network for the RTK system.", "Specs:", ""]
            },
            {
                title: "sample2",
                content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
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
    },
    example: {
        title: "Map Examples",
        map1Text: "sad;kfjasdlfkjasd;flkjasdflkj",
        map2Text: "a;slkdfnfdsiwearnasdvioawernasdfoip"
    },
    documentation: {
        title: "Documentation",
        topText: "Hey, I'm at the top",
        video: "https://www.youtube.com/embed/2v3OGy69mSg",
        description: "This is a video where qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
        button: ["go here", "or here"]
    }
}