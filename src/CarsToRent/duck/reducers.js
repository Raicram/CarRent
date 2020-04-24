import types from './types'


const INITIAL_STATE = {
    listName: 'Brands',
    list: [
        'Mercedes-Benz','BMW','Toyota'
    ]
};


const carReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.ADD_CAR:
            return {
                ...state, list: [...state.list, action.item]
            };
        case types.RESET_CARS:
            return {
                ...state, list: []
            };
        default:
            return state
    }
};

export default carReducer