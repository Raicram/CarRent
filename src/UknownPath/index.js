import React, {useEffect, useState} from "react";
import {Redirect} from 'react-router-dom';
import styled from "styled-components";

const Uknown = styled.div`
    width:100%;
    height:70vh;
    font-size: 30px;
    font-weight: bold;
    margin: 15% auto 0;
    position: absolute;
    text-align: center;;
`;

export default function UnknownPath (){
    const [time,setTime] = useState(10);
    useEffect(()=>{
        let interval= null;
        if(time>=0) {
            interval = setInterval(
                () => setTime(time => time - 1)
                , 1000);
        }
        return () => clearInterval(interval);
    },[time]);
    return(
        <Uknown>
            <div>
                Unknown Path:
                Redirect in {time} seconds.
                {time === 0 && <Redirect to='/' />}
            </div>
            </Uknown>
    )
}