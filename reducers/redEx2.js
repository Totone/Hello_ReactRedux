import actionTypes from '../actions/actionTypes';


// TODO: Implement me
// I work with /actions/index.js -> boxTicked
const initialState = {
    hasTickedBox: false,
};

const boxTicked = (state, action) => {
    const bool = action.payload.hasTickedBox;
    return Object.assign({}, state, {
        hasTickedBox: bool,
    });
};
const redEx2 = (state = initialState, action) => {
    switch (action.type) {
    case actionTypes.BOX_TICKED:
        return boxTicked(state, action);
    default:
        return state;
    }
};

export default redEx2;
