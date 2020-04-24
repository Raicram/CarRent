import React from 'react';

import {carTypes} from "../duck";
import store from "../../store";

store.dispatch(carTypes.add('viper'));


export default function Cars() {
    return(
        <div>
            Cars
        </div>
    )
}