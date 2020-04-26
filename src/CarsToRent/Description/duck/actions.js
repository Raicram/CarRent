import types from './types';

const add = item => ({
    type: types.ADD_DESC, item
})

const reset = item => ({
    type: types.RESET_DESC, item
})

export default {
    add,
    reset
}