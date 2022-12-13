import React from 'react'
import Iframe from 'react-iframe';

function Examples(props){
    return <div className="example-container" id="examples">
        <h2>{props.title}</h2>
        <p>Beautiful in depth maps</p>
        <div className="map-container">
            <iframe src="https://map-demo-1.devdock.me/" frameborder="0" className="example-maps"></iframe>
            <p>{props.map1Text}</p>
        </div>
        <div className="map-container">
            <iframe src="https://map-demo-2.devdock.me/" frameborder="0" className="example-maps"></iframe>
            <p>{props.map2Text}</p>
        </div>
    </div>
}

export default Examples;