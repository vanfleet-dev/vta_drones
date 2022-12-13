import React from 'react'

function Documentation(props){
    return(<div className="Documentation-container" id="documentation">
        <h2>{props.title}</h2>
        <p>{props.topText}</p>
        <div className="grey-box">
            <iframe className="video" src={props.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p>{props.description}</p>
            <div className="button-container">
                <button>{props.button[0]}</button>
                <button>{props.button[1]}</button>
            </div>
        </div>
    </div>)
}

export default Documentation;