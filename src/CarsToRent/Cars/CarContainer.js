import React from "react";
import {connect} from 'react-redux';


const CarContainer = ({store}) => {
    console.log(store);
return(
    <ul>
        {store.list.map(car => <li>{car}</li>)}
    </ul>
)};

const mapStateToProps = (state) =>({
    store: state
});


export default connect(mapStateToProps)(CarContainer)