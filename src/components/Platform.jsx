import React, { useState } from 'react';
import ImageSlider from './ImageSlider';
import Tabs from './Tabs';

function Platform(props){

    const [currentIndex, setIndex] = useState(0);

    function goToNext(){
        if(currentIndex < props.carousel.length - 1){
            setIndex(currentIndex + 1)
        } else {
            setIndex(0);
        } 
    }
    function goToPrevious(){
        if(currentIndex === 0){
            setIndex(props.carousel.length -1)
        } else {
            setIndex(currentIndex - 1)
        }

    }

    return <div className="platform-container" id="platform">
        <h2>{props.title}</h2>
        <div className="slider-container">
            <div className="left-arrow" onClick={goToPrevious}>◀</div>
            <ImageSlider slides={props.carousel} text={props.carouselText} currentIndex={currentIndex} />
            <div className="right-arrow" onClick={goToNext}>▶</div>
        </div>
        <div className="info-container">
            <Tabs tabs={props.text} />
        </div>
    </div>
}

export default Platform;