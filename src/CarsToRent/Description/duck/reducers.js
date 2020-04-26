import types from './types'
import {INITIAL_STATE} from "./INITIAL_STATE";


const brandReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.ADD_DESC:
            return {
                ...state, list: [...state.list, action.item]
            };
        case types.RESET_DESC:
            return {
                ...state, list: []
            };
        case types.REMOVE_DESC:
            return {
                ...state, list: [
                    ...state.list.filter(brand => brand !==action.item)
                ]
            };
        default:
            return state
    }
};

export default brandReducer