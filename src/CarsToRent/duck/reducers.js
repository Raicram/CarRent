import types from './types'


const INITIAL_STATE = {
    listName: 'Brands',
    list: [
        'Mercedes-AMG C63s','BMW M4cs','Toyota Supra mk5','Ferrari 488 speciale','Honda NSX','Subaru WRX STI','Lamborghini Huracan Performante'
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