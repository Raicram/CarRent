import React, {useState} from 'react';
import CarContainer from "./CarContainer";
import {AllCars,RentButton,AddDiv} from "./styles";
import AddForm from "../CarsForm/AddCar";

const AddButton = () =>{
    const [render, setRender] = useState(false);
    return(
        <AddDiv>
            <RentButton onClick={() => setRender(!render)}>
                {render? "Stop": "Add car"}
            </RentButton>
            <div>
                {render && <AddForm/>}
            </div>
        </AddDiv>
    )
};

export default function Cars() {
    return(
        <AllCars>
            <CarContainer/>
            <AddButton/>
        </AllCars>
    )
}