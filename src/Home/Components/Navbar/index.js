import React, { useState} from 'react'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import styled from "styled-components"
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
                <ul>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>Cars</a></li>
                    <li><a href='#'>About us</a></li>
                    <li><a href='#'>Contact</a></li>
                    <li><a href='#'>Log in</a></li>
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
            if (isShow !== hideOnScroll && currPos.y<-100) setHideOnScroll(isShow);
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