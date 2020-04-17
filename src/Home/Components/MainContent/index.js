import React from "react";
import './style.scss'


export default function MainContent() {
    return(
        <div className="wrapper">
            <div className='picture'>
                <h1 className='header'>Want to join our family and <span className='green-text'>rent a fantastic car?</span></h1>
                <button className='rent-button'>Rent</button>
            </div>
        </div>
    )
}