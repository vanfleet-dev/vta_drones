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
                <button><a href="https://drive.google.com/file/d/1hJf01MDPHStYzH6kdFpdpTxxaonGWLWZ/view">{props.button[0]}</a></button>
                {/* <button>{props.button[1]}</button> */}
            </div>
            <p className="note">**Button re-direct to google docs.</p>
        </div>
        <div className='im-useless'></div>
    </div>)
}

export default Documentation;