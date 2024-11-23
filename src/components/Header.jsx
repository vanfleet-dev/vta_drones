import React from 'react'
import picture from '../media/vta_drones_logo.svg';

function Header(props){
    return <div className="header-section" id="home">
       <img className="big_image" src={picture} alt="fd" />
    </div>
}

export default Header;
