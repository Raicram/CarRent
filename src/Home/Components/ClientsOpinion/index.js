import React from 'react'
import './style.scss'
import man from './img/man.jpg';

export default function Opinion (){
    return(
        <div className='customer-opinion'>
            <div className='opinion'>
                <img src={man} alt='man' width='300px'/>
                <div className='Opinion-text'>I am very happy about my decision to rent a car here!</div>
            </div>
            <div className='opinion'>
                <img src={man} alt='man' width='300px'/>
                <div className='Opinion-text'>I am very happy about my decision to rent a car here!</div>
            </div>
            <div className='opinion'>
                <img src={man} alt='man' width='300px'/>
                <div className='Opinion-text'>I am very happy about my decision to rent a car here!</div>
            </div>
        </div>
    )
};