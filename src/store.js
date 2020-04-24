import {createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import carReducer from "./CarsToRent/duck";

const store = createStore(carReducer, composeWithDevTools());
window.store = store;

export default store