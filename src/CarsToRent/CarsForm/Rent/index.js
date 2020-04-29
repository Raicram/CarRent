import React from 'react';
import {Field,Form} from 'react-final-form';

const RentForm = props =>{
    console.log(props.match.params.id);
    return(
        <div>
            <h1>Your car: {props.match.params.id}</h1>
        </div>
)};

export default RentForm