import React from 'react';
import {createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";

const initialCars = {
    brands: [
        'Mercedes-Benz','BMW','Toyota'
    ]
};

function counter(state= initialCars, action) {
    switch (action.type) {
        case 'ADD':
            return {
              brands: [...state.brands,action.brand]
            };
        case 'RESET':
            return {...state,brands: []};
        default:
            return state
    }
}

let store = createStore(counter, composeWithDevTools());
window.store = store;

export default function Cars() {
    return(
        <div>
            Cars
        </div>
    )
}