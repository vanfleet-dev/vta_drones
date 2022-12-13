import React, { useState } from 'react';

function Tabs(props){
    const [activeContent, setActiveContent] = useState(0);
    const [activeTab, setActiveTab] = useState(false);

    function toggleClass(index){
        setActiveTab(index);
    }

    
    return(
        <>
            <div className="block-tabs">   
                {props.tabs.map((tab, index) =>{
                    return <div 
                    className={activeTab === index? "tab active-tab" : "tab"}
                    onClick={() =>{
                        setActiveContent(index); toggleClass(index)}}>
                        {props.tabs[index].title}
                    </div>
                })}
            </div>
            <div className="content-tabs">
                <p className="active-content">{props.tabs[activeContent].content.map(item => {
                    return <p>{item}</p>
                })}</p>
            </div>
        </>
        
    )
}

export default Tabs;//props.tabs[activeContent].content