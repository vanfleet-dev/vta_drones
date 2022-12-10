import React from 'react';

function Hero(props){
    return <div className="hero-container">
        <img src={props.image} alt={props.alt} />
    </div>
}

export default Hero;