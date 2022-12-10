import React from "react";

function ImageSlider(props){
    

    const sliderStyles = {
        backgroundImage: `url(${props.slides[props.currentIndex]})`,
    }

    return <div className="slider" style={sliderStyles}></div>

}

export default ImageSlider;