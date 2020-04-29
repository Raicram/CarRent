import types from './types';

const add = item => ({
    type: types.ADD_CAR, item
});

const reset = item => ({
    type: types.RESET_CARS, item
});

const remove = item => ({
    type: types.REMOVE_CAR, item
});

export default {
    add,
    reset,
    remove
}