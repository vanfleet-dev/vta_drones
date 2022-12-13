import React from 'react'

function Documentation(props){
    return(<div className="Documentation-container" id="documentation">
        <h2>{props.title}</h2>
        <div className="grey-box">
            <p>{props.topText.map(item => {
                return <><p>{item}</p></>
            })}</p>
            <iframe className="video" src={props.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p>{props.description.map(item => {
                return <><p>{item}</p></>
            })}</p>
            <div className="button-container">
                <button>{props.button[0]}</button>
                <button>{props.button[1]}</button>
            </div>
            <p className="note">**Links re-direct to google docs.</p>
        </div>
        <div className='im-useless'></div>
    </div>)
}

export default Documentation;