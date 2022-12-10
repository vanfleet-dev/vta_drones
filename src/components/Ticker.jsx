import React from 'react'

function Ticker(props){
    return <div className="ticker-container">
        <div className="ticker">
            <h3>{props.ticker1Text}</h3>
            <h4>{props.ticker1Numbers}</h4>
        </div>
        <div className="ticker">
            <h3>{props.ticker2Text}</h3>
            <h4>{props.ticker2Numbers}</h4>
        </div>
        <div className="ticker">
            <h3>{props.ticker3Text}</h3>
            <h4>{props.ticker3Numbers}</h4>
        </div>
    </div>
}

export default Ticker;