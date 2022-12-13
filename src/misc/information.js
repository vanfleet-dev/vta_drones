//import nameSVG from '../media/vta_drones_logo.svg';
import ownerImage from '../media/ownerImage.jpeg';
import carouselImage1 from "../media/1.png";
import carouselImage2 from '../media/2.png';
import carouselImage3 from '../media/3.png';
import carouselImage4 from '../media/4.jpg';
import carouselImage5 from "../media/5.png";
import carouselImage6 from '../media/6.png';
import carouselImage7 from '../media/7.png';
import carouselImage8 from '../media/8.jpg';
import carouselImage9 from "../media/9.jpg";
import carouselImage10 from '../media/10.png';
import carouselImage11 from '../media/11.png';
import carouselImage12 from '../media/12.png';
import carouselImage13 from "../media/13.png";
import carouselImage14 from '../media/14.jpg';
import carouselImage15 from '../media/15.jpg';

export const siteInfo = {
    header: {
        //image: nameSVG,
        alt: "Vta drones logo"
    },
    heroAlt: "A powerful quadcopter",
    ticker: [
        {text: "Flight Time", numbers: "1042 hrs"},
        {text: "Area Mapped", numbers: "24960046 sq m"},
        {text: "Images Taken", numbers: "624,000"},
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
        description: "",
        carousel: [carouselImage1, carouselImage2, carouselImage3, carouselImage4, carouselImage5, carouselImage6, carouselImage7, carouselImage8, carouselImage9, carouselImage10, carouselImage11, carouselImage12, carouselImage13, carouselImage14, carouselImage15],
        carouselText: [
            "UAS w/ gimbal angle", 
            "UAS w/ gimbal front", 
            "UAS w/ gimbal side", 
            "Ground control station w/ UAS", 
            "Ground control station components", 
            "UAS parts design, GPS mount ",
            "UAS parts design, CF frame plates",
            "Orthomosaic map screenshot 1",
            "Orthomosaic map screenshot 2",
            "Post processing screenshot 1",
            "Post processing screenshot 2",
            "QGIS web server with orthomosaic desktop 1",
            "QGIS web server with orthomosaic desktop 2",
            "QGIS web server with orthomosaic mobile 1",
            "QGIS web server with orthomosaic mobile 1"
        ],
        links: ["/static/media/1.8061e10f2b626634afdd.png", "/static/media/2.361cc42c0e2df9e29165.png", "/static/media/3.00b119cb4e7fbefbf8fb.png", "/static/media/4.2b44f4c410c09415b54f.jpg", "/static/media/5.73f2cf5138a9aa97ff89.png", "/static/media/6.a76544a24084b5435f4f.png", "/static/media/7.fc9b9b95203bd600bfdb.png", "/static/media/8.b29936d0cc1d4c548847.jpg", "/static/media/9.2e77267540521b312d55.jpg", "/static/media/10.6d453955e45914d28a3f.png", "/static/media/11.01b6b80ad528a235fa27.png", "/static/media/12.893ef86ce5734208637a.png", "/static/media/13.4e79b790bb3f86da8bf2.png", "/static/media/14.81c817102697caabf304.jpg", "/static/media/15.b8bcf71b9e5dc825befd.jpg"]
    },
    platform: {
        title: "Platform",
        text: "",
        tabInfo: [
            {
                title: "UAS",
                content: 
                [
                    "Our drone platform was developed in house through a process of extensive field testing. The end result was a UAS that could cope with the rough treatment of daily use. ",
                    "Great care was taken in the development of the UAS platform. For instance:",
                    "A Real Time Kinematic GPS system was used for pin point accuracy both in data collection and general flight.",
                    "Circular polarized antennas were used to eliminate most interference, increasing range and reliability.",
                    "The data from a true hall current sensor protected lipos from damage and enabled power scaling to increase flight performance.",
                    "No metal hardware (standoffs or screws) were used near the autopilot to insure the compass had clear readings.",
                    "Barometer readings were taken via a pitot tube outside the low pressure zone near the props, giving accurate altimeter readings.",
                    "Custom gimbals with high quality components were meticulously constructed and used in conjunction with various sensors to give high quality image data sets.",
                    "Specs:", 
                    "Weight (g) (w/ lipos):",
                    "Base: 5382",
                    "Mapping Config: 6157",
                    "Flight Time(mins): 25-35",
                    "Climb Rate: 6.9",
                    "Max Speed (mph) : 24",
                    "Thrust to Weight Ratio: 2.4 : 1",
                    "Throttle % at Hover: 56",
                    "50% Throttle Motor Specs:",
                    "Amps: 4.2",
                    "Watts: 93.24",
                    "Efficiency (g/w): 10.08",
                    "Thrust(g): 940",
                    "Battery: 20k 22.4v 10c-25c",
                    "Motors: 370kv",
                    "Props:15x5in",
                    "Autopilot: Pixhawk (Ardupilot)",
                    "Flight GPS: M8N",
                    "GPS: RTK",
                    "Telemetry Modem: RDF900",
                    "Receiver: OpenTX based firmware",
                    "Current sensor: True hall",
                    "Power supplies: Dedicated redundant ",
                    "Data Link: Long range 2.4ghz modem",
                    "Antennas: Circular Polarization",
                    "Imaging: RedEdge sensor or Cannon w/ CHDK"


                ]
            },
            {
                title: "GCS",
                content: 
                [
                    "Our ground control station utilized custom built circular polarized directional antennas to reduce RF interference and provide stable data link during banking.",
                    "The antenna panels were used in conjunction with a diversity system to further improve data link stability. ",
                    "The uses of the antennas in a sector format gave a 220 degree beam width, eliminating any need for an antenna tracker. ",
                    "The hardware used in the GCS was housed in insulated and temp controlled cases to avoid heat and dust. ",
                    "A cellular modem was used to connect to NTRIP corrections network for the RTK system",
                    "Specs:",
                    "Antennas: Circular polarized 10dBi",
                    "Beam Width: 220 degrees",
                    "Telemetry: 900mhz",
                    "Data: 2400mhz",
                    "GPS: RTK corrections",
                    "2.4ghz modem: OpenWRT router w/ diversity controller",
                    "900mhz modem: RFD900 w/ diversity controller",
                    "cellular modem: NTRIP corrections",
                    "Software: Mission Planner, Mavlink, RTKLIB"
                ]
            },
            {
                title: "ISSUES OVERCOME",
                content:
                [
                   "Global shutter vs rolling shutter:",
                   "During testing it became clear that using commercial off the shelf cameras with rolling shutters greatly complicated the process of image collection. Reasons included varied exposure times due to lighting conditions, sensitivity to vibrations, image distortion at higher speeds and close to the ground. ",
                   "The problem was that initially it was not clear that the rolling shutter was the issue due to limited knowledge at the time of camera systems. In turn much time was spent trying to make the UAS platform work for the camera by down tuning the flight characteristics, extensive balancing of props and motors, as well as many different attempts to remove the various vibration profiles that were present in the platform. Although success was achieved on this front. It all went out the door if the UAS was contending with poor weather and image quality dropped.",
                   "That was the wrong approach. The right approach was to make the camera work for the UAS.",
                   "Once it was determined that the issue was related to the rolling shutter and a global shutter system was needed, focus switched to sourcing a camera system that would work. ",
                   "The system that was sourced used multiple camera sensors to capture RGB light bands separately at a lower resolutions with a global shutter. Then these images were post processed into color images. Due to the nature of the global shutter exposure times and sensitivity to vibrations was eliminated. This had many benefits including reducing weight in the form of vibration dampening components, allowed to the drone to be up tuned back to its full flight characteristics, as well allowing for imaging in varied weather and lighting conditions.", "Antenna / radio system:",
                   "During early testing drop outs in video feeds as well as interruptions to telemetry feeds were encountered often and without much consistency. Also reduced range due to signal strength was encountered. Unlike the camera sensor issues this issue was immediately clear, the antennas and radio modems being used were not ideal for this application.",
                   "Through a good deal of testing it was determined that the issues related to the antennas and radios system came from multiple sources. During flight if the UAS banked too hard signal dropouts would occur. In areas with higher RF interference signal quality could also degrade reducing range.",
                   "The solution was a combination of changes to the hardware and configuration. ",
                   "The most important being the use of circular polarized antennas. These type of antennas are immune to the RF interference from horizontal polarized antennas and are not effected by change of antennas alignment during banking. In addition to using circular polarization a very specialized antenna design was used to give the right characteristics to the signal radiation pattern. In this case a directed wide signal radiation pattern was needed to cover a large section of the sky. Lastly a system was added to the radio modems called diversity to allow for the signal to jump between multiple sets of antenna panels and modems.",
                   "The end result was a 220 degree wide beam width very close to the antenna array that painted the sky with a solid signal that could not be interrupted by the UAS banking or RF interference."
                ]
            }
        ]
    },
    example: {
        title: "Map Examples",
        map1Text: "Digital elevation map with less than a .3cm deviation on elevation measurements compared to the licensed surveyors measurements of the same site.",
        map2Text: "80K sq m orthomosaic documenting the underground utilities that had been recently located and marked throughout the facility."
    },
    documentation: {
        title: "Docs",
        topText: 
        [
            "VTA drones provided on site training and documentation to personnel who would be utilizing our maps.", 
            "Below is an example of an instruction video documenting general usage of our maps in QGIS."
        ],
        video: "https://www.youtube.com/embed/1eN4xec3ID4",
        description: 
        [ 
            "Below is a link to a sample of a internal UAS build log."
        ],
        button: 
        [
            "BUILD LOG", 
            "FLIGHT LOG"
        ]
    }
}
