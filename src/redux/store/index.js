import { combineReducers } from 'redux';

import empsDataReducer from '../reducer/emp';
import authDataReducer from '../reducer/auth';

const rootReducer = combineReducers ({
    empsReducer: empsDataReducer,
    authReducer: authDataReducer
});

export default rootReducer;