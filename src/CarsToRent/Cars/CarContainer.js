import React from "react";
import {connect} from 'react-redux';
import {Car,Brand,RentButton} from './styles.js';


const CarContainer = ({store}) => {
    console.log(store);
return(
    <div>
        {store.list.map(car =>
            <Car>
                Name:<Brand>{car}</Brand>
                Description: Lorem
                <RentButton>Rent!</RentButton>
            </Car>
        )}
    </div>
)};

const mapStateToProps = (state) =>({
    store: state
});


export default connect(mapStateToProps)(CarContainer)