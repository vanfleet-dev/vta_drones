import React from "react";

function ImageSlider(props){
    

    const sliderStyles = {
        backgroundImage: `url(${props.slides[props.currentIndex]})`,
    }

    return <div className="whole-slider"><div className="slider" style={sliderStyles}></div>
    <p><a href={props.links[props.currentIndex]}>{props.text[props.currentIndex]}</a></p></div>

}

export default ImageSlider;