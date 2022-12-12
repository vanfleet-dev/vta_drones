import React, { useState } from 'react';

function Tabs(props){
    const [active, setActive] = useState(0);

    return(
        <div className="tabs-outer-container">
            <div className="block-tabs">
                {props.tabs.map((tab, index) =>{
                    return <div className="tab" onClick={() =>{setActive(index)}}>{props.tabs[index].title}</div>
                })}
            </div>
            <div className="content-tabs">
                <p className="active-content">{props.tabs[active].content}</p>
            </div>
        </div>
        
    )
}

export default Tabs;