import React from 'react'
import Tabs from './Tabs';
import Iframe from 'react-iframe';
import vid1 from '../media/map-demo-1.mp4';
import vid2 from '../media/map-demo-2.mp4';

function Examples(props){
    return <div className="example-container" id="examples">
        <h2>{props.title}</h2>
        <p>Beautiful in depth maps</p>
        <div className="map-container">
            <iframe src="https://map-demo-1.justinvanfleet.info/" frameborder="0" className="example-maps"></iframe>
            <p>{props.map1Text}</p>
            <div className="info-container">
                <Tabs tabs={props.tab1} />
            </div>
            <div className="video-container">
                <video width="100%" controls autoplay muted loop>
                    <source src={vid1} type="video/mp4"></source>
                </video>
            </div>
            <p>{props.videoCaption1}</p>
            
        </div>
        <div className="map-container">
            <iframe src="https://map-demo-2.justinvanfleet.info/" frameborder="0" className="example-maps"></iframe>
            <p>{props.map2Text}</p>
            <div className="info-container">
                <Tabs tabs={props.tab2} />
            </div>
            <div className="video-container"> 
                <video width="100%" controls autoplay muted loop>
                    <source src={vid2} type="video/mp4"></source>
                </video>
            </div>
            <p>{props.videoCaption2}</p>
            
        </div>
    </div>
}

export default Examples;
