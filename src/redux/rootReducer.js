import {combineReducers} from 'redux';

import AppReducer from './app.reducer';


const rootReducer=combineReducers({
    app:AppReducer
})

export default rootReducer;
