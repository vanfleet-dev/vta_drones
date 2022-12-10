import React from 'react'

function Header(props){
    return <div className="header-section">
        <h1>{props.header}</h1>
        <h3>{props.subtext}</h3>
    </div>
}

export default Header;