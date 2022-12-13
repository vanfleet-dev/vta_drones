import React from 'react'

function About(props){
    return <div className="about-container" id="summary">
        <h2>{props.title}</h2>
        <div className="image-container">
            <img src={props.image} alt={props.alt} />
        </div>
        <div className="about-text">
            {props.text.map(item => {
                return(<><p>{item}</p><br /></>)
            })}
        </div>
    </div>
}

export default About;