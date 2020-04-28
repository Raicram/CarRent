import React from 'react';
import CarContainer from "./CarContainer";
import {AllCars} from "./styles";
import AddForm from "../CarsForm/AddCar";

export default function Cars() {
    return(
        <AllCars>
            <CarContainer/>
            <AddForm/>
        </AllCars>
    )
}