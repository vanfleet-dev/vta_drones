import React, { useState } from 'react';

function Nav(){
    return <div className="nav-container">
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#summary">Summary</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#examples">Examples</a></li>
            <li><a href="#platform">Platform</a></li>
            <li><a href="#documentation">Docs</a></li>
        </ul>
    </div>
}

export default Nav;