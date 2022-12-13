import React, { useState } from 'react';
import ImageSlider from './ImageSlider';

function Gallery(props){

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

    return <div className="gallery-container" id="gallery">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <div className="slider-container">
            <div className="left-arrow" onClick={goToPrevious}>
            <i class="fa-regular fa-circle-left"></i>
            </div>
            <ImageSlider slides={props.carousel} text={props.carouselText} links={props.links} currentIndex={currentIndex} />
            <div className="right-arrow" onClick={goToNext}>
            <i class="fa-regular fa-circle-right"></i>
            </div>
        </div>
    </div>
}

export default Gallery;