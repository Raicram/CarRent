import { combineReducers } from 'redux'
import carReducer from "./CarsToRent/duck";
import brandReducer from "./CarsToRent/Description/duck";

const rootReducer = combineReducers({
    cars: carReducer,
    desc: brandReducer
});

export default rootReducer