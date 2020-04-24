import types from './types'


const INITIAL_STATE = {
    listName: 'Brands',
    list: [
        'Mercedes-Benz','BMW','Toyota','Ferrari','Honda','Subaru','vW'
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
        case types.REMOVE_CAR:
            return {
                ...state, list: [
                    ...state.list.filter(brand => brand !==action.item)
                ]
            };
        default:
            return state
    }
};

export default carReducer