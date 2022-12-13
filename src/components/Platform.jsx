import React from 'react';
import Tabs from './Tabs';

function Platform(props){

    return <div className="platform-container" id="platform">
        <h2>{props.title}</h2>
        <p>{props.text}</p>
        <div className="info-container">
            <Tabs tabs={props.tabs} />
        </div>
    </div>
}

export default Platform;