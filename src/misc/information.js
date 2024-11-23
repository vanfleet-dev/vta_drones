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
    	{text: " Flight Time ", numbers: "1042 hrs"},
    	{text: " Area Mapped ", numbers: "24960046 sq m"},
    	{text: " Images Taken ", numbers: "624,000"},
	],
	about: {
    	title: "Summary",
    	image: ownerImage,
    	alt: "a very successful business man indeed!",
    	text: [
        	"Justin Van Fleet was the owner and operator of VTA DRONES from its inception in 2014 until its closure in 2022.",
        	"VTA DRONES was a small business specializing in aerial imaging services, with a primary focus on collecting aerial imagery and spatial data to produce high-accuracy maps, terrain models, and property and facility measurements.",
        	"The business developed, tested, and deployed a UAS platform alongside several support systems, tailored for mapping applications and capable of withstanding harsh operational conditions.",
        	"Aerial datasets were integrated with survey-grade ground reference data to create orthomosaic maps and terrain models featuring sub-inch pixel resolution and elevation measurements with less than 1/8-inch variation."
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
                	"The platform was meticulously developed through an iterative process informed by countless hours of field testing, resulting in a UAS capable of withstanding the rigors of daily use. ",
                	"A Real-Time Kinematic (RTK) GPS system ensured pinpoint accuracy in both data collection and general flight operations.",
                	"Circularly polarized antennas were utilized to mitigate most interference, significantly enhancing range and reliability.",
                	"A true Hall current sensor provided critical data to protect LiPo batteries from damage and enabled optimized power scaling for improved flight performance.",
                	"Only non-metallic materials were used in mechanical assemblies near the flight controller to ensure the compass maintained clear and accurate readings.",
                	"Barometer readings were taken using a pitot tube positioned outside the low-pressure zone created by the props, ensuring precise altimeter measurements.",
                	"Custom-designed gimbals, paired with advanced sensors, enabled the generation of high-quality datasets.",
                	"SPECS:",
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
                	"Flight GPS: M8N (RTK Rover)",
                	"2400mhz radio: OpenWRT based radio",
                	"900mhz radio: RFD900",
                	"Receiver: OpenTX based firmware",
                	"Current sensor: True hall",
                	"Power supplies: Dedicated redundant ",
                	"Antennas: Circular Polarization",
                	"Imaging: RedEdge sensor or Cannon w/ CHDK"


            	]
        	},
        	{
            	title: "GCS",
            	content:
            	[
                	"Circularly polarized directional antennas were employed on the ground control station to reduce RF interference and maintain a stable data link during UAS banking maneuvers.",
                	"These antennas were paired with a diversity system to further enhance data link stability.",
                	"This configuration gave a 220 degree beam width radiation pattern, eliminating the need for an antenna tracker. ",
                	"This configuration provided a 220-degree beamwidth radiation pattern, eliminating the need for an antenna tracker.",
                        "The ground control station hardware was housed in insulated and temperature-controlled cases to protect against heat and dust.",
                	"An integrated cellular modem, combined with a long-range LTE antenna, enabled access to NTRIP corrections for the RTK system.",
                	"SPECS:",
                	"Antennas: Circular polarized 10dBi",
                	"Beam Width: 220 degrees",
                	"Telemetry: 900mhz",
                	"Data: 2400mhz",
                	"GPS: M8N (RTK Base Station)",
                	"2400mhz radio: OpenWRT based radio",
                	"900mhz radio: RFD900",
                	"Cellular modem: NTRIP network access",
                	"Software: Mission Planner, RTKLIB"
            	]
        	},
        	{
            	title: "CHALLENGES",
            	content:
            	[
               	"GLOBAL SHUTTER VS ROLLING SHUTTER:",
               	"Testing revealed that cameras with rolling shutters significantly complicated image collection. Contributing factors included variable exposure times under different lighting conditions, sensitivity to vibrations, and image distortion at high speeds or low altitudes. ",
               	"Extensive efforts were made to optimize the UAS platform for rolling shutter sensors, including detuning flight characteristics, precisely balancing props and motors, and experimenting with various methods to dampen vibration profiles. However, these refinements did not consistently achieve the desired dataset quality.",
               	"Development efforts shifted toward imaging solutions incorporating global shutter sensors.",
               	"A multispectral camera utilizing global shutter sensors was selected. The RGB bands in the datasets were post-processed into color images for orthomosaics. Global shutter technology eliminated issues related to variable exposure times and sensitivity to vibrations. Additional benefits included reduced weight by eliminating dampening components and lightweight geared motor gimbals. With vibration concerns mitigated, aircraft tuning could be made more aggressive, improving flight performance in inclement weather. Furthermore, extended operating hours for data collection became feasible due to reduced sensitivity to lighting conditions",
               	"ANTENNA / RADIO SYSTEM:",
               	"Early testing frequently encountered video feed dropouts, telemetry interruptions, and reduced range, often occurring unpredictably.",
               	"The investigation revealed that the antenna and radio system issues stemmed from multiple sources. Signal dropouts occurred during aggressive UAS banking, and high RF interference areas further degraded signal quality, reducing operational range.",
               	"The solution involved a combination of hardware modifications and configuration adjustments.",
               	"Circularly polarized antennas were chosen for their unique properties, including immunity to RF interference from horizontally polarized antennas and resilience to alignment changes during banking. For the ground control station, custom patch panel circularly polarized antennas were developed, offering a broad 110-degree radiation pattern per panel. Two multi-frequency panels, combined with a diversity system, provided a 220-degree flight area around the ground control station.",
            	]
        	}
    	]
	},
example: {
    title: "Map Examples",
    map1Text: "Digital elevation map with less than 0.3 cm deviation in elevation measurements compared to those taken by licensed surveyors.",
    map2Text: "80,000 sq. m orthomosaic documenting underground utilities based on a utility locator survey.",
    videoCaption: [
        "This video demonstrates the example digital elevation map being analyzed in QGIS. It uses a tool that allows height measurements to be graphed. Features as small as tire tracks are visible in the map and can be accurately measured.",
        "This video showcases a feature of the utility maps (as-built maps) that allows users to see a 'street view' of underground utility lines represented on the map. Icons on the map can be selected to display ground-level photos, providing additional reference for utility line markings."
    ],
    tabInfo1: [
        {
            title: "DEM Details",
            content: [
                "This example highlights a digital elevation map of a construction site.",
                "RTK with NTRIP corrections was utilized during data collection flights and the marking of ground control points.",
                "Surveying practices, such as referencing the nearest monument and using the regional coordinate reference system (CRS), ensured accuracy.",
                "This map was specifically used to validate the dimensions of dirt pads, assisting in estimating the volume of concrete required for the site."
            ]
        }
    ],
    tabInfo2: [
        {
            title: "Utility Map Details",
            content: [
                "This example represents underground utilities such as electric, water, gas, sewer, and data lines with colored indicators throughout the property.",
                "After a utility locator identified and marked the utility locations, aerial imagery was captured and processed into an orthomosaic to document the utility locations.",
                "Additional map layers were added, including colored lines highlighting utility locations identified during the survey and clickable icons displaying ground-level photos for added context.",
                "Using GIS software, accurate measurements could be taken from the maps, enabling long-term utility location even after the survey markings had faded."
            ]
        }
    ]
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
        	"Internally I documented all builds and kept detailed flight logs and pre-flight checklists.",
        	"Below is a link to a sample build log."
    	],
    	button:
    	[
        	"BUILD LOG",
        	"FLIGHT LOG"
    	]
	}
}

