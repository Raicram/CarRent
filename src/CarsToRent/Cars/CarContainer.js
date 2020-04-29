import React from "react";
import DelButton from "../CarsForm/DeleteCar";
import {connect} from 'react-redux';
import {Car,Brand,RentButton,Info} from './styles.js';


const CarContainer = ({cars,desc}) => {
return(
    <div>
        {cars.list.map((car,index) =>
            <Car>
                <Info>Name:<Brand>{car}</Brand>
                    Description: <div>{desc.list.length>index ? desc.list[index]:"No description for this car"}</div></Info>
                <RentButton>Rent!</RentButton>
                <DelButton brand={car} desc={desc.list[index]}/>
            </Car>
        )}
    </div>
)};

const mapStateToProps = (state) =>({
    cars: state.cars,
    desc: state.desc
});


export default connect(mapStateToProps)(CarContainer)