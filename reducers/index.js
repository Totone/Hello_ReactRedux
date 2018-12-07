import { combineReducers } from 'redux';
import redEx0 from './redEx0';
import redEx1 from './redEx1';
import redEx2 from './redEx2';
import redEx3 from './redEx3';

// this is combining all the reducers we have in the app
// you can access each of them using state.exercise0, state.exercise1, etc...
const rootReducer = combineReducers({
    redEx0,
    redEx1,
    redEx2,
    redEx3,
});

export default rootReducer;
