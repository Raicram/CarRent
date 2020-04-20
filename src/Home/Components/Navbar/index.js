import React, { useState} from 'react'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import styled from "styled-components"
import {Link} from "react-router-dom";
import logo from './Img/logo.png'
import './style.scss'

const Logo = styled.div`
    width: 80px;
    height: 80px;
    margin:5px;
`;


const Logotype = () => {
    return(
    <Logo>
        <img src={logo} alt='logo' className='Img' />
    </Logo>
    )
};


function NavbarItems(props){
    return(
            <div className={props.switch ? 'Navbaritems' : "Navbaritems Navbaritems--active"}>
                <ul className='ul-list'>
                    <li className='li-list'><Link to={'/'}>Home</Link></li>
                    <li className='li-list'><Link to={'/cars'}>Cars</Link></li>
                    <li className='li-list'><Link to={'/about_us'}>About us</Link></li>
                    <li className='li-list'><Link to={'/contact'}>Contact</Link></li>
                    <li className='li-list'><Link to={'/cars'}>Log in</Link></li>
                </ul>
            </div>
    )
}

function Burger(){

    const [isSwitchedOn , switchOn] = useState(true);

    return(
        <div className='kek'>
            <div className='burger'>
            <button
                className={isSwitchedOn? "hamburger" : "hamburger hamburger--active"}
                onClick={() => switchOn(!isSwitchedOn)}
            >
              <span className="hamburger__box">
                <span className="hamburger__inner"> </span>
              </span>
            </button>
        </div>
            <NavbarItems switch={isSwitchedOn}/>
        </div>
    )
}

export default function Navigation(){

    const [hideOnScroll, setHideOnScroll] = useState(true);

    useScrollPosition(
        ({ prevPos, currPos }) => {
            const isShow = currPos.y > prevPos.y;
            if (isShow !== hideOnScroll && currPos.y<10) setHideOnScroll(isShow);
        },
        [hideOnScroll],
        false,
        false,
        200
    );


    return(
        <div className={hideOnScroll? 'nav' : 'nav-hidden'}>
            <Logotype/>
            <Burger/>
        </div>
    )
}