import React, {useEffect, useState} from "react";
import {Redirect} from 'react-router-dom';

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
        <div>
            <br/>
            <br/>
            <br/>
            <br/>
            Unknown Path: 404
            Redirect in {time} seconds.
            {time === 0 && <Redirect to='/' />}
        </div>
    )
}