import actionTypes from '../actions/actionTypes';

const initialState = {
    value: '',
};

const selectChanged = (state, action) => {
    const newValue = state.value === ''
    // to clean the output (don't put a comma first and start with an uppercase)
    ? `${(action.payload.newSelected).replace(
        (action.payload.newSelected).charAt(0),
        (action.payload.newSelected).charAt(0).toUpperCase(),
    )}`
    : `${state.value}, ${action.payload.newSelected}`;

    return Object.assign({}, state, {
        value: newValue,
    });
};

const redEx3 = (state = initialState, action) => {
    switch (action.type) {
    case actionTypes.SELECT_CHANGED:
        return selectChanged(state, action);
    default:
        return state;
    }
};

export default redEx3;
