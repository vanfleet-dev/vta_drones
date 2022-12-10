import React from 'react'

function About(props){
    return <div className="about-container">
        <h2>{props.title}</h2>
        <div className="image-container">
            <img src={props.image} alt={props.alt} />
        </div>
        <div className="about-text">
            {props.text}
        </div>
    </div>
}

export default About;