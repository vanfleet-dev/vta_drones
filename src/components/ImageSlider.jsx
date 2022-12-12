import React from "react";

function ImageSlider(props){
    

    const sliderStyles = {
        backgroundImage: `url(${props.slides[props.currentIndex]})`,
    }

    return <div className="slider" style={sliderStyles}>
        <p>{props.text[props.currentIndex]}</p>
    </div>

}

export default ImageSlider;