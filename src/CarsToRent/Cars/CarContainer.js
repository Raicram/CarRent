import React from "react";
import {connect} from 'react-redux';

const CarContainer = ({carReducer}) =>
    <ul>
        {carReducer.list.map(car => <li>{car}</li>)}
    </ul>

const mapStateToProps = (state) =>({
    carReducer: state.carReducer
})

export default connect(mapStateToProps, {})(CarContainer)